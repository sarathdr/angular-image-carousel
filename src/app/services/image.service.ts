import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImageService {

  constructor(private http: HttpClient) { }

  loadImages(): Observable<Image[]> {
    return this.http.get<Image[]>('https://jsonplaceholder.typicode.com/photos');
  }
}
