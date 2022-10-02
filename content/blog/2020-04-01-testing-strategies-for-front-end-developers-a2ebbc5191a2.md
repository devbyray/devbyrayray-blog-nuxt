---
title: Testing Strategies for Front-End Developers
description: Solidify your front-end code
date: '2020-04-01T17:52:52.607Z'
categories: []
published: true
tags: ['Developer', 'WebDev']
image: https://cdn-images-1.medium.com/max/800/0*bqHbqZf3BfBj_S5b
---

As front-end developers, there are so many different ways to test our work. Manual testing and automated testing are essentials in our toolkit.

But when should you use manual testing and when should you pick an automated testing methodology? In this article, I’d like to dive into the automated testing methodologies and see when we should pick BDD, DDD, or TDD.

## Testing Methodologies

1.  BDD: Helps to understand what the problem is and what solution our project will bring for our users.
2.  DDD: Helps to split a project into smaller pieces and come up with solutions for the problems.
3.  TDD: Avoids bugs or will prevent your application from crashing.

### BDD/T_hinking outside in_

The Behaviour-Driven Development process helps us get an understanding of the problem. In this process, there should be a lot of open questions being answered. This is the discovery phase of the project.

At the end of this process, there should be an understanding of why this certain project is going to solve the problem and what value it will bring to the end-users.

### DDD/Thinking big picture

Now that we have a clear understanding of the problem, we have to break down the solution in smaller parts. It is a good idea to break the project down into smaller domains. In those domains, a team or part of a team will work together with a domain expert to solve the problems from that domain end-to-end.

A domain expert is someone who has the expertise of the problems users are phasing in that domain. This will help the team to build solid solutions which will make the end-user happier.

### TDD/Thinking inside out

Now that we have a clear understanding of the problem and broke down the solution into smaller domains and created teams around that, we can start thinking about code.

With Test-Driven Development, we first write a test and watch it fail. The test has to be written according to the solution the team comes up with together with the domain expert.

To make the tests pass, we should write the minimal needed code. After that, it is common to refactor the piece of code without changing the behavior of it, but with this step, we make sure the code has met the acceptable standards.

## How to Test

We can test our software in two ways: manually (where you do everything by hand) or automated (where you write scripts with tests that can be started automatically in a CI/CD process).

To understand how and when we are going to test our front-end application, we need to understand the differences between a few methods for automated testing.

## Methods for Automated Testing

*   Unit test: Test code in isolation (without dependencies).
*   Integration test: Test the communication between a few different parts in the code.
*   End-to-end test: Test the communication between the front end and back end of the application.

### Unit testing

Unit testing is a form of testing where you test a piece of code and test it in isolation to check if everything works as intended.

You can test if certain properties are available or not available or test if a property is changed after calling a method.

It is a good idea to focus on the logic of your code. Does a function return a certain value if you put in a string, number, or object? All these tests will make sure that our code behaves as we intended.

It always helped me with making sure that everything works as intended even though I need to adjust some pieces of logic. Aside from that, this will also help you keep your code (functions and classes) small. Otherwise, your tests will also grow massive, which will destroy the maintainability.

### Integration testing

Whereas you test with unit testing in isolation, in integration testing, we test the communication between different components of the application. If a controller has to pass some data structure towards another controller, we have to check if some data model goes in and that the outcome of the other controller is as we would have expected.

It is a good idea to cover a few variants of those data structures, to test if something goes wrong, and whether that is how it’s intended or not.

### End-to-end testing

With an integration test, you don’t test how the back end would interact with the front end. End-to-end testing is for those scenarios where we need to test whether the back end gives back a response as intended when the front end makes a request.

Most of the time, this doesn’t happen on a production server, but it’s more likely on a staging server.

## What JavaScript Testing Libraries Can We Use?

To test our JavaScript, we can use a lot of libraries to write our tests in. Here are a few that I like.

## Unit and Integration Testing Frameworks

### Jest

[Jest](https://jestjs.io/) is built by Facebook and focuses on simplicity. You can use it in combination with Node.js, TypeScript, Angular, React, VueJS, or just vanilla JavaScript.

You can use Jest for unit testing and integration testing for both the front end and Node.js on the back end.

### Jasmine

[Jasmine](https://jasmine.github.io/) is built as a behavior-driven JavaScript framework for testing JavaScript code. In a lot of Angular and AngularJS projects, you will find Jasmine included.

With Jasmine, you can test JavaScript code as well as the DOM. It’s easy to load in a piece of HTML and run your tests against it.

Jasmine can be used for unit and integration testing for the front end and Node.js on the back end.

### Other

*   [Baretest](https://volument.com/baretest)
*   [Chai](https://www.chaijs.com/)
*   [Mocha](https://mochajs.org/)

## End-to-End Testing Frameworks

For end-to-end testing, there are a couple of different tools available. Those testing frameworks use a (headless) browser to run their tests and have a DOM available.

### WebdriverIO

With [WebdriverIO](https://webdriver.io/), you can test your application from the front end to the back end. It’s a great idea to test those things fully automated during the CI/CD process.

The nice thing about WebdriverIO is that if you want to access the DOM, you have a similar syntax like jQuery, which makes the code very readable(e.g. `$('h2.sub')`).

### Cypress

[Cypress](https://www.cypress.io/) offers a whole testing suite for testing your website or web application in a browser.

You can write tests in JavaScript, record videos, take screenshots, and store them in the cloud.

With Cypress, you get a great dashboard where you can see the passed and failed tests, which are really helpful.

### Other

*   [Selenium](https://www.selenium.dev/)
*   [Protractor](https://www.protractortest.org/)
*   [Cucumber](https://cucumber.io/)
*   [Nightwatch.js](https://nightwatchjs.org/)
*   [Puppeteer](https://developers.google.com/web/tools/puppeteer)
*   [Playwright](https://www.npmjs.com/package/playwright)

## Other Testing Tools

But there are a lot more tools to test your JavaScript code or front-end application:

*   [Wallaby](https://wallabyjs.com/)
*   [Sinon.js](https://sinonjs.org/)
*   [testDouble.js](https://github.com/testdouble/testdouble.js/)
*   [JSDom](https://github.com/jsdom/jsdom)
*   [Karma](https://karma-runner.github.io/latest/index.html)
*   [Istanbul](https://istanbul.js.org/)
*   [AVA](https://github.com/avajs/ava)

## Conclusion

I hope that I clarified when to use unit testing, integration testing, or end-to-end testing. To recap:

*   Use unit testing when you need to test pieces of logic in an isolated environment. It is important to mock our dependencies.
*   Use integration testing when you want to test the logic between services, controllers, components, etc. Test the input that goes into one and check the outcome from the other. This is how you make sure they work great together.
*   Use end-to-end testing when you need to test how the front end and the back end work together. With these tests, you can test the full stack of your application.

If you have any questions about these tests, please add them in the comments and I will do my best to help you out.

[!Signup for my [FREE email course](https://mailchi.mp/239d4f7b0d9d/programming-content-creator)![](https://cdn-images-1.medium.com/max/800/1*cuYlB5k3wLUg2LAPYpYCtg.png)](https://mailchi.mp/239d4f7b0d9d/programming-content-creator)
Signup for my [FREE email course](https://mailchi.mp/239d4f7b0d9d/programming-content-creator)!

## Read More From Me

[**TypeScript For Beginners**  
_A practical way to learn TypeScript from scratch_levelup.gitconnected.com](https://levelup.gitconnected.com/typescript-for-beginners-97b568d3e110 "https://levelup.gitconnected.com/typescript-for-beginners-97b568d3e110")[](https://levelup.gitconnected.com/typescript-for-beginners-97b568d3e110)

[**We Are Not Serious Enough About Software Development**  
_Why don’t we treat software the way we treat real-world infrastructure?_medium.com](https://medium.com/better-programming/we-are-not-serious-enough-about-software-development-b9e3222f2906 "https://medium.com/better-programming/we-are-not-serious-enough-about-software-development-b9e3222f2906")[](https://medium.com/better-programming/we-are-not-serious-enough-about-software-development-b9e3222f2906)

[**Build Fast, JSON-Powered Forms on Angular With NGX Formly**  
_Forms can be a nightmare — let’s make them better_medium.com](https://medium.com/better-programming/build-fast-json-powered-forms-on-angular-with-ngx-formly-b7a00733e66e "https://medium.com/better-programming/build-fast-json-powered-forms-on-angular-with-ngx-formly-b7a00733e66e")[](https://medium.com/better-programming/build-fast-json-powered-forms-on-angular-with-ngx-formly-b7a00733e66e)

[**How to Build Fast, Advanced JSON-Powered Forms on Angular With ngx-formly**  
_Validations, repeatable sections, conditional fields, and submitting your form to your API_medium.com](https://medium.com/better-programming/how-to-build-fast-advanced-json-powered-forms-on-angular-with-ngx-formly-77aeed406f73 "https://medium.com/better-programming/how-to-build-fast-advanced-json-powered-forms-on-angular-with-ngx-formly-77aeed406f73")[](https://medium.com/better-programming/how-to-build-fast-advanced-json-powered-forms-on-angular-with-ngx-formly-77aeed406f73)

[**5 Lessons From Writing Programming Tutorials for 8 Years**  
_Push through all boundaries, even though it’s hard_medium.com](https://medium.com/better-marketing/5-lessons-learned-from-writing-online-development-tutorials-for-8-years-ebc10c08297b "https://medium.com/better-marketing/5-lessons-learned-from-writing-online-development-tutorials-for-8-years-ebc10c08297b")[](https://medium.com/better-marketing/5-lessons-learned-from-writing-online-development-tutorials-for-8-years-ebc10c08297b)