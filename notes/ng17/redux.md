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
│  Component    │ ─────────────────▶ │    Action     │
└──────────────┘                     └──────────────┘
                                              │
                                              ▼
                                      ┌──────────────┐
                                      │    Reducer    │
                                      └──────────────┘
                                              │
                                 update state ▼
                                      ┌──────────────┐
                                      │    Store      │
                                      └──────────────┘
                                              │
                                Component reads▼
                                      ┌──────────────┐
                                      │  Selector     │
                                      └──────────────┘

If API required:
Action → Effect → API → Success Action → Reducer → Store
```

# 🧠 **Why Redux Is Powerful in Angular 17**

✔ Predictable state
✔ Debuggable (Redux DevTools)
✔ Testable
✔ Scalable
✔ One place to track changes
✔ No more “Who changed the data?” confusion


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

