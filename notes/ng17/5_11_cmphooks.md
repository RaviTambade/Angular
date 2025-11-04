## 🎓 **Angular 17 Component Life Cycle Events**

### 🎬 **Scene 1: The Birth of a Component – A Movie Analogy**

Imagine a component is like an **actor on a movie set**.

It doesn't just appear on the screen **suddenly** — it goes through a whole journey:

1. **Casting (Created in memory)**
2. **Makeup & Costume (Inputs get values)**
3. **Lights On (View loads on screen)**
4. **Camera Rolling (User interacts)**
5. **Pack-Up (Destroyed from memory)**

This exact journey is what Angular 💡 calls:

> ✅ **Component Life Cycle Events**

### ⚙️ **Scene 2: List of Life Cycle Hooks in Angular 17**

| Life Cycle Event          | When it Happens                                           |
| ------------------------- | --------------------------------------------------------- |
| `constructor()`           | Component is created in memory                            |
| `ngOnChanges()`           | When @Input() values change                               |
| `ngOnInit()`              | Called once → after first data binding                    |
| `ngDoCheck()`             | Runs during every change detection cycle                  |
| `ngAfterContentInit()`    | First `<ng-content>` projected & checked                  |
| `ngAfterContentChecked()` | After every check of projected content                    |
| `ngAfterViewInit()`       | When component's view (HTML + child components) is loaded |
| `ngAfterViewChecked()`    | After view is checked by change detection                 |
| `ngOnDestroy()`           | Right before component is destroyed (cleanup here)        |

### 🛠 **Scene 3: Example Code — Implementing All Hooks in Angular 17**

📁 **lifecycle-demo.component.ts**

```ts
import { Component, Input, OnChanges, OnInit, DoCheck,
         AfterContentInit, AfterContentChecked,
         AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  standalone: true,
  template: `
    <h2>Lifecycle Demo Component</h2>
    <p>@Input Value: {{ data }}</p>
  `
})
export class LifecycleDemoComponent implements 
  OnChanges, OnInit, DoCheck, 
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() data: any;

  constructor() {
    console.log('constructor() → Component created in memory');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges() → Input property changed:', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit() → Component initialized (good place for HTTP calls)');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck() → Change detection running...');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() → Content projected into component');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() → Projected content checked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() → View (HTML + child components) loaded');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() → View checked by change detection');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy() → Cleanup before component is destroyed');
  }
}
```

### 🎥 **Scene 4: How to Use It in a Parent Component**

```ts
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [LifecycleDemoComponent],
  template: `
    <button (click)="toggle()">Toggle Component</button>
    <button (click)="change()">Change @Input Value</button>
    <app-lifecycle-demo *ngIf="show" [data]="inputData"></app-lifecycle-demo>
  `
})
export class ParentComponent {
  show = true;
  inputData = 'Hello';

  toggle() { this.show = !this.show; }
  change() { this.inputData = 'Updated at ' + new Date().toLocaleTimeString(); }
}
```

---

### 🧠 **Scene 5: Best Practices from a Mentor**

| Hook            | Use Case                                                             |
| --------------- | -------------------------------------------------------------------- |
| `constructor()` | Do not call APIs here; only inject dependencies                      |
| `ngOnInit()`    | ✅ Best place to call APIs, initialize data                           |
| `ngOnChanges()` | Works when @Input() receives new values                              |
| `ngOnDestroy()` | ✅ Unsubscribe from Observables, remove event listeners, clear timers |

### 🎯 **Final Mentor Tip**

> *"Understanding life cycle hooks is like knowing when an actor enters, performs, and exits. If you know the timing — your component becomes predictable, stable, and professional."*
