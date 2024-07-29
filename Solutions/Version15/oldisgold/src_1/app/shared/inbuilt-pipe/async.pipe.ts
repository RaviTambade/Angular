import { Component } from "@angular/core";

@Component({
    selector: 'async-pipe',
    template: `
                <div>
                <h4>Simple Asynchronouse  Pipe Demo</h4>
                <p ngNonBindable>{{ promise }}</p>
                <p>{{ promise | async }}</p>
                </div>
    `
    })
   export  class AsyncPipeComponent {
    promise: Promise<any>;
    constructor() {
         this.promise = this.getPromise(); 
    }
    getPromise() {
        return new Promise((resolve, reject) => {
                         setTimeout(() => resolve(" Finally Promise complete!"), 3000);
                });
    }
    }

