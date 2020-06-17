import {
  ClassDataSource,
  PropertyDataSource,
  StronglyTyped,
} from 'cyia-ngx-common/repository';
import { of } from 'rxjs';

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
    itemSelect: (item, key, index, result: any[]) =>
      of(result.filter((res) => res.mainId === item[key])),
  })
  filterEntity: FilterEntity;
}
