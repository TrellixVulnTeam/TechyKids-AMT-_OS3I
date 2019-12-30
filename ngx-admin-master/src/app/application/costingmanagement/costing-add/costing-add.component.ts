import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CostingManagementServiceService } from '../../../service/costing-management-service/costing-management-service.service';
import { VendorManagementServiceService } from '../../../service/vendor-management-service/vendor-management-service.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

export interface Vendor {
  vendor_id: number;
  vendor_name: string;
}

@Component({
  selector: 'ngx-costing-add',
  templateUrl: './costing-add.component.html',
  styleUrls: ['./costing-add.component.scss']
})
export class CostingAddComponent implements OnInit {
  
  private vendors;

  public invoice_total:Number;

  CostingAddForm: FormGroup;

  @Output() public toggleView = new EventEmitter<boolean>();

  constructor( private _costing_service:CostingManagementServiceService,
              private _vendor_service:VendorManagementServiceService,
              private formBuilder: FormBuilder){}

  ngOnInit() {
    this._vendor_service.vendorListGet().subscribe(
      data =>{
        this.vendors = data
      }
    )

    this.CostingAddForm = this.formBuilder.group({
      vendor:[''],
      invoice_number: [''],
      invoice_date: [''],
      invoice_period: [''],
      invoice_description: [''],
      invoice_basic_amount: [''],
      invoice_tax_amount: [''],
      invoice_total_amount: [''],
      payment_details: [''],
      mode: [''],
      costing_files: ['']
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.CostingAddForm.get('costing_files').setValue(file);
    }
  }

  invoice_total_calculation(val1,val2){
    this.invoice_total = Number(val1)+Number(val2)
  }

  addCosting(costingAddForm){
    const formData = new FormData();
    formData.append('vendor', this.CostingAddForm.get('vendor').value);
    formData.append('invoice_number', this.CostingAddForm.get('invoice_number').value);
    formData.append('invoice_date', this.CostingAddForm.get('invoice_date').value);
    formData.append('invoice_period', this.CostingAddForm.get('invoice_period').value);
    formData.append('invoice_description', this.CostingAddForm.get('invoice_description').value);
    formData.append('invoice_basic_amount', this.CostingAddForm.get('invoice_basic_amount').value);
    formData.append('invoice_tax_amount', this.CostingAddForm.get('invoice_tax_amount').value);
    formData.append('invoice_total_amount', this.CostingAddForm.get('invoice_total_amount').value);
    formData.append('payment_details', this.CostingAddForm.get('payment_details').value);
    formData.append('mode', this.CostingAddForm.get('mode').value);
    formData.append('costing_files', this.CostingAddForm.get('costing_files').value);
    this._costing_service.costingAdd(formData).subscribe(
      data =>{
          alert("Costing added successfully ...!")
          costingAddForm.reset();
          this.toggle(false);
      },
      error =>{
        console.log(error)
      }
    )
  }


  cancel(costingAddForm){
    costingAddForm.reset();
    this.toggle(false);
  }

  toggle(revealed: boolean){
    this.toggleView.emit(revealed)
  }
}
