import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  title = '';
  description = '';
  date = '';
  imageURL = '';
  hdURL = '';
  resolved = false;
  error = false;
  selectedDate: any = {};

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    this.service.getRequest().subscribe(
      (data) => this.processRequest(data),
      (error) => this.processError(error));
  }

  processRequest(data: any): void{
    this.title = data.title;
    this.description = data.explanation;
    this.date = data.date;
    this.imageURL = data.url;
    this.hdURL = data.hdurl;
    this.resolved = true;

  }

  updateDate(): void{
    const stringDate = this.selectedDate.year + '-' + this.selectedDate.month + '-' + this.selectedDate.day;
    this.service.getRequest(stringDate).subscribe(
      (data) => this.processRequest(data),
      (error) => this.processError(error));
  }

  processError(error: any): void{
    console.log('Error: ' + JSON.stringify(error));
    this.error = true;
  }

}
