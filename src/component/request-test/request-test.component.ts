import { Component, OnInit } from '@angular/core';
import { CyiaHttpService } from 'cyia-ngx-common';

@Component({
  selector: 'app-request-test',
  templateUrl: './request-test.component.html',
  styleUrls: ['./request-test.component.css']
})
export class RequestTestComponent implements OnInit {

  constructor(private http: CyiaHttpService) {
    console.log(this)
   }

  ngOnInit() {

  }

  request1() {

    this.http.request({
      token: 'article', options: {
        headers: { test: ['345','435'] },
        params: { a: '324' }
      }
    }).subscribe((res) => {
      console.log('返回', res)
    },(error) => {
      console.log('返回错误',error)
    })
  }
}
