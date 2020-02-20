import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDecisionComponent } from '../dialog-decision/dialog-decision.component';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { element } from 'protractor';
import {  MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MaterialModule } from '../material/material.module';
 import { FormsModule} from '@angular/forms';
 import { NgForm } from '@angular/forms';
 import { FormControl } from '@angular/forms';

export interface NoticeElement {
  position: number;
  pkNotice: number;
  imo: number;
  name: string;
  portCode: string;
  comeDate: string;
  decisionAdmin: string;
  timeoutDocuments: string;
  editDelete: string;

}

const ELEMENT_DATA: NoticeElement[] = [
  {position: 1, pkNotice: 1551, imo: 11, name: 'Hydrogen', portCode: 'UAODS',  comeDate: '11.01.2020 01:02:03', decisionAdmin: '21.01.2020 01:02:03', timeoutDocuments: '10.02.2020 01:02:03', editDelete: "     "},
  {position: 2, pkNotice: 25156, imo: 8542, name: 'Helium',  portCode: 'UACher', comeDate: '10.01.2020 01:02:03', decisionAdmin: '22.01.2020 01:02:03', timeoutDocuments: '11.02.2020 01:02:03', editDelete: ""},
  {position: 3, pkNotice: 3417, imo: 224, name: 'Lithium',  portCode: 'UABerd', comeDate: '8.01.2020 01:02:03', decisionAdmin: '23.01.2020 01:02:03', timeoutDocuments: '12.02.2020 01:02:03', editDelete: ""},
  {position: 4, pkNotice: 44222, imo: 674931, name: 'Beryllium',  portCode: 'RUSCH',  comeDate: '25.01.2020 01:02:03', decisionAdmin: '24.01.2020 01:02:03', timeoutDocuments: '13.02.2020 01:02:03', editDelete: ""},
  {position: 5, pkNotice: 5114, imo: 9849997, name: 'Boron',  portCode: 'USNY', comeDate: '8.01.2020 01:02:03', decisionAdmin: '25.01.2020 01:02:03', timeoutDocuments: '14.02.2020 01:02:03', editDelete: ""},
  {position: 6, pkNotice: 652828, imo: 7487, name: 'Carbon',  portCode: 'TKRSTL', comeDate: '5.01.2020 01:02:03', decisionAdmin: '26.01.2020 01:02:03', timeoutDocuments: '15.02.2020 01:02:03', editDelete: ""},
  {position: 7, pkNotice: 1551, imo: 11, name: 'Hydrogen', portCode: 'UAODS',  comeDate: '11.01.2020 01:02:03', decisionAdmin: '21.01.2020 01:02:03', timeoutDocuments: '10.02.2020 01:02:03', editDelete: "     "},
  {position: 8, pkNotice: 25156, imo: 8542, name: 'Helium',  portCode: 'UACher', comeDate: '10.01.2020 01:02:03', decisionAdmin: '22.01.2020 01:02:03', timeoutDocuments: '11.02.2020 01:02:03', editDelete: ""},
  {position: 9, pkNotice: 3417, imo: 224, name: 'Lithium',  portCode: 'UABerd', comeDate: '8.01.2020 01:02:03', decisionAdmin: '23.01.2020 01:02:03', timeoutDocuments: '12.02.2020 01:02:03', editDelete: ""},
  {position: 10, pkNotice: 44222, imo: 674931, name: 'Beryllium',  portCode: 'RUSCH',  comeDate: '25.01.2020 01:02:03', decisionAdmin: '24.01.2020 01:02:03', timeoutDocuments: '13.02.2020 01:02:03', editDelete: ""},
  {position: 11, pkNotice: 5114, imo: 9849997, name: 'Boron',  portCode: 'USNY', comeDate: '8.01.2020 01:02:03', decisionAdmin: '25.01.2020 01:02:03', timeoutDocuments: '14.02.2020 01:02:03', editDelete: ""},
  {position: 12, pkNotice: 652828, imo: 7487, name: 'Carbon',  portCode: 'TKRSTL', comeDate: '5.01.2020 01:02:03', decisionAdmin: '26.01.2020 01:02:03', timeoutDocuments: '15.02.2020 01:02:03', editDelete: ""}

];

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  displayedColumns: string[] = ['pkNotice', 'imo', 'name', 'portCode', 'comeDate', 'decisionAdmin', 'timeoutDocuments', 'editDelete'];
  
  dataSource = new MatTableDataSource<NoticeElement>(ELEMENT_DATA);
 


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
 
 ngOnInit() {
   this.dataSource.paginator = this.paginator;
 }


  constructor(public dialog: MatDialog){}

  openDialog(){
    this.dialog.open(DialogDecisionComponent);
 
  }
  openDialogDelete(){
    let dialogDRef = this.dialog.open(DialogDeleteComponent);
  }
  openDialogDelete2(row){
     console.log(row.pkNotice);
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  createNewNotice() {
      console.log("Открытие");  
  }

  // beganTermDatePicker = new FormControl('');
  // endTermDatePicker = new FormControl('');
  name = new FormControl('');
   
  resetForm() {
    this.name.reset();
    // this.beganTermDatePicker.reset();
    // this.endTermDatePicker.reset();
  }
}
