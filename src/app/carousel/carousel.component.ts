import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Image } from '../model';

@Component({
  selector: 'carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Image carousel</h1>
    <div class="carousel" *ngIf="images?.length">
      <div class="thumbnail previous">
        <thumbnail
          *ngIf="index !== 0"
          (click)="index = index-1;"
          [image]="images[index-1]">
        </thumbnail>
      </div>
      <div class="image">
        <image-slide [image]="images[index]"></image-slide>
      </div>
      <div class="thumbnail next">
        <thumbnail
          *ngIf="index !== (images.length -1)"
          (click)="index = index+1;"
          [image]="images[index + 1]">
        </thumbnail>
      </div>
    </div>
  `,
  styleUrls: ['./carousel.css']
})
export class CarouselComponent {

  @Input() images: Image[] = [];
  index = 0;

  constructor() {
  }
}
