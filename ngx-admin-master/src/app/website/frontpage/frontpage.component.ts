import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'ngx-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private titleService: Title) { 

  }

  ngOnInit() {
    if (localStorage.getItem('first_visit')){
      localStorage.removeItem('first_visit');
      window.location.reload();
    } 
    else{
      localStorage.setItem('first_visit','true');
    }
    this.spinner.show();
    setTimeout(() => {
       this.spinner.hide();
    }, 1000);

    this.titleService.setTitle('Auction Site | Website');


    // document.addEventListener("wheel", function(e) {
    //   e.preventDefault(); // does nothing since the listener is passive
    // }, {
    //   passive: true
    // });
  }


}
