import { Injectable } from "@angular/core";

@Injectable()
export class PersonService{
    people:any;

    constructor(){
        this.people=[
            {firstName:"Ravi", lastName:"Tambade", hourCharges:1200},
            {firstName:"Sachin", lastName:"Mulay", hourCharges:1340},
            {firstName:"Seema", lastName:"Pawar", hourCharges:1100},
            {firstName:"Shiv", lastName:"Shinde", hourCharges:12065},
        ]
    }
    public getAllPeople(): any
    {
        return this.people;
    }

    public getThePerson(index:number):any
    {
        return this.people[index];
    }
}