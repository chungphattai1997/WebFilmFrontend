import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'login', component: LoginComponent, children: [
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent }
    ]
  },
]

@NgModule({
  declarations: [HomeComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
