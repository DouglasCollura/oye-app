import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { ProgramasRoutingModule } from './programas-routing.module';
import { ProgramasComponent } from './programas.component';


@NgModule({
  declarations: [
    ProgramasComponent
  ],
  imports: [
    CommonModule,
    ProgramasRoutingModule,
    MaterialModule,
    IonicModule,
    SwiperModule
  ]
})
export class ProgramasModule { }
