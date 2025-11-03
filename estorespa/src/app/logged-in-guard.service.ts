import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

//from java
//inheritance
//interface  inheritance   implements IClonable, ISerializable
//implementation inheritance  extends


@Injectable({
  providedIn: 'root'
})
export class  LoggedInGuard implements CanActivate {
  
  constructor(private authService: AuthService) {
    console.log("constructor is invoked !");
  }
  //overriding
  canActivate(): boolean {
    return this.authService.isLoggedIn();
  }
}