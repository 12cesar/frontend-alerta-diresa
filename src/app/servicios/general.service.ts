import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  url = 'https://alerta-diresa.herokuapp.com'
  constructor(private http:HttpClient) { }
  getAreas():Observable<any>{
    return this.http.get(this.url+'/api/area');
  }
  postAlerta(formData:FormData):Observable<any>{
    return this.http.post(this.url+'/api/alerta', formData);
  }
}
