---
ID: 1092
title: 'JavaScript Basics: How to return a value from a function in Vanilla JavaScript'
author: "Ray Ray"
excerpt: I want to talk what a return statement
  does and how you can return a value from
  a function in Vanilla JavaScript.

slug: 2017/10/javascript-basics-return-value-function-vanilla-javascript/
published: true
date: 2017-10-31 11:56:24
---

This time I want to talk what a return statement does and how you can return a value from a function in Vanilla JavaScript.

If you don’t like to watch a video, then scroll down for reading (almost) everything I said in the video.

<Youtube url="https://youtu.be/CXScWfSd-9Y" />

Let’s start with creating a simple multiply function in Vanilla JavaScript.

```javascript
function getMultiply(numberParam) {
  console.log('Multiply', numberParam * numberParam)
}
```

We can call it with:

```javascript
getMultiply(7)
```

So now this function will multiply the number 7. But we can’t do anything with the outcome of it.

<h2>Return a value from the function</h2>

Let’s bring in the return statement.

```javascript
function getMultiply(numberParam) {
  return numberParam * numberParam
}
```

Now we have to call the function in the console.log to see the outcome.

```javascript
console.log(getMultiply(7));
```

If we put this function into a variable, we have the outcome stored inside of it!

With the return statement, you can get value out of the function. For example you can return `true`, `false` or an `Object` or `Array`.
