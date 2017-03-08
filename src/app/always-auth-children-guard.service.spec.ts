/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlwaysAuthChildrenGuardService } from './always-auth-children-guard.service';

describe('Service: AlwaysAuthChildrenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlwaysAuthChildrenGuardService]
    });
  });

  it('should ...', inject([AlwaysAuthChildrenGuardService], (service: AlwaysAuthChildrenGuardService) => {
    expect(service).toBeTruthy();
  }));
});
