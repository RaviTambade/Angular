import { Component } from '@angular/core';
import {Person} from './person';
import {PersonService} from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  //template
  styleUrls: ['./app.component.css'],
  providers:[PersonService]
})
export class AppComponent {
  //model
  title = 'Transflower';
  name='Manish Gaikwad';
  status:boolean;
  age:Number=43;
  joinDate:Date;
  //person:Person;
  person:any;

//constructor(){
  //this.title="Melvin";
  
  //this.person=new Person("Melvin","Gaikwad",5,"magaikwad@gmail.com");
  
  constructor(svc:PersonService){
    //this.title="Amazon";
    //this.name="Rajan Patil";
    
    this.person=svc.getThePerson(2);
  } 
}


