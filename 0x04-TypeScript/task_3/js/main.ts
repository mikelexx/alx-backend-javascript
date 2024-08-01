/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from './crud'
const row: RowElement = {firstName: 'Guillaume', lastName: 'Salva'}
const newRowElement: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {...row, age:23};
CRUD.updateRow(newRowElement, updatedRow);
CRUD.deleteRow(newRowElement);



