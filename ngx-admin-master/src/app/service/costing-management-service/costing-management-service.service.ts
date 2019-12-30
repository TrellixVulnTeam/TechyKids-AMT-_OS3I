import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Costing } from '../../model/Costing.model';

@Injectable({
  providedIn: 'root'
})
export class CostingManagementServiceService {

  constructor(private http: HttpClient, ) { }

  baseurl = "http://127.0.0.1:8000/costing/"

  json_httpHeaders = new HttpHeaders()
                  .set('Content-Type', 'application/json')
  
  httpHeaders = new HttpHeaders()
                   

  costingAdd(costing_data): Observable<any>{
    return this.http.post(this.baseurl+"costing/",costing_data,{headers : this.httpHeaders});
  }

  costingListGet(): Observable<Costing[]>{
    return this.http.get<Costing[]>(this.baseurl+"costing/",{headers : this.json_httpHeaders});
  }

  costingDetailsGet(id): Observable<any>{
    return this.http.get(this.baseurl+"costing/"+id+"/",{headers : this.json_httpHeaders});
  }

  costingUpdate(data,id): Observable<Costing[]>{
    return this.http.put<Costing[]>(this.baseurl+"costing/"+id+"/",data,{headers : this.httpHeaders});
  }

  costingDelete(id): Observable<any>{
    return this.http.delete(this.baseurl+"costing/"+id+"/",{headers : this.json_httpHeaders});
  }

  costingSearch(search_key):Observable<any>{
    let param = new HttpParams().set('search',search_key);
    return this.http.get(this.baseurl+"costing-search/",{headers : this.json_httpHeaders,params:param});
  }

  pdfDownload(pdf_url):Observable<any>{
    return this.http.get(pdf_url, {responseType:'arraybuffer'});
  }

}
