import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { CarouselComponent } from './carousel.component';
import { ImageSlideComponent } from './image-slide/image-slide.component';
import { Image } from '../model';

describe('CarouselComponent', () => {

  let fixture: ComponentFixture<TestCarouselComponent>;
  let component: CarouselComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestCarouselComponent,
        ThumbnailComponent,
        ImageSlideComponent,
        CarouselComponent,
      ]
    })
      .overrideComponent(CarouselComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();

    fixture = TestBed.createComponent(TestCarouselComponent);
    component = fixture.debugElement.query(By.directive(CarouselComponent)).componentInstance;
    fixture.detectChanges();
  });

  it('should render correctly and load images', () => {

    expect(component.index).toEqual(0);

    const imageSlide = fixture.debugElement.query(By.directive(ImageSlideComponent));
    expect(imageSlide.componentInstance.image.id).toEqual(1);

    const elem = fixture.debugElement.nativeElement;
    expect(elem.querySelector('p').textContent).toEqual('Image1');
  });

  it('should load the next image', () => {
    fixture.debugElement.nativeElement.querySelector('.next thumbnail').click();
    fixture.detectChanges();
    expect(component.index).toEqual(1);
    expect(fixture.debugElement.nativeElement.querySelector('p').textContent).toEqual('Image2');
  });

  it('should load the previous image', () => {
    component.index = 2;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').textContent).toEqual('Image3');
    fixture.debugElement.nativeElement.querySelector('.previous thumbnail').click();
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('p').textContent).toEqual('Image2');
  });

});

@Component({
  template: `
    <carousel [images]="images"></carousel>`
})
class TestCarouselComponent {
  images: Image[] = [
    { albumId: 1, id: 1, title: 'Image1', url: 'http://images/1', thumbnailUrl: 'http://images/thumb/1' },
    { albumId: 1, id: 2, title: 'Image2', url: 'http://images/2', thumbnailUrl: 'http://images/thumb/2' },
    { albumId: 1, id: 3, title: 'Image3', url: 'http://images/3', thumbnailUrl: 'http://images/thumb/3' },
  ];
}
