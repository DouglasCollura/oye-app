import { Component } from '@angular/core';
import SwiperCore, { Navigation } from "swiper";
import Swiper, { Pagination, Autoplay, EffectFade, Controller, Thumbs } from 'swiper';
import { SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);
Swiper.use([Pagination, Autoplay, EffectFade]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


  config: SwiperOptions = {
    slidesPerView: 'auto',
    navigation: false,
    loop: true,
    spaceBetween:12,
    autoplay: {
      delay: 500,
      disableOnInteraction: false
    }
  }
}
