import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnDestroy {

  display = '';

  constructor(private service: CalculatorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log('ngOnIOnInit CalculatorComponent');
    this.route.queryParams.subscribe(params => {
      console.log('ID: ' + params['id']);
      console.log('Name: ' + params['name']);
    });

    this.service.subject.subscribe((data) => {
      console.log('Subscriber:', data);
      this.display = data;
    });

  }

  ngOnDestroy(): void {
    console.log('ngOnIOnDestroy CalculatorComponent');
    this.service.displayBackup = this.display;
  }

  handleSignal(myNewChar: any): void {
    if (typeof (myNewChar) === 'number') {
      this.service.handleNumber(myNewChar);
    } else if (typeof (myNewChar) === 'string') {
      this.service.handleSymbol(myNewChar);
    }
  }


}
