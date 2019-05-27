import { TestBed } from '@angular/core/testing';

import { GuardLoginAdminService } from './guard-login-admin.service';

describe('GuardLoginAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardLoginAdminService = TestBed.get(GuardLoginAdminService);
    expect(service).toBeTruthy();
  });
});
