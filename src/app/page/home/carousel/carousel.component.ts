import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    time: 100,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
  
  constructor() { }

  ngOnInit() {
  }
  // Option owl Carousel
  mySlideOptions = { items: 1, dots: true, nav: false, autoplay: true, loop: true };
  myCarouselOptions = { items: 3, dots: true, nav: true };

  dsPhim: any = [
    { HinhAnh: "./assets/img/slide1.jpg", Trailer: "https://www.youtube.com/watch?v=6zQe-K8Ywq4" },
    { HinhAnh: "./assets/img/slide2.jpg", Trailer: "https://www.youtube.com/watch?v=0G8EHFK6kGo" },
    { HinhAnh: "./assets/img/slide3.jpg", Trailer: "https://www.youtube.com/watch?v=IIIgZI8QDc8" },
    { HinhAnh: "./assets/img/slide4.jpg", Trailer: "https://www.youtube.com/watch?v=IIIgZI8QDc8" },
  ];

}
