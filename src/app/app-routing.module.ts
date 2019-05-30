import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './page/admin/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './page/home/home-layout/home-layout.component';

const routes: Routes = [
  { path: '', component: AdminLayoutComponent },
  { path: 'home', component: HomeLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
