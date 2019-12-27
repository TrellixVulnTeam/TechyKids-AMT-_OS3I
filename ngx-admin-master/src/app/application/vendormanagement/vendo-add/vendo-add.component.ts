import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VendorManagementServiceService } from '../../../service/vendor-management-service/vendor-management-service.service';

@Component({
  selector: 'ngx-vendo-add',
  templateUrl: './vendo-add.component.html',
  styleUrls: ['./vendo-add.component.scss']
})
export class VendoAddComponent implements OnInit {

  public period_level = "M";
  @Output() public toggleView = new EventEmitter<boolean>();

  constructor(private _vendor_service:VendorManagementServiceService,) { }

  ngOnInit() {
  }

  
  addVendor(vendorAddForm){ 
    this._vendor_service.vendorAdd(vendorAddForm.value).subscribe(
      data =>{
        if (data["result"] == "Success"){
          alert("Vendor Created Successfully...!");
          vendorAddForm.reset();
          this.toggle(false);
        }
      },
      error =>{
        console.log(error)
      }
    )
  }

  cancel(vendorAddForm){
    vendorAddForm.reset()
    this.toggle(false);
  }

  toggle(revealed: boolean){
    this.toggleView.emit(revealed)
  }
}
