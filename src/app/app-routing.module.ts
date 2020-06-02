import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { ListComponent } from './modules/list/list.component';
import { AddComponent } from './modules/add/add.component';
import { DetailsComponent } from './modules/details/details.component';


const routes: Routes = [
  {path: '', component: DefaultComponent, children:
   [{path: '', component: ListComponent}, {path: 'add', component: AddComponent},
   {path: 'detail/:id', component: DetailsComponent},
 ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
