import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { FilmManagementComponent } from './film-management/film-management.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FormsModule } from '@angular/forms';

const adminRoutes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: 'film', component: FilmManagementComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    UserManagementComponent,
    FilmManagementComponent,
    CategoryManagementComponent,
    LoginAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule
  ],
  exports: [
    AdminLayoutComponent,
    UserManagementComponent,
    FilmManagementComponent,
    CategoryManagementComponent
  ]
})
export class AdminModuleModule { }
