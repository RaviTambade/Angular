# Building Custom Angular Libraries

<p>As software developers, writing code is a fundamental part of our daily routine. At Transflower, our team of developers works on our codebase every day to enhance and maintain our software. However, without proper coding practices, our codebase can become excessively large and overly complex. To avoid this, we have implemented the DRY (Don't Repeat Yourself) principle, which means we strive to avoid writing repetitive code by creating reusable code snippets.
</p>
<p>Since we work on multiple projects, it's crucial for us to make our code adaptable and reusable. To achieve this in our Angular-based web applications, we develop Angular libraries that enable us to share code across different projects. Let us undersand the process of creating an Angular library. Let us understand how to extract shared code from our web projects and integrate it into the library.</p>

## DRY Principle
<p>The DRY pattern is a principle that emphasizes the importance of reducing redundancy in code. Instead of writing the same code over and over again, we strive to create reusable code snippets that can be applied across different parts of the codebase. By avoiding repetitive code, we can improve the readability, maintainability, and scalability of our software.</p>

<p>There are many benefits to using the DRY pattern in software development. One of the most significant advantages is that it can save time and reduce errors. When we write code that can be reused, we don't need to spend as much time writing new code, and we're less likely to introduce bugs or errors. Additionally, the DRY pattern can make it easier to modify and update code since changes only need to be made in one place.</p>

<p>There are many ways that the DRY pattern can be applied in code. For example, we can create functions or methods that perform common tasks or calculations, or use variables or constants to store values that are used multiple times in the code. By creating these reusable code snippets, we can improve the efficiency and readability of our codebase.</p>

## Angular libraries
<p>Angular libraries are reusable code modules that can be shared across multiple Angular projects. They can contain components, services, directives, and other types of code, and can be easily imported and used in other projects as needed.‌</p>

### The Advantages of Implementing Angular Libraries

- <b>Improved maintainability</b>
    Because we are no longer duplicating code across multiple projects, it is easier to maintain and update our code over time. We can make changes to a component or service in a single library and have those changes automatically propagate to all of the projects that used that library.

- <b>Faster development</b>
    By reusing common code and functionality across multiple projects, we are able to develop new applications faster and with fewer errors. We can focus on building the application's features, rather than spending time duplicating code and functionality.

- <b>Consistency</b>
    By using the same set of libraries across multiple projects, we are able to ensure that our applications are consistent in terms of functionality and declaration. This helps us build a more cohesive set of applications.


<p>At Transflower, we faced a challenge in managing multiple projects that shared similar functionalities and components, such as authentication, common config, common UI elements, etc. We used to duplicate the code across multiple projects, making it difficult to maintain and update.</p>

<p>To solve this issue, we developed a set of Angular libraries that contained the common code. These libraries were imported into different projects, allowing our team to reuse the same code across multiple applications. This approach not only helped us avoid repeating code but also reduced the risk of errors and bugs. Additionally, the self-contained nature of Angular libraries made it easier for our team to maintain and update the code over time.
</p>

<img src="/images/angularLibraries.jpg"/>

<p>The above diagram shows us the high-level workflow of how we implement Angular libraries. In many cases, we encounter similar or duplicate code in different projects, including services, components, utilities, or assets like images, fonts, or localization files.</p>

<p>To avoid repetition and achieve the DRY code principle, we extract these common elements and create a shared library. This may require modifying the code to ensure it is reusable. Once the library is created, we publish it on our local npm registry, which we have set up using Transflower(TFL). Finally, we can install and use the published library in both Project A and Project B, enabling us to reduce errors and bugs while improving code maintenance and scalability.</p>

## Creating a Custom Angular Library

<p>At Transflower, we create our libraries using Angular CLI which comes with ng-packagr. Angular CLI provides the necessary commands to generate and manage the libraries, while ng-packagr handles the packaging and publishing of the library to npm. In Angular, we can create a workspace that contains multiple libraries. The following is a command to generate a workspace.</p>

```
ng new tfl-commons --no-create-application
```

<p>With the workspace set up, we can then generate a new library project using the following command:</p>

```
ng generate library membership
```

<p>We can add reusable componenets, services, directives, pipes in library.</p>


### Packaging the library
<p>To pack our library, we go to the library distribution directory and run the npm pack command.</p>

<p>Avoid the confusion here of packing the library directory. We need to pack the built distribution folder of the library. We can add a script also in place of doing this manually.</p>

"pack-lib": "cd dist/membership-library && npm pack"

<p>This would create a .tgz package for the library which is to be exported into other applications we will be using.</p>

<p>We can publish the shared library to Transflower.</p>

```

<p>With our package ready, we can use it inside another application to consume it and test.</p>

<p>Create a new angular application and install your library inside this using:</p>

```
npm install <path-to-tgz-file>
```

<p>Check your package.json to see if it has installed and is reflecting isnide the dependencies.</p>

<p>Next step, import the module of your library, and use the component.</p>

```
import { MembershipModule} from 'membership-library';
```

<p>This should give our project the access to the components declared inside thsi module. We can now use the component directly on the template and see how it works!</p>


