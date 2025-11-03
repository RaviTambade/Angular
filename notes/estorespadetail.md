# Angular ECommerce Starter — Repository Skeleton

> Starter skeleton for the Master-Chef Angular SPA (Catalog, Cart, Order, Membership). Copy files into an Angular project created with `ng new ecommerce-spa --routing --style=scss` and then paste/replace files below.

---

## Project tree (important files only)

```
angular-ecommerce-starter/
├─ package.json
├─ README.md
├─ src/
│  ├─ index.html
│  ├─ main.ts
│  ├─ styles.scss
│  ├─ environments/
│  │   └─ environment.ts
│  └─ app/
│     ├─ app.module.ts
│     ├─ app-routing.module.ts
│     ├─ app.component.ts
│     ├─ app.component.html
│     ├─ core/
│     │   ├─ models/product.model.ts
│     │   ├─ services/product.service.ts
│     │   ├─ services/cart.service.ts
│     │   ├─ services/auth.service.ts
│     │   └─ guards/auth.guard.ts
│     ├─ shared/
│     │   └─ pipes/currency-format.pipe.ts
│     ├─ catalog/
│     │   ├─ catalog.module.ts
│     │   └─ components/
│     │       ├─ product-list/product-list.component.ts
│     │       ├─ product-list/product-list.component.html
│     │       ├─ product-details/product-details.component.ts
│     │       ├─ product-details/product-details.component.html
│     │       └─ product-counter/product-counter.component.ts
│     ├─ cart/
│     │   ├─ cart.module.ts
│     │   └─ components/cart-view/cart-view.component.ts
│     └─ membership/
│         ├─ membership.module.ts
│         └─ components/login/login.component.ts
└─ angular.json (auto by CLI)
```

---

# Files (copy each file into the corresponding path)

---

## package.json
```json
{
  "name": "angular-ecommerce-starter",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "ng": "ng",
    "start": "ng serve --open",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint"
  },
  "dependencies": {
    "@angular/animations": "^17.0.0",
    "@angular/common": "^17.0.0",
    "@angular/compiler": "^17.0.0",
    "@angular/core": "^17.0.0",
    "@angular/forms": "^17.0.0",
    "@angular/platform-browser": "^17.0.0",
    "@angular/platform-browser-dynamic": "^17.0.0",
    "@angular/router": "^17.0.0",
    "rxjs": "^7.8.0",
    "tslib": "^2.5.0"
  },
  "devDependencies": {
    "@angular/cli": "^17.0.0",
    "@angular/compiler-cli": "^17.0.0",
    "typescript": "^5.2.0"
  }
}
```

---

## README.md
```md
# Angular ECommerce Starter

Starter skeleton for the Angular SPA e-commerce portal.

Steps:
1. Run `ng new angular-ecommerce-starter --routing --style=scss`.
2. Replace files in `src/` with the files from this repo.
3. Run `npm install` and `ng serve`.

This skeleton demonstrates modules, DI, guards, services, routing, property/event binding and async HttpClient usage (note: the API endpoints are placeholders).
```

---

## src/index.html
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Angular ECommerce Starter</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

---

## src/main.ts
```ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

---

## src/environments/environment.ts
```ts
export const environment = {
  production: false,
  apiUrl: 'https://api.example.com'
};
```

---

## src/styles.scss
```scss
/* global styles */
body { padding: 0; margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
.product-card { border: 1px solid #eee; padding: 12px; border-radius: 8px; }
```

---

## src/app/app.module.ts
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

---

## src/app/app-routing.module.ts
```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'catalog', loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule) },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
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

## src/app/app.component.ts
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {}
```

---

## src/app/app.component.html
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
  <div class="container-fluid">
    <a class="navbar-brand" routerLink="/">Transflower Store</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link" routerLink="/catalog">Catalog</a></li>
        <li class="nav-item"><a class="nav-link" routerLink="/cart">Cart</a></li>
      </ul>
    </div>
  </div>
</nav>
<div class="container">
  <router-outlet></router-outlet>
</div>
```

---

## src/app/core/models/product.model.ts
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

---

## src/app/core/services/product.service.ts
```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private api = `${environment.apiUrl}/products`;
  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> { return this.http.get<Product[]>(this.api); }
  getById(id: number): Observable<Product> { return this.http.get<Product>(`${this.api}/${id}`); }
}
```

---

## src/app/core/services/cart.service.ts
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
    const items = [...this.items$.value];
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

---

## src/app/core/services/auth.service.ts
```ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'auth_token';
  constructor(private router: Router) {}

  login(username: string, password: string): Promise<boolean> {
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

  isLoggedIn(): boolean { return !!localStorage.getItem(this.tokenKey); }
}
```

---

## src/app/core/guards/auth.guard.ts
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

## src/app/shared/pipes/currency-format.pipe.ts
```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currencyFormat' })
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value == null) return '';
    return value.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  }
}
```

---

## src/app/catalog/catalog.module.ts
```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductCounterComponent } from './components/product-counter/product-counter.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetailsComponent }
];

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent, ProductCounterComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class CatalogModule {}
```

---

## src/app/catalog/components/product-list/product-list.component.ts
```ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading = false;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.loading = true;
    this.productService.getAll().subscribe({ next: p => (this.products = p), complete: () => (this.loading = false) });
  }

  viewDetails(id: number) { this.router.navigate(['/catalog', id]); }
}
```

---

## src/app/catalog/components/product-list/product-list.component.html
```html
<div *ngIf="loading">Loading products...</div>
<div *ngIf="!loading && products?.length">
  <div class="row">
    <div class="col-md-4 mb-3" *ngFor="let p of products">
      <div class="product-card">
        <img [src]="p.imageUrl || 'assets/no-image.png'" alt="{{p.name}}" class="img-fluid"/>
        <h5>{{ p.name | uppercase }}</h5>
        <p>{{ p.description }}</p>
        <div>{{ p.price | currencyFormat }}</div>
        <button class="btn btn-primary" (click)="viewDetails(p.id)">View</button>
      </div>
    </div>
  </div>
</div>
<div *ngIf="!loading && (!products || products.length === 0)">No products available.</div>
```

---

## src/app/catalog/components/product-details/product-details.component.ts
```ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { CartService } from '../../../core/services/cart.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  selectedQty = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!Number.isNaN(id)) {
      this.productService.getById(id).subscribe(p => (this.product = p));
    }
  }

  addToCart() { if (this.product) this.cartService.add(this.product, this.selectedQty); }
}
```

---

## src/app/catalog/components/product-details/product-details.component.html
```html
<div *ngIf="product">
  <div class="row">
    <div class="col-md-6">
      <img [src]="product.imageUrl || 'assets/no-image.png'" class="img-fluid" />
    </div>
    <div class="col-md-6">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <div>Price: {{ product.price | currencyFormat }}</div>

      <app-product-counter [(count)]="selectedQty"></app-product-counter>

      <button class="btn btn-success mt-2" (click)="addToCart()">Add to cart</button>
    </div>
  </div>
</div>
```

---

## src/app/catalog/components/product-counter/product-counter.component.ts
```ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-counter',
  template: `
    <div class="input-group" style="max-width:140px;">
      <button class="btn btn-outline-secondary" (click)="decrement()">-</button>
      <input class="form-control text-center" [(ngModel)]="count" (ngModelChange)="onChange()" />
      <button class="btn btn-outline-secondary" (click)="increment()">+</button>
    </div>`
})
export class ProductCounterComponent {
  @Input() count = 1;
  @Output() countChange = new EventEmitter<number>();

  increment() { this.count++; this.countChange.emit(this.count); }
  decrement() { if (this.count > 1) { this.count--; this.countChange.emit(this.count); } }
  onChange() { this.countChange.emit(this.count); }
}
```

---

## src/app/cart/cart.module.ts
```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartViewComponent } from './components/cart-view/cart-view.component';

const routes: Routes = [ { path: '', component: CartViewComponent } ];

@NgModule({ declarations: [CartViewComponent], imports: [CommonModule, RouterModule.forChild(routes)] })
export class CartModule {}
```

---

## src/app/cart/components/cart-view/cart-view.component.ts
```ts
import { Component } from '@angular/core';
import { CartService, CartItem } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart-view',
  template: `
    <div *ngIf="(items?.length); else empty">
      <div *ngFor="let i of items">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <div>
            <strong>{{ i.product.name }}</strong>
            <div>{{ i.product.price | currency }}</div>
          </div>
          <div>
            Qty: {{ i.qty }}
            <button class="btn btn-sm btn-danger ms-2" (click)="remove(i.product.id)">Remove</button>
          </div>
        </div>
      </div>
      <button class="btn btn-secondary" (click)="clear()">Clear Cart</button>
    </div>
    <ng-template #empty>
      <div>No items in cart.</div>
    </ng-template>
  `
})
export class CartViewComponent {
  items: CartItem[] = [];
  constructor(private cart: CartService) { this.cart.items.subscribe(v => (this.items = v)); }
  remove(id: number) { this.cart.remove(id); }
  clear() { this.cart.clear(); }
}
```

---

## src/app/membership/membership.module.ts
```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [ { path: 'login', component: LoginComponent } ];

@NgModule({ declarations: [LoginComponent], imports: [CommonModule, FormsModule, RouterModule.forChild(routes)] })
export class MembershipModule {}
```

---

## src/app/membership/components/login/login.component.ts
```ts
import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class="card p-3 mx-auto" style="max-width:420px;">
      <h4>Login</h4>
      <form (submit)="onSubmit($event)">
        <div class="mb-2">
          <input class="form-control" placeholder="username" [(ngModel)]="username" name="username" />
        </div>
        <div class="mb-2">
          <input class="form-control" placeholder="password" type="password" [(ngModel)]="password" name="password" />
        </div>
        <button class="btn btn-primary" type="submit">Login</button>
      </form>
      <div *ngIf="error" class="text-danger mt-2">{{ error }}</div>
    </div>
  `
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  async onSubmit(e: Event) {
    e.preventDefault();
    const ok = await this.auth.login(this.username, this.password);
    if (ok) this.router.navigate(['/catalog']);
    else this.error = 'Invalid credentials';
  }
}
```

