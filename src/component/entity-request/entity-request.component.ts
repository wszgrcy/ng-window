import { Component, OnInit } from '@angular/core';
import { CyiaRepositoryService } from 'cyia-ngx-common/repository';
import { MainEntity } from './entity';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-entity-request',
  templateUrl: './entity-request.component.html',
  styleUrls: ['./entity-request.component.scss'],
})
export class EntityRequestComponent implements OnInit {
  example =
    `# 定义实体
` +
    '```ts' +
    `
@ClassDataSource({
  source: (http) => {
    return http.get('assets/mock/link-data.json');
  },
})
export class LinkEntity {
  id: string;
  name: string;
}
@ClassDataSource({
  source: (http) => {
    return http.get('assets/mock/filter-data.json');
  },
})
export class FilterEntity {
  id: string;
  name: string;
  mainId: string;
}
export class JsonEntity {
  data: number;
  name: string;
}

@ClassDataSource({
  source: (http) => {
    return http.get('assets/mock/main.json');
  },
})
export class MainEntity {
  id: string;
  @PropertyDataSource({
    entity: LinkEntity,
    itemSelect: (item, key, index, result) => of(result),
  })
  linkEntity: LinkEntity;
  name: string;
  @StronglyTyped(JsonEntity)
  jsonObj: JsonEntity;
  @PropertyDataSource({
    entity: FilterEntity,
    itemSelect: (item, key, index, result) =>
      of(result.find((res) => res.mainId === item[key])),
  })
  filterEntity: FilterEntity;
}

` +
    '```';
  request =
    ` # 请求方法
     ` +
    '```ts' +
    `
requestData() {
  this.http.findOne(MainEntity).subscribe((item) => {
    console.log(item);
  });
}

` +
    '```';

  constructor(private http: CyiaRepositoryService) {}
  response$;
  ngOnInit() {}
  requestData() {
    this.response$ = this.http.findOne(MainEntity).pipe(
      tap((res) => {
        console.log('结构化返回实体', res);
      }),
      map((res) => {
        return `
# 结果
\`\`\`
${JSON.stringify(res, undefined, 8)}
\`\`\`
`;
      })
    );
    // .subscribe((item) => {
    //     console.log(item);
    //   });
  }
}
