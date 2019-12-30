import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../@theme/theme.module';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms'; 

import { NgxEchartsModule } from 'ngx-echarts';

import {
  NbCardModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbIconModule,
  NbSelectModule,
  NbMenuModule,
  NbTooltipModule
} from '@nebular/theme';

import { MatToolbarModule,
         MatButtonModule, 
         MatSidenavModule,
         MatIconModule,
         MatListModule,
         MatGridListModule,
         MatCardModule,
         MatMenuModule,
         MatTableModule,
         MatDialogModule } from '@angular/material';

import {MatSelectModule} from  '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { ApplicationRoutingModule} from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendorPieComponent } from './dashboard/vendor-pie.component';
import { VendormanagementComponent } from './vendormanagement/vendormanagement.component';
import { VendorDeleteComponent } from './vendormanagement/vendor-delete/vendor-delete.component';
import { CostingmanagementComponent } from './costingmanagement/costingmanagement.component';
import { VendoAddComponent } from './vendormanagement/vendo-add/vendo-add.component';
import { VendorTableComponent } from './vendormanagement/vendor-table/vendor-table.component';
import { VendorEditComponent } from './vendormanagement/vendor-edit/vendor-edit.component';
import { CostingAddComponent } from './costingmanagement/costing-add/costing-add.component';
import { CostingEditComponent } from './costingmanagement/costing-edit/costing-edit.component';
import { CostingDeleteComponent } from './costingmanagement/costing-delete/costing-delete.component';
import { CostingTableComponent } from './costingmanagement/costing-table/costing-table.component';


const COMPONENTS = [
  ApplicationComponent,
  DashboardComponent,
  VendorPieComponent,
  VendormanagementComponent,
  VendorDeleteComponent,
  VendorEditComponent,
  VendoAddComponent,
  VendorTableComponent,
  CostingmanagementComponent,
  CostingDeleteComponent,
  CostingTableComponent,
  CostingAddComponent,
  CostingEditComponent,
];

@NgModule({
  declarations: [COMPONENTS,],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    NbMenuModule,
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbCheckboxModule,
    NbInputModule,
    NbIconModule,
    NbSelectModule,
    NbTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    NgxEchartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [VendorDeleteComponent,CostingDeleteComponent],
})
export class ApplicationModule { }
