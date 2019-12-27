import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../@theme/theme.module';
import { FormsModule }    from '@angular/forms'; 

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


const COMPONENTS = [
  ApplicationComponent,
  DashboardComponent,
  VendorPieComponent,
  VendormanagementComponent,
  VendorDeleteComponent,
  VendoAddComponent,
  VendorTableComponent,
  CostingmanagementComponent,
];

@NgModule({
  declarations: [COMPONENTS, VendorEditComponent,],
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
    FormsModule
  ],
  entryComponents: [VendorDeleteComponent],
})
export class ApplicationModule { }
