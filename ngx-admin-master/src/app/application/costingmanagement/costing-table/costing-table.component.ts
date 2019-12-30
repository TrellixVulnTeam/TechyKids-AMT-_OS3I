import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DataSource } from "@angular/cdk/collections";
import { Costing } from '../../../model/costing.model';
import { CostingDeleteComponent } from "../costing-delete/costing-delete.component";
import { CostingManagementServiceService } from '../../../service/costing-management-service/costing-management-service.service';
import { saveAs } from 'file-saver/dist/FileSaver';

@Component({
  selector: 'ngx-costing-table',
  templateUrl: './costing-table.component.html',
  styleUrls: ['./costing-table.component.scss']
})
export class CostingTableComponent implements OnInit {

  public selected_row ;
  public highlight_row = false;
  public selectedRowIndex: number = -1;
  public pdf_url;

  public costing_edit_data_pass:any;

  @Output() public toggleView = new EventEmitter<boolean>();
  @Output() public costing_add = new EventEmitter<boolean>();
  @Output() public costingEditDataGet = new EventEmitter<boolean>();

  
  constructor(private _costing_service:CostingManagementServiceService,
    public dialog:MatDialog) {}

  ngOnInit() {}
  
  dataSource = new CostingDataSource(this._costing_service);
  displayedColumns: string[] = ['vendor_name', 'invoice_number', 'invoice_basic_amount',
                                'invoice_tax_amount', 'invoice_total_amount'];
  

  selectedRow(row){
    this.selected_row = row;
    this.selectedRowIndex = row.id;
    this.pdf_url = "http://127.0.0.1:8000"+row.costing_files
  }

  addCosting(revealed: boolean){
    this.toggleView.emit(revealed);
    this.costing_add.emit(true);
  }

  editCosting(revealed: boolean){
    if (this.selected_row){
      this.toggleView.emit(revealed);
      this.costing_add.emit(false);
      this._costing_service.costingDetailsGet(this.selected_row.id).subscribe(
        data =>{
          data["vendor_name"] = this.selected_row.vendor_name
          this.costingEditDataGet.emit(data);
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

  deleteCosting(): void {
    if (this.selected_row){
      const dialogRef = this.dialog.open(CostingDeleteComponent, {
            disableClose: true,
            height: 'auto',
            width: '600px',
            data: {costing_id:this.selected_row.id}
          });
          dialogRef.afterClosed().subscribe(result => {
            this.dataSource = new CostingDataSource(this._costing_service);
          });
    }
    else{
      alert("kindly select the row first ...!")
    }
  }

  refresh(){
    this.dataSource = new CostingDataSource(this._costing_service);
  }

  search(incoming_searching_value){
    this._costing_service.costingSearch(incoming_searching_value).subscribe(
      data =>{
        this.dataSource = data;
      },
      error =>{
        console.log(error)
      }
    )
  }

  pdfDownload(){
    if (this.selected_row){
      this._costing_service.pdfDownload(this.pdf_url).subscribe(data=>{
        const blob = new Blob([data], {type:'application/pdf'});
        const filename = 'Sample.pdf';
        saveAs(blob,filename);
      },error=>{
        console.log(error)
      } );
    }
    else{
      alert("kindly select the row first ...!")
    }
  }

}

export class CostingDataSource extends DataSource<any>{
  
  constructor(private _costing_service:CostingManagementServiceService ){
    super();
  }
  
  connect(): Observable<Costing[]>{
    return this._costing_service.costingListGet();
  }
  disconnect(){}
}