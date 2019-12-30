import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CostingManagementServiceService } from '../../../service/costing-management-service/costing-management-service.service';

@Component({
  selector: 'ngx-costing-delete',
  templateUrl: './costing-delete.component.html',
  styleUrls: ['./costing-delete.component.scss']
})
export class CostingDeleteComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<CostingDeleteComponent>,
    private _costing_service:CostingManagementServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

  deleteCosting(costing_id){
    this._costing_service.costingDelete(costing_id).subscribe(
      data =>{
          this.dialogRef.close();
      },
      error =>{
        console.log(error)
      }
    )
  }

  costingDeleteComponentMatCardClose(){
      this.dialogRef.close();
  }

}
