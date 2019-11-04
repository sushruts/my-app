import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class EntityGuard implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    // logic to check validity
    if (route.params.entity === 'Customer' || route.params.entity === 'Order') {
      return true
    }
    // this._router.navigate(['/login']);
    return false;
  }
}