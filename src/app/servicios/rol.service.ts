import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  url="http://localhost:5000"
  constructor(private http:HttpClient) { }

  getRoles(active:number):Observable<any>{
    return this.http.get(`${this.url}/api/rol`,{params:{active}});
  }
}
