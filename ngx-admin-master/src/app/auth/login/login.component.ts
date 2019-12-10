import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { LoginService } from '../../service/login/login.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hide = true;
  public username=""
  public password=""
  public result;
  
  constructor(private _loginservice:LoginService, private router:Router,private titleService: Title) { }

  login(){
      this._loginservice.login({"username":this.username,"password":this.password}).subscribe(
      data =>{
        localStorage.setItem('token', data["access"])
        this.router.navigate(['application/admin-dashboard']);
      },
      error =>{
        console.log(error)
      }
    )
  }

 cancel(loginform){
     loginform.reset()
 }

 keyPressFunction(event){
   if(event.keyCode == 13) {
     this.login()
   }
 }

 ngOnInit() {
  this.titleService.setTitle('Auction Site | Login');
  }


}
