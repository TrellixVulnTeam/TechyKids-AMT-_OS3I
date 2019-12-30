import { Component, OnInit, Input, Output, EventEmitter,AfterViewInit } from '@angular/core';
import { CostingManagementServiceService } from '../../../service/costing-management-service/costing-management-service.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-costing-edit',
  templateUrl: './costing-edit.component.html',
  styleUrls: ['./costing-edit.component.scss']
})
export class CostingEditComponent implements OnInit {

  CostingEditForm: FormGroup;

  @Input() public costing_edit_information:any;
  @Output() public toggleView = new EventEmitter<boolean>();

  constructor(private _costing_service:CostingManagementServiceService,
              private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.CostingEditForm = this.formBuilder.group({
      id:[''],
      vendor:[''],
      vendor_name:[''],
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
      this.CostingEditForm.get('costing_files').setValue(file);
    }
  }

  invoice_total_calculation(val1,val2){
    this.CostingEditForm.patchValue({
      invoice_total_amount: Number(val1)+Number(val2), 
    });
  }

  updateCosting(){
    const formData = new FormData();
    const id = this.CostingEditForm.get('id').value
    formData.append('id', this.CostingEditForm.get('id').value);
    formData.append('vendor', this.CostingEditForm.get('vendor').value);
    formData.append('invoice_number', this.CostingEditForm.get('invoice_number').value);
    formData.append('invoice_date', this.CostingEditForm.get('invoice_date').value);
    formData.append('invoice_period', this.CostingEditForm.get('invoice_period').value);
    formData.append('invoice_description', this.CostingEditForm.get('invoice_description').value);
    formData.append('invoice_basic_amount', this.CostingEditForm.get('invoice_basic_amount').value);
    formData.append('invoice_tax_amount', this.CostingEditForm.get('invoice_tax_amount').value);
    formData.append('invoice_total_amount', this.CostingEditForm.get('invoice_total_amount').value);
    formData.append('payment_details', this.CostingEditForm.get('payment_details').value);
    formData.append('mode', this.CostingEditForm.get('mode').value);
    formData.append('costing_files', this.CostingEditForm.get('costing_files').value);
    this._costing_service.costingUpdate(formData,id).subscribe(
      data =>{
          alert("Costing updated successfully ...!")
          this.toggle(false);
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
