import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ngx-costingmanagement',
  templateUrl: './costingmanagement.component.html',
  styleUrls: ['./costingmanagement.component.scss']
})
export class CostingmanagementComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Auction Site | CostingDetails');
  }

}
