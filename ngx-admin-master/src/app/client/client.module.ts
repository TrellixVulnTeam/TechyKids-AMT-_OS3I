import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../@theme/theme.module';
import {
  NbCardModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbIconModule,
  NbSelectModule
} from '@nebular/theme';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { BiddingCreationComponent } from './bidding-creation/bidding-creation.component';
import { BiddingApplyComponent } from './bidding-apply/bidding-apply.component';

@NgModule({
  declarations: [ClientComponent,
                 BuyerDashboardComponent,
                 SellerDashboardComponent,
                 ProfileComponent,
                 ProductCreationComponent,
                 BiddingCreationComponent,
                 BiddingApplyComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbCheckboxModule,
    NbInputModule,
    NbIconModule,
    NbSelectModule
  ]
})
export class ClientModule { }
