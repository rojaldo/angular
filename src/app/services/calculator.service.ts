import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

export enum State { Init, FirstFigure, SecondFigure, Result }

@Injectable()
export class CalculatorService {
  currentState = State.Init;
  firstFigure = 0;
  secondFigure = 0;
  result = 0;
  operator = '';
  displayBackup = '';
  private display = '';

  subject = new Rx.BehaviorSubject(this.display);

  constructor() { }

  public resolve(): number {
    switch (this.operator) {
      case '+':
        return this.firstFigure + this.secondFigure;
      case '-':
        return this.firstFigure - this.secondFigure;
      case '*':
        return this.firstFigure * this.secondFigure;
      case '/':
        return this.firstFigure / this.secondFigure;

      default:
        break;
    }
  }

  public handleNumber(myNumber: number): void {
    switch (this.currentState) {
      case State.Init:
        this.firstFigure = myNumber;
        this.display = this.display + myNumber;
        this.subject.next(this.display);
        this.currentState = State.FirstFigure;
        break;
      case State.FirstFigure:
        this.firstFigure = this.firstFigure * 10 + myNumber;
        this.display = this.display + myNumber;
        this.subject.next(this.display);
        break;
      case State.SecondFigure:
        this.secondFigure = this.secondFigure * 10 + myNumber;
        this.display = this.display + myNumber;
        this.subject.next(this.display);
        break;
      case State.Result:
        this.result = 0;
        this.firstFigure = myNumber;
        this.secondFigure = 0;
        this.operator = '';
        this.display = '' + myNumber;
        this.subject.next(this.display);
        this.currentState = State.FirstFigure;
        break;

      default:
        break;
    }
  }

  public handleSymbol(mySymbol: string): void {
    switch (this.currentState) {
      case State.Init:

        break;
      case State.FirstFigure:
        if (this.isOperator(mySymbol)) {
          this.operator = mySymbol;
          this.display = this.display + this.operator;
          this.subject.next(this.display);

          this.currentState = State.SecondFigure;
        }
        break;
      case State.SecondFigure:
        if (mySymbol === '=') {
          this.result = this.resolve();
          this.display = this.display + mySymbol + this.result;
          this.subject.next(this.display);

          this.currentState = State.Result;
        }
        break;
      case State.Result:
        if (this.isOperator(mySymbol)) {
          this.firstFigure = this.result;
          this.secondFigure = 0;
          this.operator = mySymbol;
          this.result = 0;
          this.display = this.firstFigure + this.operator;
          this.subject.next(this.display);

          this.currentState = State.SecondFigure;
        }
        break;

      default:
        break;

    }
  }

  private isOperator(mySymbol: string): boolean {
    return (mySymbol === '+' || mySymbol === '-' || mySymbol === '*' || mySymbol === '/')
  }


}
