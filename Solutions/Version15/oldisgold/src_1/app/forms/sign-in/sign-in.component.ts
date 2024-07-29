import { Component, OnInit } from '@angular/core';
import { LoginService } from '../loginservice';

export class Credential  {
  constructor(public  email:string,public  password:string){  }
}

@Component({
  selector: 'forms-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isValidUser:boolean=false;
  user: Credential;
 
  constructor(private svc:LoginService) {    }  //DI

  ngOnInit() {
  this.user=new Credential("ravi.tambade@transflower.in","seed");
  }

  onSubmit(form: any): void {
   this.isValidUser=this.svc.validate(form.userEmail,form.userPassword);
   if(this.isValidUser){ console.log("Valid User !"); }
   else{ console.log("Invalid User !"); }   
  }
}