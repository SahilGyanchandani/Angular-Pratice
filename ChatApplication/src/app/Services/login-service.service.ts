import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { animate } from '@angular/animations';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }






  onSubmit(obj: any): Observable<any> {
    const headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', 'https://localhost:7277/');
    return this.http.post<any>('https://localhost:7277/api/UserLogin', obj, { headers , withCredentials:true});

  }

  onReg(userData : any):Observable<any>{
     return this.http.post<any>('https://localhost:7277/api/UserReg',userData);
  }
}
