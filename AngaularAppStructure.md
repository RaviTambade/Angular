
Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.


Modules
Angular framework is built with the help of modules. Angular modules are logical collections of Component, directives, pipes, services, decorators, classes, interfaces, constants, etc.
Every Angular app has a root module, conventionally named AppModule, which provides the bootstrap mechanism that launches the application. An app typically contains many functional modules.
The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.
Like JavaScript modules, NgModules can import functionality from other NgModules, and allow their own functionality to be exported and used by other NgModules. For example, to use the router service in your app, you import the Router NgModule.
Organizing your code into distinct functional modules helps in managing development of complex applications, and in designing for reusability. In addition, this technique lets you take advantage of lazy-loading—that is, loading modules on demand—to minimize the amount of code that needs to be loaded at startup.

Components
Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data. Every app has at least a root component.
Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.
Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how to use them.


Templates, directives, and data binding
A template combines HTML with Angular markup that can modify the HTML elements before they are displayed. Template directives provide program logic, and binding markup connects your application data and the document object model (DOM).
Event binding lets your app respond to user input in the target environment by updating your application data.
Property binding lets you interpolate values that are computed from your application data into the HTML.
Before a view is displayed, Angular evaluates the directives and resolves the binding syntax in the template to modify the HTML elements and the DOM, according to your program data and logic. Angular supports two-way data binding, meaning that changes in the DOM, such as user choices, can also be reflected into your program data.

Services and Dependency Injection
Besides components, Angular always had the concept of Services and Dependency Injection. So does Angular 2. While the component is meant to deal with the UI and related stuff, the service is the place where you put your “business logic” s.t. it can be shared and consumed by multiple components. A service is nothing else than a simple ES6 class:


Router for Navigation (SPA – Single Page Application)
An app's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.

