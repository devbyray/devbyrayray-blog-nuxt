---
ID: 1111
title: 'JavaScript Basics: How to create private &#038; public functions in JavaScript with the Module Pattern'
author: "Ray Ray"
excerpt: I’m gonna show you how you can create
  private functions and public methods
  with Vanilla JavaScript using the Module
  Pattern (Object Literal).

slug: 2017/11/javascript-basics-create-private-public-functions-javascript-module-pattern/
published: true
date: 2017-11-07 17:11:07
---

I’m gonna show you how you can create private functions and public methods with Vanilla JavaScript using the Module Pattern (Object Literal).

<h2>JavaScript Module Pattern</h2>
In my opinion, the JavaScript Module Pattern is the way to structure your JavaScript
into more reusable pieces of code.

But today I’m not gonna talk about everything of that Module Pattern. Today I’m gonna show you how you can create private functions and public methods.

<Youtube url="https://youtu.be/bEYjWhqrt_0" />

<h3>Private function</h3>

A private functions is private, because it is not accessible form outside the module.

<h3>Public method</h3>

A public method is just like the private one a function. But a function inside a `Object` is called a method.

Maybe experienced developers will tell, my explanation is to easy. Please explain in the comments!

<h3>Self-invoking-function-expression</h3>

A JavaScript module is created by a variable.

Inside that we put a “Self-invoking-function-expression”. This function is called automatically.

Enough talking, just dive into the code!

<h2>JavaScript Module</h2>

Let’s create a module called MrFrontendModule.

```javascript
var MrFrontendModule = (function () {
  let mrFrontendMethods = {}
  let title = 'The Mr Frontend JavaScript Module'

  let addEmoticon = function () {
    return title + ' '
  }

  mrFrontendMethods.getTitle = function () {
    return addEmoticon()
  }

  return mrFrontendMethods
})()
```

Inside the module we have:

<ul>
  <li>A let mrFrontendMethods variable which is an Object</li>
  <li>A let title variable which contains a title</li>
  <li>
    A let addEmoticon function which returns the title variable and an
    additional emoticon.
  </li>
  <li>A getTitle method, which is connected to the mrFrontendMethods Object</li>
  <li>A return statement which returns the mrFrontendMethods Object</li>
</ul>

What is <strong>private</strong> inside this module?

<ul>
  <li>
    The <code>title</code> variable
  </li>
  <li>
    The <code>addEmoticon</code> function
  </li>
</ul>

These things are private because they are not being returned by the return statement. So they won’t be accessible outside the module.

What is <strong>public</strong> inside this module?

<ul>
  <li>
    The <code>mrFrontendMethods</code> Object
  </li>
  <li>
    The <code>getTitle</code> method
  </li>
</ul>

These things are public because they are returned by the return statement. So accessible via the module, to use it outside this module.

<h2>How to use the public and private method and function?</h2>

We created this module because we want to make it re-usable across our other modules.

Let’s start with just using the `MrFrontendModule`. It is very easy, just call the methods like this:

```javascript
console.log(‘Title: ‘, MrFrontendModule.getTitle());
```

When this code will be executed you will see this as result: "<em>The </em>Mr<em> Frontend JavaScript Module</em> ”.

And that is expected!

What if we try to call the function <code>addEmoticon</code> like this?

```javascript
console.log(‘Title: ‘, MrFrontendModule.addEmoticon());
```

We will get this error:

```text
"TypeError: MrFrontendModule.addEmoticon is not a function
```
And that is correct because this function is not returned by the module, so basically hidden for everything outside the module.

So we can only call the function `addEmoticon` inside the `MrFrontendModule`.

<h2>How to use the public methods inside another JavaScript Module?</h2>

```javascript
var SecondModule = (function(MrFrontendModule) {
  let secondModuleMethods = {};

  secondModuleMethods.getTitleFromOtherModule = function() {
    return MrFrontendModule.getTitle();
  }

  return secondModuleMethods;
})(MrFrontendModule);
```

<h2>How would you handle private and public functions?</h2>

If you have another way of using private and public functions?

Which JavaScript module pattern do you prefer to use?

Please let me know in the comments!

If you want to search more about this Module Pattern, I highly recommend to <a href="https://toddmotto.com/mastering-the-module-pattern/" target="_blank" rel="noopener">check it out on the Todd Motto’s website</a>.
