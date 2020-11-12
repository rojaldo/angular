import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnDestroy {

  display = '';

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnIOnInit CalculatorComponent');
  }

  ngOnDestroy(): void {
    console.log('ngOnIOnDestroy CalculatorComponent');

  }

  handleSignal(display): void {
    this.display = display;
  }

}
