import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url='http://localhost:5000';
  constructor(private http:HttpClient) { }


  getUsers(active:string):Observable<any>{
    return this.http.get(`${this.url}/api/user`,{params:{active}});
  }
  getUser(id:string):Observable<any>{
    return this.http.get(`${this.url}/api/user/${id}`);
  }
  postUser(data:FormData):Observable<any>{
    return this.http.post(`${this.url}/api/user`,data);
  }
  putUser(data:FormData, id:string):Observable<any>{
    return this.http.put(`${this.url}/api/user/${id}`,data);
  }
  deleteUser(id:string,active:string):Observable<any>{
    return this.http.delete(`${this.url}/api/user/${id}/${active}`);
  }
}
