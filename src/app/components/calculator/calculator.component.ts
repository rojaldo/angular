import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  display = '';

  constructor() { }

  ngOnInit(): void {
  }

  public handleClick(myNewChar: any): void {
    this.display = this.display + myNewChar;
  }
}
