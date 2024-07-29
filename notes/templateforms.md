
# Angular Forms

Angular provides two ways to work with forms: template-driven forms and reactive forms (also known as model-driven forms). 

- Template-driven forms let us add directives to bind input values to reactive values and also to add form validation.

- Reactive forms work by letting us create form objects and link them to forms, which lets us add validation. It binds input values to properties in reactive form objects so we can access input values and validate them.

## What is Template-driven form?

In Template Driven Forms we specify behaviors/validations using directives and attributes in our template and let it work behind the scenes. All things happen in Templates hence very little code is required in the component class. This is different from the reactive forms, where we define the logic and controls in the component class.

The Template-driven forms 

- The form is set up using ngForm directive
- controls are set up using the ngModel directive
- ngModel also provides the two-way data binding
- The Validations are configured in the template via directives

Template-driven forms are

- Contains little code in the component class 
- Easier to set up 
- While they are
    - Difficult to add controls dynamically
    - Unit testing is a challenge

To work with Template-driven forms, we must import the FormsModule. We usually import it in root module or in a shared module. The FormsModule contains all the form directives and constructs for working with forms
Open the app.module.ts and add the import { FormsModule } from '@angular/forms'; to it.
And also add the FormsModule to the imports metadata property array

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';        //import FormsModule
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule                    //Add in Imports Array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## HTML Form
The first task is to build the template. The following is a regular HTML form. We enclose it in a <form> tag. We have included two text input (FirstName & LastName), a email (email), a radio button (gender), a checkbox (isMarried), and a select list (country). These are form elements.

```
<form>
  <p>
    <label for="firstname">First Name</label>
    <input type="text" id="firstname" name="firstname">
  </p>
 
  <p>
    <label for="lastname">Last Name</label>
    <input type="text" id="lastname" name="lastname">
  </p>
 
  <p>
    <label for="email">Email </label>
    <input type="text" id="email" name="email">
  </p>
 
  <p>
    <label for="gender">Geneder</label>
    <input type="radio" value="male" id="gender" name="gender"> Male
    <input type="radio" value="female" id="gender" name="gender"> Female
  </p>
 
  <p>
    <label for="isMarried">Married</label>
    <input type="checkbox" id="isMarried" name="isMarried">
  </p>
 
  <p>
  <label for="country">country </label>
  <select name="country" id="country">
    <option selected="" value=""></option>
    <option [ngValue]="c.id" *ngFor="let c of countryList">
      {{c.name}}
    </option>
  </select>
  </p>
 
  <p>
    <button type="submit">Submit</button>
  </p>
</form>
```

## Component Class

```
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template driven forms';
 
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
}
 
export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
```

## ngForm
Once, we have a form with few form elements, the angular automatically converts it into a Template-driven form. This is done by the ngForm directive.

The ngForm directive is what makes the Angular template-driven forms work. But we do not need to add it explicitly. Angular adds it automatically

When we include FormsModule, the Angular is going to look out for any <form> tag in our HTML template. Angular does this via ngForm directive. ngForm directive automatically detects the <form> tag and automatically binds to it. You do not have to do anything on your part to invoke and bind the ngForm directive.

The ngForm does the following
- Binds itself to the <Form> directive
- Creates a top-level FormGroup instance
- CreatesFormControl instance for each of child control, which has ngModel directive.
- CreatesFormGroup instance for each of the  NgModelGroup directive.
We can export the ngForm instance into a local template variable using ngForm as the key (ex: #contactForm="ngForm"). This allows us to access the many properties and methods of ngForm using the template variable contactForm


## FormControl
The FormControl is the basic building block of the Angular Forms. It represents a single input field in an Angular form. The Angular Forms Module binds the input element to a FormControl. We use the FormControl instance to track the value, user interaction and validation status of an individual form element. Each individual Form element is a FormControl

We have six form elements in our HTML template. They are firstName, lastname, email, gender, isMarried & country. We need to bind them to FormControl instance. We do this by using the ngModel directive. Add the ngModel directive to each control as shown below.

``` 
<input type="text" name="firstname" ngModel>
```

ngModel will use the name attribute to create the FormControl instance for each of the Form field it is attached.

## Submit Form
Now have the template ready, except for the final piece i.e submitting data to the component.

We use the ngSubmit event, to submit the form data to the component class. We use the event binding (parentheses) to bind ngSubmit to OnSubmit method in the component class. When the user clicks on the submit button, the ngSubmit event will fire

```
<form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
```

We are passing the local template variable contactForm in onSubmit method. contactForm holds the reference to the ngForm directive. We can use this in our component class to extract the data from the form fields.

## Receive Form Data
We need to receive the data in component class from our form. To do this we need to create the onSubmit method in our component class. The submit method receives the reference to the ngForm directive, which we named is as contactForm. The contactForm exposes the value method which returns the form fields as a Json object.

 ```
 onSubmit(contactForm) {
    console.log(contactForm.value);
  }
 ``` 
 
 Angular Template-driven Forms is simpler compared to the reactive forms. The FormsModule is imported first. Then we create the HTML form. The Angular detects the <form> tag and converts the form to the Angular Form. ngModel directive added to each form element, which converts them to FormControl. Finally, submit event is subscribed via event binding.