import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactComponent {

  contactform=new FormGroup({
    firstname:new FormControl("Akash"),
    lastname:new FormControl("Ajab"),
    email:new FormControl("akash.ajab@transflower.in"),
    gender:new FormControl(),
    isMarried:new FormControl(),
    country:new FormControl("India")
  });
  

  ngOnInit(){
  

  }

  onSubmit(){

    console.log(this.contactform.value);

  }
}
