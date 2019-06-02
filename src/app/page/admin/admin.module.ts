import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SideBarComponent } from './admin-layout/side-bar/side-bar.component';
import { MainPanelComponent } from './admin-layout/main-panel/main-panel.component';
import { Routes, RouterModule } from '@angular/router';
import { FilmManagementComponent } from './film-management/film-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmAddComponent } from './film-management/film-add/film-add.component';
import { FilmEditComponent } from './film-management/film-edit/film-edit.component';

const adminRoutes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: '', component: UserManagementComponent },
      { path: 'user-management', component: UserManagementComponent },
      { path: 'film-management', component: FilmManagementComponent },
      { path: 'film-management/add', component: FilmAddComponent },
      { path: 'film-management/edit/:id', component: FilmEditComponent },
      { path: 'category-management', component: CategoryManagementComponent },

    ]
  },

];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    SideBarComponent,
    MainPanelComponent,
    FilmManagementComponent,
    UserManagementComponent,
    CategoryManagementComponent,
    FilmAddComponent,
    FilmEditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(adminRoutes)
  ],
})
export class AdminModule { }
