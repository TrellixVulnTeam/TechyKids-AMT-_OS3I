import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CostingTableComponent } from './costing-table/costing-table.component';

@Component({
  selector: 'ngx-costingmanagement',
  templateUrl: './costingmanagement.component.html',
  styleUrls: ['./costingmanagement.component.scss']
})
export class CostingmanagementComponent implements OnInit {

  public revealed = false;
  public costing_toggle_decide;

  // Costing edit information get from vendor table component
  public costing_edit_information=[];

  @ViewChild(CostingTableComponent, {static: false})
  private costingTableComponent: CostingTableComponent;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Auction Site | CostingDetails');
  }

  search(searching_value){
    this.costingTableComponent.search(searching_value);
  }
}
