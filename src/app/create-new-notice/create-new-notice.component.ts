import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {  MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';


export interface ListOfPositionShips {
  position: number;
  terminal: string;
  dateOfCome: string;
  dateOfExit: string;
  editDelete: string;
}
export interface ListOfOperation {
  position: number;
  loading: string;
  statusOfCargo: string;
  nameOfCargo: string;
  grossWeight: number;
  editDelete: string;
}

const POSITION_SHIPS: ListOfPositionShips[] = [
  { position: 1, terminal: ' ДП "КТО" ', dateOfCome: '25.02.2020' , dateOfExit: '20.03.2020', editDelete: " "},
  { position: 2, terminal: ' ДП "ШО" ', dateOfCome: '25.02.2021', dateOfExit: '24.03.2020', editDelete: " "}
];
const OPERATION_CARGO: ListOfOperation[] = [
  { position: 1, loading: ' Вивантаження ', statusOfCargo: 'Внутренний транзит ЕС' , nameOfCargo: 'Зернові',grossWeight: 7545 ,editDelete: " "},
  { position: 1, loading: ' Навантаження ', statusOfCargo: 'Транизит' , nameOfCargo: 'Нафта',grossWeight: 114500 ,editDelete: " "},
];


@Component({
  selector: 'app-create-new-notice',
  templateUrl: './create-new-notice.component.html',
  styleUrls: ['./create-new-notice.component.scss']
})
export class CreateNewNoticeComponent implements OnInit  {
  displayedColumns: string[] = [ 'terminal', 'dateOfCome', 'dateOfExit', 'editDelete'];
  displayedColumns2: string[] = [ 'loading', 'statusOfCargo', 'nameOfCargo', 'grossWeight', 'editDelete'];

  dataSource = new MatTableDataSource<ListOfPositionShips>(POSITION_SHIPS);
  dataSource2 = new MatTableDataSource<ListOfOperation>(OPERATION_CARGO);
 

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatPaginator, {static: true}) paginator2: MatPaginator;
  
  constructor(public dialog: MatDialog){}



  openDialogDelete(){
    let dialogDRef = this.dialog.open(DialogDeleteComponent);
  }

  addTerminal() {
    console.log("terminal is added");
  }


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource2.paginator = this.paginator2;
  }

}
