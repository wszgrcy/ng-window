/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StrongInputComponent } from './strong-input.component';

describe('StrongInputComponent', () => {
  let component: StrongInputComponent;
  let fixture: ComponentFixture<StrongInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrongInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrongInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
