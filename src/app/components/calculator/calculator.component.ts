import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalculatorService, State } from 'src/app/services/calculator.service';

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

    this.service.subject.subscribe((data) => {
      console.log('Subscriber:', data);
      this.display = data;
    });

    this.route.queryParams.subscribe(params => {
      console.log('FirstFigure: ' + params.firstfigure);
      console.log('SecondFigure: ' + params.secondfigure);
      console.log('Operator: ' + params.operator);
      if (params.firstfigure !== undefined) {
        this.service.firstFigure = params.firstfigure;
        this.service.currentState = State.FirstFigure;
        this.service.setDisplay('' + this.service.firstFigure);
      }
      if (params.secondfigure !== undefined) {
        this.service.secondFigure = params.secondfigure;
        this.service.resolve();
        this.service.setDisplay(
          this.service.firstFigure +
          this.service.operator +
          this.service.secondFigure +
          '=' +
          this.service.result);
        this.service.currentState = State.Result;
      }
      if (params.operator !== undefined) {
        this.service.operator = params.operator;
        this.service.setDisplay(this.service.firstFigure + this.service.operator);
        this.service.currentState = State.SecondFigure;
      }
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
