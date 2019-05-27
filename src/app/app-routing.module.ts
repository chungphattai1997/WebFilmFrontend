import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './page/admin/admin-layout.component';
import { HomeLayoutComponent } from './page/home/home-layout.component';
import { FilmManagementComponent } from './page/admin/film-management/film-management.component';
import { UserManagementComponent } from './page/admin/user-management/user-management.component';
import { LoginAdminComponent } from './page/admin/login-admin/login-admin.component';
import { HomeModuleModule } from './page/home/home-module.module';
import { AdminModuleModule } from './page/admin/admin-module.module';
import { CategoryManagementComponent } from './page/admin/category-management/category-management.component';
import { LoginAdminGuard } from './_core/guards/login-admin.guard';

const routes: Routes = [
  { path: '', component: HomeLayoutComponent },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: '', component: FilmManagementComponent },
      { path: 'user', component: UserManagementComponent },
      { path: 'film', component: FilmManagementComponent },
      { path: 'category', component: CategoryManagementComponent }
    ], canActivate: [
      LoginAdminGuard
    ]
  },
  { path: 'login-admin', component: LoginAdminComponent }
];

@NgModule({
  imports: [
    HomeModuleModule,
    AdminModuleModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
