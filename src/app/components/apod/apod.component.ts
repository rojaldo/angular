import { Component, OnInit, ViewChild } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';
import { ShowApodComponent } from '../show-apod/show-apod.component';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  pickerDate: any = {};
  @ViewChild(ShowApodComponent) showApod;

  constructor() { }

  ngOnInit(): void {

  }


  handleChange(): void{
    console.log('handleChange()');
    this.showApod.updateData(this.pickerDate);
  }



}
