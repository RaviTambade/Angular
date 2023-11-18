Angular provides two ways to work with forms: template-driven forms and reactive forms (also known as model-driven forms). 

Template-driven forms let us add directives to bind input values to reactive values and also to add form validation.

Reactive forms work by letting us create form objects and link them to forms, which lets us add validation. It binds input values to properties in reactive form objects so we can access input values and validate them.


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