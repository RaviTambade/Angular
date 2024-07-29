
## Observables
Streams so far are just a concept, an idea.

We link streams together using operators, so in in our previous example the add function is an operation, specifically it’s an operation which combines two streams to create a third.

Observables is a new primitive type which acts as a blueprint for how we want to create streams, subscribe to them, react to new values, and combine streams together to build new ones.

It’s currently in discussion whether or not Observables make it into the ES7 version of JavaScript.

We are still trying to roll out ES6 so even if it makes it, it will be many years before ES7 becomes something we can code with natively.

Until then we need to use a library that gives us the Observable primitive and that’s where RxJS comes in.


## RxJS
RxJS stands for *R*eactive E*x*tensions for *J*ava*S*cript, and it’s a library that gives us an implementation of Observables for JavaScript.

RxJS is the JavaScript implementation of the ReactiveX API, which can be found here.

The API has multiple implementations in different languages, so if you learn RxJS you’ll know how to write RxJAVA, Rx.NET, RxPY etc…​


### Using RxJS with ES6
There are a couple of ways that you can add the RxJS library to your project.

With npm you can use the following command:

```
npm install rxjs
```

The RxJS library also provides a number of Observable creation functions and operators (to build on the observables foundation) that can be added to your application via import statements like so:


```
import { map, filter, take } from "rxjs/operators";
import { interval, pipe } from "rxjs";

```

This observable is cold, that means it’s not currently pushing out numbers.

The observable will become hot and start pushing numbers onto it’s first stream, when it gets it’s first subscriber, like so:

```
import { interval } from 'rxjs';

const numbers = interval(1000);

numbers.subscribe(value => console.log("Subscriber: " + value));

```

By calling subscribe onto an observable it:

Turns the observable hot so it starts producing.

Lets us pass in a callback function so we react when anything is pushed onto the final stream in the observable chain.

Our application now starts printing out:

```

Subscriber: 0
Subscriber: 1
Subscriber: 2
Subscriber: 3
Subscriber: 4
Subscriber: 5
Subscriber: 6
Subscriber: 7
Subscriber: 8
Subscriber: 9
Subscriber: 10

```

## take
But it just keeps on printing, forever, we just want the first 3 items so we use another operator called take.

We pass to that operator the number of items we want to take from the first stream. It creates a second stream and only pushes onto it the number of items we’ve requested, like so:


```
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const numbers = interval(1000);
const takeThree = numbers.pipe(take(3));

takeThree.subscribe(value => console.log("Subscriber: " + value));
```

This now prints out the below, and then stops:

```
Subscriber: 0
Subscriber: 1
Subscriber: 2
```


map
Finally, I want to add another operator called map, this takes as input the output stream from take, convert each value to a date and pushes that out onto a third stream like so:

```
import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

const numbers = interval(1000);
const takeThree = numbers.pipe(
  take(3),
  map((v) => Date.now())
);

takeThree.subscribe(value => console.log("Subscriber: " + value));
```

This now prints out the time in milliseconds, every second, like so:
```
Subscriber: 1475506794287
Subscriber: 1475506795286
Subscriber: 1475506796285
```


You can find a list of the operators by looking at the official documentation <a href="http://reactivex.io/rxjs/manual/overview.html#operators"/>here.



Observables are a blueprint for creating streams and plumbing them together with operators to create observable chains.
RxJS is a library that lets us create and work with observables.
We can subscribe to an observable chain and get a callback every time something is pushed onto the last stream.
By default observables are cold and only become hot when they get their first subscriber.
Learning RxJS involves understanding all the operators that are available and how to use them together.
We use marble diagrams to help explain how an operator works.
In this lecture we used RxJS in isolation, in the next lecture we will look at how to use RxJS in Angular.



## Angular Observables:
There are a few places in Angular where reactive programming and observables are in use.

### EventEmitter
Under the hood this works via Observables.

### HTTP
We’ve not covered this yet but HTTP requests in Angular are all handled via Observables.

### Forms
Reactive forms in Angular expose an observable, a stream of all the input fields in the form combined.