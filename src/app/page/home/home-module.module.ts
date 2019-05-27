import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

const homeLayoutRoutes: Routes = [
  {
    path: '', component: HomeLayoutComponent, children: [
      { path: '', component: HomeLayoutComponent },
      { path: 'detail', component: DetailComponent }
    ]
  }
];

@NgModule({
  declarations: [HomeLayoutComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeLayoutRoutes)
  ],
  exports: [
    HomeLayoutComponent
  ]
})
export class HomeModuleModule { }
