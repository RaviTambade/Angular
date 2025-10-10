
# 🏗️ Angular Before (Classic with NgModule)

### 🧱 Project Structure (Simplified)

```
src/
 ├── app/
 │   ├── app.module.ts        ← 🧩 Required main module
 │   ├── app.component.ts
 │   ├── home/
 │   │   ├── home.component.ts
 │   └── about/
 │       ├── about.component.ts
 ├── main.ts
```

 

### ⚙️ 1. `app.module.ts`

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // routes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent], // all components must be declared here
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent] // root component
})
export class AppModule { }
```

 

### ⚙️ 2. `main.ts`

```ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

 

### ⚙️ 3. `app-routing.module.ts`

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

 

### 🧩 Result

✅ Works fine but:

* You must declare every component in a module
* Need multiple files for routing and module
* Not easy to reuse or lazy-load small pieces

 

# 🌟 Angular Now (Standalone in v17)

### 🧱 Project Structure (Simplified)

```
src/
 ├── app/
 │   ├── app.component.ts     ← standalone root component
 │   ├── app.routes.ts        ← simple route config
 │   ├── home/
 │   │   ├── home.component.ts
 │   └── about/
 │       ├── about.component.ts
 ├── main.ts
```

 

### ⚙️ 1. `main.ts` (No module needed)

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
```

 

### ⚙️ 2. `app.component.ts`

```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,         // ✅ makes it standalone
  imports: [RouterOutlet],  // directly import what you need
  template: `
    <h1>🌐 Angular 17 Standalone App</h1>
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/about">About</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
```

 

### ⚙️ 3. `app.routes.ts`

```ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) }
];
```

 

### ⚙️ 4. `home.component.ts`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<h2>🏠 Welcome Home!</h2>`
})
export class HomeComponent {}
```

 

### ⚙️ 5. `about.component.ts`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `<h2>ℹ️ About Page</h2>`
})
export class AboutComponent {}
```

 

### 🧩 Result

✅ Works perfectly — with fewer files and simpler flow:

* No `AppModule` or `AppRoutingModule`
* Each component knows its own imports
* Routing uses `loadComponent` for lazy loading
* Bootstrapping is direct and modern

 

# 🔍 Side-by-Side Summary

| Concept               | Classic Angular                       | Standalone Angular                   |
| --------------------- | ------------------------------------- | ------------------------------------ |
| Root Module           | `AppModule`                           | ❌ Not needed                         |
| Component Declaration | Inside `NgModule`                     | Inside itself                        |
| Bootstrapping         | `platformBrowserDynamic(AppModule)`   | `bootstrapApplication(AppComponent)` |
| Routing               | `AppRoutingModule` + `loadChildren()` | `app.routes.ts` + `loadComponent()`  |
| Reusability           | Hard (must import modules)            | Easy (import components directly)    |
| Lazy Loading          | By feature modules                    | By component                         |
| Boilerplate           | High                                  | Minimal                              |

 

# 🧠 Real-world analogy

Think of **Classic Angular** as a *school* 🏫:

* Every student (component) must be enrolled in a class (module) before participating.

Now in **Standalone Angular**, every student is **independent** 🧍‍♀️:

* They can join any activity (app) directly — as long as they know what they need (imports).

 
