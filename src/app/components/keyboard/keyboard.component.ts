import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';
import { State } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit, OnDestroy {

  @Output() signal = new EventEmitter<string>();
  display = '';

  constructor(private service: CalculatorService) { }
  ngOnDestroy(): void {
    this.service.displayBackup = this.display;
  }

  ngOnInit(): void {
    this.display = this.service.displayBackup;
    this.signal.emit(this.display)
  }


  public handleClick(myNewChar: any): void {
    if (typeof (myNewChar) === 'number') {
      this.handleNumber(myNewChar);
    } else if (typeof (myNewChar) === 'string') {
      this.handleSymbol(myNewChar);
    }
  }

  private handleNumber(myNumber: number): void {
    switch (this.service.currentState) {
      case State.Init:
        this.service.firstFigure = myNumber;
        this.display = this.display + myNumber;
        this.signal.emit(this.display);
        this.service.currentState = State.FirstFigure;
        break;
      case State.FirstFigure:
        this.service.firstFigure = this.service.firstFigure * 10 + myNumber;
        this.display = this.display + myNumber;
        this.signal.emit(this.display);
        break;
      case State.SecondFigure:
        this.service.secondFigure = this.service.secondFigure * 10 + myNumber;
        this.display = this.display + myNumber;
        this.signal.emit(this.display);
        break;
      case State.Result:
        this.service.result = 0;
        this.service.firstFigure = myNumber;
        this.service.secondFigure = 0;
        this.service.operator = '';
        this.display = '' + myNumber;
        this.signal.emit(this.display);
        this.service.currentState = State.FirstFigure;
        break;

      default:
        break;
    }
  }

  private handleSymbol(mySymbol: string): void {
    switch (this.service.currentState) {
      case State.Init:

        break;
      case State.FirstFigure:
        if (this.isOperator(mySymbol)) {
          this.service.operator = mySymbol;
          this.display = this.display + this.service.operator;
          this.signal.emit(this.display);
          this.service.currentState = State.SecondFigure;
        }
        break;
      case State.SecondFigure:
        if (mySymbol === '=') {
          this.service.result = this.resolve();
          this.display = this.display + mySymbol + this.service.result;
          this.signal.emit(this.display);
          this.service.currentState = State.Result;
        }
        break;
      case State.Result:
        if (this.isOperator(mySymbol)) {
          this.service.firstFigure = this.service.result;
          this.service.secondFigure = 0;
          this.service.operator = mySymbol;
          this.service.result = 0;
          this.display = this.service.firstFigure + this.service.operator;
          this.signal.emit(this.display);
          this.service.currentState = State.SecondFigure;
        }
        break;

      default:
        break;

    }
  }

  private isOperator(mySymbol: string): boolean {
    return (mySymbol === '+' || mySymbol === '-' || mySymbol === '*' || mySymbol === '/')
  }

  private resolve(): number {
    switch (this.service.operator) {
      case '+':
        return this.service.firstFigure + this.service.secondFigure;
      case '-':
        return this.service.firstFigure - this.service.secondFigure;
      case '*':
        return this.service.firstFigure * this.service.secondFigure;
      case '/':
        return this.service.firstFigure / this.service.secondFigure;

      default:
        break;
    }
  }

}
