

# Understanding Interceptors in Angula

Imagine you're building a highway system inside your Angular app.
Every **HTTP request** your app makes is a car entering the highway…
Every **HTTP response** is a car returning from its trip.

Now imagine you have toll gates, security checks, and repair stations placed along this highway. You don’t want every component to manually stop the car and do these things. That would make your code messy.

**This is where Interceptors come in.**

💡 **Interceptors are like middleware gates on the HTTP highway.**
They can inspect, modify, block, or clone every request **before it leaves**, and every response **as it returns**.



## 🎯 What Are Interceptors in Angular 17?

In Angular 17, an **Interceptor** is:

✔ A **function** (not a class anymore)
✔ That sits between your application and the backend
✔ And can **read, modify, or handle** all HTTP requests and responses
✔ Provided via `provideHttpClient(withInterceptors([...]))`

> Think of it as a “security officer + quality checker” who touches every request automatically.


## 🆕 Why Angular 17 Changed Interceptors?

Older Angular versions required:

* Class-based interceptors
* Registered in NgModule
* More boilerplate

Angular 17 says:

✨ “Less syntax. More clarity.”

So now interceptors are **simple functions**.
No classes.
No NgModules.
Easy to test.
Easy to maintain.



### 🧠 What can an Interceptor do?

You can use interceptors to:

- 1️⃣ Add JWT tokens to all outgoing requests

(so you don’t manually add headers everywhere)

- 2️⃣ Handle 401 errors (Unauthorized)

(automatically redirect user to login)

- 3️⃣ Log or monitor network calls

(for debugging or analytics)

- 4️⃣ Modify request body or headers

(for API versioning, localization, etc.)

- 5️⃣ Retry failed requests

(with exponential backoff)

- 6️⃣ Transform responses

(remove clutter, normalize data)

> Interceptors are global — **one place controls everything**.



**Interceptors in Angular 17 are middleware functions that allow you to automatically modify all HTTP requests and responses. They’re used for JWT tokens, error handling, logging, retries, and more.**

### Let us implement in our Angular 17 Project


#### ✅ **1. Project Setup**

Install Bootstrap (optional UI):

```bash
npm install bootstrap
```

Add to `styles.css`:

```css
@import "bootstrap/dist/css/bootstrap.min.css";
```

#### ✅ **2. AuthService — Token Storage**

`src/app/auth.service.ts`

```ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('jwt', token);
  }

  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('jwt');
    }
    return this.token;
  }

  logout() {
    this.token = null;
    localStorage.removeItem('jwt');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
```

#### ✅ **3. JWT Interceptor — Automatically adds the token**

`src/app/jwt.interceptor.ts`

```ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.getToken();

  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(req).pipe(
    tap((event: any) => {
      // Capture token from login API response
      if (event?.body?.token) {
        auth.setToken(event.body.token);
      }
    })
  );
};
```
#### ✅ **4. Auth Guard for Route Protection**

`src/app/auth.guard.ts`

```ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn()) return true;

  router.navigate(['/login']);
  return false;
};
```

#### ✅ **5. Auth API (Login HTTP call)**

`src/app/auth.api.ts`

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthApi {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post('https://yourapi.com/login', { username, password });
  }
}
```

#### ✅ **6. Login Component (UI + Logic)**

Create component:

```bash
ng g component login --standalone --skip-tests
```

### `src/app/login/login.component.ts`

```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApi } from '../auth.api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private api: AuthApi, private router: Router) {}

  login() {
    this.api.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: () => this.error = 'Invalid credentials'
    });
  }
}
```

### `login.component.html`

```html
<div class="container mt-5" style="max-width: 400px;">
  <h3 class="text-center mb-4">Login</h3>

  <div class="alert alert-danger" *ngIf="error">{{ error }}</div>

  <form (ngSubmit)="login()">
    <div class="mb-3">
      <label>Username</label>
      <input class="form-control" [(ngModel)]="username" name="username">
    </div>

    <div class="mb-3">
      <label>Password</label>
      <input type="password" class="form-control" [(ngModel)]="password" name="password">
    </div>

    <button class="btn btn-primary w-100">Login</button>
  </form>
</div>
```

### ✅ **7. Dashboard Component (Protected Page)**

```bash
ng g component dashboard --standalone --skip-tests
```

#### `dashboard.component.ts`

```ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div class="container mt-5">
      <h2>Welcome to Dashboard</h2>
      <button class="btn btn-danger mt-3" (click)="logout()">Logout</button>
    </div>
  `
})
export class DashboardComponent {
  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
```

### ✅ **8. App Routing (Standalone)**

`app.routes.ts`

```ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [authGuard] 
  }
];
```

---

### ✅ **9. main.ts — Register HttpClient + Interceptor**

`main.ts`

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { jwtInterceptor } from './app/jwt.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([jwtInterceptor])
    )
  ]
});
```

###  🎉 **Login + JWT Authentication is READY!**

✔ Login UI
✔ Makes API call
✔ JWT extracted by interceptor
✔ Token stored safely
✔ Added automatically to all requests
✔ Dashboard protected
✔ Logout works


### How Interceptors Work (Mentor Analogy)

Let’s walk through an example:

### You call:

```ts
this.http.get('/api/products')
```

### Angular pipeline:

1. Your request enters the “HTTP highway”
2. Passes through **Interceptor #1** (JWT)
3. Passes through **Interceptor #2** (Logging)
4. Leaves the app → Backend server
5. Response enters
6. Interceptor #2 logs response
7. Interceptor #1 checks for errors (401)
8. Component finally receives the data

Every interceptor becomes a **layer** wrapping the request like an onion.


### 🧬 Interceptor Order

The order you register interceptors is the order they run for requests.

Example:

```ts
withInterceptors([
  jwtInterceptor,
  loggingInterceptor,
  errorHandlingInterceptor
])
```

Order for **request**:
➡ JWT → Logging → ErrorHandling

Order for **response**:
⬅ ErrorHandling → Logging → JWT

(Reverse on the return path)
