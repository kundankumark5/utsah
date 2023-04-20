import { Component, OnInit } from '@angular/core';
import { Slick } from 'ngx-slickjs';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  config: Slick.Config = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 4000,
  };

  imageObject: any[] = [
    {
      img: 'assets/images/silk1.jpg',
      head: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla',
      subHead:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla',
    },
    {
      img: 'assets/images/silk2.jpg',
      head: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla',
      subHead:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla',
    },
    {
      img: 'assets/images/silk3.jpg',
      head: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla',
      subHead:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla',
    },
    {
      img: 'assets/images/silk4.jpg',
      head: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla',
      subHead:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla',
    },
    {
      img: 'assets/images/silk1.jpg',
      head: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla',
      subHead:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  news: any[] = [
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident!',
    },
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident!',
    },
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident!',
    },
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident!',
    },
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident!',
    },
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident!',
    },
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident!',
    },
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident!',
    },
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident!',
    },
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident!',
    },
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident!',
    },
    {
      headline:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dicta libero, eius autem id provident!',
    },
  ];
}
