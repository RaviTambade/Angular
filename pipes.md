
# Angualr Pipes

Pipes are simply a function that we can directly apply on any expression/value in a template to transform it into some other value.

The value on which we are applying the pipe is the input for our pipe function. The value returned from that function will be replaced in place original value.

## Built-in pipes in Angular
Angular comes with many built-in pipes. Some of them include:

- uppercase (to convert string in upper case);
- lowercase (to convert string in upper case);
- date (to format the date into different types);
- json (to convert a value or object into JSON formatted string).


## Examples of pipes in use:

<p>{{ 'Akash' | uppercase }}</p>
<p>{{ 'Pragati' | lowercase }}</p>
<p>{{ { name: 'Vedant' } | json }}</p>

## Passing arguments to pipes
Pipes like date, currency will take arguments for pipe function, to pass argument follow the pipe name (currency) with a colon (:) and the parameter value (‘EUR’).


For example:
```
<p>{{ 100 | currency: 'INR' }}</p>
<p>{{ currentDate | date: 'dd/MM/yyyy' }}</p>
```

## Chaining multiple pipes
To chain multiple pipes together, we just have to use a pipe operator (|) between different pipe names, see the below code for example

```
<p>{{ currentDate | date | uppercase}}</p>
```

## Types of pipes
Pipes can be classified into:

1. Pure Pipes
2. Impure Pipes


### 1. Pure Pipes
A pure pipe is only called when Angular detects a change in the value or the parameters passed to a pipe.

### 2. Impure Pipes
An impure pipe is called for every change detection cycle no matter whether the value or parameter(s) changes.


## Custom pipes

To create our own custom pipe, follow the below steps:

- Create a class and apply @ Pipe decorator (without the space between @ and Pipe) to it and pass an object to the decorator which contains two properties:
    - name (name of the pipe)
    - pure (the optional property which determines the type of pipe, by default it is true, we can provide value as false to make pipe impure).
- Register the class in the respective module declarations array.
- Implement the PipeTransform interface in your custom pipe class to perform the transformation.
- PipeTransform interface has a function called transform which we have to implement in our class, transform is the function that is going to have our logic to transform values.
- the first parameter of the transform function holds the value on which the is pipe is applied and the remaining parameters are the values which is passed while invoking the pipe (using : operator).
after performing transformation as per our logic we have to return the transformed value.
- Now we can apply the pipe in our template by using the name of our pipe with the pipe (|) operator


```
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'sellable' })
export class SellingflowersPipe implements PipeTransform {
  transform(allfloweres: any[]) {
    return allfloweres.filter(flower => (flower.canSell == true));
  }
}
```


You can use custom pipe in your componenet as shown below:

```
<h1> flowers available for selling</h1>
<div *ngFor="let flower of flowers | sellable">
<p>{{flower.title| uppercase}} {{flower.canSell}} {{flower.unitPrice}}</p>  
</div>
```