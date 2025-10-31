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

### Custom Structural Directive 
The `MyIf` Directive is used to add or remove elements from DOM based on expression that must return boolean.
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
        if(shouldUnderline){  
        this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
        }
        else {         
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



<hr/>

Sure. Let’s explain it **formally and clearly — without analogies**, focusing on the **technical difference** between **attribute (element) directives** and **structural (template) directives** in Angular.

---

## 1️⃣ **Attribute Directives**

### Purpose:

Attribute directives are used to **change the appearance, behavior, or properties** of existing DOM elements, components, or other directives.

### Key Points:

* They **do not add or remove elements** from the DOM.
* They **act on existing elements** by updating their attributes, styles, classes, or event behavior.
* They are usually applied using **attribute syntax** (inside existing HTML tags).
* Angular applies their logic during **change detection** to update the view.

### Examples:

* **Built-in:** `ngClass`, `ngStyle`, `ngModel`
* **Custom:** You can create one using `@Directive({ selector: '[myHighlight]' })`

### Example Code:

```html
<p [ngClass]="{active: isActive}">This text is styled dynamically.</p>
<p [ngStyle]="{'color': textColor}">Color changes dynamically.</p>
<input [(ngModel)]="username">
```

```typescript
isActive = true;
textColor = 'blue';
username = '';
```

**Result:**
The elements remain in the DOM — only their visual or behavioral attributes change.

---

## 2️⃣ **Structural (Template) Directives**

### Purpose:

Structural directives are used to **add, remove, or manipulate** elements in the DOM **based on conditions or data**.

### Key Points:

* They **change the DOM structure** by creating or destroying elements dynamically.
* They are **prefixed with an asterisk (`*`)** when used in templates, which is shorthand for an Angular `<ng-template>` expansion.
* Angular uses them to manage **conditional rendering** or **repeated elements**.

### Examples:

* **Built-in:** `*ngIf`, `*ngFor`, `*ngSwitch`
* **New syntax in Angular 17:** `@if`, `@for`, `@switch`

### Example Code:

```html
<div *ngIf="isLoggedIn">Welcome, {{ userName }}</div>

<ul>
  <li *ngFor="let product of products">{{ product.name }}</li>
</ul>

<div [ngSwitch]="role">
  <p *ngSwitchCase="'admin'">Admin Panel</p>
  <p *ngSwitchCase="'user'">User Dashboard</p>
  <p *ngSwitchDefault>Guest</p>
</div>
```

```typescript
isLoggedIn = true;
userName = 'Ravi';
products = [{ name: 'Laptop' }, { name: 'Mouse' }];
role = 'user';
```

**Result:**
Angular decides which elements exist in the DOM.
If `isLoggedIn` becomes `false`, the `<div>` is removed from the DOM — not just hidden.

---

## 3️⃣ **Core Difference Summary**

| Feature                   | Attribute Directive             | Structural Directive                                 |
| ------------------------- | ------------------------------- | ---------------------------------------------------- |
| **Primary Function**      | Modifies appearance or behavior | Controls presence or structure of elements           |
| **Affects DOM Structure** | No                              | Yes                                                  |
| **Examples**              | `ngClass`, `ngStyle`, `ngModel` | `*ngIf`, `*ngFor`, `*ngSwitch`                       |
| **Syntax**                | `[directiveName]="expression"`  | `*directiveName="expression"` or new `@syntax`       |
| **Scope**                 | Acts on existing elements       | Creates or destroys embedded views (`<ng-template>`) |
| **Usage**                 | Styling, interactivity          | Conditional rendering, iteration                     |

---

## 4️⃣ **Angular 17 Update**

Angular 17 introduces **block syntax** (`@if`, `@for`, `@switch`) as a modern alternative to structural directives:

```html
@if (isLoggedIn) {
  <p>Welcome, {{ userName }}</p>
} @else {
  <p>Please login.</p>
}

@for (product of products) {
  <p>{{ product.name }}</p>
}
```

This syntax is functionally identical to `*ngIf` and `*ngFor`, but easier to read and faster at runtime.

---

## ✅ Conclusion

* **Attribute directives** → Modify existing elements (no structural change).
* **Structural directives** → Create or remove elements (change structure).

That’s the **essential and technical distinction** between the two directive types in Angular.


Here’s a **complete and organized list** of the **commonly used Angular directives**, grouped by **type** — Attribute, Structural, and Component-related — including both **traditional (`*ngIf`)** and **modern (`@if`)** syntaxes (Angular 17+).

---

## 🧩 **1️⃣ Structural Directives**

These **add, remove, or manipulate elements** in the DOM.

| Directive           | Description                                                     |
| ------------------- | --------------------------------------------------------------- |
| `*ngIf`             | Conditionally adds or removes an element from the DOM.          |
| `*ngFor`            | Repeats an element for each item in a list or iterable.         |
| `*ngSwitch`         | Conditionally displays elements based on a matching expression. |
| `*ngSwitchCase`     | Defines a case inside an `ngSwitch`.                            |
| `*ngSwitchDefault`  | Defines the default case inside an `ngSwitch`.                  |
| `*ngTemplateOutlet` | Inserts an embedded view (template) dynamically.                |

### ✅ New Block Syntax (Angular 17+)

| Syntax                         | Equivalent To                                          |
| ------------------------------ | ------------------------------------------------------ |
| `@if` / `@else`                | Replaces `*ngIf` with a cleaner block-based structure. |
| `@for`                         | Replaces `*ngFor`.                                     |
| `@switch`, `@case`, `@default` | Replaces `*ngSwitch` series.                           |

---

## 🎨 **2️⃣ Attribute Directives**

These **change the appearance or behavior** of existing DOM elements, components, or directives.

| Directive                                       | Description                                                          |
| ----------------------------------------------- | -------------------------------------------------------------------- |
| `ngClass`                                       | Adds or removes CSS classes dynamically.                             |
| `ngStyle`                                       | Adds or updates inline CSS styles dynamically.                       |
| `ngModel`                                       | Two-way data binding between form elements and component properties. |
| `ngForm`                                        | Tracks the value and validity of a form group.                       |
| `ngModelGroup`                                  | Tracks a subgroup within a form.                                     |
| `ngControl`                                     | Base directive for all form controls.                                |
| `required`, `minlength`, `maxlength`, `pattern` | Form validation directives.                                          |
| `disabled`, `readonly`, `checked`               | Common input property bindings.                                      |
| `ngSubmit`                                      | Handles form submission events.                                      |
| `ngClassOdd`, `ngClassEven`                     | Used within `*ngFor` to style odd/even rows.                         |
| `[hidden]`                                      | Toggles visibility (though not a directive, often used similarly).   |

---

## 🧠 **3️⃣ Component Directives**

These are **custom components** that behave like directives but include a **template**.

| Directive Type              | Example                     | Description                                       |
| --------------------------- | --------------------------- | ------------------------------------------------- |
| Component Directive         | `<app-header></app-header>` | A directive with its own HTML template and logic. |
| Custom Attribute Directive  | `[appHighlight]`            | Changes element behavior or style (no template).  |
| Custom Structural Directive | `*appIfRole`                | Adds/removes elements based on custom conditions. |

---

## ⚙️ **4️⃣ Form-Related Directives**

Form directives are technically **attribute directives**, but they’re widely used, so here’s a focused list:

| Directive       | Description                                   |
| --------------- | --------------------------------------------- |
| `formGroup`     | Binds an Angular FormGroup to a form element. |
| `formControl`   | Binds an Angular FormControl to an input.     |
| `formArrayName` | Binds to a FormArray.                         |
| `ngModel`       | Enables template-driven form binding.         |
| `ngForm`        | Creates a top-level form instance.            |
| `ngSubmit`      | Captures the form submit event.               |

---

## 🧩 **5️⃣ Template Utility Directives**

These are advanced directives used in templates for rendering or referencing.

| Directive          | Description                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| `ngTemplateOutlet` | Instantiates an embedded view using a template reference.                 |
| `ngContainer`      | Acts as a logical container without rendering any actual DOM element.     |
| `ngTemplate`       | Defines a block of HTML that Angular can render later.                    |
| `ngPlural`         | Displays content based on pluralization rules (used with `ngPluralCase`). |
| `ngPluralCase`     | Defines a pluralization case.                                             |

---

## 🔧 **6️⃣ Commonly Used Custom Directives (created by developers)**

| Example          | Type       | Description                                   |
| ---------------- | ---------- | --------------------------------------------- |
| `[appHighlight]` | Attribute  | Changes background color on hover.            |
| `*appIfRole`     | Structural | Shows content only for certain user roles.    |
| `[appAutoFocus]` | Attribute  | Automatically focuses an input field on load. |
| `[appTooltip]`   | Attribute  | Displays a tooltip on hover or focus.         |

---

## ✅ **Summary**

| Category             | Examples                          | Purpose                            |
| -------------------- | --------------------------------- | ---------------------------------- |
| **Structural**       | `*ngIf`, `*ngFor`, `*ngSwitch`    | Control DOM structure              |
| **Attribute**        | `ngClass`, `ngStyle`, `ngModel`   | Modify element behavior/appearance |
| **Form**             | `ngForm`, `formGroup`, `ngSubmit` | Manage form state and validation   |
| **Template Utility** | `ngTemplateOutlet`, `ngContainer` | Manage templates dynamically       |
| **Component**        | `<app-component>`                 | Encapsulated UI + logic            |

---


Perfect 👍
Here’s a **one-page summarized table** — clean, structured, and ready for teaching or quick revision.
You can directly copy this into your notes or slides as your **Angular Directives Quick Reference Sheet** 🧠

---

# 🧩 **Angular Directives — Quick Reference (Angular 17)**

| **Category**                                    | **Directive / Syntax**                           | **Purpose / Usage**                                |
| ----------------------------------------------- | ------------------------------------------------ | -------------------------------------------------- |
| **Structural Directives**                       | `*ngIf`                                          | Conditionally adds or removes an element.          |
|                                                 | `*ngFor`                                         | Repeats an element for each item in a list.        |
|                                                 | `*ngSwitch`, `*ngSwitchCase`, `*ngSwitchDefault` | Displays elements based on matching conditions.    |
|                                                 | `*ngTemplateOutlet`                              | Dynamically inserts a template.                    |
|                                                 | `ngContainer`                                    | Logical container without adding extra DOM.        |
|                                                 | `ngTemplate`                                     | Defines reusable HTML block.                       |
|                                                 | `ngPlural`, `ngPluralCase`                       | Displays content based on pluralization.           |
| **🆕 Angular 17 Block Syntax**                  | `@if` / `@else`                                  | New block-based conditional rendering.             |
|                                                 | `@for`                                           | Repeats elements (modern alternative to `*ngFor`). |
|                                                 | `@switch`, `@case`, `@default`                   | New switch block syntax.                           |
| **Attribute Directives**                        | `ngClass`                                        | Adds/removes CSS classes dynamically.              |
|                                                 | `ngStyle`                                        | Adds or updates inline styles dynamically.         |
|                                                 | `[hidden]`                                       | Hides element when condition is true.              |
|                                                 | `ngModel`                                        | Two-way data binding for form controls.            |
|                                                 | `ngModelGroup`                                   | Groups related form controls.                      |
|                                                 | `required`, `minlength`, `maxlength`, `pattern`  | Form validation attributes.                        |
|                                                 | `disabled`, `readonly`, `checked`                | Common input attributes.                           |
| **Form Directives**                             | `ngForm`                                         | Tracks form state and validity.                    |
|                                                 | `formGroup`, `formControl`, `formArrayName`      | Reactive form bindings.                            |
|                                                 | `ngSubmit`                                       | Captures form submit event.                        |
| **Template & Utility Directives**               | `ngTemplateOutlet`                               | Loads templates dynamically.                       |
|                                                 | `ngContainer`                                    | Groups elements logically without extra DOM.       |
| **Component Directives**                        | `<app-header>` / `<app-user>`                    | Custom component with its own template and logic.  |
| **Custom Attribute Directives (user-defined)**  | `[appHighlight]`                                 | Changes style or behavior of an element.           |
|                                                 | `[appTooltip]`                                   | Displays tooltip on hover/focus.                   |
|                                                 | `[appAutoFocus]`                                 | Focuses input on load.                             |
| **Custom Structural Directives (user-defined)** | `*appIfRole`                                     | Displays elements for specific user roles.         |

---

## ✅ **Quick Summary**

| **Directive Type**   | **Main Purpose**                 | **Examples**                      |
| -------------------- | -------------------------------- | --------------------------------- |
| **Structural**       | Modify DOM structure             | `*ngIf`, `*ngFor`, `@if`, `@for`  |
| **Attribute**        | Modify element behavior/style    | `ngClass`, `ngStyle`, `ngModel`   |
| **Form**             | Handle data binding & validation | `formGroup`, `ngSubmit`           |
| **Template Utility** | Manage templates dynamically     | `ngTemplateOutlet`, `ngContainer` |
| **Component**        | Custom UI blocks                 | `<app-header>`, `<app-footer>`    |

---

 