import { Component } from "@angular/core";

@Component({
    selector: 'async-pipe',
    template: `<div>
                <h4>Simple Asynchronouse  Pipe Demo</h4>
                <p>{{ data|async}}</p>
                </div>`
    })
   export  class AsyncPipeComponent {
        
    data: Promise<any>;
        
        constructor() {
            this.data = this.getData(); 
        }
        
        getData() {
                    return new Promise((resolve, reject) => 
                        {
                            setTimeout(() => resolve("Finally Data is arrived!"), 3000);
                        }); 
        }
   }