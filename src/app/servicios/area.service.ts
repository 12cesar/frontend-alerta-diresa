import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  url="http://localhost:5000";
  constructor(private http:HttpClient) { }
  getAreas(active:string):Observable<any>{
    return this.http.get(`${this.url}/api/area`,{params:{active}});
  }
  getArea(id:string):Observable<any>{
    return this.http.get(`${this.url}/api/area/${id}`);
  }
  postArea(data:FormData):Observable<any>{
    return this.http.post(`${this.url}/api/area`,data);
  }
  putArea(data:FormData, id:string):Observable<any>{
    return this.http.put(`${this.url}/api/area/${id}`,data);
  }
  deleteArea(id:string,active:string):Observable<any>{
    return this.http.delete(`${this.url}/api/area/${id}/${active}`);
  }
}
