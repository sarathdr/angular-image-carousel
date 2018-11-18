import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ImageService } from './image.service';
import { Image } from '../model';

describe('ImageService', () => {
  let service: ImageService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageService],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(ImageService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should load all images', () => {

    const dummyImages: Image[] = [
      { albumId: 1, id: 1, title: 'Image1', url: 'http://images/1', thumbnailUrl: 'http://images/thumb/1' },
      { albumId: 1, id: 2, title: 'Image2', url: 'http://images/2', thumbnailUrl: 'http://images/thumb/2' },
      { albumId: 1, id: 3, title: 'Image3', url: 'http://images/3', thumbnailUrl: 'http://images/thumb/3' },
    ];

    service.loadImages().subscribe((images: Image[]) => {
      expect(images).toEqual(dummyImages);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/photos');
    expect(req.request.method).toBe('GET');
    req.flush(dummyImages);
    httpMock.verify();

  });
});
