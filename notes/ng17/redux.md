# **Redux Pattern in Angular 17 (NgRx Way)**

Imagine your Angular application is a **busy college campus**.

On this campus:

* Students = **Components**
* Principal’s Office = **Store**
* Notice Board = **State**
* Application Forms submitted by students = **Actions**
* Clerk team in office = **Reducers**
* CCTV & Monitoring team = **Effects**
* API requests = **Outside world interactions**

Let’s begin the story…

# 📘 **The Problem Before Redux (Real Story Many Students Face)**

Every component maintains its own data. You pass data like:

```
@Input()  
@Output()  
Service Subjects
```

Soon the app becomes:

* Unpredictable
* Hard to track who updated what
* Impossible to debug

You ask one student, “Who changed the attendance list?”
Everyone says, “Not me!” 😅

This is the moment when architects say:

> “Students, enough confusion—let’s centralize everything.”

Enter the **Redux pattern**.

# ⚡ **Redux Pattern in Angular 17 (NgRx)**

## ⭐ Core Idea

**One single source of truth – a global store.**
Your entire app reads from one central place.

# 🎯 **Redux Pattern – The 3 Rules**

## **Rule 1: The state is read-only**

No one can directly modify data.
Only **Actions** can request a change.

## **Rule 2: Reducers decide how the state changes**

Reducers are pure functions.
Just like a strict clerk — no emotions, no shortcuts.

## **Rule 3: Changes are centralized**

All updates happen in the Store.

# 🏫 **Story of a Logged-In Student**

Imagine a student logs in:

### Step 1 — Component says:

“Hey, system, user wants to log in.”
➡ **Dispatch an Action**

```ts
store.dispatch(login({ username, password }));
```

### Step 2 — Reducer listens:

“What to do if login action arrives?”
➡ **Update state if needed**

### Step 3 — Effect steps in:

“Login requires API call. Let me handle this.”
➡ **Effect calls backend → gets token → dispatches success action**

### Step 4 — State updates

- ✔ Token stored
- ✔ User stored
- ✔ Components auto-update

# 🧩 **The NgRx Building Blocks (Super Simple)**

## 🔹 1. **Actions (What Happened?)**

They only describe an event.

```ts
export const loadProducts = createAction('[Products] Load');
```

## 🔹 2. **Reducer (How State Changes?)**

```ts
export const productReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products
  }))
);
```

## 🔹 3. **Selectors (How to Read Data?)**

```ts
export const selectProducts = createSelector(
  selectProductState,
  (state) => state.products
);
```

## 🔹 4. **Effects (Side Effects: API Calls)**

```ts
loadProducts$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadProducts),
    mergeMap(() =>
      this.service.getProducts().pipe(
        map(products => loadProductsSuccess({ products }))
      )
    )
  )
);
```

# 🎨 **ASCII Diagram: Full Redux Flow**

```
┌──────────────┐      dispatch       ┌──────────────┐
│  Component    │ ─────────────────▶│     Action    │
└──────────────┘                     └──────────────┘
                                              │
                                              ▼
                                      ┌──────────────┐
                                      │    Reducer   │
                                      └──────────────┘
                                              │
                                 update state ▼
                                      ┌──────────────┐
                                      │    Store     │
                                      └──────────────┘
                                              │
                                Component reads▼
                                      ┌──────────────┐
                                      │  Selector    │
                                      └──────────────┘

If API required:
Action → Effect → API → Success Action → Reducer → Store
```

# 🧠 **Why Redux Is Powerful in Angular 17**

- ✔ Predictable state
- ✔ Debuggable (Redux DevTools)
- ✔ Testable
- ✔ Scalable
- ✔ One place to track changes
- ✔ No more “Who changed the data?” confusion


# 🚀 **Small Working Example (Angular 17)**

## Step 1: Install NgRx

```
ng add @ngrx/store
ng add @ngrx/effects
ng add @ngrx/store-devtools
```

## Step 2: Define Action

```ts
export const increment = createAction('[Counter] Increment');
```

## Step 3: Reducer

```ts
export const counterReducer = createReducer(
  0,
  on(increment, (state) => state + 1)
);
```

## Step 4: Register Store

```ts
bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ counter: counterReducer })
  ]
});
```

## Step 5: Use in Component

```ts
this.store.dispatch(increment());
this.count$ = this.store.select('counter');
```

# 🧑‍🏫 **Mentor Conclusion**

If Angular services are like personal notebooks,
**Redux Store is the central library** of the institute.

No more:

* lost data
* inconsistent updates
* component spaghetti communication

Instead, you get:

* discipline
* order
* predictability

Exactly what a good engineer wants to build large, scalable systems.


Below are **two architecture diagrams** for your Angular 17 + Redux (NgRx) project:

1. **ASCII Diagram** – perfect for classroom whiteboard teaching
2. **Clean Architecture Diagram** – polished, structured version for slides, notes, and documentation



# 🧱 **1. ASCII Architecture Diagram (Whiteboard-Friendly)**

```
                  ┌─────────────────────────┐
                  │       COMPONENTS        │
                  │  (UI triggers actions,  │
                  │   UI reads store data)  │
                  └───────────┬─────────────┘
                              │ dispatch
                              ▼
                     ┌──────────────────┐
                     │      ACTIONS     │
                     │ "What happened?" │
                     └──────────┬───────┘
                                │
                                ▼
                      ┌──────────────────┐
                      │     EFFECTS      │───────────────┐
                      │  (Side Effects)  │               │
                      └──────────┬───────┘               │
                                 │ API call              │
                                 ▼                       │
                         ┌──────────────────┐            │
                         │  BACKEND / API   │ ◄──────────┘
                         └──────────────────┘
                                 │ response
                                 ▼
                      ┌──────────────────┐
                      │  SUCCESS/ERROR   │
                      │     ACTIONS      │
                      └──────────┬───────┘
                                 │
                                 ▼
                     ┌───────────────────────┐
                     │        REDUCER        │
                     │  "How state changes?" │
                     └───────────┬───────────┘
                                 │ updates
                                 ▼
                         ┌──────────────────┐
                         │       STORE      │
                         │  (Single Source  │
                         │     of Truth)    │
                         └──────────┬───────┘
                                    │
                                    ▼ select()
                     ┌─────────────────────────┐
                     │        SELECTORS        │
                     │  (Expose slices of data)│
                     └───────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │         COMPONENTS       │
                    │     (UI automatically    │
                    │      receives updates)   │
                    └──────────────────────────┘
```


# 🎨 **2. Clean Architecture Diagram (Slide-Ready Version)**

```
 ┌──────────────────────────────────────────────────────────────┐
 │                          ANGULAR 17 UI                       │
 │                  (Components, Templates, Events)             │
 └───────────────▲───────────────────────┬──────────────────────┘
                 │ dispatch              │ select()
                 │                       │
 ┌───────────────┴───────────────────────▼──────────────────────┐
 │                           ACTIONS                            │
 │     (Describe events: LoadProducts, LoadSuccess, Error…)     │
 └───────────────▲───────────────────────┬──────────────────────┘
                 │                       │
                 │ (Side Effects)        │
 ┌───────────────┴───────────────────────▼──────────────────────┐
 │                           EFFECTS                            │
 │      - Listen to actions                                     │
 │      - Call backend/API                                      │
 │      - Dispatch success/error actions                        │
 └───────────────▲───────────────────────┬──────────────────────┘
                 │                       │ response
                 │                       │
 ┌───────────────┴───────────────────────▼──────────────────────┐
 │                           BACKEND                            │
 │              (REST API, database, server logic)              │
 └───────────────▲───────────────────────┬──────────────────────┘
                 │ success/error actions │
                 │                       │
 ┌───────────────┴───────────────────────▼──────────────────────┐
 │                           REDUCER                            │
 │   - Pure function                                            │
 │   - Updates and returns new state                            │
 │   - No API calls, no side effects                            │
 └───────────────▲───────────────────────┬──────────────────────┘
                 │ updates state         │
                 │                       │
 ┌───────────────┴───────────────────────▼──────────────────────┐
 │                            STORE                             │
 │                (Single application state container)          │
 └───────────────▲───────────────────────┬──────────────────────┘
                 │                       │ selectors read state
                 │                       │
 ┌───────────────┴───────────────────────▼──────────────────────┐
 │                          SELECTORS                           │
 │         (Expose derived, memoized, filtered state)           │
 └───────────────▲───────────────────────┬──────────────────────┘
                 │                       │
                 │ update UI automatically
                 ▼
 ┌──────────────────────────────────────────────────────────────┐
 │                          ANGULAR 17 UI                       │
 │                (Reactivity through Observables)              │
 └──────────────────────────────────────────────────────────────┘
```

Below is a **complete, small Angular 17 + NgRx Redux-style project** that you can directly teach in class.
Simple, clean, minimal — but enough to understand the full Redux flow (Action → Reducer → Selector → Effect → API → Store).


# 🚦 **Project Name:**

## **Product Dashboard (Angular 17 + NgRx)**

A small app that:

* Loads a product list from a fake API
* Shows loading state
* Uses Store, Actions, Reducer, Selectors, and Effects

Perfect for students to learn Redux pattern end-to-end.


# 🏗 Project Structure

```
src/
 └─ app/
     ├─ products/
     │   ├─ product.actions.ts
     │   ├─ product.reducer.ts
     │   ├─ product.effects.ts
     │   ├─ product.selectors.ts
     │   ├─ product.service.ts
     │   ├─ product-list.component.ts
     │   └─ product.model.ts
     └─ app.component.ts
```

# ⚙️ Step 1 — Install NgRx packages

```bash
ng new angular-redux-demo
cd angular-redux-demo

ng add @ngrx/store
ng add @ngrx/effects
ng add @ngrx/store-devtools
```

---

# 📁 Step 2 — Create Product Model

`product.model.ts`

```ts
export interface Product {
  id: number;
  name: string;
  price: number;
}
```

# 📁 Step 3 — Create Actions

`product.actions.ts`

```ts
import { createAction, props } from '@ngrx/store';
import { Product } from './product.model';

export const loadProducts = createAction('[Products] Load');

export const loadProductsSuccess = createAction(
  '[Products] Load Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load Failure',
  props<{ error: string }>()
);
```

# 📁 Step 4 — Create Initial State & Reducer

`product.reducer.ts`

```ts
import { createReducer, on } from '@ngrx/store';
import { loadProducts, loadProductsSuccess, loadProductsFailure } from './product.actions';
import { Product } from './product.model';

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const initialState: ProductState = {
  products: [],
  loading: false,
  error: null
};

export const productReducer = createReducer(
  initialState,

  on(loadProducts, (state) => ({
    ...state,
    loading: true
  })),

  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products
  })),

  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
```

# 📁 Step 5 — Create Selectors

`product.selectors.ts`

```ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

export const selectProductState =
  createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
  selectProductState,
  (state) => state.products
);

export const selectLoading = createSelector(
  selectProductState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectProductState,
  (state) => state.error
);
```

# 📁 Step 6 — Product Service (Fake API)

`product.service.ts`

```ts
import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  getProducts() {
    const fakeProducts: Product[] = [
      { id: 1, name: 'Laptop', price: 55000 },
      { id: 2, name: 'Keyboard', price: 1500 },
      { id: 3, name: 'Mouse', price: 800 }
    ];

    return of(fakeProducts).pipe(delay(1000)); // simulating API delay
  }
}
```

# 📁 Step 7 — Create Effects

`product.effects.ts`

```ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from './product.service';
import { loadProducts, loadProductsSuccess, loadProductsFailure } from './product.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ProductEffects {

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.service.getProducts().pipe(
          map(products => loadProductsSuccess({ products })),
          catchError(err =>
            of(loadProductsFailure({ error: 'Failed to load products' }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: ProductService) {}
}
```

# 📁 Step 8 — Register Store + Effects

Modify `main.ts` or inside `bootstrapApplication`:

```ts
import { provideStore } from '@ngrx/store';
import { productReducer } from './app/products/product.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductEffects } from './app/products/product.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ products: productReducer }),
    provideEffects([ProductEffects]),
    provideStoreDevtools()
  ]
});
```

# 📁 Step 9 — Create Product List Component

`product-list.component.ts`

```ts
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from './product.actions';
import { selectAllProducts, selectLoading, selectError } from './product.selectors';

@Component({
  selector: 'app-product-list',
  standalone: true,
  template: `
    <h2>Product List</h2>

    <button (click)="load()">Load Products</button>

    <p *ngIf="loading$ | async">Loading...</p>
    <p *ngIf="error$ | async as err">Error: {{ err }}</p>

    <ul>
      <li *ngFor="let p of (products$ | async)">
        {{ p.name }} - ₹{{ p.price }}
      </li>
    </ul>
  `
})
export class ProductListComponent {

  private store = inject(Store);

  products$ = this.store.select(selectAllProducts);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  load() {
    this.store.dispatch(loadProducts());
  }
}
```

# 📁 Step 10 — Show in App Component

`app.component.ts`

```ts
import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  template: `<app-product-list />`
})
export class AppComponent {}
```

# 🎉 **Your Angular 17 + NgRx Project Is Ready!**

When students click **Load Products**:

1. Component dispatches `loadProducts`
2. Effect calls fake API
3. Success action sent
4. Reducer updates store
5. Selectors update UI automatically

