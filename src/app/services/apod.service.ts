import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApodService {

  url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

  constructor(private http: HttpClient) { }

  getRequest(url = this.url): Observable<any>{
    return this.http.get(url);
  }
}
