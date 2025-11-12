
### 🧭 **Problem Statement: Custom Directive for Product Catalog**

You are part of the **Transflower E-Commerce** development team.
Your team is building a **Product Catalog Module** that displays products in two places:

* **Product List Component** – shows multiple products in a grid or list view.
* **Product Detail Component** – shows detailed information about a selected product.

The design team and the marketing team have requested that:

1. **Discounted products** should visually stand out (highlighted).
2. **Out-of-stock products** should appear slightly dimmed or disabled.
3. A **hover effect** should appear on each product card to improve the user experience.

Rather than repeating this logic in multiple components, the team decides to implement this behavior using a **Custom Angular Directive**.


### 🧩 **Your Task**

Create a **custom attribute directive** called `ProductHighlightDirective` that can be applied to any product card element.
The directive should:

1. **Highlight discounted products**

   * If a product has a `discount` greater than `0`, change its border color (e.g., green or gold).

2. **Dim out-of-stock products**

   * If a product’s `stock` is `0`, reduce opacity and disable hover effects.

3. **Add hover effect for interactivity**

   * On mouse hover, slightly scale up the product card or change the box shadow to indicate focus.

4. **Be reusable**

   * The same directive should work seamlessly inside both:

     * `ProductListComponent`
     * `ProductDetailComponent`


### 🧠 **Hints for Implementation**

* Use `@Directive()` decorator with a selector like `[appProductHighlight]`.
* Accept an input property, e.g.

  ```ts
  @Input() product: any;
  ```
* Use **Renderer2** and **ElementRef** to dynamically modify DOM styles.
* Use **HostListener** to handle hover (`mouseenter` and `mouseleave`) events.
* Ensure the directive logic is **declarative**, so in HTML you can use:

  ```html
  <div class="product-card" [appProductHighlight]="product">
      <!-- product details here -->
  </div>
  ```

### 🧩 **Example Use Case**

#### **In Product List Component Template**

```html
<div class="product-list">
  <div *ngFor="let item of products" class="product-card" [appProductHighlight]="item">
      <h3>{{item.name}}</h3>
      <p>Price: {{item.price}} ₹</p>
      <p *ngIf="item.discount > 0">Discount: {{item.discount}}%</p>
      <p *ngIf="item.stock === 0">Out of Stock</p>
  </div>
</div>
```

#### **Directive Selector Example**

```ts
@Directive({
  selector: '[appProductHighlight]'
})
```

 
### 💡 **Extension Challenge**

Add an optional input:

```ts
@Input() highlightColor = 'gold';
```

so that each component can decide its own highlight color without modifying the directive logic.

 