import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';

const adminRoutes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      // { path: '', component: MoviesManagementComponent },
      // { path: 'moviemanage', component: MoviesManagementComponent },
      // { path: 'movieadd', component: MovieAddComponent },
      // { path: 'movieedit/:id', component: MovieEditComponent },
      // { path: 'usermanage', component: UserManagementComponent },
      // { path: 'useradd', component: UserAddComponent },
      // { path: 'useredit/:id', component: UserEditComponent },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule { }
