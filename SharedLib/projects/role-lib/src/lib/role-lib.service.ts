import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from './Role';

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


}
