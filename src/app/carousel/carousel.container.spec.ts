import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs/observable/of';

import { CarouselContainer } from './carousel.container';
import { ImageService } from '../services/image.service';
import { Image } from '../model';
import { CarouselComponent } from './carousel.component';



describe('CarouselContainer', () => {

  let component: CarouselContainer;
  let fixture: ComponentFixture<CarouselContainer>;
  let loadImagesMock: jasmine.Spy;

  const images: Image[] = [
    { albumId: 1, id: 1, title: 'Image1', url: 'http://images/1', thumbnailUrl: 'http://images/thumb/1' },
    { albumId: 1, id: 2, title: 'Image2', url: 'http://images/2', thumbnailUrl: 'http://images/thumb/2' },
    { albumId: 1, id: 3, title: 'Image3', url: 'http://images/3', thumbnailUrl: 'http://images/thumb/3' },
  ];


  beforeEach(() => {
    loadImagesMock = jasmine.createSpy('loadImages').and.returnValue(of(images));

    TestBed.configureTestingModule({
      declarations: [CarouselContainer, CarouselComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: ImageService,
          useValue: {
            loadImages: loadImagesMock
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should load images', () => {
    const carousel = fixture.debugElement.query(By.directive(CarouselComponent));
    expect(carousel.componentInstance.images).toBe(images);
  });

});
