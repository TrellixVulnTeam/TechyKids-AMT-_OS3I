import { Component, OnInit,  ViewChild} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VendorTableComponent } from './vendor-table/vendor-table.component';

@Component({
  selector: 'ngx-vendormanagement',
  templateUrl: './vendormanagement.component.html',
  styleUrls: ['./vendormanagement.component.scss']
})
export class VendormanagementComponent implements OnInit {

  public period_level;
  public revealed = false;
  public vendor_toggle_decide;

  // Vendor edit information get from vendor table component
  public vendor_edit_information:any;

  @ViewChild(VendorTableComponent, {static: false})
  private vendorTableComponent: VendorTableComponent;

  constructor(private titleService: Title) {
    //  Init the period of vendor
    this.period_level= "";
  }

  ngOnInit() {
    this.titleService.setTitle('Auction Site | VendorDetails');
  }

  selectedPeriod(){
    this.vendorTableComponent.selectedPeriod(this.period_level);
  }

  search(searching_value){
    this.vendorTableComponent.search(searching_value);
  }
}
