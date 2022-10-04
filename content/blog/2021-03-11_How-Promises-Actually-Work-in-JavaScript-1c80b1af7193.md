---
title: How Promises Actually Work in JavaScript
description: Learn when and how to use them
date: '2021-03-11T15:37:51.975Z'
categories: []
keywords: []
slug: /@byrayray/how-promises-actually-work-in-javascript-1c80b1af7193
---

In the current age of JavaScript, `Promises` are the default way to handle asynchronous behavior in JavaScript. But how do they work? Why should you understand them very well?

In this article, I will dive into JavaScript `Promises` to understand what they do and when you should use them.

### A Promise in Real Life

When I make you a promise, you take my word that I will fulfill that promise.

But I don’t tell you when that promise will be fulfilled, so life goes on…

There are two possible scenarios: fulfillment or rejection.

#### Fulfillment

One day, I fulfill that promise. It makes you so happy that you post about it on Twitter!

#### Rejection

One day, I tell you that I can’t fulfill the promise.

You make a sad post on Twitter about how I didn’t do what I had promised.

Both scenarios cause an action. The first is a positive one, and the next is a negative one.

Keep this scenario in mind while going through how JavaScript `Promises` work.

### When To Use a Promise

JavaScript is synchronous. It runs from top to bottom. Every line of code below will wait for the execution of the code above it.

But when you want to get data from an API, you don’t know how fast you will get the data back. Rather, you don’t know if you will get the data or an error yet. Errors happen all the time, and those things can’t be planned. But we can be prepared for it.

So when you’re waiting to get a result from the API, your code is blocking the browser. It will freeze the browser. Neither we nor our users are happy about that at all!

Perfect situation for a `Promise`!

### How To Use a Promise

Now that we know that you should use a `Promise` when you make Ajax requests, we can dive into using `Promises`. First, I will show you how to define a function that returns a `Promise`. Then, we will dive into how you can use a function that returns a `Promise`.

#### Define a function with a Promise

Below is an example of a function that returns a `Promise`:

The function returns a `Promise`. This `Promise` can be resolved or rejected.

Like a real-life promise, a `Promise` can be fulfilled or rejected.

#### States

According to [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), a JavaScript `Promise` can have one of three states:

> “- pending: initial state, neither fulfilled nor rejected.

> \- fulfilled: meaning that the operation was completed successfully.

> \- rejected: meaning that the operation failed.”

#### Pending

The `pending` state is the initial state. This means that we have this state as soon we call the `doSomething()` function, so we don't know yet if the `Promise` is rejected or resolved.

#### Resolved

In the example, if the `value` is truthy, the `Promise` will be resolved. In this case, we pass the variable `value` in it to use it when we would call this function.

We can define our conditions to decide when to resolve our `Promise`.

#### Rejected

In the example, if the `value` is falsy, the `Promise` will be rejected. In this case, we pass an error message. It's just a string here, but when you make an Ajax request, you pass the server's error.

### Use a Function With a Promise

Now that we know how to define a `Promise`, we can dive into how to use a function that returns a `Promise`:

You can recognize a function that returns a `Promise` by the `.then()` method or an `await` keyword. The `catch` will be called if there is an error in your `Promise`. So making error handling for a `Promise` is pretty straightforward.

`Promises` are used in a lot of JavaScript libraries and frameworks as well. But the simplest web API is the Fetch API, which you should use for making Ajax requests. Check the tutorial below if you want to see how that works:

[**From XHR to Fetch With Async/Await on the Finish Line**  
_A look at the evolution and history of requests in JavaScript_betterprogramming.pub](https://betterprogramming.pub/from-xhr-to-fetch-with-async-await-on-the-finish-line-b021de1d226b "https://betterprogramming.pub/from-xhr-to-fetch-with-async-await-on-the-finish-line-b021de1d226b")[](https://betterprogramming.pub/from-xhr-to-fetch-with-async-await-on-the-finish-line-b021de1d226b)

### Conclusion

Hopefully, this helps you to understand how `Promises` work and what you can do with them.

If you have any questions about `Promises`, please let me know.

Happy coding!

### Read more from me

[**7 Web Development Guidelines To Speed up Page Loading**  
_Improve the user experience for the love of your visitors_betterprogramming.pub](https://betterprogramming.pub/7-web-development-guidelines-to-speed-up-page-loading-e8f0e13a53b "https://betterprogramming.pub/7-web-development-guidelines-to-speed-up-page-loading-e8f0e13a53b")[](https://betterprogramming.pub/7-web-development-guidelines-to-speed-up-page-loading-e8f0e13a53b)

[**CSS variable with Styled Components**  
_Use them easily in Next.js/React.js_devbyrayray.medium.com](https://devbyrayray.medium.com/css-variable-with-styled-components-7e91d89f13f3 "https://devbyrayray.medium.com/css-variable-with-styled-components-7e91d89f13f3")[](https://devbyrayray.medium.com/css-variable-with-styled-components-7e91d89f13f3)

[**How to use CSS Media Queries with Styled Components in React.js**  
_Use Media Queries Smarter In Styled Components_devbyrayray.medium.com](https://devbyrayray.medium.com/how-to-use-css-media-queries-with-styled-components-in-react-js-f5db5ffcc5f0 "https://devbyrayray.medium.com/how-to-use-css-media-queries-with-styled-components-in-react-js-f5db5ffcc5f0")[](https://devbyrayray.medium.com/how-to-use-css-media-queries-with-styled-components-in-react-js-f5db5ffcc5f0)

[**Developer Dilemmas: New Technology VS Old Technology**  
_Medium Short Story_devbyrayray.medium.com](https://devbyrayray.medium.com/developer-dilemmas-new-technology-vs-old-technology-3de8726ef6c1 "https://devbyrayray.medium.com/developer-dilemmas-new-technology-vs-old-technology-3de8726ef6c1")[](https://devbyrayray.medium.com/developer-dilemmas-new-technology-vs-old-technology-3de8726ef6c1)

[**How To Build A Custom Checkbox With JavaScript**  
_Learn JavaScript The Easy Way_javascript.plainenglish.io](https://javascript.plainenglish.io/how-to-build-a-custom-checkbox-with-javascript-82083a66ae04 "https://javascript.plainenglish.io/how-to-build-a-custom-checkbox-with-javascript-82083a66ae04")[](https://javascript.plainenglish.io/how-to-build-a-custom-checkbox-with-javascript-82083a66ae04)