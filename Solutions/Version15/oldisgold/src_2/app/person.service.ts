import {Injectable} from "@angular/core";

@Injectable()
export class PersonService{
    people:any;

    constructor(){
        this.people=[
            {firstName:"Ravi",lastName:"Tambade",hourCharges:1200},
            {firstName:"Vishal",lastName:"Vaste",hourCharges:1300},
            {firstName:"Ganesh",lastName:"Bankar",hourCharges:1400},
            {firstName:"Vinod",lastName:"Patil",hourCharges:1500},
        ]
    }

    public getAllPeople():any
    {
        return this.people;
    }

    public getThePerson(index:number):any
    {
        return this.people[index];
    }
    } 
    
