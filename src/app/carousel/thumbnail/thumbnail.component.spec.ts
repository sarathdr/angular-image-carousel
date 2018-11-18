import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ThumbnailComponent } from './thumbnail.component';
import { Image } from '../../model';

describe('ThumbnailComponent', () => {

  let fixture: ComponentFixture<TestThumbnailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestThumbnailComponent,
        ThumbnailComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestThumbnailComponent);
    fixture.detectChanges();

  });

  it('should render correctly and load thumbnail', () => {
    expect(fixture.debugElement.nativeElement.querySelector('img').src)
      .toMatch('http://images/thumbnail/1');
  });

});

@Component({
  template: `<thumbnail [image]="image"></thumbnail>`
})
class TestThumbnailComponent {
  image = {
    thumbnailUrl: 'http://images/thumbnail/1'
  } as Image;
}
