# 🧱 **Mini Global Store Using Signals (Angular 17)**

### 🏷 Example Domain: Counter + User Session


# ✅ 1. Create a Global Store Service

`app/store/app.store.ts`

```ts
import { Injectable, signal, computed } from '@angular/core';

export interface AppState {
  count: number;
  user: { name: string } | null;
}

@Injectable({ providedIn: 'root' })
export class AppStore {
  // ---- STATE ----
  private state = signal<AppState>({
    count: 0,
    user: null
  });

  // ---- SELECTORS ----
  count = computed(() => this.state().count);
  user = computed(() => this.state().user);

  isLoggedIn = computed(() => this.state().user !== null);

  // ---- ACTIONS ----
  increment() {
    this.state.update(s => ({
      ...s,
      count: s.count + 1
    }));
  }

  decrement() {
    this.state.update(s => ({
      ...s,
      count: s.count - 1
    }));
  }

  resetCount() {
    this.state.update(s => ({
      ...s,
      count: 0
    }));
  }

  login(name: string) {
    this.state.update(s => ({
      ...s,
      user: { name }
    }));
  }

  logout() {
    this.state.update(s => ({
      ...s,
      user: null
    }));
  }
}
```

# 🧩 2. Counter Component Connected to Store

`app/counter/counter.component.ts`

```ts
import { Component } from '@angular/core';
import { AppStore } from '../store/app.store';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <h3>Counter (Global Store)</h3>

    <p>Value: <strong>{{ store.count() }}</strong></p>

    <button (click)="store.increment()">+</button>
    <button (click)="store.decrement()">-</button>
    <button (click)="store.resetCount()">Reset</button>
  `
})
export class CounterComponent {
  constructor(public store: AppStore) {}
}
```

# 👤 3. User Component (Global Login State)

`app/user/user.component.ts`

```ts
import { Component } from '@angular/core';
import { AppStore } from '../store/app.store';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <h3>User (Global Store)</h3>

    <p *ngIf="store.isLoggedIn(); else guest">
      Logged in as <strong>{{ store.user()?.name }}</strong>
      <button (click)="store.logout()">Logout</button>
    </p>

    <ng-template #guest>
      <button (click)="store.login('Ravi')">Login as Ravi</button>
    </ng-template>
  `
})
export class UserComponent {
  constructor(public store: AppStore) {}
}
```

# 🏠 4. App Component — Combine Everything

```ts
import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, UserComponent],
  template: `
    <h1>Signal Global Store (Mini NgRx)</h1>
    <app-user></app-user>
    <app-counter></app-counter>
  `
})
export class AppComponent {}
```


# 🔍 Architecture Diagram — Mini NgRx Using Signals

```
                  ┌────────────────────────┐
                  │      AppStore          │
                  │------------------------│
      Actions --->│ increment()            │
                  │ decrement()            │
                  │ login(), logout()      │
                  │------------------------│
                  │ state = signal({})     │
                  │ selectors = computed() │
                  └──────────┬─────────────┘
                             │
                             │
            ┌────────────────┴────────────────┐
            │                                 │
  ┌──────────────────┐              ┌──────────────────┐
  │  CounterComponent │              │   UserComponent  │
  │   store.count()   │              │ store.user()     │
  │ store.increment() │              │ store.login()    │
  └──────────────────┘              └──────────────────┘
```



# 🧠 Mentor-Style Explanation

Imagine your **AppStore** is a **control room**:

* All state lives in **one place**
* Components are only **screens** showing data
* Components don’t store logic
* Actions are **commands sent to the control room**
* Signals auto-update all screens instantly

This gives you:

- ✔ Predictability
- ✔ Debuggable state
- ✔ Centralized actions (increment, login)
- ✔ Tiny codebase
- ✔ No reducers, effects, modules, actions files — unlike NgRx



# 🎁 Want More?

I can also give you:

✅ **Mini NgRx with Ef fects (Signal-based async calls)**
Example: API → Store → Components

✅ **Feature modules with shared signal store**

✅ **Redux DevTools integration for Signals**

Just tell me!
