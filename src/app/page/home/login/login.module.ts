import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes, RouterModule } from '@angular/router';

const loginRoute: Routes = [
  {
    path: '', component: LoginComponent, children:
      [
        { path: 'sign-in', component: SignInComponent },
        { path: 'sign-up', component: SignUpComponent },
      ]
  },

]

@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoute)
  ]
})
export class LoginModule { }
