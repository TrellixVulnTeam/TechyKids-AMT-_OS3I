import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';
// import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'; 
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router, private _auth:LoginService){}
  canActivate():boolean{  
                    if(this._auth.loggedIn()){
                      return true
                    } 
                    else{
                      this.router.navigate['/index/']
                      return false
                    }
              }

}
