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

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    this.service.getRequest().subscribe((data) => this.processRequest(data));
  }

  processRequest(data: any): void{
    this.title = data.title;
    this.description = data.explanation;
  }

}
