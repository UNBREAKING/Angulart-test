import { Component, OnInit } from '@angular/core';
import { Row } from '../classes/Row'
import { RowsService } from '../rows.service'

@Component({
  selector: 'app-calculator-container',
  templateUrl: './calculator-container.component.html',
  styleUrls: ['./calculator-container.component.css']
})
export class CalculatorContainerComponent implements OnInit {
  Rows: Row[];

  constructor(private rowsService: RowsService) { }

  ngOnInit() {
    this.rowsService.getRows().subscribe(rows => this.Rows = rows);
  }

  addRow(): void {
    this.rowsService.addRow();
  }

}
