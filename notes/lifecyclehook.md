# Angular Lifecycle Hooks

## Why do we need lifecycle hooks?
Modern front-end frameworks move the application from state to state. Data fuels these updates. These technologies interact with the data which in turn transitions the state. With every state change, there are many specific moments where certain assets become available.

At one instance the template might be ready, in another data will have finished uploading. Coding for each instance requires a means of detection. Lifecycle hooks answer this need. Modern front-end frameworks package themselves with a variety of lifecycle hooks. Angular is no exception

# Lifecycle Hooks

Lifecycle hooks are timed methods. They differ in when and why they execute. Change detection triggers these methods. They execute depending on the conditions of the current cycle. Angular runs change detection constantly on its data. Lifecycle hooks help manage its effects.

An important aspect of these hooks is their order of execution. It never deviates. They execute based on a predictable series of load events produced from a detection cycle. This makes them predictable.

Some assets are only available after a certain hook executes. Of course, a hook only execute under certain conditions set in the current change detection cycle.

<img src="/images/hooks-in-sequence.png"/>


ngOnChanges
ngOnChanges triggers following the modification of @Input bound class members. Data bound by the @Input() decorator come from an external source. When the external source alters that data in a detectable manner, it passes through the @Input property again.

With this update, ngOnChanges immediately fires. It also fires upon initialization of input data. The hook receives one optional parameter of type SimpleChanges. This value contains information on the changed input-bound properties.

```
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <h3>Child Component</h3>
  <p>TICKS: {{ lifecycleTicks }}</p>
  <p>DATA: {{ data }}</p>
  `
})
export class ChildComponent implements OnChanges {
  @Input() data: string;
  lifecycleTicks: number = 0;

  ngOnChanges() {
    this.lifecycleTicks++;
  }
}

@Component({
  selector: 'app-parent',
  template: `
  <h1>ngOnChanges Example</h1>
  <app-child [data]="arbitraryData"></app-child>
  `
})
export class ParentComponent {
  arbitraryData: string = 'initial';

  constructor() {
    setTimeout(() => {
      this.arbitraryData = 'final';
    }, 5000);
  }
}

```

 ParentComponent binds input data to the ChildComponent. The component receives this data through its @Input property. ngOnChanges fires. After five seconds, the setTimeout callback triggers. ParentComponent mutates the data source of ChildComponent’s input-bound property. The new data flows through the input property. ngOnChanges fires yet again.



 ngOnInit
ngOnInit fires once upon initialization of a component’s input-bound (@Input) properties. The next example will look similar to the last one. The hook does not fire as ChildComponent receives the input data. Rather, it fires right after the data renders to the ChildComponent template.

```
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <h3>Child Component</h3>
  <p>TICKS: {{ lifecycleTicks }}</p>
  <p>DATA: {{ data }}</p>
  `
})
export class ChildComponent implements OnInit {
  @Input() data: string;
  lifecycleTicks: number = 0;

  ngOnInit() {
    this.lifecycleTicks++;
  }
}

@Component({
  selector: 'app-parent',
  template: `
  <h1>ngOnInit Example</h1>
  <app-child [data]="arbitraryData"></app-child>
  `
})
export class ParentComponent {
  arbitraryData: string = 'initial';

  constructor() {
    setTimeout(() => {
      this.arbitraryData = 'final';
    }, 5000);
  }
}

```
ParentComponent binds input data to the ChildComponent. ChildComponent receives this data through its @Input property. The data renders to the template. ngOnInit fires. After five seconds, the setTimeout callback triggers. ParentComponent mutates the data source of ChildComponent’s input-bound property. ngOnInit DOES NOT FIRE.

ngOnInit is a one-and-done hook. Initialization is its only concern.


ngDoCheck
ngDoCheck fires with every change detection cycle. Angular runs change detection frequently. Performing any action will cause it to cycle. ngDoCheck fires with these cycles. Use it with caution. It can create performance issues when implemented incorrectly.

ngDoCheck lets developers check their data manually. They can trigger a new application date conditionally. In conjunction with ChangeDetectorRef, developers can create their own checks for change detection.

```
import { Component, DoCheck, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
  <h1>ngDoCheck Example</h1>
  <p>DATA: {{ data[data.length - 1] }}</p>
  `
})
export class ExampleComponent implements DoCheck {
  lifecycleTicks: number = 0;
  oldTheData: string;
  data: string[] = ['initial'];

  constructor(private changeDetector: ChangeDetectorRef) {
    this.changeDetector.detach(); // lets the class perform its own change detection

    setTimeout(() => {
      this.oldTheData = 'final'; // intentional error
      this.data.push('intermediate');
    }, 3000);

    setTimeout(() => {
      this.data.push('final');
      this.changeDetector.markForCheck();
    }, 6000);
  }

  ngDoCheck() {
    console.log(++this.lifecycleTicks);

    if (this.data[this.data.length - 1] !== this.oldTheData) {
      this.changeDetector.detectChanges();
    }
  }
}

```

Pay attention to the console versus the display. The data progress up to ‘intermediate’ before freezing. Three rounds of change detection occur over this period as indicated in the console. One more round of change detection occurs as ‘final’ gets pushed to the end of this.data. One last round of change detection then occurs. The evaluation of the if statement determines no updates to the view are necessary.


Class instantiates after two rounds of change detection. Class constructor initiates setTimeout twice. After three seconds, the first setTimeout triggers change detection. ngDoCheck marks the display for an update. Three seconds later, the second setTimeout triggers change detection. No view updates needed according to the evaluation of ngDoCheck.



ngAfterContentInit
ngAfterContentInit fires after the component’s content DOM initializes (loads for the first time). Waiting on @ContentChild(ren) queries is the hook’s primary use-case.

@ContentChild(ren) queries yield element references for the content DOM. As such, they are not available until after the content DOM loads. Hence why ngAfterContentInit and its counterpart ngAfterContentChecked are used.


```

import { Component, ContentChild, AfterContentInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-c',
  template: `
  <p>I am C.</p>
  <p>Hello World!</p>
  `
})
export class CComponent { }

@Component({
  selector: 'app-b',
  template: `
  <p>I am B.</p>
  <ng-content></ng-content>
  `
})
export class BComponent implements AfterContentInit {
  @ContentChild("BHeader", { read: ElementRef }) hRef: ElementRef;
  @ContentChild(CComponent, { read: ElementRef }) cRef: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterContentInit() {
    this.renderer.setStyle(this.hRef.nativeElement, 'background-color', 'yellow')

    this.renderer.setStyle(this.cRef.nativeElement.children.item(0), 'background-color', 'pink');
    this.renderer.setStyle(this.cRef.nativeElement.children.item(1), 'background-color', 'red');
  }
}

@Component({
  selector: 'app-a',
  template: `
  <h1>ngAfterContentInit Example</h1>
  <p>I am A.</p>
  <app-b>
    <h3 #BHeader>BComponent Content DOM</h3>
    <app-c></app-c>
  </app-b>
  `
})
export class AComponent { }

```

The @ContentChild query results are available from ngAfterContentInit. Renderer2 updates the content DOM of BComponent containing a h3 tag and CComponent. 

Rendering starts with AComponent. For it to finish, AComponent must render BComponent. BComponent projects content nested in its element through the <ng-content></ng-content> element. CComponent is part of the projected content. The projected content finishes rendering. ngAfterContentInit fires. BComponent finishes rendering. AComponent finishes rendering. ngAfterContentInit will not fire again.

ngAfterContentChecked
ngAfterContentChecked fires after every cycle of change detection targeting the content DOM. This lets developers facilitate how the content DOM reacts to change detection. ngAfterContentChecked can fire frequently and cause performance issues if poorly implemented.

ngAfterContentChecked fires during a component’s initialization stages too. It comes right after ngAfterContentInit.

```
import { Component, ContentChild, AfterContentChecked, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-c',
  template: `
  <p>I am C.</p>
  <p>Hello World!</p>
  `
})
export class CComponent { }

@Component({
  selector: 'app-b',
  template: `
  <p>I am B.</p>
  <button (click)="$event">CLICK</button>
  <ng-content></ng-content>
  `
})
export class BComponent implements AfterContentChecked {
  @ContentChild("BHeader", { read: ElementRef }) hRef: ElementRef;
  @ContentChild(CComponent, { read: ElementRef }) cRef: ElementRef;

  constructor(private renderer: Renderer2) { }

  randomRGB(): string {
    return `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})`;
  }

  ngAfterContentChecked() {
    this.renderer.setStyle(this.hRef.nativeElement, 'background-color', this.randomRGB());
    this.renderer.setStyle(this.cRef.nativeElement.children.item(0), 'background-color', this.randomRGB());
    this.renderer.setStyle(this.cRef.nativeElement.children.item(1), 'background-color', this.randomRGB());
  }
}

@Component({
  selector: 'app-a',
  template: `
  <h1>ngAfterContentChecked Example</h1>
  <p>I am A.</p>
  <app-b>
    <h3 #BHeader>BComponent Content DOM</h3>
    <app-c></app-c>
  </app-b>
  `
})
export class AComponent { }
```

This hardly differs from ngAfterContentInit. A mere <button></button> was added to BComponent. Clicking it causes a change detection loop. This activates the hook as indicated by the randomization of background-color.

Rendering starts with AComponent. For it to finish, AComponent must render BComponent. BComponent projects content nested in its element through the <ng-content></ng-content> element. CComponent is part of the projected content. The projected content finishes rendering. ngAfterContentChecked fires. BComponent finishes rendering. AComponent finishes rendering. ngAfterContentChecked may fire again through change detection.

ngAfterViewInit
ngAfterViewInit fires once after the view DOM finishes initializing. The view always loads right after the content. ngAfterViewInit waits on @ViewChild(ren) queries to resolve. These elements are queried from within the same view of the component.

In the example below, BComponent’s h3 header is queried. ngAfterViewInit executes as soon as the query’s results are available.

```
import { Component, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-c',
  template: `
  <p>I am C.</p>
  <p>Hello World!</p>
  `
})
export class CComponent { }

@Component({
  selector: 'app-b',
  template: `
  <p #BStatement>I am B.</p>
  <ng-content></ng-content>
  `
})
export class BComponent implements AfterViewInit {
  @ViewChild("BStatement", { read: ElementRef }) pStmt: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderer.setStyle(this.pStmt.nativeElement, 'background-color', 'yellow');
  }
}

@Component({
  selector: 'app-a',
  template: `
  <h1>ngAfterViewInit Example</h1>
  <p>I am A.</p>
  <app-b>
    <h3>BComponent Content DOM</h3>
    <app-c></app-c>
  </app-b>
  `
})
export class AComponent { }

```

Renderer2 changes the background color of BComponent’s header. This indicates the view element was successfully queried thanks to ngAfterViewInit.

 Rendering starts with AComponent. For it to finish, AComponent must render BComponent. BComponent projects content nested in its element through the <ng-content></ng-content> element. CComponent is part of the projected content. The projected content finishes rendering. BComponent finishes rendering. ngAfterViewInit fires. AComponent finishes rendering. ngAfterViewInit will not fire again.

 