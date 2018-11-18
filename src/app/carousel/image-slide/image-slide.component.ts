import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Image } from '../../model';

@Component({
  selector: 'image-slide',
  template: `
    <img [src]="image.url" />
    <p>{{ image.title }}</p>
   `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSlideComponent {
  @Input() image: Image;
}
