import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApodService {

  url = 'https://api.nasa.gov/planetary/apod?api_key=tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6';

  constructor(private http: HttpClient) { }

  getRequest(date?: string): Observable<any>{
    let url = '';
    if (date){
      url = this.url + '&date=' + date;
    } else {
      url = this.url;
    }
    return this.http.get(url);
  }  
}
