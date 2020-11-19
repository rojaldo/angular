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
import { FormsModule } from '@angular/forms';
import { ShowApodComponent } from './components/show-apod/show-apod.component';
import { BeersComponent } from './components/beers/beers.component';
import { AbvPipe } from './pipes/abv.pipe';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { RangeabvPipe } from './pipes/rangeabv.pipe';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    ApodComponent,
    ShowApodComponent,
    BeersComponent,
    AbvPipe,
    RangeabvPipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule, HttpClientModule, FormsModule, NgxSliderModule, AppRoutingModule
  ],
  providers: [CalculatorService, ApodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
