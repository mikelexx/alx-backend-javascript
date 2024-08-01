import { RowID, RowElement } from "./interface";
export function insertRow(row: RowElement): number;
export function deleteRow(rowID: RowId): any;
export function updateRow(rowId: RowID, row: RowElement): any;
