import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'catalog-login',
  templateUrl: './catalog-login.component.html',
  styleUrls: ['./catalog-login.component.css']
})
export class CatalogLoginComponent implements OnInit {
user:any; //Model
  constructor() { }

  
  ngOnInit() {
    this.user={firstName:"",password:""}
  }

  onSubmit(data:any){
    console.log(data);
  }

}
