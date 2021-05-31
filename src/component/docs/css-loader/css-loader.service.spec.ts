/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { CssLoaderService } from './css-loader.service';

describe('Service: CssLoader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CssLoaderService]
    });
  });

  it('should ...', inject([CssLoaderService], (service: CssLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
