# Angular Routing

<img src="/images/ngrouting.png"/>

## What is Routing?
Angular is a popular open-source JavaScript framework for building web applications. It was developed by Google and is currently maintained by the Angular Team at Google. Angular allows developers to create dynamic, single-page applications (SPAs) and provides a structured approach to building complex web applications.


Routing, in the context of web development, refers to the process of determining how an application responds to a specific URL or path. It involves mapping URLs to different components or views within the application and rendering the appropriate content based on the requested URL.

In a client-side web application, such as a single-page application (SPA) built with Angular, routing allows users to navigate between different views or pages without actually loading a new HTML page from the server. Instead, the application dynamically updates the content in the browser by loading the necessary components and data based on the requested route.

### Benefits of Routing

Routing in web applications offers several benefits. Here are some key advantages of using routing:

- <b>Improved User Experience</b>: Routing enables a seamless and interactive user experience by allowing users to navigate between different views or pages within the application without a full page reload.

- <b>Faster Page Transitions</b>: With routing, only the necessary components and data for the requested route are loaded, resulting in faster page transitions.

- <b>Modularity and Maintainability</b>: Routing encourages a modular structure for the application by separating it into different views or components associated with specific routes. This promotes code reusability, separation of concerns, and better maintainability. Each route can have its own component, making it easier to manage and update specific sections of the application independently.

- <b>Conditional Rendering and Dynamic Content</b>: Routing enables conditional rendering of components based on the current route. This allows you to show or hide certain sections of the application based on the user’s navigation path.

- <b>Route Parameters and Query Parameters</b>: Routing supports passing route parameters and query parameters. Route parameters allow you to pass dynamic values within the URL, such as an ID or a username, and retrieve them in the corresponding component. Query parameters provide a way to pass additional data into the URL for filtering, sorting, or other purposes.

- <b>Route Guards and Security</b>: Angular routing includes route guards, which are mechanisms to control access to specific routes based on certain conditions. Route guards can be used for authentication, authorization, and other security-related purposes. They help ensure that users can only access routes or perform actions if they meet the necessary criteria.

- <b>Nested Routes</b>: Routing supports nested or child routes, allowing you to define a hierarchical navigation structure within the application. This is particularly useful when dealing with complex applications with multiple levels of navigation or sections that need to be encapsulated and managed independently.

Overall, routing plays a crucial role in enhancing the user experience, improving performance, and enabling modular and maintainable code structures in web applications.


### Routing in Angular
In a client-side web application, such as a single-page application (SPA) built with Angular, routing allows users to navigate between different views without actually loading a new HTML page from the server. Instead, the application dynamically updates the content in the browser by loading the necessary components and data based on the requested route.

Routing in Angular typically involves the following components:

- <b>Routes</b>: Routes define the mapping between the URL path and the corresponding components to be rendered. Each route is defined with a URL path and a corresponding component to be displayed when that path is accessed.

- <b>Router</b>: The router is responsible for interpreting the current URL and loading the appropriate components based on the defined routes. It listens to URL changes and handles navigation within the application.

- <b>Router Outlet</b>: The router outlet is a placeholder in the application’s template where the content of the current route is rendered.


The Router-Outlet is a directive that’s available from the router library where the Router inserts the component that gets matched based on the current browser’s URL. You can add multiple outlets in your Angular application which enables you to implement advanced routing scenarios.

```
<router-outlet></router-outlet>
```


- <b>Router Links and Navigation</b>: Links and navigation elements, such as anchor tags (<a>) or buttons, are used to trigger navigation to different routes within the application. These elements can be decorated with directives like routerLink in Angular to specify the target route.


Routes are definitions (objects) comprised from at least a path and a component (or a redirectTo path) attributes. The path refers to the part of the URL that determines a unique view that should be displayed, and component refers to the Angular component that needs to be associated with a path. Based on a route definition that we provide (via a static RouterModule.forRoot(routes) method), the Router is able to navigate the user to a specific view.

Each Route maps a URL path to a component.

The path can be empty which denotes the default path of an application and it’s usually the start of the application.

The path can take a wildcard string (**). The router will select this route if the requested URL doesn’t match any paths for the defined routes. This can be used for displaying a “Not Found” view or redirecting to a specific view if no match is found.

This is an example of a route:
```
{ path:  'contacts', component:  ContactListComponent}

```

In Angular, the RouterModule and Routes are key components used for configuring and managing routing in an application.

- <b>RouterModule</b>:
The RouterModule is an Angular module that provides the necessary directives, services, and functionality for implementing routing in an application.

- <b>Routes</b>:
Routes is an array that defines the routes and their configurations within the application. Each route object within the Routes array specifies the URL path and the corresponding component to be rendered when that path is accessed.


- <b>ROUTE PARAMS #</b>
Creating routes with parameters is a common feature in web apps. Angular Router allows you to access parameters in different ways:

### Using the ActivatedRoute service,


You can create a route parameter using the colon syntax. This is an example route with an id parameter:

```
{ path:  'contacts/:id', component:  ContactDetailComponent}
```


### ROUTE GUARDS #
A route guard is a feature of the Angular Router that allows developers to run some logic when a route is requested, and based on that logic, it allows or denies the user access to the route. It’s commonly used to check if a user is logged in and has the authorization before he can access a page.

You can add a route guard by implementing the CanActivate interface available from the @angular/router package and extends the canActivate() method which holds the logic to allow or deny access to the route. For example, the following guard will always allow access to a route:

```
class MyGuard implements CanActivate {
  canActivate() {
    return true;
  }
}
```
You can then protect a route with the guard using the canActivate attribute:


```
{ path:  'contacts/:id, canActivate:[MyGuard], component:  ContactDetailComponent}
```

### NAVIGATION DIRECTIVE #

The Angular Router provides the routerLink directive to create navigation links. This directive takes the path associated with the component to navigate to. For example:

```
<a [routerLink]="'/contacts'">Contacts</a>
```







