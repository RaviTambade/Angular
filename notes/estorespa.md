# Master Chef Roadmap — *“Cooking up an Angular SPA for E-Commerce”*

*(Mentor story-telling style for a Front-End Solution Architect)*

Imagine we're in a kitchen. You're the Master Chef (solution architect). The kitchen (lab) has zones (modules), recipes (features), ingredients (Angular building blocks) and plating rules (UI + routing + security). I’ll walk you through a clean recipe, folder map, CLI steps and ready-to-run code snippets so your devs can follow the cookbook.

---

# 1 — High-level menu (Goal & Story)

**Problem (User Story):** Build a Single Page Application (SPA) E-Commerce portal in Angular that demonstrates data binding, events, component props (@Input/@Output), secure routing, async REST consumption, modular architecture (Catalog, Cart, Orders, Membership), and Bootstrap UI.

**Outcome:** A modular, testable Angular app with clear DI patterns, guards, services, and components demonstrating one-way & two-way binding, event binding, and routed SPA.

---

# 2 — Kitchen layout (Folder / Module structure)

```
src/
└─ app/
   ├─ core/                       # singleton services, guards, interceptors
   │  ├─ services/
   │  │   ├─ auth.service.ts
   │  │   ├─ product.service.ts
   │  │   └─ cart.service.ts
   │  ├─ guards/
   │  │   └─ auth.guard.ts
   │  └─ models/
   │      └─ product.model.ts
   ├─ shared/                     # shared components, pipes, directives
   │  ├─ components/
   │  └─ pipes/
   ├─ catalog/                    # CatalogModule (feature)
   │  ├─ catalog-routing.module.ts
   │  ├─ catalog.module.ts
   │  └─ components/
   │      ├─ product-list/
   │      ├─ product-details/
   │      └─ product-counter/
   ├─ cart/                       # ShoppingCartModule
   │  ├─ cart.module.ts
   │  └─ components/
   │      └─ cart-view/
   ├─ order/                      # OrderProcessingModule
   ├─ membership/                 # MembershipModule (login/register)
   ├─ app-routing.module.ts
   └─ app.module.ts
```

---

# 3 — Ingredients (Angular features)

* Core modules: `CommonModule`, `FormsModule`, `ReactiveFormsModule`, `RouterModule`, `HttpClientModule`.
* Directives: `{{ }}`, `*ngIf`, `*ngFor`, `ngModel`, `[hidden]`, structural & attribute directives.
* Router: `RouterOutlet`, `RouterLink`, route guards.
* Decorators: `@Component`, `@NgModule`, `@Injectable`, `@Input`, `@Output`, `@HostListener` (optional).
* Pipes: `uppercase`, `lowercase`, `currency`, custom pipes if needed.
* Services: singleton `ProductService`, `AuthService`, `CartService`.
* Components: List, Details, Insert, Update, Counter, Cart, Item.

---

# 4 — Recipe: CLI & scaffolding (step-by-step)

Run from project root:

```bash
ng new ecommerce-spa --routing --style=scss
cd ecommerce-spa

# Create feature modules
ng generate module core
ng generate module shared
ng generate module catalog --route catalog --module app.module
ng generate module cart --route cart --module app.module
ng generate module order --route order --module app.module
ng generate module membership --route membership --module app.module

# Generate core services and guard
ng generate service core/services/product
ng generate service core/services/auth
ng generate service core/services/cart
ng generate guard core/guards/auth --implements CanActivate

# Generate components (examples)
ng generate component catalog/components/product-list
ng generate component catalog/components/product-details
ng generate component catalog/components/product-counter
ng generate component cart/components/cart-view
```

---

# 5 — Key code pieces (copyable, ready-to-use)

### `src/app/core/models/product.model.ts`

```ts
export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  stock?: number;
}
```

### `src/app/core/services/product.service.ts`

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private api = 'https://api.example.com/products'; // replace with real URL

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`);
  }
}
```

### `src/app/core/services/cart.service.ts`

```ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

export interface CartItem { product: Product; qty: number; }

@Injectable({ providedIn: 'root' })
export class CartService {
  private items$ = new BehaviorSubject<CartItem[]>([]);
  items = this.items$.asObservable();

  add(product: Product, qty = 1) {
    const items = this.items$.value.slice();
    const idx = items.findIndex(i => i.product.id === product.id);
    if (idx >= 0) items[idx].qty += qty;
    else items.push({ product, qty });
    this.items$.next(items);
  }

  remove(productId: number) {
    const items = this.items$.value.filter(i => i.product.id !== productId);
    this.items$.next(items);
  }

  clear() { this.items$.next([]); }
}
```

### `src/app/core/services/auth.service.ts` (skeleton)

```ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'auth_token';

  constructor(private router: Router) {}

  login(username: string, password: string): Promise<boolean> {
    // mock: replace with real API call
    return new Promise(resolve => {
      const ok = username === 'chef' && password === 'secret';
      if (ok) localStorage.setItem(this.tokenKey, 'fake-jwt-token');
      resolve(ok);
    });
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/membership/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}
```

### `src/app/core/guards/auth.guard.ts`

```ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isLoggedIn()) return true;
    this.router.navigate(['/membership/login']);
    return false;
  }
}
```

---

# 6 — Example Component patterns (Props & Events)

### `product-counter` — demonstrates `@Input` (prop) and `@Output` (event)

#### `product-counter.component.ts`

```ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-counter',
  template: `
    <div class="counter">
      <button (click)="decrement()">-</button>
      <span>{{ count }}</span>
      <button (click)="increment()">+</button>
    </div>
  `
})
export class ProductCounterComponent {
  @Input() count = 1;
  @Output() countChange = new EventEmitter<number>();

  increment() { this.count++; this.countChange.emit(this.count); }
  decrement() { if (this.count > 0) { this.count--; this.countChange.emit(this.count); } }
}
```

Use in parent (`product-details.component.html`):

```html
<app-product-counter [(count)]="selectedQty"></app-product-counter>
<button (click)="addToCart(product, selectedQty)">Add to cart</button>
```

This shows **two-way binding** using `[(count)]` with `@Input()` + `@Output()` convention.

---

# 7 — Templates: show bindings & directives

### `product-list.component.html` (core bindings)

```html
<div *ngIf="products?.length; else empty">
  <div *ngFor="let p of products" class="product-card">
    <img [src]="p.imageUrl || 'assets/no-image.png'" alt="{{ p.name }}" />
    <h3>{{ p.name | uppercase }}</h3>            <!-- interpolation -->
    <p>{{ p.description }}</p>
    <div>Price: {{ p.price | currency }}</div>  <!-- pipe -->
    <button [disabled]="p.stock === 0" (click)="viewDetails(p.id)">View</button> <!-- property + event -->
  </div>
</div>

<ng-template #empty>
  <div>No products available.</div>
</ng-template>
```

### `product-details.component.ts` usage of `ActivatedRoute` and service

```ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  selectedQty = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getById(id).subscribe(p => (this.product = p));
  }

  addToCart(product: Product, qty: number) {
    // inject CartService and call add
  }
}
```

---

# 8 — App routing snippet (SPA + Secure routing)

```ts
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'catalog', loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule) },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule), canActivate: [AuthGuard] },
  { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule), canActivate: [AuthGuard] },
  { path: 'membership', loadChildren: () => import('./membership/membership.module').then(m => m.MembershipModule) },
  { path: '**', redirectTo: 'catalog' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

---

# 9 — Asynchronous remote data (HttpClient + Observables)

* Use `HttpClient` in services.
* Prefer returning `Observable<T>` to allow components to `subscribe()` or use `async` pipe.
* Example: `productService.getAll().pipe(catchError(...))`

In component:

```ts
products$ = this.productService.getAll(); // keep as Observable
```

Template:

```html
<div *ngIf="products$ | async as products">
  <div *ngFor="let p of products"> ... </div>
</div>
```

---

# 10 — Styling / UI

* Add Bootstrap in `index.html` head:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
```

* Use Angular-friendly Bootstrap classes in templates. Keep layout responsive: card grids, navbar with `routerLink`, and `router-outlet` in `app.component.html`.

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" routerLink="/">Transflower Store</a>
  <ul class="navbar-nav">
    <li class="nav-item"><a class="nav-link" routerLink="/catalog">Catalog</a></li>
    <li class="nav-item"><a class="nav-link" routerLink="/cart">Cart</a></li>
  </ul>
</nav>
<router-outlet></router-outlet>
```

---

# 11 — Dependency Injection (how to teach)

Explain as: *“You don’t create the service with `new` inside components. Angular injects a shared instance so every dish (component) using the recipe (service) sees the same state.”*
Show constructor DI:

```ts
constructor(private productService: ProductService, private cartService: CartService) {}
```

---

# 12 — Tests & Quality

* Unit tests: use `Karma/Jasmine` for components and services. Mock `HttpClient` with `HttpTestingController`.
* Example test targets:

  * `ProductService` — ensure GET invokes correct endpoint.
  * `CartService` — ensure add/remove/clear behavior.
  * `AuthGuard` — assert navigation for unauthenticated users.
* E2E: use Cypress or Protractor (if legacy) to test flows: browse catalog → view details → add to cart → checkout (membership login required).

---

# 13 — Integrations & DevOps

* Backend: REST API endpoints for products, auth, orders. Use JWT for secure routes.
* CI/CD: run `ng lint`, `ng test --watch=false`, `ng build --prod` in pipeline. Host static build on S3/Netlify/Vercel or serve via nginx.
* Monitoring: add Sentry for error monitoring in production builds.

---

# 14 — Final tips from the Master Chef

1. **Keep modules small** — each feature module owns its components/services. Keep core for singletons.
2. **Prefer Observables + async pipe** — less manual subscription management.
3. **Use interfaces** to model API contracts (`Product`, `Order`, `User`).
4. **Secure routing** with guards + token interceptor (attach Authorization header in HTTP requests).
5. **Document** each module with READMEs and component responsibilities.
6. **Teach by cooking**: run a live coding session where you scaffold module → component → service → integrate — that reinforces DI and routing.

---

# 15 — Quick copy-paste checklist (Sprint-ready)

* [ ] `ng new` project
* [ ] Create modules: core, shared, catalog, cart, order, membership
* [ ] Add services and guard in core
* [ ] Implement `ProductService`, `CartService`, `AuthService`
* [ ] Add `product-list`, `product-details`, `product-counter`, `cart-view`
* [ ] Setup routes & protect cart/orders with `AuthGuard`
* [ ] Integrate Bootstrap + responsive templates
* [ ] Unit tests + basic e2e
* [ ] CI pipeline: lint → test → build → deploy

---
