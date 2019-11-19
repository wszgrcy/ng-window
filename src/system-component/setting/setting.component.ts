import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/service/theme.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { THEME_CONFIG } from 'src/const/theme.config';
import { Store, select } from '@ngrx/store';
import { TaskbarPosition } from '@ngrx/store/taskbar.store';
import { selectTaskbarPosition } from '@ngrx/selector/feature.selector';
import { take, skip } from 'rxjs/operators';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  form: FormGroup;
  constructor(
    private themeService: ThemeService,
    private fb: FormBuilder,
    private store: Store<any>
  ) { }
  themeOptions = ['deeppurple-amber', 'indigo-pink', 'pink-bluegrey', 'purple-green'];
  taskbarOptions = ['left', 'right', 'top', 'bottom'];
  ngOnInit() {
    this.form = this.fb.group({
      theme: [localStorage.getItem(THEME_CONFIG.storageName) || ''],
      taskbar: ['']
    });
    this.store.pipe(select(selectTaskbarPosition)).subscribe((val) => {
      this.form.get('taskbar').setValue(val);
    });
    this.form.get('theme').valueChanges.subscribe((val) => {
      this.themeService.changeTheme(this.themeService.getThemeItem(val));
    });
    this.form.get('taskbar').valueChanges
      .subscribe((val) => {
        this.store.dispatch(new TaskbarPosition(val));
      });
  }

}
