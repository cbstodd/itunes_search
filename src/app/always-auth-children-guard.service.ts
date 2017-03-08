import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

@Injectable()
export class AlwaysAuthChildrenGuardService implements CanActivateChild {

    canActivateChild() {
        console.log("AlwaysAuthChildrenGuard");
        return true;
    }
}
