import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Vendor } from '../../model/vendor.model';
import { Observable } from 'rxjs';
import { DataSource } from "@angular/cdk/collections";
import { VendorDeleteComponent } from "./vendor-delete/vendor-delete.component";
import { VendorManagementServiceService } from '../../service/vendor-management-service/vendor-management-service.service';

@Component({
  selector: 'ngx-vendormanagement',
  templateUrl: './vendormanagement.component.html',
  styleUrls: ['./vendormanagement.component.scss']
})
export class VendormanagementComponent implements OnInit {

  public period_level;
  public selected_row ;
  public highlight_row = false;

  constructor(private _vendor_service:VendorManagementServiceService,
              public dialog:MatDialog) {
                
                //  Init the period of vendor
                this.period_level= "";
  }

  dataSource = new VendorDataSource(this._vendor_service);
  displayedColumns: string[] = ['vendor_id', 'vendor_name', 'mobile_number', 'service'];
  

  ngOnInit() {}

  selectedRowIndex: number = -1;

  selectedRow(row){
    this.selected_row = row;
    this.selectedRowIndex = row.vendor_id;
  }

  addVendor(){
  }

  editVendor(){

  }

  deleteVendor(): void {
    if (this.selected_row){
      const dialogRef = this.dialog.open(VendorDeleteComponent, {
            disableClose: true,
            height: 'auto',
            width: '600px',
            data: {vendor_id:this.selected_row.vendor_id,vendor_name:this.selected_row.vendor_name}
          });
          dialogRef.afterClosed().subscribe(result => {
            this.dataSource = new VendorDataSource(this._vendor_service);
          });
    }
    else{
      alert("kindly select the row first ...!")
    }
  }
  
  refresh(){
    this.dataSource = new VendorDataSource(this._vendor_service);
  }

  selectedPeriod(){
    this._vendor_service.vendorFilter(this.period_level).subscribe(
      data =>{
        this.dataSource = data;
      },
      error =>{
        console.log(error)
      }
    )
  }

  search(values){
    this._vendor_service.vendorSearch(values).subscribe(
      data =>{
        this.dataSource = data;
      },
      error =>{
        console.log(error)
      }
    )
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

