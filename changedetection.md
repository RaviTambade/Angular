# Change Detection
Change detection is the ability for Angular to recognize when a component’s data has changed. When Angular detects the change, it updates the view immediately (without any delays). The change detection mechanism keeps any underlying views in sync with their corresponding models. 

## How change detection works with Angular ?

Angular is built to perform periodic checks as part of its change detection. It does this with the support of a JavaScript library called Zone.js which overrides and expands on the browser's built-in change detection triggers. Angular “patches over” browser event detection, and can synchronize views and models in response to any of the following:

- DOM events like key up, click, and mouse over
- Timers like set Interval and set Timeout
- AJAX HTTP requests.

# Angular change detection cycle

Angular application is  built from tree of components. Let us check how Angular keeps track of changes on the tree is through a detection cycle:

1. Angular creates a change detector class for each component in the app tree
2. A change is triggered
3. Angular walks down the tree of unique change detector classes to determine if any have a change noted on them
4. If Angular gets the report from a change detector class, it instructs the corresponding component to re-render, and then update the DOM accordingly
Angular checks for changes, running through the change detection cycle, each time there is a change detected (as well as periodically). The cycle itself always follows the tree structure in sequence from the root, through to the branches. Because it is a predictable sequence, you can be sure that component data only comes from a parent, and is then passed on to a child.

Angular Change Detection Strategy are the methods by which the updates to the component is tracked and component is triggered to Re-render. There are majorly 2 Change Detection Strategy in Angular. We can configure the Change Detection Strategy for the Component inside the Decorator.

1. Default Strategy
2. onPush Strategy

## Angular default change detection strategy
The default change detection strategy is another method available to Angular for walking the tree and confirming change. If Angular is set to use the default strategy, it runs the change detector each time that @Input() data is changed or modified. 

In other words, Angular checks the tree asking the question “has any value in the model changed at all?” Changing to the OnPush strategy introduces some efficiency. Angular only checks for changes when the @Input() data passed to it has a new reference, which is why defining reference types and understanding the concept was essential to define in the previous paragraphs.

### The Angular OnPush strategy
The introduction of this article said that Angular change detection with OnPush is more effective. Why is this the case? Because if you treat a reference type as an immutable object, the speed at which Angular can detect a change increases. When reference types are made immutable, the reference on the stack memory changes. When this happens, the logic involved becomes:

1. Has the stack reference changed for this reference type?
2. If yes, then only check all values on the heap
3. If no, do not put resources toward the change
4. Check the values on the heap memory – has the value changed?
5. If yes, sync up the views and models
6. If no, do not put resources forward

To use the OnPush strategy, you simply need to set the changeDetection property of the component’s @Component decorator to ChangeDetectionStrategy.OnPush.

Here’s an example:

```
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
    <p>{{ message }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloWorldComponent {
  message = 'Hello, World!';
}

```
It’s important to note that when using the OnPush strategy, you need to make sure that Angular is aware of any changes in the component’s data model.

This can be done by using the markForCheck method from the ChangeDetectorRef class.

```
import { ChangeDetectorRef } from '@angular/core';

constructor(private cd: ChangeDetectorRef) { }

ngOnInit() {
  // Do some work that changes data
  this.cd.markForCheck();
}
```
The ChangeDetectorRef class provides a way to interact with the change detection mechanism and manually trigger change detection.

You can mark a component or its ancestors for checking using the markForCheck method. Next time change detection runs, the view will reflect the new state of data.

### markForCheck() vs detectChanges()
Another method available on the change detector is detectChanges. You might be wondering, what is the difference between markForCheck and detectChanges.

The key difference between these is that detectChanges() triggers change detection, while markForCheck() doesn’t trigger change detection.

With detectChanges(), the change detection will run for the current component and all its children. This is a common fix to the infamous error Expression has changed after it was checked.

On the other hand, markForCheck() simply goes upwards from the current component to the root component and updates their view state to ChecksEnabled. The change detection for the component will happen in the future either as part of the current or next change detection cycle. The parent component views will also be checked even if they had detached change detectors. 


### Should I use onPush strategy?
If change detection is a bottle-neck in your component, go ahead and try onPush change detection strategy. This is a great way to fine-tune the performance of your application.

However, premature optimisation can have an adverse effect on your application.

If you use onPush strategy without a valid reason, the component code will be more complex, harder to test and more difficult to maintain.

Based on my experience, the default strategy will work just fine for most small to medium sized applications.


### Default vs OnPush change detection in Angular
OnPush strategy asks two questions instead of one, compared to the default strategy:

Default strategy logic:

1. Has any value in the model changed at all? If yes, work through memory to find the change.
OnPush strategy logic:

1. Has the reference information of the reference type changed?
2. If yes, then has the values in heap memory changed?

As an example of the OnPush strategy in action, one application built with Angular could have 30 elements. The goal is to find out if any of them have changed. In order for there to be an update to an immutable array, the reference to the array found in stack memory would have to change. This means, the initial check for changes can target the references in the array. This saves checking each of the 30 elements in heap memory.

