import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HomeLayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
