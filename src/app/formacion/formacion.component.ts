import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation } from "swiper";
import Swiper, { Pagination, Autoplay, EffectFade, Controller, Thumbs } from 'swiper';
import { SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);
Swiper.use([Pagination, Autoplay, EffectFade]);


@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.scss'],
})
export class FormacionComponent  implements OnInit {

  constructor() { }

  config: SwiperOptions = {
    slidesPerView: 'auto',
    slidesPerGroup:1,
    loop: true,
    navigation: false,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    }
  }

  ngOnInit() {}

}
