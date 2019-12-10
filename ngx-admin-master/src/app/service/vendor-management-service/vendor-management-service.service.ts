import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable, from, throwError  } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Vendor } from '../../model/vendor.model';



@Injectable({
  providedIn: 'root'
})

export class VendorManagementServiceService {
  
  baseurl = "http://127.0.0.1:8000/vendor/"
  httpHeaders = new HttpHeaders()
                        .set('Content-Type', 'application/json'); 
  
  constructor(private http: HttpClient) { }

  vendorAdd(vendor_data): Observable<any>{
    return this.http.post(this.baseurl+"vendor/",vendor_data,{headers : this.httpHeaders}).pipe(retry(1),catchError(this.handleError));
  }

  vendorListGet(): Observable<Vendor[]>{
    return this.http.get<Vendor[]>(this.baseurl+"vendor/",{headers : this.httpHeaders});
  }

  vendorDetailsGet(id): Observable<any>{
    return this.http.get(this.baseurl+"vendor/"+id+"/",{headers : this.httpHeaders});
  }

  vendorUpdate(data): Observable<Vendor[]>{
    return this.http.put<Vendor[]>(this.baseurl+"vendor/"+data.vendor_id+"/",data,{headers : this.httpHeaders});
  }

  vendorDelete(id): Observable<any>{
    return this.http.delete(this.baseurl+"vendor/"+id+"/",{headers : this.httpHeaders});
  }

  vendorFilter(period): Observable<any>{
    let params = new HttpParams().set('period',period)
    return this.http.get(this.baseurl+"vendor-filter-or-search/",{headers : this.httpHeaders,params:params})
  }

  vendorSearch(search_key):Observable<any>{
    let param = new HttpParams().set('search',search_key)
    return this.http.get(this.baseurl+"vendor-filter-or-search/",{headers : this.httpHeaders,params:param})
  }

  vendorCountByPeriod(): Observable<any>{
    return this.http.get(this.baseurl+"vendor-list-count-by-period/",{headers : this.httpHeaders})
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
      console.log("ClientsideError",errorMessage)
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.log("ServersideError",errorMessage)
    } 
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
