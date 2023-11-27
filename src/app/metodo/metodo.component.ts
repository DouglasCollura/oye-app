import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import SwiperCore, { Navigation } from "swiper";
import Swiper, { Pagination, Autoplay, EffectFade, Controller, Thumbs } from 'swiper';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Navigation, Pagination, Autoplay, Controller, Thumbs]);
Swiper.use([Pagination, Autoplay, EffectFade]);

@Component({
  selector: 'app-metodo',
  templateUrl: './metodo.component.html',
  styleUrls: ['./metodo.component.scss'],
})
export class MetodoComponent  implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('swiperOpt') swiperOpt!: SwiperComponent;

  ngAfterViewInit(): void {
    this.swiperOpt.swiperRef.autoplay.running = true;
  }

  ngOnInit() {}

  config: SwiperOptions = {
    slidesPerView: 'auto',
    slidesPerGroup:1,
    loop: true,
    navigation: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    }
  };

  openWeb(){
    window.open("https://antoniosanchezmigallon.com/");
  }
}
