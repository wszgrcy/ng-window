import { Component, OnInit } from '@angular/core';
import { ToastService } from '@center-main/service/toast.service';
import { ApplicationStoreService } from '@center-main/store/application.store';

@Component({
  selector: 'app-application-debug',
  templateUrl: './application-debug.component.html',
  styleUrls: ['./application-debug.component.scss'],
})
export class ApplicationDebugComponent implements OnInit {
  config = '';
  constructor(private applicationStore: ApplicationStoreService, private toastService: ToastService) {}

  ngOnInit() {}
  submit() {
    let config: {
      scripts: AttrGroup[];
      stylesheets: AttrGroup[];
    };
    try {
      config = JSON.parse(this.config);
      if (typeof config !== 'object') {
        throw new Error('');
      }
    } catch (error) {
      this.toastService.error('config解析失败', { duration: 10 });
    }
    try {
      window.loadRemoteModuleManifest(config).then((item) => {
        this.applicationStore.add(item);
      });
    } catch (error) {
      this.toastService.error('资源加载失败', { duration: 10 });
    }
  }
}
