import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../@theme/theme.module';
import {
  NbCardModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbIconModule,
  NbSelectModule,
  NbMenuModule
} from '@nebular/theme';
import { ApplicationRoutingModule, routing } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [ApplicationComponent,routing ],
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
    MatTableModule
  ]
})
export class ApplicationModule { }
