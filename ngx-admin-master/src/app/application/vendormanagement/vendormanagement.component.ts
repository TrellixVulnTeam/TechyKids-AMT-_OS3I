import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../model/vendor.model';
import { VendorManagementServiceService } from '../../service/vendor-management-service/vendor-management-service.service';
import { Observable } from 'rxjs';
import { DataSource } from "@angular/cdk/collections";

@Component({
  selector: 'ngx-vendormanagement',
  templateUrl: './vendormanagement.component.html',
  styleUrls: ['./vendormanagement.component.scss']
})
export class VendormanagementComponent implements OnInit {

  public period_level;
  public selected_row ;
  public highlight_row = false;
  constructor(private _vendor_service:VendorManagementServiceService) { }
  dataSource = new VendorDataSource(this._vendor_service);
  displayedColumns: string[] = ['vendor_id', 'vendor_name', 'mobile_number', 'service'];
  

  ngOnInit() {}

  selectedRowIndex: number = -1;

  selectedRow(row){
    this.selected_row = row;
    this.selectedRowIndex = row.vendor_id;
  }

}

export class VendorDataSource extends DataSource<any>{
  
  constructor(private _vendor_service:VendorManagementServiceService ){
    super();
  }
  
  connect(): Observable<Vendor[]>{
    return this._vendor_service.vendorListGet();
  }
  disconnect(){}
}
