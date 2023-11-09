# Lazy loading?
Think of a website with several pages, such as a social media application like LinkedIn or Instagram. Their performance deteriorates if all the modules load every time there is a change in the URL.

Lazy loading is a technique in which the browser loads only the necessary components or modules according to the requirements. All the modules will not be loaded regardless of the active route. For instance, if users want to create a new account on Instagram, they will click on the ‘Sign Up’ button. Here, we would want only the sign-up component to be loaded. Similarly, when the UI of the connections page is displayed, the corresponding connection’s component will be loaded.

## Steps to implement lazy loading
Here’s the <a href="https://github.com/RaviTambade/Angular.git">Github repository</a> where you can find the source code.

The following steps must be followed in order to accomplish lazy loading:

1. Create a module and a separate routing file
2. Create a component
3. Add the link to the header
4. Implement lazy loading with loadChildren
5. Set up the route

### Step 1: Create a module and a separate routing file
Independent routing is used to handle all the components of Angular 11 lazy loading modules.

Use the following command to create a module and a routing file, namely, lazy-loading:
```
ng g m lazy-loading –routing
```

Why begin by creating a module in the first place? Because the lazy loading of a single component is not possible. This is due to the structure of Angular. A module in Angular refers to a collection of components. In other words, an Angular module is a container defining all the components, services, pipes, etc., that it holds. The module declares a set of dependencies.

In the application dist, all these dependencies constitute a chunk, which is nothing but a transpiled js code. The main chunk consists of modules imported directly, whereas the modules to be lazily loaded form a separate chunk. Note that modules form a chunk while components don't. That's why lazy loading of a single component is not possible.

### Step 2: Create a component
In this step, we create a component within the lazy loading module.

Consider the example of a social media website. Let's say, there is a route ‘/user-dashboard’ to display the UI of the user’s dashboard with an option to create a new post as well as display the user’s older posts and other activities. Let's create a component for this and call it user-dashboard.

Here is the command:

```
ng g c user-dashboard
```

### Step 3: Add the link to the header
Add a link to the header on whose route lazy loading must be implemented. If you want only the ‘user-dashboard’ component to load when the corresponding route is active, add the following link to the header of the ‘/user-dashboard’ route.

The required snippet in the app.component.html will be:
```
< li class="nav-item" >
  < a class="nav-link" [ routerLink ]="[ '/user-dashboard' ]" >
 	      	Lazy Loading
   < /a >
< /li >
```
### Step 4: Implement lazy loading with loadChildren
Here, we lazily load the component displayed on the ‘/user-dashboard’ route using loadChildren. This can be implemented in two ways:

Using promise
Using async
Using promise

First, let's look at how to implement lazy loading with loadChildren by writing a piece of code using the promise-based syntax. To accomplish the same, make the following changes in app-routing.module.ts:

```
{
   path: 'user-dashboard’',
   loadChildren: () =>   
  import('./lazy-loading/lazy-loading.module')
 	.then(m => m.LazyLoadingModule)
} ,
```

Mention the ‘/user-dashboard’ route as the value of the path property. Note that in the import statement, we are also loading the lazy loading module that we just created.

The above code uses a promise-based syntax to declare which routes must be lazily loaded. The routes to be lazily loaded are added to the loadChildren property as shown in the given code. However, promises are very basic and an advanced version, such as Angular 11, ought to employ an easier style of coding.

Using async

Async can be used instead of promises to make the code simpler, more readable, and more presentable. The same code can be rewritten using async as follows:

```
const routes: Routes = [
  {
	path: 'lazy',
	loadChildren: async () => (await import('./lazy-loading/lazy-loading.module’)).LazyLoadingModule,
  } ,
  ] ;

  ```

The difference between the second code using async() and the first code using .then() or promises is that the .then() is discarded by using the await the return value from await import(...), and by referencing LazyLoadingModule directly in a single line rather than using then() and mentioning LazyLoadingModule.

### Step 5: Setting up the route
Finally, we set up the route with the following code in user-dashboard-routing.module.ts file.

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component'; 
const routes: Routes = [
 { path: '', component: UserDashboardComponent }
]; 
@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
}) 
export class UserDashboardRoutingModule { }
```

### Verification
When you run the application, you will notice that the lazy loading module is loaded if and only if the route ‘/user-dashboard’ is hit. This is a manual, as well as the simplest, method to verify lazy loading for an Angular application.

The other way is to generate a build and notice the output. Type the following command:

```
npm run build
```

It is always advisable to lazy-load all or at least most of the modules whenever an application consists of a lot of modules.