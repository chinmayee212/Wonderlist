import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule } from '@angular/material/table';
import { DetailsComponent } from 'src/app/modules/details/details.component';
import { AddComponent } from 'src/app/modules/add/add.component';
import { ListComponent } from 'src/app/modules/list/list.component';
import { GettaskserviceService } from 'src/app/modules/gettaskservice.service';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';





@NgModule({
  declarations: [
    DefaultComponent,
    DetailsComponent,
    AddComponent,
    ListComponent


  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    FlexLayoutModule,
    FormsModule,
    MatDatepickerModule,

    MatNativeDateModule

  ],
  providers: [GettaskserviceService]
})
export class DefaultModule { }
