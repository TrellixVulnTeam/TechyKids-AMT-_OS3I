import { TestBed } from '@angular/core/testing';

import { CostingManagementServiceService } from './costing-management-service.service';

describe('CostingManagementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CostingManagementServiceService = TestBed.get(CostingManagementServiceService);
    expect(service).toBeTruthy();
  });
});
