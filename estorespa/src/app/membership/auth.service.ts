import { Injectable } from '@angular/core';




@Injectable({providedIn: 'root'})
export class AuthService {

  constructor() { }
   login(user: string, password: string): boolean {
      if (user === 'ravi' && password === 'seed') {
      localStorage.setItem('username', user);
      let status = localStorage.getItem("loggedInStatus");
      if(status=="false"){
        localStorage.setItem("loggedInStatus","true");
      }
      return true;
    }
    return false;
  }

  logout(): any { localStorage.removeItem('username'); }
  getUser(): any { 
    return localStorage.getItem('username'); 
  }

  isLoggedIn(): boolean { return this.getUser() !== null;}
}