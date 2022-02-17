import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {
  url="http://localhost:5000";
  constructor(private http:HttpClient) { }
  getAlertas(estado:string):Observable<any>{
    return this.http.get(`${this.url}/api/alerta`,{params:{estado}});
  }
}
