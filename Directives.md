# Angular Directive

The Angular directive helps us to manipulate the DOM. You can change the appearance, behavior, or layout of a DOM element using the Directives. They help you to extend HTML

There are three kinds of directives in Angular:
1. Component directives
2. Attribute directives
3. Structural directives

## 1.Component Directive
Component directive is used to specify the HTML templates. It has structure design and the working pattern of how the component should be processed, instantiated and used at runtime. It is the most commonly-used directive in any Angular project.

## 2.Attribute Directives
Attribute directive is used when we want to change the appearance or behavior of the DOM element. This directive can be used for handling events like click, scroll, on blur etc. We can also pass values along with attribute directive.

### ngModel
The ngModel directive is used the achieve the two-way data binding. We have covered ngModel directive in Data Binding in Angular Tutorial

### ngClass
The ngClass is used to add or remove the CSS classes from an HTML element. Using the ngClass one can create dynamic styles in HTML pages


```typescript
<div [ngClass]="'first second'">...</div>
```


### ngStyle
ngStyle is used to change the multiple style properties of our HTML elements. We can also bind these properties to values that can be updated by the user or our components.

```typescript
<div [ngStyle]="{'color': 'blue', 'font-size': '24px', 'font-weight': 'bold'}">
    some text
</div>
 ```
You can also build custom directives in Angular. The Process is to create a JavaScript class and apply the @Directive attribute to that class. You can write the desired behavior in the class.


## 3.Structural Directives
These are Angular directives that change the DOM layout by adding and removing DOM elements.

### ngFor

The ngFor is an Angular structural directive, which repeats a portion of the HTML template once per each item from an iterable list (Collection).

```typescript
<tr *ngFor="let customer of customers;">
    <td>{{customer.customerNo}}</td>
    <td>{{customer.name}}</td>
    <td>{{customer.address}}</td>
    <td>{{customer.city}}</td>
    <td>{{customer.state}}</td>
</tr>
```
### ngSwitch
The ngSwitch directive lets you add/remove HTML elements depending on a match expression. ngSwitch directive used along with ngSwitchCase and ngSwitchDefault

```typescript
<div [ngSwitch]="Switch_Expression"> 
    <div *ngSwitchCase="MatchExpression1”> First Template</div>
    <div *ngSwitchCase="MatchExpression2">Second template</div> 
    <div *ngSwitchCase="MatchExpression3">Third Template</div> 
    <div *ngSwitchCase="MatchExpression4">Third Template</div> 
    <div *ngSwitchDefault?>Default Template</div>
</div>
```

### ngIf
The ngIf Directives is used to add or remove HTML elements based on an expression. The expression must return a boolean value. If the expression is false then the element is removed, else the element is inserted.

```typescript
<div *ngIf="condition"> 
    This is shown if condition is true
</div>
```

Angular Directives are used to design reusable components and can be used across angular applications. The various different directives can be used in a DOM as per the requirement. Directives don’t have a View or a template associated with it instead they capture events and perform required action. Another limitation with Angular Directives is that you cannot use pipes with an angular directive.

### Custom Structural Directive -
The MyIf Directive is used to add or remove elements from DOM based on expression that must return boolean.
```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[myIf]' })
export class IfDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }

  @Input() set myIf(shouldAdd: boolean) {
    if (shouldAdd) {
      // If condition is true add template to DOM
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
     // Else remove template from DOM
      this.viewContainer.clear();
    }
  }
}
```

### Custom Attribute Directive

The `tflUnderline` directive  adds underline to html element on mouseenter and removes on mouseleave
```typescript
import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[tflUnderline]'
})
export class UnderlineDirective {
    constructor(private el: ElementRef,private renderer: Renderer2){}
    
    @HostListener('mouseenter') onMouseEnter() { this.hover(true); }
    @HostListener('mouseleave') onMouseLeave() { this.hover(false); }

    hover(shouldUnderline: boolean){
        console.log("hover effect");
        console.log("should underline :" +shouldUnderline);
        if(shouldUnderline){  
        
        this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
        } else {         
        this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
        }
    }
}

```




## Comparison between Angular directives vs components 

<p>The following are the major differences between Angular directives and components</p>
<table width="633">
<tbody>
<tr>
<td colspan="3" width="633">                                                           <strong> #1. Annotation</strong></td>
</tr>
<tr>
<td colspan="2" width="317"><strong>Angular Directive</strong></p>
<p>@Directive annotation is used in order to create a new Custom directive in the Angular Application</td>
<td width="317"><strong>Angular Component</strong></p>
<p>@Component annotation is used in Angular application in order to create a Component</td>
</tr>
<tr>
<td colspan="3" width="633">                                                            <strong>#2. View</strong></td>
</tr>
<tr>
<td width="312"><strong>Angular Directive</strong></p>
<p>Angular Directives do not hold on to any particular view instead they can be used in any existing DOM to add behavior as per requirement.</td>
<td colspan="2" width="322"><strong>Angular Component</strong></p>
<p>Inside the @Component annotation, a template field is used to provide a View of this particular Angular component</p>
<p>&nbsp;</p><div class='ai-viewports ai-viewport-2 ai-viewport-3 ai-insert-24-91247614' style='margin: 8px 0; clear: both;' data-insertion='prepend' data-selector='.ai-insert-24-91247614' data-insertion-no-dbg data-code='PGRpdiBjbGFzcz0nY29kZS1ibG9jayBjb2RlLWJsb2NrLTI0JyBzdHlsZT0nbWFyZ2luOiA4cHggMDsgY2xlYXI6IGJvdGg7Jz4KPGlucyBjbGFzcz0iYWRzYnlnb29nbGUiCiAgICAgc3R5bGU9ImRpc3BsYXk6YmxvY2s7IHRleHQtYWxpZ246Y2VudGVyOyIKICAgICBkYXRhLWFkLWxheW91dD0iaW4tYXJ0aWNsZSIKICAgICBkYXRhLWFkLWZvcm1hdD0iZmx1aWQiCiAgICAgZGF0YS1hZC1jbGllbnQ9ImNhLXB1Yi04MzQ5MDgzMjc2ODM5Nzg5IgogICAgIGRhdGEtYWQtc2xvdD0iNzcxMjkyMTg3NSI+PC9pbnM+CjxzY3JpcHQ+CiAgICAgKGFkc2J5Z29vZ2xlID0gd2luZG93LmFkc2J5Z29vZ2xlIHx8IFtdKS5wdXNoKHt9KTsKPC9zY3JpcHQ+PC9kaXY+Cg==' data-block='24'></div>


<p><strong>Example –</strong></p>
<p><code>@Component({<br />
selector: 'test-app',<br />
template:<br />
&lt;div&gt;This is my Test Template&lt;/div&gt;<br />
})</code></td>
</tr>
<tr>
<td colspan="3" width="633">                                                               <strong>#3. Usage</strong></td>
</tr>
<tr>
<td width="312"><strong>Angular Directive</strong></p>
<p>Angular Directives are not limited to be used only as Attributes inside any DOM element, Angular comes with different types of directive such as Attribute Directive and structural directive.</td>
<td colspan="2" width="322"><strong>Angular Component</strong></p>
<p>Angular Components can be used as many as any angular application requires. Only one Angular Component can be present for a particular view and this component can be used across angular application using the selector tag.</td>
</tr>
<tr>
<td colspan="3" width="633">                                                                <strong>#4. When to Use</strong></td>
</tr>
<tr>
<td width="312"><strong>Angular Directive</strong></p>
<p>The directive should be used whenever you need to add/modify existing DOM behavior based on some action or event performed. This Directive can be used in any other DOM element.</p>
<p>This can be used we need to catch a Click event or a Scroll on UI.</p>
<p>&nbsp;</td>
<td colspan="2" width="322"><strong>Angular Component</strong></p>
<p>Always use Angular Component when you need to create your own view that is attached to its behavior. This Component can be accessed by any other Component within the application. Unlike directives, only one component can be instantiated for a given element in a template.</td>
</tr>
<tr>
<td colspan="3" width="633"></td>
</tr>
<tr>
<td width="312"></td>
<td colspan="2" width="322"></td>
</tr>
<tr>
<td width="312"></td>
<td width="5"></td>
<td width="317"></td>
</tr>
</tbody>
</table>

<p>Angular directives and components are widely used while building an Angular application. Creating new Angular Components which are associated with a view and creating such multiple smaller components helps in code segregation and improves readability and maintains code re-usability. On other hand Angular directives are added or modify the existing DOM behavior and handle various different events such as click, blur, focus, scroll, etc. and appropriate action can be taken in the directive file. Knowing what to use when is all that you need to start with building Angular apps and using Angular directives or components.</p>
