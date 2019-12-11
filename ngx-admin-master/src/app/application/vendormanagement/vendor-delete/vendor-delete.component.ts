import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VendorManagementServiceService } from '../../../service/vendor-management-service/vendor-management-service.service';

@Component({
  selector: 'ngx-vendor-delete',
  templateUrl: './vendor-delete.component.html',
  styleUrls: ['./vendor-delete.component.scss']
})
export class VendorDeleteComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<VendorDeleteComponent>,
    private _vendor_service:VendorManagementServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  
  ngOnInit() {}

  deleteVendor(vendor_id){
    this._vendor_service.vendorDelete(vendor_id).subscribe(
      data =>{
          this.dialogRef.close();
      },
      error =>{
        console.log(error)
      }
    )
  }

  vendorDeleteComponentMatCardClose(){
      this.dialogRef.close();
  }

}
