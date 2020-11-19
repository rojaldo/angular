import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  countriesApi = [];
  countryNames: string[] = [];
  resolved = false;
  error = false;
  public model: any;

  constructor(private service: FormService) { }

  ngOnInit(): void {
    this.service.getRequest().subscribe(
      (data) => this.processRequest(data),
      (error) => this.processError(error));
  }

  processRequest(data: any): void {
    this.countriesApi = data;
    this.resolved = true;
    for (const country of this.countriesApi) {
      this.countryNames.push(country.name);
    }

  }

  processError(error: any): void {
    console.log('Error: ' + JSON.stringify(error));
    this.error = true;
  }

  search(text$: Observable<string>): any {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.countryNames.filter(country => country.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );
  }


}
