# Angular Architecture
- Angular is a full-fledged <b>model-view-controller (MVC)</b> framework. 
- It provides clear guidance on how the application should be structured and offers bi-directional data flow while providing real DOM. 

<img src="/images/ngarchitecture.jpg"/>

The following are the essential components that go into creating an Angular Application. 

- Modules 
- Components 
- Services 
- Templates 
- Metadata 
- The process of tying data together. 
- Directives 


1. <b>Modules</b> :

An Angular application wouldn't be what it is today without modules. Components in an Angular application are organized into modules. You may think of a module as a collection of connected components. The App Module or Root Module must be present in every Angular application. Angular applications may be broken down into smaller modules. 

Multiple components may be included in a single product module, such as a Product List, Description, and Rating. 

An Angular app has a root module, named AppModule, which provides the bootstrap mechanism to launch the application.

2. <b>Components</b>:
Angular's architecture is built on components. The template, data, and logic are all contained inside a Component in an Angular application. There may be one or more components in an Angular application. 

Consider the Product Review System as an example. Product List, Product Description, and Product Rating may all be included on a single page. 

Each component in the application defines a class that holds the application logic and data. A component generally defines a part of the user interface (UI).

3. <b>Services</b>:When you have data or logic that isn’t associated with the view but has to be shared across components, a service class is created. The class is always associated with the @Injectible decorator.

4. <b>Templates</b>:The Angular template combines the Angular markup with HTML to modify HTML elements before they are displayed. There are two types of data binding:

5. <b>Metadata</b>:Metadata tells Angular how to process a class. It is used to decorate the class so that it can configure the expected behavior of a class.


6. <b>Dependency Injection</b>: This feature lets you keep your component classes crisp and efficient. It does not fetch data from a server, validate the user input, or log directly to the console. Instead, it delegates such tasks to the services.

## Advantanges of Angular

Angular comes with its own set of advantages 

1. <b>Custom Components</b> : Angular enables users to build their own components that can pack functionality along with rendering logic into reusable pieces. It also plays well with web components.

2. <b> Data Binding</b>:Angular enables users to effortlessly move data from JavaScript code to the view, and react to user events without having to write any code manually.

3. <b>Testing</b> :Tests are first-class tools, and Angular has been built from the ground up with testability in mind. You will have the ability to test every part of your application—which is highly recommended.

4. <b>Comprehensive</b>:Angular is a full-fledged framework and provides out-of-the-box solutions for server communication, routing within your application, and more.

5. <b>Browser Compatibility</b>: Angular is cross-platform and compatible with multiple browsers. An Angular application can typically run on all browsers (Eg: Chrome, Firefox) and OSes, such as Windows, macOS, and Linux.


 ## Limitations of Angular
1. <b>Steep Learning Curve</b> :The basic components of Angular that all users should know include directives, modules, decorators, components, services, dependency injection, pipes, and templates. More advanced topics include change detection, zones, AoT compilation, and Rx.js. For beginners, Angular 4 may be challenging to learn because it is a complete framework. 

2. <b>Limited SEO Options</b>: Angular offers limited SEO options and poor accessibility to search engine crawlers.

3. <b>Migration</b>:One of the reasons why companies do not frequently use Angular is the difficulty in porting legacy js/jquery-based code to angular style architecture. Also, each new release can be troublesome to upgrade, and several of them are not backward-compatible.
4. <b>Verbose and Complex</b>:A common issue in the Angular community is the verbosity of the framework. It is also fairly complex compared to other front-end tools.

### Companies Using Angular
<p>Many top tier companies, such as Google, Nike, Upwork, HBO, and others leverage Angular.</p>
