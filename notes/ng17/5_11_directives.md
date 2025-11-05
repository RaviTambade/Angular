## **Angular Directives**

Imagine you’ve entered a master craftsman’s workshop — the world of **Angular**.

Your mentor welcomes you and says:

> *“In Angular, we don’t just build web pages — we command the behavior of HTML itself using magical spells called **Directives**.”*

He takes a chalk and draws three boxes on a board:

```
📦 Component = Template + Class + Styles (with its own HTML tag)
🪄 Directive = No HTML, Only Behavior
```

Then he whispers:

> *“Components are special directives with a template. But some directives don’t need a template — they simply **change behavior or appearance of HTML elements dynamically**. These are called Directives.”*


## 🧠 **Types of Directives in Angular**

| Directive Type         | Example                        | Purpose                                 |
| ---------------------- | ------------------------------ | --------------------------------------- |
| ✅ Component            | `<app-user>`                   | Has a template — UI + logic             |
| ✅ Structural Directive | `*ngIf`, `*ngFor`, `*ngSwitch` | Adds/Removes elements from the DOM      |
| ✅ Attribute Directive  | `[ngStyle]`, `[ngClass]`       | Changes appearance/behavior of elements |


## 🌳 **Structural Directives (Change the DOM Structure)**

Mentor says:

> *“These are like gardeners who can plant or uproot elements based on conditions.”*

They always use a `*` symbol.

### ✅ Examples:

```html
<div *ngIf="isLoggedIn">Welcome, user!</div>

<li *ngFor="let item of products">
   {{ item.name }}
</li>

<div [ngSwitch]="role">
  <p *ngSwitchCase="'admin'">Hello Admin</p>
  <p *ngSwitchCase="'user'">Hello User</p>
  <p *ngSwitchDefault>Guest Access</p>
</div>
```

## 🎨 **Attribute Directives (Change Look/Behavior of Existing Elements)**

> *“These directives don’t remove or add elements. Instead, they paint them, style them, or change their behavior.”*

Examples:

```html
<p [ngStyle]="{'color': 'red'}">This is red text</p>
<p [ngClass]="{'active': isActive}">Active or not</p>
```

## 🛠️ **Creating a Custom Attribute Directive (Angular 17)**

Your mentor gives you a brush and says:

> *“Let’s build our own directive that highlights any text when you hover over it.”*

### ✅ Step 1: Generate Directive

```bash
ng generate directive highlight
```

This creates:

```
highlight.directive.ts
```

### ✅ Step 2: Write Directive Logic

```ts
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'   // Use like <p appHighlight>...</p>
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}
```

### ✅ Step 3: Use in HTML

```html
<p appHighlight>Hover over me, I will glow!</p>
```

## 🧱 **Creating a Custom Structural Directive**

> *“Now let’s do something more powerful — create our own version of *ngIf — called *appShowIf.”*

### ✅ Directive Logic

```ts
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowIf]'
})
export class ShowIfDirective {

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {}

  @Input() set appShowIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
```

### ✅ Use it in HTML

```html
<div *appShowIf="loggedIn">
  Welcome user — visible only when logged in!
</div>
```


## ✅ **Key Takeaways**

| Concept              | Description                                                           |
| -------------------- | --------------------------------------------------------------------- |
| Directive            | Special class to control DOM behavior                                 |
| Structural Directive | Adds or removes DOM elements                                          |
| Attribute Directive  | Changes appearance or behavior                                        |
| Custom Directives    | Built using `@Directive`, `ElementRef`, `Renderer2`, or `TemplateRef` |
