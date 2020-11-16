import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  url = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) { }

  getRequest(): Observable<any> {
    return this.http.get(this.url);
  }
}
