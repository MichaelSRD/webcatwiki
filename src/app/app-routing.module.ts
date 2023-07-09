import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroSliderComponent } from './hero-slider/hero-slider.component';
import { DetallesComponent } from './detalles/detalles.component';
import { TopbreedsComponent } from './topbreeds/topbreeds.component';

const routes: Routes = [
  { path: '', component: HeroSliderComponent },
  { path: 'detalles/:id', component: DetallesComponent },
  { path: 'top', component: TopbreedsComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
