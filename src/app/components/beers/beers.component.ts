import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  beers = [];
  error = false;
  resolved = false;

  minABV = 4;
  maxABV = 10;
  options = {
    floor: 0,
    ceil: 50
  };

  constructor(private service: BeersService) { }

  ngOnInit(): void {
    this.service.getRequest().subscribe(
      (data) => this.processRequest(data),
      (error) => this.processError(error));
  }

  handleChange(): void {
    console.log(this.minABV + ' : ' + this.maxABV);
  }

  processRequest(data: any): void {
    this.beers = data;
    this.resolved = true;

  }

  processError(error: any): void {
    console.log('Error: ' + JSON.stringify(error));
    this.error = true;
  }

}
