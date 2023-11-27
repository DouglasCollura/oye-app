import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { MaterialModule } from '../material/material.module';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    IonicModule,
    SwiperModule,
    MaterialModule
  ]
})
export class HeaderModule { }
