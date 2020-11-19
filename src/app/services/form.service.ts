import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  url = 'https://restcountries.eu/rest/v2/all';

  constructor(private http: HttpClient) { }

  getRequest(): Observable<any> {
    return this.http.get(this.url);
  }
}
