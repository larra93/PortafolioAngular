import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { CvComponent } from './pages/cv/cv.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
@NgModule({
  declarations: [
    AboutComponent,
    CvComponent,
    HomeComponent,
    PortfolioComponent
  ],
  exports:[
    AboutComponent,
    CvComponent,
    HomeComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class ComponentsModule { }
