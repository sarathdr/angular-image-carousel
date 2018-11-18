import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ImageSlideComponent } from './image-slide.component';
import { Image } from '../../model';

describe('ImageSlideComponent', () => {
  let fixture: ComponentFixture<TestImageSlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestImageSlideComponent,
        ImageSlideComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestImageSlideComponent);
    fixture.detectChanges();
  });

  it('should render correctly and load image', () => {
    const elem = fixture.debugElement.nativeElement;
    expect(elem.querySelector('img').src).toEqual('http://images/1');
    expect(elem.querySelector('p').textContent).toEqual('title');
  });

});

@Component({
  template: `
    <image-slide [image]="image"></image-slide>`
})
class TestImageSlideComponent {
  image = {
    title: 'title',
    url: 'http://images/1'
  } as Image;
}
