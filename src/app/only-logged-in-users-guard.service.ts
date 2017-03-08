import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { CanActivate } from '@angular/router';

@Injectable()
export class OnlyLoggedInUsersGuardService implements CanActivate {

    constructor(private userService:UserService) {
    }

    canActivate() {
        console.log("OnlyLoggedInUsersGuard");
        if (this.userService.isLoggedIn()) {
            return true;
        } else {
            // TODO: Should redirect to a login page.
            window.alert("You don't have permission to view this page.");
            return false;
        }
    }


}
