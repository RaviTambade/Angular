| Section | Question No. | Question | Option A | Option B | Option C | Option D | Correct Answer |
|---------|-------------|---------|---------|---------|---------|---------|----------------|
| Architecture & Components | 1 | What decorator is used to define an Angular component? | @Module | @Component | @Injectable | @Directive | B |
| Architecture & Components | 2 | Which property defines the HTML template in a component? | template | templateUrl | style | selector | B |
| Architecture & Components | 3 | Which module must be imported in AppModule to run Angular in browser? | BrowserModule | HttpClientModule | FormsModule | ReactiveFormsModule | A |
| Architecture & Components | 4 | What is the default selector prefix when generating a component? | app | ng | cmp | my | A |
| Architecture & Components | 5 | Which decorator defines an Angular module? | @NgModule | @Component | @Injectable | @Pipe | A |
| Architecture & Components | 6 | Where are services provided to make them singleton application-wide? | @Component providers | @NgModule providers | providedIn: 'root' | Both B and C | D |
| Architecture & Components | 7 | What array in @NgModule contains components and directives? | declarations | imports | providers | exports | A |
| Architecture & Components | 8 | What array in @NgModule contains modules to import? | declarations | imports | providers | bootstrap | B |
| Architecture & Components | 9 | Which array defines services in a module? | declarations | imports | providers | bootstrap | C |
| Architecture & Components | 10 | What is bootstrap array in NgModule used for? | Define app root components | Import modules | Provide services | Export modules | A |
| Architecture & Components | 11 | Which communication method passes data from parent to child? | @Input | @Output | EventEmitter | BehaviorSubject | A |
| Architecture & Components | 12 | Which communication method passes data from child to parent? | @Input | @Output | FormControl | Observable | B |
| Architecture & Components | 13 | Which is true about hierarchical dependency injection? | Services only at root | Services can be scoped per module/component | Services are global by default | Services cannot be overridden | B |
| Architecture & Components | 14 | How to inject a service into another service? | Use @Inject | Use constructor injection | Use @Input | Use provideIn | B |
| Architecture & Components | 15 | What happens if service is not provided anywhere? | Injection fails | Singleton is created | Service ignored | Only available in root | A |
| Architecture & Components | 16 | Which decorator allows service injection dynamically? | @Component | @Inject | @NgModule | @Pipe | B |
| Architecture & Components | 17 | Which of these is recommended for singleton service? | providedIn: 'root' | providers in component | providers in lazy module | No provider needed | A |
| Architecture & Components | 18 | If a service is provided in a lazy-loaded module, what is its scope? | Global singleton | Module-level singleton | Component-level singleton | Not injectable | B |
| Architecture & Components | 19 | How to override a service for a component? | Add to declarations | Provide in component providers array | Use @Input | Use @Output | B |
| Architecture & Components | 20 | What does multi: true in provider configuration do? | Allows multiple services for same token | Singleton service globally | Makes service async | Provides default value | A |
| Data Binding & Event Handling | 21 | Which binding is used for one-way HTML property? | Interpolation | Property binding | Event binding | Two-way binding | B |
| Data Binding & Event Handling | 22 | Which binding is used to pass event from template to component? | Interpolation | Property binding | Event binding | Two-way binding | C |
| Data Binding & Event Handling | 23 | Which syntax is used for two-way binding? | [(ngModel)] | [ngModel] | (ngModel) | {ngModel} | A |
| Data Binding & Event Handling | 24 | Template reference variable is defined with? | #var | $var | @var | &var | A |
| Data Binding & Event Handling | 25 | How to emit custom event from child to parent? | @Input | EventEmitter with @Output | Two-way binding | ngModelChange | B |
| Data Binding & Event Handling | 26 | Which binding is used for interpolation? | {{ expression }} | [property] | (event) | [(ngModel)] | A |
| Data Binding & Event Handling | 27 | Which directive listens to DOM events? | ngIf | ngFor | (click) | ngClass | C |
| Data Binding & Event Handling | 28 | What is required to bind input value to component property? | [(ngModel)] | [ngModel] | (ngModel) | {ngModel} | A |
| Data Binding & Event Handling | 29 | Which property binding syntax is correct? | [src]='imagePath' | (src)='imagePath' | {{src}} | {src}='imagePath' | A |
| Data Binding & Event Handling | 30 | How to call a method on button click? | [click]='method()' | (click)='method()' | {{click='method()'}} | {click}='method()' | B |
| Forms | 31 | Which module is required for template-driven forms? | ReactiveFormsModule | FormsModule | HttpClientModule | BrowserModule | B |
| Forms | 32 | Which module is required for reactive forms? | FormsModule | ReactiveFormsModule | BrowserModule | HttpClientModule | B |
| Forms | 33 | How to create a FormGroup? | new FormGroup({}) | new FormArray({}) | new FormControl({}) | new FormBuilder({}) | A |
| Forms | 34 | How to apply built-in required validator? | Validators.min | Validators.maxLength | Validators.required | Validators.pattern | C |
| Forms | 35 | How to create a custom validator? | function returning ValidatorFn | @Validator decorator | @Component decorator | Use NgModel | A |
| Forms | 36 | How to observe form value changes? | valueChanges | formValue | formControl | ngModelChange | A |
| Forms | 37 | How to reset form group values? | reset() | clear() | setValue() | patchValue() | A |
| Forms | 38 | Which method updates part of form values? | setValue() | patchValue() | reset() | valueChanges | B |
| Forms | 39 | How to bind reactive form to template? | [formControl] | [formGroup] | [ngModel] | [formArray] | B |
| Forms | 40 | How to validate email input? | Validators.required | Validators.email | Validators.pattern | Both B and C | D |
| Services & DI | 41 | Which decorator makes a class injectable? | @Component | @Injectable | @NgModule | @Pipe | B |
| Services & DI | 42 | Which is true about singleton services? | Multiple instances exist | Only one instance exists | Destroyed after component | Not injectable | B |
| Services & DI | 43 | How to inject service into component? | constructor(private service) | ngOnInit() | @Input() | @Output() | A |
| Services & DI | 44 | Which is correct for module-level singleton? | providedIn: 'root' | providers in module | providers in component | No provider | B |
| Services & DI | 45 | Which is hierarchical DI feature? | Services only in root | Services scoped per module/component | Services globally scoped | Services cannot be overridden | B |
| Services & DI | 46 | How can service inject another service? | @Inject decorator | constructor injection | @Input() | @Output() | B |
| Services & DI | 47 | What is Injector role? | Handle routing | Create/provide service instances | DOM binding | HTTP request | B |
| Services & DI | 48 | Which token is used for primitive injection? | InjectionToken | ComponentToken | ServiceToken | RootToken | A |
| Services & DI | 49 | How to override service in child component? | Add to declarations | Provide in providers array | Use @Input | Use @Output | B |
| Services & DI | 50 | Which is best practice for Angular services? | Use providedIn: 'root' | Provide in each component | Avoid DI | Use only for template | A |
| REST API & RxJS | 51 | Which module is required for HttpClient? | HttpClientModule | BrowserModule | FormsModule | ReactiveFormsModule | A |
| REST API & RxJS | 52 | How to make HTTP GET request? | httpClient.get(url) | httpClient.post(url) | httpClient.put(url) | httpClient.delete(url) | A |
| REST API & RxJS | 53 | How to handle asynchronous HTTP? | Promise | Observable | Array | Map | B |
| REST API & RxJS | 54 | Which operator maps observable data? | map | filter | switchMap | tap | A |
| REST API & RxJS | 55 | How to handle HTTP error? | try-catch | catchError operator | map operator | filter operator | B |
| REST API & RxJS | 56 | How to subscribe to observable? | subscribe() | next() | listen() | observe() | A |
| REST API & RxJS | 57 | How to chain observables? | mergeMap | combineLatest | switchMap | All of the above | D |
| REST API & RxJS | 58 | What pattern is followed for HTTP responses? | Callback | Observable | Promise | EventEmitter | B |
| REST API & RxJS | 59 | How to cancel observable subscription? | unsubscribe() | stop() | terminate() | destroy() | A |
| REST API & RxJS | 60 | Which method triggers next observable value? | next() | subscribe() | pipe() | emit() | A |
| Routing & Guards | 61 | Which module provides routing? | RouterModule | FormsModule | HttpClientModule | BrowserModule | A |
| Routing & Guards | 62 | Which directive loads routed component? | ngIf | ngFor | RouterOutlet | ngSwitch | C |
| Routing & Guards | 63 | How to navigate programmatically? | router.go() | router.navigate() | router.redirect() | router.load() | B |
| Routing & Guards | 64 | Which guard prevents access to route? | CanActivate | CanDeactivate | Resolve | CanLoad | A |
| Routing & Guards | 65 | Which guard prevents leaving route? | CanActivate | CanDeactivate | Resolve | CanLoad | B |
| Routing & Guards | 66 | How to protect lazy module loading? | CanLoad | CanActivate | CanDeactivate | Resolve | A |
| Routing & Guards | 67 | HTTP interceptor can | Modify request/response | Only request | Only response | Block request | A |
| Routing & Guards | 68 | Where to provide interceptor? | @Injectable({ providedIn: 'root' }) | Module providers | Component providers | Directive providers | B |
| Routing & Guards | 69 | Which method is called for request interception? | intercept(req, next) | handle(req) | execute(req) | apply(req) | A |
| Routing & Guards | 70 | How to add multiple interceptors? | Use multi: true | Provide one at a time | Cannot add multiple | Add in declarations | A |
| Pipes & Directives | 71 | Which pipe transforms text to uppercase? | lowercase | uppercase | titlecase | async | B |
| Pipes & Directives | 72 | Which pipe formats date? | DatePipe | CurrencyPipe | JsonPipe | AsyncPipe | A |
| Pipes & Directives | 73 | AsyncPipe is used for | Observable/Promise | String | Number | Array | A |
| Pipes & Directives | 74 | Custom pipe implements | PipeTransform | Directive | Component | Injectable | A |
| Pipes & Directives | 75 | Structural directive changes | DOM structure | Element style | Component class | Module | A |
| Pipes & Directives | 76 | Attribute directive changes | Element appearance/behavior | DOM structure | Module | Component | A |
| Pipes & Directives | 77 | Which is example of structural directive? | ngIf | ngClass | ngStyle | async | A |
| Pipes & Directives | 78 | Which is example of attribute directive? | ngFor | ngClass | ngIf | RouterLink | B |
| Pipes & Directives | 79 | How to pass parameter to custom pipe? | {{ value | pipeName:param }} | {{ value | pipeName }} | {{ pipeName:value }} | {{ value | pipeName():param }} | A |
| Pipes & Directives | 80 | Can a pipe be pure? | Yes (default) | No | Only for custom | Only for built-in | A |
| Testing | 81 | Angular unit testing framework | Jasmine | Mocha | Jest | QUnit | A |
| Testing | 82 | Test runner in Angular | Karma | Jasmine | Protractor | Cypress | A |
| Testing | 83 | What is TestBed? | Component instance | Service injector | Testing module for DI | Pipe transformer | C |
| Testing | 84 | How to mock service in unit test? | Jasmine spy | Component override | Directive | NgModule | A |
| Testing | 85 | Which file is for service test? | service.spec.ts | service.ts | component.spec.ts | module.ts | A |
| Testing | 86 | Which function describes a test suite? | it() | describe() | beforeEach() | afterEach() | B |
| Testing | 87 | Which function describes individual test? | describe() | it() | beforeAll() | afterAll() | B |
| Testing | 88 | How to verify no outstanding HTTP requests? | httpMock.verify() | expect() | toBe() | flush() | A |
| Testing | 89 | How to test form value? | fixture.detectChanges() | form.value | ngModelChange | patchValue() | B |
| Testing | 90 | How to trigger component method in test? | component.method() | ngOnInit() | fixture.detectChanges() | All of the above | D |
| E2E Testing | 91 | Which tool is used for Angular end-to-end testing? | Playwright | Jasmine | Karma | RxJS | A |
| E2E Testing | 92 | Which function navigates page in Playwright? | page.goto() | page.navigate() | page.load() | page.open() | A |
| E2E Testing | 93 | How to select element by role? | page.getByRole() | querySelector() | getElementByRole() | selectByRole() | A |
| E2E Testing | 94 | How to verify element text in Playwright? | expect(element).toBeVisible() | expect(element).toHaveText() | expect(element).toExist() | All of the above | B |
| E2E Testing | 95 | How to handle multiple user scenarios in E2E? | Loop over data | Multiple test files | Conditional check | Both A and B | D |
| E2E Testing | 96 | How to run Playwright tests? | npx playwright test | ng serve | ng test | npm run build | A |
| E2E Testing | 97 | Which file contains Playwright test script? | *.spec.js | *.ts | *.html | *.component.ts | A |
| E2E Testing | 98 | How to simulate button click in Playwright? | page.click(selector) | page.select(selector) | page.fill(selector) | page.press(selector) | A |
| E2E Testing | 99 | What happens if AUT is not running? | Test fails | Test passes | Test ignored | Test skipped | A |
| E2E Testing | 100 | Which command installs Playwright dependencies? | npm i -D playwright | npm i -D jasmine | npm i -D karma | npm i -D rxjs | A |

