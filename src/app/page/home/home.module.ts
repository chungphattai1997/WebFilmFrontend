import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', loadChildren: () => LoginModule }
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
  ],
})
export class HomeModule { }
