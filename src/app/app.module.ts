import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalculatorContainerComponent } from './calculator-container/calculator-container.component';
import { CalculatorRowComponent } from './calculator-row/calculator-row.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorContainerComponent,
    CalculatorRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
