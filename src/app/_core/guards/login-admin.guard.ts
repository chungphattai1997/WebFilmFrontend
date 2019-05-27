import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardLoginAdminService } from './guard-login-admin.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminGuard implements CanActivate {
  constructor(private router: Router, private guardSv: GuardLoginAdminService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    let check = this.guardSv.getIsLogin();

    if (typeof localStorage.getItem('admin') === 'string') {
      check = true;
    }  else {
      check = false;
    }

    if (check) {
      return check;
    } else {
      this.router.navigate(['/login-admin']);
      return check;
    }
  }
}
