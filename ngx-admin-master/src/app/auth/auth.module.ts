import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbCardModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbIconModule
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';

import { AuthRoutingModule, routingComponent } from './auth-routing.module';

@NgModule({
  declarations: [routingComponent],
  imports: [
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbCheckboxModule,
    NbIconModule
  ]
})
export class AuthModule { }
