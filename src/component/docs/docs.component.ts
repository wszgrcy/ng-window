import { Component, OnInit } from '@angular/core';
import { CyiaHttpService } from 'cyia-ngx-common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  data
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.data = this.http.get('./assets/docs/README.md', { responseType: 'text' })
  }

}
