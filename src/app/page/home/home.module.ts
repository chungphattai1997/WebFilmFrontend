import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { FilmModule } from './film/film.module';

@NgModule({
  declarations: [
    HomeLayoutComponent, 
    HeaderComponent, 
    FooterComponent, 
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    FilmModule
  ]
})
export class HomeModule { }
