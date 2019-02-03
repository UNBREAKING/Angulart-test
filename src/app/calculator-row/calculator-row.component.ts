import { Component, OnInit, Input } from '@angular/core';
import { Row } from '../classes/Row'

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
}

@Component({
  selector: 'app-calculator-row',
  templateUrl: './calculator-row.component.html',
  styleUrls: ['./calculator-row.component.css']
})
export class CalculatorRowComponent implements OnInit {
  @Input() row: Row;
  result: number;

  constructor() { }

  ngOnInit() {
  }

  onChange(): void {
    const { firstField, secondField, operation } = this.row

    if(firstField && secondField && operation) {
      this.result = operations[operation](firstField, secondField)
    }
  }

}
