import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GuardLoginAdminService } from 'src/app/_core/guards/guard-login-admin.service';
import { UserService } from 'src/app/_core/services/user.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(
    private router: Router,
    private loginGuard: GuardLoginAdminService,
    private userService: UserService
  ) { }

  ngOnInit() {

  }

  // login(){
  //   this.loginGuard.setIsLogin(true);
  //   this.router.navigate(['/admin']);
  // }

  login(value) {
    let temp = this.userService.checkLogin(value.username, value.password).subscribe(res => {
      if (typeof res === 'object') {
        const sUserLogin: string = JSON.stringify(res);
        // localStorage.setItem('userLogin', sUserLogin);

        localStorage.setItem('admin', sUserLogin);
        
        this.loginGuard.setIsLogin(true);
        this.router.navigate(['/admin']);
      } else {
        console.log(res);
      }
      temp.unsubscribe();
    }, err => {
      console.log(err);
      temp.unsubscribe();
    })
  }
}
