import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { BiddingApplyComponent } from './bidding-apply/bidding-apply.component';
import { BiddingCreationComponent } from './bidding-creation/bidding-creation.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';

const routes: Routes = [{
  path: '',
  component: ClientComponent,
  children: [
    {
      path: 'buyer-dashboard',
      component: BuyerDashboardComponent,
    },
    {
      path: 'seller-dashboard',
      component: SellerDashboardComponent,
    },
    {
      path: 'profile-view',
      component: ProfileComponent,
    },
    {
      path: 'bidding-apply',
      component: BiddingApplyComponent,
    },
    {
      path: 'bidding-creation',
      component: BiddingCreationComponent,
    },
    {
      path: 'product-creation',
      component: ProductCreationComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
