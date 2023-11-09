# Angular Architecture
Angular is a full-fledged model-view-controller (MVC) framework. It provides clear guidance on how the application should be structured and offers bi-directional data flow while providing real DOM. 
<img src="/images/AngularArchitecture.png" width="200" height="200"/>

1. <b>Modules</b>
<p>An Angular app has a root module, named AppModule, which provides the bootstrap mechanism to launch the application.
<p>

2. <b>Components</b>
<p>Each component in the application defines a class that holds the application logic and data. A component generally defines a part of the user interface (UI).</p>

3. <b>Templates</b>
<p>The Angular template combines the Angular markup with HTML to modify HTML elements before they are displayed. There are two types of data binding: <p>

4. <b>Metadata</b>
<p>Metadata tells Angular how to process a class. It is used to decorate the class so that it can configure the expected behavior of a class.</p>

5. <b>Services</b>
<p>When you have data or logic that isn’t associated with the view but has to be shared across components, a service class is created. The class is always associated with the @Injectible decorator.</p>


6. <b>Dependency Injection</b>
<p>This feature lets you keep your component classes crisp and efficient. It does not fetch data from a server, validate the user input, or log directly to the console. Instead, it delegates such tasks to the services.</p>

## Advantanges of Angular

Angular comes with its own set of advantages 

1. <b>Custom Components<b>
<p>Angular enables users to build their own components that can pack functionality along with rendering logic into reusable pieces. It also plays well with web components.</p>

2.<b> Data Binding</b>
<p>Angular enables users to effortlessly move data from JavaScript code to the view, and react to user events without having to write any code manually. </p>

3.<b> Dependency Injection</b>
<p>Angular enables users to write modular services and inject them wherever they are needed. This improves the testability and reusability of the same services. <p>

4. <b>Testing</b>
<p>Tests are first-class tools, and Angular has been built from the ground up with testability in mind. You will have the ability to test every part of your application—which is highly recommended. </p>

5. <b>Comprehensive</b>
<p>Angular is a full-fledged framework and provides out-of-the-box solutions for server communication, routing within your application, and more.
</p>

6. <b>Browser Compatibility</b>
<p>Angular is cross-platform and compatible with multiple browsers. An Angular application can typically run on all browsers (Eg: Chrome, Firefox) and OSes, such as Windows, macOS, and Linux.</p>

 ## Limitations of Angular
1. <b>Steep Learning Curve</b>
<p>The basic components of Angular that all users should know include directives, modules, decorators, components, services, dependency injection, pipes, and templates. More advanced topics include change detection, zones, AoT compilation, and Rx.js. For beginners, Angular 4 may be challenging to learn because it is a complete framework.</p> 

2. <b>Limited SEO Options</b>
<p>Angular offers limited SEO options and poor accessibility to search engine crawlers. </p>

3. <b>Migration</b>
<p>One of the reasons why companies do not frequently use Angular is the difficulty in porting legacy js/jquery-based code to angular style architecture. Also, each new release can be troublesome to upgrade, and several of them are not backward-compatible.</p>

4. <b>Verbose and Complex</b>
<p>A common issue in the Angular community is the verbosity of the framework. It is also fairly complex compared to other front-end tools.</p>


### Companies Using Angular
<p>Many top tier companies, such as Google, Nike, Upwork, HBO, and others leverage Angular.</p>
