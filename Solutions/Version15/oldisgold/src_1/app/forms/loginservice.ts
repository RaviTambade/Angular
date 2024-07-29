import { Injectable } from '@angular/core';


@Injectable()
export class LoginService {

  status:boolean=false;

 validate(user: string, password: string): boolean {
   
  if (user === 'ravi.tambade@transflower.in' && password === 'seed') {
      this.status=true;
      console.log("checked True");
      localStorage.setItem('username', user);

      return true;
  }
    else{
      console.log(" service Invalid User");
      return false;
    }
    
 }

 logout(): any {   localStorage.removeItem('username'); }
 getUser(): any {   return localStorage.getItem('username'); }
 isLoggedIn(): boolean {    return this.getUser() !== null;  }
}