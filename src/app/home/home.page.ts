import { Component, AfterViewInit, ViewChild, TemplateRef } from '@angular/core';
import SwiperCore, { Navigation } from "swiper";
import Swiper, { Pagination, Autoplay, EffectFade, Controller, Thumbs } from 'swiper';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Navigation, Pagination, Autoplay, Controller, Thumbs]);
Swiper.use([Pagination, Autoplay, EffectFade]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  constructor() { }

  @ViewChild('swiperBanner') swiperBanner!: SwiperComponent;
  @ViewChild('swiperOpt') swiperOpt!: SwiperComponent;

  ngAfterViewInit() {
    this.swiperBanner.swiperRef.autoplay.running = true;
    this.swiperOpt.swiperRef.autoplay.running = true;

  }
  config: SwiperOptions = {
    loop: true,
    slidesPerView: 'auto',
    navigation: false,
    loopedSlides: 1,
    direction: 'horizontal',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  };
}
