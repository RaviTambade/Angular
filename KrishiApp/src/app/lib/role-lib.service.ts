import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from './Role';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class RoleLibService {

  constructor(private http:HttpClient) { }

  getRoles(lob:string):Observable<Role[]>
  {
    let url="http://localhost:5142/api/roles/"+lob;
    return this.http.get<Role[]>(url);
  }

  getUsersByRole(role:string):Observable<User[]>
  {
    let url="http://localhost:5142/api/users/usersid/"+role;
    return this.http.get<User[]>(url);
  }

  getUsersDetails(id:number):Observable<User>
  {
    let url="http://localhost:5142/api/users/"+id;
    return this.http.get<User>(url);
  }

  


}
