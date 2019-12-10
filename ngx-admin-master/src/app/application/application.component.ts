import { Component, OnInit } from '@angular/core';

import { MENU_ITEM } from './application-menu';
@Component({
  selector: 'ngx-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  menu = MENU_ITEM;
  
  constructor() { }

  ngOnInit() {
  }

}
