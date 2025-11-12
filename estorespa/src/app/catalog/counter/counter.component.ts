import { Component, Input, Output ,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-counter',
  standalone:true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input() count: number | undefined;  // Allow undefined


    @Output() update=new EventEmitter();

    increment(){ 
      this.count = (this.count || 0) + 1;
      this.update.emit({count:this.count});
    }
    decrement(){
      this.count = (this.count || 0) - 1;
      this.update.emit({count:this.count});
    }
}
