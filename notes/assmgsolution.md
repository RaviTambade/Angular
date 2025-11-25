## 👨‍🏫 **Building Product Highlight  Directive**

### 🌱 Scene Setup: Classroom Discussion

> **Ravi Sir:**
> "Alright team, imagine we are part of *Transflower E-Commerce*. We already have our product list and product details components ready.
> Now, marketing has come to us with a small—but important—UX request.
> They want:
>
> 1. Discounted products to look special.
> 2. Out-of-stock products to look faded.
> 3. A hover effect when the user moves the mouse over a product card."

He pauses, looks around the class.

> **Ravi Sir:**
> “Now tell me, do we want to repeat the same DOM manipulation in two or more components?”
> *(Students: “No, Sir!”)*
> “Exactly! So, what do we use when we want to attach a behaviour to DOM elements *without* rewriting logic again and again?”

> *(Students: “Directive!”)*
> “Superb. So let’s create our own custom directive.”


### 🧩 Step 1: Directive Design Thought Process

> “Before writing any code, think like an architect. What is the behaviour we are encapsulating?”

* The directive should **inspect the product data** (price, discount, stock).
* It should **change the DOM style** using Angular’s safe APIs.
* It should respond to **mouse hover events**.
* It must work both in **ProductListComponent** and **ProductDetailComponent**.

> “That’s what a directive does — it adds *behaviour* to DOM elements.”

### 🧱 Step 2: Directive Skeleton

```typescript
import { Directive, ElementRef, Input, Renderer2, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appProductHighlight]'
})
export class ProductHighlightDirective implements OnInit {

  @Input('appProductHighlight') product: any;
  @Input() highlightColor: string = 'gold';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.applyInitialStyles();
  }

  private applyInitialStyles() {
    // 1. Highlight discounted products
    if (this.product.discount > 0) {
      this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${this.highlightColor}`);
    }

    // 2. Dim out-of-stock products
    if (this.product.stock === 0) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0.5');
      this.renderer.setStyle(this.el.nativeElement, 'pointer-events', 'none');
    }
  }

  // 3. Hover effects
  @HostListener('mouseenter') onMouseEnter() {
    if (this.product.stock > 0) {
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.03)');
      this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 4px 10px rgba(0,0,0,0.2)');
      this.renderer.setStyle(this.el.nativeElement, 'transition', '0.3s');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'transform');
    this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
  }
}
```

### 🧩 Step 3: Product List Component Template

```html
<div class="product-list">
  <div *ngFor="let item of products" class="product-card" [appProductHighlight]="item" highlightColor="green">
      <h3>{{item.name}}</h3>
      <p>Price: ₹{{item.price}}</p>
      <p *ngIf="item.discount > 0">Discount: {{item.discount}}%</p>
      <p *ngIf="item.stock === 0">Out of Stock</p>
  </div>
</div>
```

> **Ravi Sir:**
> “Look carefully — `[appProductHighlight]="item"` passes the product data from the component to the directive.
> `highlightColor="green"` is an optional customization.”


### 🧩 Step 4: Product Data for Testing

```typescript
export class ProductListComponent {
  products = [
    { name: 'Wireless Mouse', price: 800, discount: 10, stock: 12 },
    { name: 'Mechanical Keyboard', price: 2400, discount: 0, stock: 0 },
    { name: 'Bluetooth Speaker', price: 1200, discount: 5, stock: 5 }
  ];
}
```

### 🧠 Step 5: Reflection Time

> **Ravi Sir:**
> “Now students, think about what just happened here.
> Earlier, if we had written all this logic inside our component HTML or TypeScript, we’d repeat it in every product-related component.
> But now, we’ve created a **reusable piece of UI behavior** that can be plugged into any component simply using a directive attribute.”


### 🪄 Step 6: Extended Learning (Optional Challenge)

* Add animation when discount changes dynamically (use `ngOnChanges`).
* Allow multiple styling modes (e.g., “premium”, “sale”, “default”) through another input.
* Log analytics when a user hovers over a discounted product.


### 🌻 Mentor Summary

> “So, class — a directive is not just a piece of decoration.
> It’s a bridge between **data** and **DOM behavior**.
> You’ve just built one that makes our product catalog feel alive — reactive, dynamic, and visually intelligent.
> And that’s what good software should do — make experiences smarter without adding duplication.”

Would you like me to continue the **next mentor session** explaining how to convert this *attribute directive* into a **structural directive** (like `*appShowIfDiscounted` or `*appHideIfOutOfStock`)?
