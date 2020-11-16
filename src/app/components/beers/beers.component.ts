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

  constructor(private service: BeersService) { }

  ngOnInit(): void {
    this.service.getRequest().subscribe(
      (data) => this.processRequest(data),
      (error) => this.processError(error));
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
