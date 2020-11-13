import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Output() signal = new EventEmitter<string>();
  display = '';

  constructor() { }


  ngOnInit(): void {
    // this.signal.emit(this.display);
  }


  public handleClick(myNewChar: any): void {
    this.signal.emit(myNewChar);
  }


}
