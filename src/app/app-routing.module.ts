import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateNewNoticeComponent } from './create-new-notice/create-new-notice.component';


// http://localhost:4200 / -> Home
// http://localhost:4200/edit-notice  -> Home
const routes: Routes = [
    {path: '', component: IndexComponent },
    {path: 'edit-notice', component: CreateNewNoticeComponent}
]



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}