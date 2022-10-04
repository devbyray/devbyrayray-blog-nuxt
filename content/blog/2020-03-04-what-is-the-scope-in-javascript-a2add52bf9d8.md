---
title: What Is The Scope In JavaScript
description: Explanation about the behaviour of Var, Const, Let, Functions, Objects and
  Classes in the Global Scope.
date: '2020-03-04T07:48:28.945Z'
categories: []
published: true
tags: ['Developer', 'WebDev']
image: https://cdn-images-1.medium.com/max/800/0*ZvJyEMbKH1Liazb1
---

For codenewbies and developers who just starting in JavaScript development, the Scope in JavaScript can be a really complex topic to understand.

In this post I want to turn that complex topic into a very easy to understand concept so everyone can understand how it works and what you can do with it.

Scope is a very important concept to understand. When you own this concept in your head, this will make it much easier to build awesome things with JavaScript.

> If you are the type of person who likes a presentation, then I recommend one of my slides I made a couple years ago: [JavaScript essentials presentation](http://slides.com/raymonschouwenaar-1/javascript-essentials#/8)

## What Is a Scope

For developers that speak English as their native language this is a no-brainer. But for those English is not their native language it’s not so obvious.

I like the definition below which makes it’s so clear.

> **scope, range, reach, orbit, compass, ambit(noun)**  
> An area in which something acts or operates or has power or control: “the range of a supersonic jet”. **Source**: [Definitions.net](https://www.definitions.net/definition/scope)

That made sense right!

In my own I would define it as _an area which can be hidden for outside but visible from the inside_.

## Scope Types

In JavaScript we have 2 types of scope. A Global scope and local scopes.

1.  **Global scope**: _all the things declared in the global scope is publicly available._
2.  **Local scope**: _all the information declared in a local scope is only available in that scope._

Let’s dive into the both types of scope. Learn what you can and can’t do with it, and how you can use it.

## 1\. Global Scope

1.  Var
2.  Function
3.  Class
4.  Const & Let

## 1\. Global scope

![Photo by [NASA](https://unsplash.com/@nasa?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/800/0*WtZrVKOkaDEr2-kK)
Photo by [NASA](https://unsplash.com/@nasa?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

The most important but critical scope is the “_global scope_”. Every other scope can reach everything that is defined in the global scope.

In the browser we have the `window` object, and in NodeJS we have `global` the object. In this post when I say “_global scope_” I mean both of them.

One thing you need to remember about the global scope, Is that you don’t need to store to much information in it. It is recommended to store information in your local scopes.

### 1.1 Var

When you define a `var` in the global scope it’s publicly available in the global object.

The `var` you store in the global scope or in any other scope can be overwritten. It is recommended to make use of `let` or `const` instead of the `var` . Because the `var` doesn’t have behaviour for being “block scoped”.

### 1.2 Function

When you define a `function` in the global scope it’s publicly available in the global object.

### 1.4 Class

When you define a `class` it’s publicly available but not bound to the global object.

There is quite a difference in what is bound to the global object and what not, but still available in the global scope.

### 1.3 Const & Let

When you define a `let` or `const` variable, it’s publicly available but not bound to the global object.

## 2\. Local Scope

1.  Var
2.  Function
3.  Const & Let
4.  Class

## 2\. Local scope

![Photo by [Benjamin Davies](https://unsplash.com/@bendavisual?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/800/0*g0ubFhE7-MSEWoUH)
Photo by [Benjamin Davies](https://unsplash.com/@bendavisual?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

When you define `function` , `if` or `class` , basiclly everything between a `{}` than inside a scope is created. This is what we call a local scope.

Everything that is declared inside a local scope is only available inside. An other scope or even the global scope can’t reach it.

## 2.1 Var

When you define a `var` in the local scope it is only available inside that scope. So a `var` is what we call `function`scoped. If you try to reach it outside of that scope, you will get error’s that it is `undefined` .

> Since we have `_let_` and `_const_` I recommend not using `_var_` anymore because it has some side effects. I will explain this better during this post.

**Please click on the console to see the results 😉**

In this code sample we can see that if a `var` is defined in the global scope it is visible for every other scope. When we define a `var` inside a function we can only see it inside that function. Outside the function it shows it is `undefined`.

But inside our `function` we can overwrite the global defined `var`.

**Please click on the console to see the results 😉**

As you can see, after we defined `globalScope` variable the value is like we defined “GlobalScope”. After we manipulate this inside our function it has a 👏 emoji after it.

This is gonna lead to unpredictable behaviour for the application your building. You definitly gonna end up with error’s.

## 2.2 Function

A `function` on it’s own is called a _function_, a `function` attached to a `Object` or `Class` is called a _method_. A `function` defined in a function is a normal function but hidden from the outer scope.

When you define a `function` in the global scope it’s publicly available in the global object.

### 2.2.2 Methods Inside an Object

When you define a method or property in an `Object` it is bound to that scope, but still available through that Object. If you define variables in that method it stays hidden.

With a `class` it works the similar as an `Object`.

> In the future this will change for the `_class_` since the introduction of [private fields in Classes](https://medium.com/better-programming/classes-with-private-properties-in-typescript-3-8-9fdb91c26ab1). Currently this is only supported in the browsers Chrome and Opera and the tools Babel and TypeScript (v3.8).

**Please click on the console to see the results 😉**

As you can see, we can overwrite the `globalScope` variable from the `Object`. We can also change the value of the `name` property from the globalScope.

While these things are nog protected, the variables inside our methods can’t be change nor are visible from the global scope.

### 2.2.3 Function In a Function

With a function inside a function

**Please click on the console to see the results 😉**

## 2.3 Const & Let

The `const` and `let` variables are block scoped. Where a `var` is bound to the scope of a `function`, the `const` and `let` are scoped between every `{}` .

The `const` and `let` variables can be protected by a `function` , `if-statment` , `for-loop` (or any other loop). Outside it’s scope it can not be reached.

### 2.3.1 Let

If you want to overwriter information in the same scope, you have to declare a `let` variable because it the information can be changed. The `let` variable can’t be redeclared.

### 2.3.2 Const

Information that needs to be the same during the execution of your JavaScript can find it’s home in the `const` variable. The const variable can’t be overritten nor be re-declared.

If the `const` variable has a `Object` or `Array` you have the posibility to add and remove properties. But if you store single type values in it, it remains the same.

## 2.4 Classes

A `function` on it’s own is called a _function_, a `function` attached to a `Object` or `Class` is called a _method_. A `function` defined in a function is a normal function but hidden from the outer scope.

### 2.4.1 Methods Inside a Class

In this example you can see, variables declared in a method are not available on the outside. The `globalScope` variable is available in all local scopes. Properties and methods are available outside the class when creating a `new` instance of it.

In side our class we can modify the `globalScope` variable. Outside our class we can modify our `name` property. But this will only be in that instance. If we would make another instance the name would be what is defined in the `class`.

## Conclusion

I hope you have a better understanding of the scope in JavaScript and also know what to do with it and how to implement this in your own code! If not, please add questions in the comments! I will be happy to help you figure it out!

![](https://cdn-images-1.medium.com/max/800/1*0fLVc6GjamTuPR79Cqce4Q.png)

Hi, I’m **Ray** a Dutch 🇳🇱 JavaScript Developer and love to share my knowledge which I gained from being a Developer since 2009. I write stories about JavaScript, TypeScript, Angular, and anything related to life as a developer.

You can follow me on [Twitter](https://twitter.com/devbyrayray) and [Instagram](https://www.instagram.com/devbyrayray/) or [subscribe to my newsletter](https://buttondown.email/devbyrayray) which I send when I post a new story.

_Happy Coding 🚀_

## Read More From Me

[**Build Fast, JSON-Powered Forms on Angular With NGX Formly**  
_Forms can be a nightmare — let’s make them better_medium.com](https://medium.com/better-programming/build-fast-json-powered-forms-on-angular-with-ngx-formly-b7a00733e66e "https://medium.com/better-programming/build-fast-json-powered-forms-on-angular-with-ngx-formly-b7a00733e66e")[](https://medium.com/better-programming/build-fast-json-powered-forms-on-angular-with-ngx-formly-b7a00733e66e)

[**You Don’t Need a JavaScript Framework**  
_Sometimes React, Angular, or Vue.js might be too much_medium.com](https://medium.com/better-programming/you-dont-need-a-javascript-framework-df2a36c2dd0a "https://medium.com/better-programming/you-dont-need-a-javascript-framework-df2a36c2dd0a")[](https://medium.com/better-programming/you-dont-need-a-javascript-framework-df2a36c2dd0a)

[**2 Ways to Resolve Duplication in JavaScript Arrays and Objects**  
_Do you know how to deal with duplication?_medium.com](https://medium.com/better-programming/2-ways-to-resolve-duplication-in-javascript-arrays-and-objects-e377e1bdc5e1 "https://medium.com/better-programming/2-ways-to-resolve-duplication-in-javascript-arrays-and-objects-e377e1bdc5e1")[](https://medium.com/better-programming/2-ways-to-resolve-duplication-in-javascript-arrays-and-objects-e377e1bdc5e1)

[**7 Steps to Dockerize Your Angular 9 App With Nginx**  
_Set up your Angular 9 app in a Docker environment and deploy it in no time_medium.com](https://medium.com/better-programming/7-steps-to-dockerize-your-angular-9-app-with-nginx-915f0f5acac "https://medium.com/better-programming/7-steps-to-dockerize-your-angular-9-app-with-nginx-915f0f5acac")[](https://medium.com/better-programming/7-steps-to-dockerize-your-angular-9-app-with-nginx-915f0f5acac)