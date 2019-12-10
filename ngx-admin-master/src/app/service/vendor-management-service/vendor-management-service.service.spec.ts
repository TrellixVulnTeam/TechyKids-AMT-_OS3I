import { TestBed } from '@angular/core/testing';

import { VendorManagementServiceService } from './vendor-management-service.service';

describe('VendorManagementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendorManagementServiceService = TestBed.get(VendorManagementServiceService);
    expect(service).toBeTruthy();
  });
});
