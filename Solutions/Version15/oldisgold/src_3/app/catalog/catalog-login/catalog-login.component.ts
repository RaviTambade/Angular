import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'catalog-login',
  templateUrl: './catalog-login.component.html',
  styleUrls: ['./catalog-login.component.css']
})
export class CatalogLoginComponent implements OnInit {

  constructor() { }

  userEmail:string;
  userPassword:string;
  ngOnInit() {
    this.userEmail="man";
    this.userPassword="seed";
  }

  onSubmit(data:any){
    console.log(data);
  }

}
