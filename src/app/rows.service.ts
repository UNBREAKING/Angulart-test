import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Row } from './classes/Row';

@Injectable({
  providedIn: 'root'
})
export class RowsService {
  Rows: Row[] = [];

  constructor() { }

  getRows(): Observable<Row[]> {
    return of(this.Rows);
  }

  addRow(): void {

    const newRow = {
      firstField: "",
      secondField: "",
      operation: ""
    };

    this.Rows.push(newRow)
  }
} 
