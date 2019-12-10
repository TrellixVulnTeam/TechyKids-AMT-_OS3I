import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-simple-header',
  templateUrl: './simple-header.component.html',
  styleUrls: ['./simple-header.component.scss']
})
export class SimpleHeaderComponent implements OnInit {

  userMenu = [ { title: 'My Profile' }, { title: 'Log out' } ];
  userPictureOnly: boolean = false;
  user: any;
  
  constructor(private menuService: NbMenuService,private router:Router) { }

  ngOnInit() {
    this.menuService.onItemClick().subscribe(( event ) => {
      this.onItemSelection(event.item.title);
    });
  }

  onItemSelection( title ) {
    if ( title === 'Log out' ) {
      this.router.navigate(['auth/login']);
    } else if ( title === 'My Profile' ) {
      this.router.navigate(['auction/client/profile-view']);
    }
  }

}
