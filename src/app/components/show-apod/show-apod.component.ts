import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-show-apod',
  templateUrl: './show-apod.component.html',
  styleUrls: ['./show-apod.component.scss']
})
export class ShowApodComponent implements OnInit, OnChanges {
  title = '';
  description = '';
  date = '';
  imageURL = '';
  hdURL = '';
  resolved = false;
  error = false;
  @Input() selectedDate: any;

  constructor(private service: ApodService) { }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.selectedDate !== {}) {
      const stringDate = this.selectedDate.year + '-' + this.selectedDate.month + '-' + this.selectedDate.day;
      this.service.getRequest(stringDate).subscribe(
        (data) => this.processRequest(data),
        (error) => this.processError(error));
    }
  }

  ngOnInit(): void {
    this.service.getRequest().subscribe(
      (data) => this.processRequest(data),
      (error) => this.processError(error));
  }

  processRequest(data: any): void {
    this.title = data.title;
    this.description = data.explanation;
    this.date = data.date;
    this.imageURL = data.url;
    this.hdURL = data.hdurl;
    this.resolved = true;

  }

  processError(error: any): void {
    console.log('Error: ' + JSON.stringify(error));
    this.error = true;
  }

}
