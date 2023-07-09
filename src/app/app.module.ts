import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoHeaderComponent } from './logo-header/logo-header.component';
import { HeroSliderComponent } from './hero-slider/hero-slider.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetallesComponent } from './detalles/detalles.component';
import { TopbreedsComponent } from './topbreeds/topbreeds.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoHeaderComponent,
    HeroSliderComponent,
    FooterComponent,
    DetallesComponent,
    TopbreedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
