import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationComponent } from './application.component';
import { VendormanagementComponent } from './vendormanagement/vendormanagement.component';
import { CostingmanagementComponent } from './costingmanagement/costingmanagement.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: ApplicationComponent,
  children: [
    {
      path: 'admin-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'vendor-management',
      component: VendormanagementComponent,
    },
    {
      path: 'costing-management',
      component: CostingmanagementComponent,
    },
    {
      path: '',
      redirectTo: 'admin-dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
export const routing = [DashboardComponent,VendormanagementComponent,CostingmanagementComponent]