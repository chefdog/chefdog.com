import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components';

import {CardModule} from 'primeng/card';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from '../shared/components/banner/banner.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CardModule,    
  ],
  exports: [RouterModule]
})
export class HomeModule { }
