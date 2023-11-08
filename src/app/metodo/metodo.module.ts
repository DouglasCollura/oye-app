import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';
import { MetodoRoutingModule } from './metodo-routing.module';
import { MetodoComponent } from './metodo.component';


@NgModule({
  declarations: [
    MetodoComponent
  ],
  imports: [
    CommonModule,
    MetodoRoutingModule,
    MaterialModule,
    SwiperModule,
    IonicModule
  ]
})
export class MetodoModule { }
