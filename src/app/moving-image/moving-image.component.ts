import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-moving-image',
  templateUrl: './moving-image.component.html',
  styleUrls: ['./moving-image.component.css'],
  animations: [
    trigger('moveIn', [
      state('void', style({ transform: 'translateX(-100%)' })),
      transition(':enter', [
        animate('0.5s ease-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})

export class MovingImageComponent {
  slideIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.showSlides();
  }

  showSlides() {
    const slides = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    this.slideIndex++;

    if (this.slideIndex > slides.length) {
      this.slideIndex = 1;
    }

    slides[this.slideIndex - 1].style.display = 'block';

    setTimeout(() => {
      this.showSlides();
    }, 5000); // Change image every 2 seconds
  }

  // plusSlides(n: number) {
  //   this.showSlides((this.slideIndex = this.slideIndex+n));
  // }

  // currentSlide(n: number) {
  //   this.showSlides((this.slideIndex = n));
  }
// }
