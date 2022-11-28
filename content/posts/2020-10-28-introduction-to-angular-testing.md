---
title: Introduction to Angular Testing Methods
description: Isolated, Shallow, Integrated, and End to end testing
date: '2020-10-30'
categories: ['Testing']
published: true
tags: ['angular', 'Testing', 'programming', 'Software Development']
image: images/introduction-to-angular-testing
---

Isolated, Shallow, Integrated, and End to end testing. What is it and when do you use it?

In Angular, we have a lot of different types of testing. I can imagine that you have a lot of questions when you see them. Better said, I had that question so I went into a deep dive to make it all clear. At the end of this post, I hope this makes all sense for you as well.

# Test tooling for Angular

In Angular, we use a few different tools to set up automated testing.

If you have created the Angular project with the CLI and didn't say it should ignore the testing then the testing capabilities of the CLI are set up for you.

By default, the Angular CLI sets Jasmin as our testing framework and Karma as our test runner. But if you want to make use of Jest or another testing framework, you are free to do so.

# Types of Testing in Angular

In Angular, we have 4 different main types of testing.

• Isolated unit testing
• Shallow unit testing
• Integration testing
• End to end testing

# Isolated unit testing

A unit might contain business logic that needs to be tested in isolation.

There are a few Angular units that can be tested in isolation.

• Pipe
• Service
• Class
• Component
• Directives

In isolation we always should mock our dependencies, otherwise, it isn't isolation anymore.
```typescript
import { FormComponent } from './my-form.component'

describe('NgqFormComponent', () => {
	let component: FormComponent
	let mockApiService

	beforeEach(() => {
		mockApiService = jasmine.createSpyObj([
			'logout',
			'init',
			'getApiJson',
			'getCurrentRoute',
			// add morehere
		])

		component = new FormComponent(mockApiService)
	})

	it('should be defined', () => {
		expect(component).toBeDefined()
	})
})
```

For example, the FormComponent has a dependency on the `apiService`. So we mock it with a createSpyObj from Jasmine, which makes a mock service with all the public methods that our real service has.

Thanks to this method we can also test if a certain method is being called. When need to overwrite a method, we can do that too.

In isolated unit testing, we don't test the template parts for a component, only the logic behind it. In this test, we test all the methods that have the expected behavior.

---

<ContentAd topics="rxjs|angular|typescript|javascript"></ContentAd>

---

# Shallow unit testing

With shallow unit testing, we test a component with a template, but we ignore the rendering of child components by passing NO_ERRORS_SCHEMA into our configuration of the test module.
```typescript
beforeEach(async(() => {

  TestBed.configureTestingModule({
   declarations: [
    FormComponent,
  ],
   imports: [
    BrowserModule,
   ],
  ],
  schemas: [NO_ERRORS_SCHEMA]
  })
  .compileComponents();
 }));
 ```

This will make sure that we don't get any problems with errors from not loading child components.

# Integration testing

With integration testing, we test how 2 or more components work with each other. We can do this when this makes sense. For example when they are depending on each other.

When you want to test more components together, you import them via the testing module.

```typescript
beforeEach(async(() => {

  const todo1 = new TODOItem('Buy milk', 'Remember to buy milk');
  todo1.completed = true;
  const todoList = [
   todo1,
   new TODOItem('Buy flowers', 'Remember to buy flowers'),
  ];

  TestBed.configureTestingModule({
   declarations: [
    AppComponent,
    NavbarComponent,
    TodoListComponent,
    TodoItemComponent,
    FooterComponent,
    AddTodoComponent,
    TodoListCompletedComponent,
  ],
   imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    appRouterModule
   ],
   providers: [
    {provide: APP_BASE_HREF, useValue : completedTodoPath },
    {
     provide: TodoListService,
     useValue: {
      todoList: todoList
     }
    }
   ]
  })
  .compileComponents();
}));
```


# End to end testing

With end to end testing, we test pieces of the application in a working application. We can test the working combination of the frontend and backend.

For this type of testing, we can use Selenium, Protractor, Cypress, or another alternative.

End-to-end testing is also a good way to test the differences in different browsers across multiple platforms.

# Thanks

We learned which types of testing there are in Angular and when to use one. For me, this all makes so much more sense right now.

If you have questions about some of the testing possibilities in Angular, please let me know in the comments. I will do my best to help you further 👍

In the end, we all need some help from others. So don’t be shy! Just ask 😉

Happy Coding 🚀