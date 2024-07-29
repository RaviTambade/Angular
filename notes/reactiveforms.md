# Angular Forms

Angular provides two ways to work with forms: template-driven forms and reactive forms (also known as model-driven forms). 
- Template-driven forms let us add directives to bind input values to reactive values and also to add form validation.
- Reactive forms work by letting us create form objects and link them to forms, which lets us add validation. It binds input values to properties in reactive form objects so we can access input values and validate them.

## What are Reactive Forms?
Reactive forms objects are objects that provide us with synchronous access to form value data. They’re built from observables, so input values and the data value that they bind to are synchronous. Each change in a form state returns a new state.

This is different from template-driven forms since changes are asynchronous in template-driven forms.

The synchronous nature of reactive forms makes testing reactive forms easier than template-driven forms


## When Do We Use Reactive Forms?
- Reactive forms should be used in most Angular apps.

- The only benefit that template-driven forms have over reactive forms is that the syntax of template-driven forms is closer to Angular.js forms. Therefore, using template-driven forms would make migrating from Angular.js apps to Angular easier.
- Other than that, there isn’t much benefit to using template-driven forms in our Angular apps. So unless we are migrating Angular.js apps to Angular, we should stick with reactive forms.
- The immutability and the predictability because of the synchronous updates of reactive forms makes development much easier. In addition, reactive forms let us define the form’s structure explicitly so it’s easy to understand and better for scalability

Here are some of the advantages of reactive forms:
- Using custom validators
- Changing validation dynamically
- Dynamically adding form fields

## What is angular form validation?

<p>Angular form validation is an integral technical process that verifies if any input provided by a user into a web-form is correct and complete. You can manage validation in a template-driven approach or with Angular reactive forms. Based on what is entered, the form will either allow users to proceed or will display a specific error message to help the user know where they went wrong with their data input.</p>

<p>Depending on which validator failed, the on-screen error message gives feedback, indicating what is wrong and what exactly needs to be filled in or re-entered as data. In general, apps use forms to allow users to perform data-entry tasks like signing up, logging in, updating online profiles, submitting sensitive information, and more.</p>

<p>Angular runs form validation every time the value of a form input is changed and to confirm if data inputs filled in a web-form by a user are accurate and complete. To do that properly, Angular calls a list of validators which are run on every change that occurs.</p>

<p>Validation of user-input from the UI can be done either with template-driven forms or with Angular reactive forms. Both of these forms are built on the following base classes:</p>

- FormControl
- FormGroup
- FormArray
- ControlValueAccessor


To work with reactive-driven forms, we must import the FormsModule. We usually import it in root module or in a shared module. The ReactiveFormsModule contains all the form directives and constructs for working with forms
Open the app.module.ts and add the import { ReactiveFormsModule } from '@angular/forms'; to it.
And also add the FormsModule to the imports metadata property array

```
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## HTML Form
The first task is to build the template. The following is a regular HTML form. We enclose it in a <form> tag. We have included two text input (FirstName & LastName), a email (email), a radio button (gender), a checkbox (isMarried), and a select list (country). These are form elements.

```
  <form [formGroup]="signUpForm" (ngSubmit)="onSubmit()">
  <label for="first-name">First Name: </label>
  <input id="first-name" type="text" formControlName="firstName" />

  <div
    *ngIf="signUpForm.controls.firstName.invalid && (signUpForm.controls.firstName.dirty || signUpForm.controls.firstName.touched)"
  >
    <div *ngIf="signUpForm.controls.firstName.errors?.required">
      First name is required.
    </div>
    <div *ngIf="signUpForm.controls.firstName.errors?.minlength">
      First name must be at least 5 characters long.
    </div>
  </div>
  <br />

  <label for="last-name">Last Name: </label>
  <input id="last-name" type="text" formControlName="lastName" />

  <div
    *ngIf="signUpForm.controls.lastName.invalid && (signUpForm.controls.firstName.dirty || signUpForm.controls.lastName.touched)"
  >
    <div *ngIf="signUpForm.controls.lastName.errors?.required">
      Last name is required.
    </div>
    <div *ngIf="signUpForm.controls.lastName.errors?.minlength">
      Last name must be at least 5 characters long.
    </div>
  </div>
  <br />

  <div formGroupName="address">
    <h2>Address</h2>

    <label for="street">Street: </label>
    <input id="street" type="text" formControlName="street" />
    <br />

    <div
      *ngIf="signUpForm.controls.address.controls.street.invalid && (signUpForm.controls.address.controls.street.dirty || signUpForm.controls.address.controls.street.touched)"
    >
      <div *ngIf="signUpForm.controls.address.controls.street.errors?.required">
        Last name is required.
      </div>
      <div
        *ngIf="signUpForm.controls.address.controls.street.errors?.minlength"
      >
        Last name must be at least 5 characters long.
      </div>
    </div>

    <label for="city">City: </label>
    <input id="city" type="text" formControlName="city" />
    <br />

    <label for="region">Region: </label>
    <input id="region" type="text" formControlName="region" />
    <br />

    <button type="button" (click)="updateProfile()">Update Profile</button>
    <button type="submit" [disabled]="!signUpForm.valid">Submit Profile</button>
  </div>
</form>

```
To associate the form group object to an HTML form, we set the [formGroup] attribute to the name of the FormGroup instance we defined in our component.

We set (ngSubmit) to onSubmit() to call onSubmit when we submit the form.

And we set the formControlName attribute to the name of the FormControl instance to associate the form control object to the form field. This will bind the input value to the form control object’s value and also lets us add validation by checking properties in the form control object.

To get the validation states from form control objects, we use the signUpForm.controls property. We use signUpForm.controls.firstName to get the validation state of the firstName form control. And we do the same with lastName.

We get the validation errors from the firstName form control with signUpForm.controls.firstName.errors.

To check whether the whole form is valid, we use the signUpForm.valid property.

To associate a group of fields to a form group, we set the formGroupName attribute as we did with the div to associate the fields in the form group to the address form group.

To get the validation state of nested fields, we keep using the controls property.

We get the street field with signUpForm.controls.address.controls.street. And the validation states are in that object.

With reactive forms, we can bind input values to component property values and add validation easily by creating a single object. Also, we can update input values with that object with patchValue. And we associate HTML input fields with the form control objects with a few attributes.

All these operations are synchronous, so the workflow is predictable.

Validators are explicitly added to form controls so we can read and change validation of each field easily. And Angular provides many validators for reactive forms so we can use many of them instead of writing our own validation logic. Nested form fields are also easy to add since we can nest form groups.

Therefore, there is not much of a use case for using template-driven forms or creating our own form validation solutions.



## Component Class

```
import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  signUpForm = new FormGroup({
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    address: new FormGroup({
      street: new FormControl("", [
        Validators.required,
        Validators.minLength(5)
      ]),
      city: new FormControl("", [Validators.required, Validators.minLength(5)]),
      region: new FormControl("", [Validators.required])
    })
  });

  updateProfile() {
    this.signUpForm.patchValue({
      firstName: "Jane",
      lastName: "Smith",
      address: {
        street: "123 1st Street"
      }
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
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


## Angular reactive form validation

<p>Reactive forms deliver a model-driven approach to managing form inputs, the values of which change with respect to time. Because reactive forms are built on a component class, Angular reactive form validation happens by adding validator functions directly to the form control model in the component class.</p>

<p>When the value is valid, validators return null. If the value is invalid, validators generate a set of errors, and you can display a specific error message on the screen.</p>

<p>There are built-in validators such as required, minlength, maxlength etc. However, you can also create your own validators.</p>


## Angular form group validation
<p>Form groups are basically a group of multiple related FormControlls that enable you to access the state of the encapsulated controls. Angular from group validation helps you track the value of group controls or a form as well as to track validation of the state of the form control. FormGroup is used with FormControl.</p>

### Why would you need Angular form custom validation?
<p>With custom validators you can address different functionality and ensure the values in a form meet certain criteria, which sometimes isn’t possible to do when using built-in validators only. If you want to validate a phone number or a specific password pattern, it’s best to create custom validator and rely on Angular form custom validation.</p>

<p>With reactive forms, generating such is just as easy as writing a new function. And for model-driven forms (such is the reactive form in Angular) we create custom validation functions and send them to the FormControl constructor.</p>

Angular has form validation built in as a feature. This lets us add forms with validation easily. It comes with two types of forms—reactive and template-driven forms.

Template-driven forms let us add directives to bind input values to reactive values and also to add form validation.

Reactive forms work by letting us create form objects and link them to forms, which lets us add validation. It binds input values to properties in reactive form objects so we can access input values and validate them. It also lets us add form validation in an explicit manner and we can use the provided validators to add validations to fields.

From groups let us organize forms fields into groups and we can nest form groups easily. We can also get and set form values easily in a synchronous manner with reactive forms.

Therefore, reactive forms are better than template-driven forms or creating our own form field binding and validation solutions in almost all cases.