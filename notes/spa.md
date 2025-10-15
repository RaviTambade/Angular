
# Web Application  Architectures


//lkdlkgd;lkg;ld

<img src="/images/spa_mpa.png"/>


## Single Page Application (SPA)

SPAs started to become popular around the mid 2010’s with the arrival of frameworks like React, Angular and Vue. 

A single-page application is an app that doesn’t need to reload the page during its use and works within a browser. Facebook, Google Maps, Gmail, Twitter, Google Drive, or even GitHub are examples of a SPA.

Think of how Facebook, Twitter and Instagram allow users to continually scroll through a main feed. This is the magic behind SPAs. If these platforms operated as a multi-page application, users would need to refresh their page every time the feed ran out, interrupting the experience.

One of the best advantages of a correctly-configured SPA is the user experience (UX).End user enjoys the natural environment of the app without having to wait for the page reloads and other things. You remain on the same page, which is powered by JavaScript programming language. 

### Advantages of Single Page Application

- <b>The main advantage of single-page applications is their speed.</b>
 Most resources SPA needs (HTML + CSS + Scripts) are loaded at the launch of the app and don’t need to be reloaded during usage. The only thing that changes is the data that is transmitted to and from the server. As a result, the application is very responsive to the user’s queries and doesn’t have to wait for client-server communication all the time.

    - "one second of load lag time would cost Amazon $1.6 billion sales per year."- Amazon
    - "When load time jumps from 1 second to 4 seconds, conversions decline sharply. For every one second improvement, we experience a 2% conversion increase." - Walmart
    - "A lag time of 400 ms results in a decrease of 0.44% traffic- In real terms this amounts to 440 million abandoned sessions/month and a massive loss in advertising revenue for Google." - Google
    - "An extra 0.5 seconds in each search page generation would cause traffic to drop by 20%." -Google

- <b>Single-page applications are excellent when you have a team of developers working together.</b>
It allows backend developers to focus on the API, while frontend developers can pay more attention to creating the best user experience based on the backend API and implementing a beautiful user interface.

- <b>Debugging a single-page application</b>
Debugging is also easy using the Chrome browser since it has special tools for Angular Batarang and React (the technologies used for SPAs.) Using a console, you can monitor network operations as well as investigate various page elements and associated data. 
- <b>Caching process is also quite efficient</b> – 
The application sends only one request, stores all data transmitted, and can use this data. This is especially important at times when the user can have poor connectivity – s/he can still use your app since it’s synchronized with the server when the connection improves.


### Advantages of Single Page Application

- <b>Single-page applications put a more significant load on the browser.</b> For example, if your users have low-power devices, they will have a poor app experience in terms of speed.
- Since the app can run for a long time – hours at a time, you need to make sure your SPA doesn’t consume more memory than it needs. Otherwise, <b>the pleasure of fast-loading pages will be destroyed by the sluggishness of unavailable memory on the user’s device</b>.
- One more disadvantage of JavaScript is that <b>users simply can have it disabled on their devices</b>, and then you need to think of additional ways how they can access the information on your website or your app without JavaScript.
- <b>Security leaks</b> are a potential disadvantage of Single Page Applications (SPAs) due to the heavy reliance on JavaScript. Because most application logic is executed on the client side, it can be more vulnerable to certain types of attacks like cross-site scripting (XSS) or cross-site request forgery (CSRF) attacks. XSS attacks occur when an attacker injects malicious code into the SPA, which is then executed on the user's browser. This can lead to the theft of sensitive information like user credentials or session tokens. To prevent XSS attacks, it's important to properly validate and sanitize user input, as well as implement other security measures like Content Security Policy (CSP) and Cross-Site Request Forgery (CSRF) protection.>. 
- Another security issue is <b>the privacy of sensitive data</b>. The initial page load should not contain any information that shouldn’t be available to all users. Since the entire SPA loads right away to the user’s device, you might accidentally give away data that should be behind a login or not available at all. 
- SEO optimization is tricky when you have a single-page application

### Benefits of SPA

#### For users
- The main advantage of single-page applications for end-users is, of course, the speed at which the app loads as well as the ability to work offline.
- SPA offers a linear user experience, which means that it is easy to navigate the website and understand where to find this or that thing. For example, the Saucony SPA has a clear beginning, middle, and end. Using UI/UX design, the Saucony app developers have used parallax scrolling and transitions to make the customer journey a pleasurable one. 
- Single-page applications are great on mobile devices too, since most of the time, all the users need is to scroll (think of the endless Facebook wall). You don’t have to click any links, and you just enjoy scrolling. 

#### For Businesses
- When it comes to businesses, single-page application development usually takes less time since the same backend API can be used for both the web and mobile. As a result, the information flow is streamlined, and it becomes much easier to create a standalone native mobile application. 
- Considering the advantages in speed optimization of the SPA, businesses can also benefit because the users would be more interested in using an app that is fast (ergo, purchase something or just use the app more often.)

### Javascript UI Framwork for SPA
- <b>Angular </b>: A powerful JavaScript framework developed by Google. It provides a complete solution for building complex SPAs and offers features like two-way data binding, dependency injection, and modular architecture.
- <b>Vue</b>: A progressive JavaScript framework that is known for its simplicity and ease of integration. It allows developers to gradually adopt its features and scale up as needed.
- <b>React</b>: A popular JavaScript library developed by Facebook. It focuses on building reusable UI components and provides efficient rendering through the use of a virtual DOM.
- <b>Ember.js</b>: A framework that follows the convention-over-configuration principle. It provides a robust and opinionated structure for building ambitious SPAs.
- <b>Backbone.js</b>: A lightweight JavaScript library that provides a minimalistic structure for organizing code and handling data models.

### Additional  technologies for SPAs
- <b>AJAX</b>: Asynchronous JavaScript and XML (AJAX) allow SPAs to retrieve data from a server without reloading the entire page. It enables seamless data exchange between the client and server, improving user experience.
- <b>JSON</b>: JavaScript Object Notation (JSON) is a lightweight data-interchange format commonly used to transmit data between the server and client in SPAs.
- <b>RESTful APIs</b>: Representational State Transfer (REST) is an architectural style used to design networked applications. RESTful APIs provide a standardized way to interact with server-side resources and are often used in SPAs for data retrieval and manipulation.
- <b>Webpack</b>: A popular module bundler that allows developers to bundle and optimize various assets, such as JavaScript, CSS, and images. It aids in code organization and performance optimization in SPAs.
- <b>Single-Page Application Frameworks</b>: Several frameworks, like Meteor and Aurelia, provide comprehensive solutions tailored explicitly for building SPAs. They offer features like routing, state management, and build tools to streamline the development process.
