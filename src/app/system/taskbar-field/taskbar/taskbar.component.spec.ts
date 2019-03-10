/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaskbarComponent } from './taskbar.component';

describe('TaskbarComponent', () => {
  let component: TaskbarComponent;
  let fixture: ComponentFixture<TaskbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
