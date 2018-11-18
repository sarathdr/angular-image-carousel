import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarouselContainer } from './carousel/carousel.container';
import { ImageSlideComponent } from './carousel/image-slide/image-slide.component';
import { ThumbnailComponent } from './carousel/thumbnail/thumbnail.component';
import { ImageService } from './services/image.service';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselContainer,
    CarouselComponent,
    ImageSlideComponent,
    ThumbnailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
