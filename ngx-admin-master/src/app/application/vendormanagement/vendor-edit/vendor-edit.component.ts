import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VendorManagementServiceService } from '../../../service/vendor-management-service/vendor-management-service.service';


@Component({
  selector: 'ngx-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.scss']
})
export class VendorEditComponent implements OnInit {

  @Input() public vendor_edit_information:any;
  @Output() public toggleView = new EventEmitter<boolean>();

  constructor(private _vendor_service:VendorManagementServiceService,) { }

  ngOnInit() {}

  updateVendor(vendorEditForm){
    this._vendor_service.vendorUpdate(vendorEditForm.value).subscribe(
      data =>{
        if(data["result"] == "Success"){
          alert("Vendor updated successfully ...!")
          this.toggle(false);
        }
      },
      error =>{
        console.log(error)
      }
    )
  }

  cancel(){
    this.toggle(false);
  }

  toggle(revealed: boolean){
    this.toggleView.emit(revealed)
  }

}
