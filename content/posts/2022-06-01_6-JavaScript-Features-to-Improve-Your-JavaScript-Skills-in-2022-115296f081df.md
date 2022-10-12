---
title: 6 JavaScript Features to Improve Your JavaScript Skills in 2022
description: The features Array.at(), structuredClone(), Top-level await, For-await-of-loop, private class fields and Object.hasOwn() are both very new features and features that improve the already existing functionality in JavaScript. Let's dive into it together.
date: '2022-06-01T05:17:57.609Z'
categories: []
tags: []
slug: /@byrayray/6-javascript-features-to-improve-your-javascript-skills-in-2022-115296f081df
image: images/1____LYzK__xh7lUT__lAwjEASew.png
---

Recently all major browsers updated their JavaScript features. So in this post, I will dive into these six features worth mentioning to improve your JavaScript skills in 2022.

The features Array.at(), structuredClone(), Top-level await, For-await-of-loop, private class fields and Object.hasOwn() are both very new features and features that improve the already existing functionality in JavaScript. Let's dive into it together.


{{toc}}

## 1. Get JavaScript Array item with `Array.at()`

### Before

Let’s start with the `Array.at()` method. Since the early days of JavaScript, we have been using this syntax to get a specific element with a known index from an Array.

```js [array-index.js]
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const firstElement = array[0]
const fourthElement = array[3]
const lastElement = array[array.length - 1]
const thirdLastElement = array[array.length - 3]
```

### After

For now, this works perfectly fine. But `array.at()` can be more readable. So with this method, we can write the code from above in a more readable manner.

```javascript [array-index.js]
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const firstElement = array.at(0)
const fourthElement = array.at(3)
const lastElement = array.at(-1)
const thirdLastElement = array.at(-3)
```

The syntax becomes shorter, especially with the last or nth-last elements.

If the Array index doesn’t exist, you still get a `undefined` value back, so nothing has changed there.

```javascript [array-index.js]
// Before
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const afirstElement = array[0]
const afourthElement = array[3]
const alastElement = array[array.length - 1]
const athirdLastElement = array[array.length - 3]

// After
const arrayNew = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const bfirstElement = arrayNew.at(0)
const bfourthElement = arrayNew.at(3)
const blastElement = arrayNew.at(-1)
const bthirdLastElement = arrayNew.at(-3)

console.log({
	before: {
		afirstElement,
		afourthElement,
		alastElement,
		athirdLastElement
	},
	after: {
		bfirstElement,
		bfourthElement,
		blastElement,
		bthirdLastElement
	}
})
```

:runkit{link="https://runkit.com/devbyrayray/javascript-array-at-method"}

### Browser support

The browser support is perfect, in my opinion. Hopefully, you don’t need to support old Internet Explorer browsers because they lack support. Find more [information and examples in de MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at).

---

## 2. Deep copy a JavaScript Object with structuredClone()

If you want to create a copy of a JavaScript Object, it becomes a shallow copy most of the time.

### Spread operator copy

```javascript [spread-copy.js]
const myBrowser = {
	language: 'JavaScript',
	framework: 'Angular',
	browser: 'Brave',
	os: 'Windows 11',
    date: {
      time: new Date().getTime(),
      date: null
    }
}
const myBrowserShallowCopy = {...myBrowser};
console.log('before myBrowser:', myBrowser);
console.log('before myBrowserShallowCopy:', myBrowserShallowCopy);

myBrowserShallowCopy.browser = 'Chrome';
console.log('after update shallow myBrowser:', myBrowser);
console.log('after update shallow myBrowserShallowCopy:', myBrowserShallowCopy);

myBrowser.date.date = new Date();
console.log('after update original myBrowser:', myBrowser);
console.log('after update original myBrowserShallowCopy:', myBrowserShallowCopy);
```
:runkit{link="https://runkit.com/devbyrayray/javascript-array-at-method"}


This means that updating a nested property (not a top-level property) will also affect the shallow copy.

### JSON Parse & Stringify

Making deep copies require something more. We need `JSON.parse(JSON.stringify(object))` for that. It feels like a hack, but it gets the job done.

When you run this code, you will see that the original `myBrowser` is being updated, but the deep copy `myBrowserCopy` is not updated. So with `JSON.parse(JSON.stringify(object))` you can create deep copies.

### StructuredClone()

You can use a more straightforward method to create deep copies of your objects.

As you can see, this method has better readability because it says you make a clone of that object.

### Browser support

The browser support is great, in my opinion. Hopefully, you don’t need to support old Internet Explorer browsers because they lack support. Also, keep in mind that some browsers don’t support this method for workers. Find more [information and examples in de MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone).

---

## 3. Top-level await

Since ES2017, we have async/await for synchronously writing Promises.

### Before

The only condition there was to use `await` in JavaScript. You needed to make your function `async`, which is sometimes a bit of a hassle. Because you don’t want to write `async` before every function that uses `await`, right?

_Writing an_ [\_I_FFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) _for every time you wanted to use_ `_await_` _is also pretty ugly 🤭._ _When the code doesn't run, select the newest Node version 👆_

### After

Well, now we can use `await` without using `async` 💪

Now you don’t need any IFFE boilerplate anymore 🔥. We need to write `await`; that’s it 😀! Remember that methods in Classes still need to have the `async` keyword before it; otherwise, it won’t work.

### Browser support

In my opinion, the [browser support is great](https://caniuse.com/mdn-javascript_operators_await_top_level). Hopefully, you don’t need to support old Internet Explorer browsers because they lack support. Find more [information and examples in de V8 documentation](https://v8.dev/features/top-level-await).

---

## 4. For await of

I don’t know if this use case ever happened to you, but for me, it did.

Imagine you need to make multiple AJAX calls after each other, but you want to loop over them. But during the loop, those Promises are not resolved yet. So what are you going to do?

### Before

A while ago, it was only possible to wait until all those Promises were resolved. After the resolvent, you could loop over them.

While running this code, you can see that if one of the Promises will not be resolved but rejected, the for-loop doesn’t even begin to loop over them.

### After

But thanks to the `for await...of` you can combine a for-loop with the `Promise.all()` functionality.

As you can see, this is better to read in my opinion. And every time a Promise is resolved, the loop goes to the following Promise, which is excellent!

But when a Promise gets rejected, the for-loop will stop. If you want the loop to continue when a Promise is rejected, you need to use `Promise.allSettled()`. With this method, you can see which promises are rejected and fulfilled. (Check [MDN Web Docs for more information about Promise.allSettled](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled).)

### Browser support

In my opinion, the [browser support is great](https://caniuse.com/mdn-javascript_statements_for_await_of). Hopefully, you don’t need to support old Internet Explorer browsers because they lack support. Find more [information and examples in de MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of).

---

## 5. Private class fields

Every developer that spends some time in TypeScript knows the `private`keyword. This tells that a property or method is only used inside that class. But in the browser, you can see that those fields and methods are exposed just like the public ones.

From now on, we can make a property of method private by putting a # before it. It’s not only syntactic sugar, but it doesn’t expose that field or method to the outside.

If you log the whole class in the console, you can see that the private field exists, but when you try to call it, you receive a syntax error. Private fields can be exposed outside the class with a public method.

### Browser support

In my opinion, the [browser support is great](https://caniuse.com/mdn-javascript_classes_private_class_fields). Hopefully, you don’t need to support old Internet Explorer browsers because they lack support. Find more [information and examples in de MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields).

---

## 6. Object.hasOwn

Sometimes we like to check if an object has a specific property before we try to access it. Yes, I know that there is something like [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) 😉.

_If you have to check these things a lot of times, please consider TypeScript. Follow my_ [_TypeScript for Beginners guide_](https://levelup.gitconnected.com/typescript-for-beginners-97b568d3e110)_._

For years we have the `Object.prototype.hasOwnProperty()` method in JavaScript. This method returns a boolean when you use it.

But when we try to make an Object like this, it will become confusing.

Because usually, when you create an Object (`const obj = {}`), that Object gets all default properties and methods from `Object.prototype`, but when you give `null` as a value to the create method, it won’t receive anything from `Object.prototype` so that’s why the `hasOwnProperty` method isn’t on that Object.

With the `Object.hasOwn`, you don’t have that problem.

### Browser support

**_Note:_** `_Object.hasOwn()_` _is intended as a replacement for_ `[_Object.hasOwnProperty_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)`_._

In my opinion, the [browser support is great](https://caniuse.com/mdn-javascript_builtins_object_hasown). Hopefully, you don’t need to support old Internet Explorer browsers because they lack support. Find more [information and examples in de MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn).
