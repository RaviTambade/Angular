import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICredential } from './icredential';
import { IUpdatePassword } from './iupdate-password';
import { IUser } from './Iuser';

@Injectable({
  providedIn: 'root',
})
export class MembershipLibService {
  constructor(private httpClient: HttpClient) {}

  signIn(credential: ICredential): Observable<any> {
    let url = `http://localhost:5142/api/auth/signin`;
    return this.httpClient.post<any>(url, credential);
  }

  changePassword(credential: IUpdatePassword): Observable<boolean> {
    let url = `http://localhost:5142/api/auth/updatepassword`;
    const jwt = localStorage.getItem('jwt');
    return this.httpClient.put<any>(url, credential, {
      headers: { authorization: `Bearer ${jwt}` },
    });
  }
  getUser(id: number): Observable<IUser> {
    let url = `http://localhost:5142/api/users/${id}`;
    return this.httpClient.get<IUser>(url);
  }

  updateUser(id: number, user: IUser): Observable<any> {
    let url = `http://localhost:5142/api/users/${id}`;
    return this.httpClient.put<any>(url, user);
  }
  uploadFile(filename:string,formData:FormData): Observable<any> {
    let url = `$http://localhost:5142/api/files/fileupload/${filename}`;
    return this.httpClient.post<any>(url, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
}
