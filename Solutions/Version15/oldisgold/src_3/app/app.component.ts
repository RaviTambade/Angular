import { Component } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  //template
  styleUrls: ['./app.component.css'],
  //providers:[PersonService]
})
export class AppComponent {

  //model
  title ;
  name:string;
  status:boolean;
  age:number=43;
  person:Person;

  constructor(svc:PersonService){
    this.title="Amazon";
    this.name="Rajan Patil";
    this.person= svc.getThePerson(0);  
  }
}
