/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { WindowService } from './window.service';

describe('Service: Window', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowService]
    });
  });

  it('should ...', inject([WindowService], (service: WindowService) => {
    expect(service).toBeTruthy();
  }));
});
