import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-client',
  styleUrls: ['./client.component.scss'],
  template: `<h5><a [routerLink]="['/index']">HOME</a>&nbsp;|&nbsp;{{page}} </h5><router-outlet></router-outlet>`,
})
export class ClientComponent implements OnInit{

  private page;

  constructor(private router: Router) {}

  ngOnInit() {
      if (this.router.url === "/auction/client/seller-dashboard"){
        this.page = "SELLER DASHBOARD"
      }
      else if (this.router.url === "/auction/client/buyer-dashboard"){
        this.page = "BUYER DASHBOARD"
      }
      else if (this.router.url === "/auction/client/profile-view"){
        this.page = "PROFILE VIEW"
      }
      else if (this.router.url === "/auction/client/bidding-apply"){
        this.page = "BIDDING APPLY"
      }
      else if (this.router.url === "/auction/client/bidding-creation"){
        this.page = "BIDDING CREATION"
      }
      else if (this.router.url === "/auction/client/product-creation"){
        this.page = "PRODUCT CREATION"
      }
  }

}
