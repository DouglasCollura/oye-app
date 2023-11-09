import { Component, OnInit,  ViewChild, AfterViewInit } from '@angular/core';
import SwiperCore, { Navigation } from "swiper";
import Swiper, { Pagination, Autoplay, EffectFade, Controller, Thumbs } from 'swiper';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);
Swiper.use([Pagination, Autoplay, EffectFade]);


@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.scss'],
})
export class ProgramasComponent  implements OnInit, AfterViewInit {

  @ViewChild('swiperOpt') swiperOpt!: SwiperComponent;

  constructor() { }

  ngAfterViewInit() {
    this.swiperOpt.swiperRef.autoplay.running = true;
  }

  config: SwiperOptions = {
    slidesPerView: 'auto',
    slidesPerGroup:1,
    loop: true,
    navigation: false,
    autoplay: {
      delay:2000,
      disableOnInteraction: false
    }
  }

  ngOnInit() {}

}
