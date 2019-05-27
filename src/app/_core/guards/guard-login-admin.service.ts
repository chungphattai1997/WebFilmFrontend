import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardLoginAdminService {
  private isLogin = false;
  constructor() { }

  setIsLogin(bol) {
    this.isLogin = bol;
  }

  getIsLogin() {
    return this.isLogin;
  }
}
