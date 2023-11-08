import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';
import { FormacionRoutingModule } from './formacion-routing.module';
import { FormacionComponent } from './formacion.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    FormacionComponent
  ],
  imports: [
    CommonModule,
    FormacionRoutingModule,
    IonicModule,
    SwiperModule,
    MaterialModule
  ]
})
export class FormacionModule { }
