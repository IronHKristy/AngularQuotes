import { TestBed, inject } from '@angular/core/testing';

import { MyServicesService } from './my-services.service';

describe('MyServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyServicesService]
    });
  });

  it('should ...', inject([MyServicesService], (service: MyServicesService) => {
    expect(service).toBeTruthy();
  }));
});
