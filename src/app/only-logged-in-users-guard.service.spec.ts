/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OnlyLoggedInUsersGuardService } from './only-logged-in-users-guard.service';

describe('Service: OnlyLoggedInUsersGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlyLoggedInUsersGuardService]
    });
  });

  it('should ...', inject([OnlyLoggedInUsersGuardService], (service: OnlyLoggedInUsersGuardService) => {
    expect(service).toBeTruthy();
  }));
});
