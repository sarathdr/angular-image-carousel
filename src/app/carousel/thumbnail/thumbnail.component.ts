import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Image } from '../../model';

@Component({
  selector: 'thumbnail',
  template: `<img [src]="image.thumbnailUrl"/>`,
  styles: [`
    img {
      margin-top: 225px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThumbnailComponent {
  @Input() image: Image;
}
