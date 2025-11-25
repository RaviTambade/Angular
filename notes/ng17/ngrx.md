Perfect — let’s build a **complete Angular 17 + NgRx application** in the **Product domain**, with a **mentor storytelling style** so your students can understand it like a real project.

---

# 🧑‍🏫 Mentor Story — “The Product Store”

Imagine we’re setting up a small product store.

* The **Component** is the shop counter (customer interacts here).
* The **NgRx Store** is the warehouse inventory system.
* **Actions** are like sending instructions:
  “FETCH PRODUCTS!”, “ADD PRODUCT!”
* **Reducers** update the warehouse data.
* **Effects** are delivery boys — when a fetch request comes, they go to backend, bring data and give it to the reducer.
* **Service** is the actual REST API caller.

Let’s implement this step-by-step.

---

# ✅ 1. Create Angular App (with Zone.js)

```
ng new product-app
# Choose: No (for zoneless) → DO NOT enable zoneless mode
```

---

# ✅ 2. Add NgRx

```
ng add @ngrx/store
ng add @ngrx/effects
ng add @ngrx/store-devtools
```

---

# 🗂 Directory Structure (Recommended)

```
src/app/
   products/
      + store/
           product.actions.ts
           product.reducer.ts
           product.selectors.ts
           product.effects.ts
      + product.service.ts
      + product.component.ts
```

---

# 🧱 3. Create Product Model

`src/app/products/product.model.ts`

```ts
export interface Product {
  id: number;
  name: string;
  price: number;
}
```

---

# 🚀 4. Create Product Actions

`product.actions.ts`

```ts
import { createAction, props } from '@ngrx/store';
import { Product } from '../product.model';

// Load products
export const loadProducts = createAction('[Product Page] Load Products');

// Successful load
export const loadProductsSuccess = createAction(
  '[Product API] Load Products Success',
  props<{ products: Product[] }>()
);

// Add product
export const addProduct = createAction(
  '[Product Page] Add Product',
  props<{ product: Product }>()
);
```

---

# 🧠 5. Create Reducer (Warehouse Update Logic)

`product.reducer.ts`

```ts
import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import { Product } from '../product.model';

export interface ProductState {
  products: Product[];
}

export const initialState: ProductState = {
  products: []
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products
  })),
  on(ProductActions.addProduct, (state, { product }) => ({
    ...state,
    products: [...state.products, product]
  }))
);
```

---

# 🔍 6. Create Selectors (Warehouse Search Helpers)

`product.selectors.ts`

```ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
  selectProductState,
  (state) => state.products
);
```

---

# 🌐 7. Create Product Service (REST API)

`product.service.ts`

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private api = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(this.api).pipe(
      map(response => response.products)
    );
  }
}
```

Add missing import:

```ts
import { map } from 'rxjs/operators';
```

---

# 🛵 8. Create Effects (Our Delivery Boy)

`product.effects.ts`

```ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import * as ProductActions from './product.actions';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map(products =>
            ProductActions.loadProductsSuccess({ products })
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
```

---

# 🏛 9. Register Reducer + Effects in App

In `app.config.ts`:

```ts
import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { productReducer } from './products/store/product.reducer';
import { ProductEffects } from './products/store/product.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideStore({ products: productReducer }),
    provideEffects([ProductEffects])
  ]
};
```

---

# 🖥 10. UI Component (Call Actions + Select State)

`product.component.ts`

```ts
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import * as ProductActions from './store/product.actions';
import { selectAllProducts } from './store/product.selectors';

@Component({
  selector: 'app-products',
  standalone: true,
  template: `
    <h1>Product List</h1>

    <button (click)="load()">Load Products</button>

    <ul>
      <li *ngFor="let p of products$ | async">
        {{ p.name }} - {{ p.price }}
      </li>
    </ul>
  `
})
export class ProductComponent {
  private store = inject(Store);

  products$: Observable<Product[]> = this.store.select(selectAllProducts);

  load() {
    this.store.dispatch(ProductActions.loadProducts());
  }
}
```

---

# 🎉 11. Add Component to main.ts

`main.ts`

```ts
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProductComponent } from './app/products/product.component';
import { appConfig } from './app/app.config';

bootstrapApplication(ProductComponent, appConfig);
```

---

# ✅ Your Angular 17 + NgRx Product App is READY 🎉

If you want NEXT:

✅ Add product details page
✅ Add create/update/delete product
✅ Add router-store integration
✅ Add entity adapter
✅ Real backend JSON server setup

Just tell me!
