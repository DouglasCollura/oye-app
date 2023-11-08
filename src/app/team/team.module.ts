import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';

@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    MaterialModule,
    IonicModule,
    SwiperModule,

  ]
})
export class TeamModule { }
