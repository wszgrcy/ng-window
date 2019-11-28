import { Component, OnInit } from '@angular/core';
import { CyiaHttpService } from 'cyia-ngx-common';
import { MainEntity } from './entity';

@Component({
  selector: 'app-entity-request',
  templateUrl: './entity-request.component.html',
  styleUrls: ['./entity-request.component.css']
})
export class EntityRequestComponent implements OnInit {

  constructor(private http: CyiaHttpService) { }

  ngOnInit() {
  }
  requestData() {
    this.http.getEntity(MainEntity)().subscribe((item) => {
      console.log(item);
    });
  }
}
