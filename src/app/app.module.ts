import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
 import { FormsModule} from '@angular/forms';
import { DialogDecisionComponent } from './dialog-decision/dialog-decision.component';
import { CreateNewNoticeComponent } from './create-new-notice/create-new-notice.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { IndexComponent } from './index/index.component';
// import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DialogDecisionComponent,
    CreateNewNoticeComponent,
    DialogDeleteComponent,
    IndexComponent
  ],
  entryComponents: [
    DialogDecisionComponent,
    DialogDeleteComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
