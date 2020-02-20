import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDecisionComponent } from './dialog-decision/dialog-decision.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { element } from 'protractor';
import {  MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl, FormGroup } from '@angular/forms';
// 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {


  testForm: FormGroup;
  ngOnInit() {
      this.testForm = new FormGroup({
          'name': new FormControl(null),
          'email': new FormControl(null),
          'gender': new FormControl('male'),
      });
  }
  
      onSubmit() {
      console.log(this.testForm);
      }


}
