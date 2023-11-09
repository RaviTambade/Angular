<b>Angular</b> is a JavaScript framework for building both client and server-side apps. 
Angular, a front-end framework for building robust, cross-platform, client-side applications.
Angular is component centric framework that is a complete rewrite of AngularJS. It uses Typescript as a default language to create apps in. 
The JavaScript and web world has changed a lot in few years.  Web Applications could be server side rendered or client side rendered.

### Server-side rendered
In server-side rendered web applications, most of the application’s logic resides on the server, and remains there. The user basically enters the URL, the request gets send to the server, which then produces the final HTML containing the requested data and sends that back to the browser which simply renders it out. When the user interacts with the page, that request gets again sent to the server, which in turn generates a new HTML page and serves it back to the browser.

### Client-side rendered
Modern web pages often require to work more like applications do on the desktop, though. People demand for a much better user experience, more interactivity, fast transitions between “pages” and even offline capabilities. That’s where the so-called SPAs (Single Page Applications) come into play.
When the user enters the URL, the web server responds with an HTML page, but also with a set of resources (JavaScript files and images) that make up our client-side application. The browser receives that, loads the JavaScript application and “boots it”. Now it’s the job of that application to dynamically generate the user interface (HTML) based on the data, right from within the browser. After that happens, every new user action doesn’t reload the entire web site again, but rather the data for that specific user interaction is send to the server (usually by using the JSON format) and the server in turn responds with the just the amount of data requested by the JavaScript client, again using JSON (normally). The JavaScript application gets the data, parses it and dynamically generates HTML code which is shown to the user.
 

As you can see, the amount of data that is being exchanged is very optimized. However, a big downside of such type of applications is that the startup time is usually much longer. You might already have figured why: well, because the browser doesn’t get the HTML code to show, but rather a bunch of JavaScript files that need to be interpreted, and executed, and which in turn then generates the final HTML to be shown to the user.

Learning curve?
•	Both Angular and React have steep learning curves. Angular is written in TypeScript, a superset of JavaScript that brings type checking to JS. 
•	As a framework, Angular also relies heavily on dependency injection (DI). This can take some getting used to as Angular introduces a lot of magical boilerplate code that's confusing and hard to pick up. Things like annotations, providers, decorators can be hard to understand with Angular 2.
•	React takes some getting used to as well. It uses JSX for rendering DOM templates. While JSX allows developers to construct templates directly in JavaScript code, it doesn't exactly match up with classic HTML. JSX syntax can take some getting used to even if your an experienced web developer.
•	Additionally, React relies heavily on third party libraries to supplement it's core functionality. For example, you need an external library for AJAX calls (Axios) and routing. While this provides developers with more architectural design freedom, it also makes things harder to standardize with React. This can drastically increase learning curves and the ability for new developers to "jump in" to an existing React code base.
•	Both React and Angular require preprocessing or transpiling of assets. While bundlers like Webpack make configuration easier, it's equally challenging to set up development environments for React and Angular for first timers. Unlike jQuery or other JavaScript libraries, you can't just throw in a CDN reference and start programming with Angular or React (this is not the case for Angular 1, so there's one thing the original still has going for it!).
How well is it supported?
•	React is backed by Facebook. Angular by Google. Next topic.
•	The competing strength of these ecosystems keeps both competitive. While Angular has TypeScript, React has Flow for type checking. While Angular has a great CLI, React has create-react-app. React has React Native. Angular has Ionic. Angular Universal allows for server-side rendering, but so does React's next.js.
•	The point is that these competitors have strong communities backing them. Each one seems to answer any deficiencies with their own solutions. For these reasons, choosing React vs Angular is largely a personal preference.
Performance?
Ever since Angular abandoned the idea of bidirectional data flow and the digest cycle, the difference between Angular and React performance is negligible. Both React and Angular leverage unidirectional data flow and the virtual DOM to improve rendering. While React may have a slight edge in some circumstances, basing your decision around performance is silly with React and Angular.
 
