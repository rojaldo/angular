import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayComponent } from './components/display/display.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { CalculatorService } from './services/calculator.service';
import { ApodComponent } from './components/apod/apod.component';
import { HttpClientModule } from '@angular/common/http';
import { ApodService } from './services/apod.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    ApodComponent
  ],
  imports: [
    BrowserModule,
    NgbModule, HttpClientModule
  ],
  providers: [CalculatorService, ApodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
