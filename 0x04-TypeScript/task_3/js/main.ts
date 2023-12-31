/// <reference path="crud.d.ts" />
import * as CRUD from './crud';
import { RowID, RowElement } from './interface';

const row: RowElement = { firstName: 'Gillaume', lastName: 'Salva' };

const newRowId: RowID = CRUD.insertRow(row);
const updateRow: RowElement ={
    firstName: "Guillaume", lastName: "Salva", age: 23
};
CRUD.updateRow(newRowId, updateRow);
CRUD.deleteRow(newRowId);
