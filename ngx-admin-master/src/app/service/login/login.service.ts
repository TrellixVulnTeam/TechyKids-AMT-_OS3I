import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl = "http://127.0.0.1:8000/superuser/login/"
  httpHeaders = new HttpHeaders({'Content-type':'application/json'})

  constructor(private http: HttpClient) { }


  login(user_data): Observable<any>{
    return this.http.post(this.baseurl,user_data,{headers : this.httpHeaders});
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
}
