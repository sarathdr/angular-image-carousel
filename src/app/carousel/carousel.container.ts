import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ImageService } from '../services/image.service';
import { Image } from '../model';

@Component({
  selector: 'carousel-container',
  template: `
    <carousel [images]="images$ | async"></carousel>
  `
})
export class CarouselContainer {

  images$: Observable<Image[]>;

  constructor(private imageService: ImageService) {
    this.images$ = imageService.loadImages();
  }
}
