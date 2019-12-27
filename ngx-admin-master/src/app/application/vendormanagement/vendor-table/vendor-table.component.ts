import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Vendor } from '../../../model/vendor.model';
import { Observable } from 'rxjs';
import { DataSource } from "@angular/cdk/collections";
import { VendorDeleteComponent } from "../vendor-delete/vendor-delete.component";
import { VendorManagementServiceService } from '../../../service/vendor-management-service/vendor-management-service.service';

@Component({
  selector: 'ngx-vendor-table',
  templateUrl: './vendor-table.component.html',
  styleUrls: ['./vendor-table.component.scss']
})
export class VendorTableComponent implements OnInit {


  public selected_row ;
  public highlight_row = false;

  public vendor_edit_data_pass:any;
  
  @Output() public toggleView = new EventEmitter<boolean>();
  @Output() public vendor_add = new EventEmitter<boolean>();
  @Output() public vendorEditDataGet = new EventEmitter<boolean>();

  constructor(private _vendor_service:VendorManagementServiceService,
              public dialog:MatDialog) {}

  ngOnInit() {}              

  dataSource = new VendorDataSource(this._vendor_service);
  displayedColumns: string[] = ['vendor_id', 'vendor_name', 'mobile_number', 'service'];
  
  selectedRowIndex: number = -1;

  
  selectedRow(row){
    this.selected_row = row;
    this.selectedRowIndex = row.vendor_id;
  }

  addVendor(revealed: boolean){
    this.toggleView.emit(revealed);
    this.vendor_add.emit(true);
  }

  editVendor(revealed: boolean){
    if (this.selected_row){
      this.toggleView.emit(revealed);
      this.vendor_add.emit(false);
      this._vendor_service.vendorDetailsGet(this.selected_row.vendor_id).subscribe(
        data =>{
          this.vendorEditDataGet.emit(data )
        },
        error =>{
          console.log(error)
        }
      )
    }
    else{
      alert("Kindly select the row first...!");
    }
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

  selectedPeriod(incoming_period_level){
    this._vendor_service.vendorFilter(incoming_period_level).subscribe(
      data =>{
        this.dataSource = data;
      },
      error =>{
        console.log(error)
      }
    )
  }

  search(incoming_searching_value){
    this._vendor_service.vendorSearch(incoming_searching_value).subscribe(
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