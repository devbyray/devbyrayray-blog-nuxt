---
title: How to end-to-end test with Cypress
description: With end-to-end tests in Cypress we test if the front-end works well with the back-end with end-to-end testing. So automatically filling forms, clicking buttons, navigate through the pages should be tested by end-to-end tests.
date: '2021-12-06T13:52:25.013Z'
categories: []
tags: []
slug: /@byrayray/how-to-end-to-end-test-with-cypress-1d70b907be0c
image: images/0__Co1BnI8HTpTQhr0g.jpg
---

What is end-to-end testing? We have two ends in a Web application: the front-end and the back-end. With unit-testing, we test the code for the front-end or the back-end. We don’t test how the application behaves in the browser or how both ends work together.

Writing unit tests is good, in my opinion!

But testing how the front-end and back-end work together is equally important.

**With end-to-end tests in Cypress we test if the front-end works well with the back-end with end-to-end testing. So automatically filling forms, clicking buttons, navigate through the pages should be tested by end-to-end tests.**

Running the end-to-end tests will validate if your front-end is handling the data correctly received from the back-end.

---

## What is Cypress?

There are a lot of end-to-end testing toolkits, but one of the most popular and fastest toolkits is [Cypress](https://www.cypress.io/).

Cypress offers a way of writing end-to-end tests with JavaScript and the test runner. Next to that, they offer a way to save screenshots and video’s when a test fails. What most organizations love, it’s open-source, and that is great.

---

### How do we use Cypress with end-to-end testing?

There is a [great tutorial](https://docs.cypress.io/guides/getting-started/writing-your-first-test#Write-your-first-test) in the Cypress documentation to get you started on writing end-to-end tests.

---

### The configuration

At the root of the project, there is a `cypress.json` where you can change some default configurations. In our project, it looks like this:

```json [cypress.json]
{ 
    "testFiles": "**/*.e2e.test.js", 
    "chromeWebSecurity": false 
}
```

In the `testFiles` property, we tell Cypress to look for files that include `e2e.test.js` in the name. You can configure Cypress with TypeScript, but in this case, I think there is no added value to using it. It requires an additional transpilation step that takes longer.

---

### Where to store the test files?

With unit-testing, it’s very common to store the tests in the component folders. In this case, Cypress takes the `cypress/integration` folder as the root to look for the files. So we have a structure based on the application itself, in which we store the end-to-end testing files.

---

### Minimal requirements of an end-to-end test

Every test has at least a `describe()` function within that at least one `it()` function. This works similarly to writing unit tests.

```js
describe('My First Test', () => {
	it('Does not do much!', () => {
		expect(true).to.equal(true)
	})
})
```

This example looks like a unit test. So we need to make use of the Cypress Library. You can use that by using `cy` like the example below in which we visit `[https://example.cypress.io](https://example.cypress.io.)`[.](https://example.cypress.io.)

```js
describe('My First Test', () => {
	it('Visits the Kitchen Sink', () => {
		cy.visit('https://example.cypress.io')
	})
})
```

You can see the real browser performing this action by running `npm run e2e:open`.

Our scripts in the `package.json` look like this.

```json
{
	//...
	"e2e:run": "npx cypress run --config-file cypress.json",
	"e2e:open": "npx cypress open --config-file cypress.json",
	"e2e:open:edge": "npx cypress open --browser edge --config-file cypress.json",
	"e2e:open:firefox": "npx cypress open --browser firefox --config-file cypress.json"
	//...
}
```

Cypress will start its application, and there you can select the end-to-end test you want to run. By default, it will open the Chrome browser, but there is also an option to run it in Firefox and Edge.

Cypress offers a complete library, and you can check the [documentation](https://docs.cypress.io/api/table-of-contents) on what they all include.

---

### What should you test in an end-to-end test?

We will mainly test things that appear or change in the browser with end-to-end tests. Like a simple scenario: We visit page x and check if the `h1` contains the text "This is an awesome title".

```js
describe('My First Test', () => {
	it('Visits the Kitchen Sink', () => {
		cy.visit('https://example.cypress.io')
		cy.get('h1').should('contain.text', 'This is an awesome title')
	})
})
```

In this example, every method you call from the `cy` library is part of testing. Like `cy.visit()` will perform the action, but if there is no valid page on that URL, it will fail your test. So with every action you perform, you commit an assertion.

> In Cypress, there are two different types of assertions. First “Implicit Subjects”, in this case you use `should()` or `and()`. Second, "Explicit Subjects", in this case, you use `expect`. Read more on this in the [Cypress documentation](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Writing-Assertions).

When calling `cy.get('h1')` it will search for the `<h1>` tag. When it finds that element, your test will continue. It will fail the test if it doesn't find the element in a few milliseconds. After the `get` method, you can chain a lot of other methods, like:

-   `.contains()` expects the element with content to eventually exist in the DOM.
-   `.find()` also expects the element to exist in the DOM eventually.
-   `.type()` expects the element to eventually be in a typeable state.
-   `.click()` expects the element to eventually be in an actionable state. `.its()` expects to eventually find a property on the current subject.

So what should we test in end-to-end tests?

1.  If an element has a certain class `cy.get('element.selector').should('have.class', 'ng-valid');` or doesn't have a certain class `cy.get('element.selector').should('not.have.class', 'ng-valid');`.
2.  If a list has 3 child elements `cy.get('ul > li').should('have.length', 3);`.
3.  Check if an input field or textarea has a certain value `cy.get('input[name="firstName"]').type('Santa Claus').should('have.value', 'Santa Claus');`.

> Check [this list of examples](https://docs.cypress.io/guides/references/assertions#Adding-New-Assertions) what you can use in the `should` method.

**Extra example:**

Add the context of a parent element to perform assertions, which comes in handy with forms.

```html
<form>
	<input name="email" type="email" />
	<input name="password" type="password" />
	<button type="submit">Login</button>
</form>
```

```js
describe('My First Test', () => {
	it('Visits the Kitchen Sink', () => {
		cy.visit('https://example.cypress.io')
		cy.get('form').within($form => {
			// you have access to the found form via
			// the jQuery object $form if you need it

			// cy.get() will only search for elements within form,
			// not within the entire document
			cy.get('input[name="email"]').type('john.doe@email.com')
			cy.get('input[name="password"]').type('password')
			cy.root().submit()
		})
	})
})
```

> Check for more examples of the `_within()_` method in the [Cypress documentation](https://docs.cypress.io/api/commands/within#Examples).

---

## Re-usable functionality

In the case of re-useable actions that you perform over-and-over-again, you can write simple functions that you can put in a lib folder. But Cypress offers a more friendly way of doing this. These are called “custom commands”; you can find a lot of examples [in the documentation](https://docs.cypress.io/api/cypress-api/custom-commands#Log-in-command-using-UI).

But one of the best examples is writing the command for the login. You need to add that code in the `cypress/support/commands.js` file.

```js
Cypress.Commands.add('login', (userType, options = {}) => {
	// this is an example of skipping your UI and logging in programmatically

	// setup some basic types
	// and user properties
	const types = {
		admin: {
			name: 'Jane Lane',
			admin: true
		},
		user: {
			name: 'Jim Bob',
			admin: false
		}
	}

	// grab the user
	const user = types[userType]

	// create the user first in the DB
	cy.request({
		url: '/seed/users', // assuming you've exposed a seeds route
		method: 'POST',
		body: user
	})
		.its('body')
		.then(body => {
			// assuming the server sends back the user details
			// including a randomly generated password
			//
			// we can now login as this newly created user
			cy.request({
				url: '/login',
				method: 'POST',
				body: {
					email: body.email,
					password: body.password
				}
			})
		})
})
```

---

## Conclusion

Now it’s up to you to write great end-to-end tests with Cypress! Perfect tests don’t exist, but if you optimize them a bit every time, they will become your source of truth. The end-to-end tests are great for developers to run after building a new feature or changing an existing one because it’s impossible to keep all the testing scenarios in your brain.

Good luck, and have fun with writing valuable end-to-end tests.

---

## Thanks!

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁
