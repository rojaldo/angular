import { Injectable } from '@angular/core';

export enum State { Init, FirstFigure, SecondFigure, Result }

@Injectable()
export class CalculatorService {
  currentState = State.Init;
  firstFigure = 0;
  secondFigure = 0;
  result = 0;
  operator = '';
  displayBackup = '';
  constructor() { }
}
