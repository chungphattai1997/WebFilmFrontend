import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [SharedComponent, HeaderComponent, FooterComponent, NotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
