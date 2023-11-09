# Angular Services

<img src="/images//AngularServices.jpg"/>
Services are a way to organize and share code across your application, helping you keep your code modular and maintainable. However, creating and using services in Angular can be a bit confusing, especially for new developers.

In Angular, services are classes that are used to organize and share code across your application. They're typically used to provide functionality that can be used by multiple components, like retrieving data from an API or handling user authentication.

Services are typically created using the<b> @Injectable</b>decorator, which tells Angular that this class can be used as a service. You can then inject this service into any component, directive, or other service using Angular's dependency injection system.

One of the most important aspects of services is that they're singletons, meaning that there's only one instance of a service created, no matter how many times it's injected. This is important because it helps to reduce memory usage and ensures that all components are using the same instance of the service.

## Why are Services Important?
Services are an important part of Angular development because they help to improve code organization and maintainability. By separating functionality into services, you can create modular, reusable code that can be used across multiple parts of your application.

Services also help to reduce code duplication. For example, if you have multiple components that need to retrieve data from an API, you can create a service to handle this functionality and inject it into each component that needs it. This way, you don't need to write the same code multiple times.


## Best Practices for Using Angular Services
When it comes to using services in Angular, there are a few best practices to keep in mind:

- Don't include business logic in your services.
    Services should be used for providing functionality, not for implementing business logic. Business logic should be implemented in components or other classes that are specific to your application domain.
- Make sure your services are testable. 
    Services should be designed in a way that makes them easy to test. This means avoiding using global state or other external dependencies, and instead relying on dependency injection to provide any necessary functionality.
- Use interfaces to define your services.
     Using interfaces to define your services can help to make your code more modular and maintainable. It also makes it easier to use other libraries and tools that rely on interfaces.
- Keep your services small. 
    Services should be designed to provide specific functionality, rather than attempting to handle everything at once. If a service starts to become too large, consider breaking it up into smaller, more specific services.
 - Avoid using services to handle view logic. 
    Services should be used to provide functionality that can be shared across multiple components. They should not be used to handle view-related logic, which should be implemented in the components themselves.

## Examples of Using Angular Services
Now that we've covered the basics of services in Angular, let's take a look at some examples of how to use them in practice.

First, let's create a simple service that retrieves data from an API. We'll use the HttpClient module provided by Angular to make the API call:

```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('/api/data');
  }
}

```

In this example, we've created an ApiService class that uses the HttpClient module to retrieve data from an API endpoint. We've marked this class as an injectable service using the @Injectable decorator, and we've also specified that we want this service to be provided at the root level of our application.

Now let's create a component that uses this service to retrieve and display the data:

```
import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-data',
  template: `
    <ul>
      <li *ngFor="let item of data | async">{{ item.name }}</li>
    </ul>
  `,
})
export class DataComponent {
  data = this.apiService.getData();

  constructor(private apiService: ApiService) { }
}

```

In this example, we've created a DataComponent class that injects the ApiService and uses it to retrieve data from the API. We've also used Angular's built-in async pipe to handle the asynchronous nature of the API call.

Finally, let's create another service that uses the ApiService to handle user authentication:

```
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;

  constructor(private apiService: ApiService) { }

  login(username: string, password: string) {
    return this.apiService.login(username, password).pipe(
      map((response: any) => {
        this.isAuthenticated = true;
        localStorage.setItem('token', response.token);
        return response;
      })
    );
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
```

In this example, we've created an AuthService class that handles user authentication by using the ApiService to make API calls. We've marked this class as an injectable service using the @Injectable decorator, and we've also specified that we want this service to be provided at the root level of our application.

With this service, we can now create components that handle user authentication:

```
import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `
    <form>
      <input type="text" [(ngModel)]="username" name="username">
      <input type="password" [(ngModel)]="password" name="password">
      <button (click)="login()">Log in</button>
    </form>
  `,
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.username, this.password).subscribe();
  }
}
```

In this example, we've created a LoginComponent class that uses the AuthService to handle user authentication. We've also used the ngModel directive to handle two-way data binding between the input fields and the component's properties.

Services are an essential part of Angular development, and they can help to improve code organization, maintainability, and reduce duplication. By following best practices like keeping your services small, testable, and avoiding including business logic, you can create modular, reusable code that can be used across your application.

With these best practices in mind, you can start using services in your Angular applications to create highly maintainable and modular code
