---
title: A Practical Introduction to TypeScript Class Decorators
description: Classes on fire in TypeScript with class decorators
date: '2020-02-03T23:00:37.989Z'
categories: []
published: true
tags: ['Developer', 'WebDev']
image: https://cdn-images-1.medium.com/max/800/1*3Ayk8rYQA5aZkTrarsfwVg.jpeg
---

A lot of times, there are features you don’t know, so maybe, in your case, the “Decorator” is one of them.

This is the first post in a series about TypeScript Decorators where I want to give you a practical introduction to them.

What is a Decorator? Which types are there? Why would you want to use a Decorator and in what kind of situations would you use it?

Currently, the Decorator is a stage 2 proposal for JavaScript and is available as an experimental feature of TypeScript.

If you want to read more about the specifications, which are pretty interesting and it is well-written, check it out in the GitHub repo: [JavaScript Decorators](https://github.com/tc39/proposal-decorators).

## What Is a Decorator?

What are Decorators? Well, think about the meaning of the word “decoration” and you are pretty close.

The TypeScript website describes it as:

> “A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter.”

I would describe it as “a special declaration to add extra features on an existing class declaration, method, accessor, property, or parameter.”

## JavaScript Classes

To use a decorator, you need to be familiar with JavaScript classes. Classes are super useful to know!

If you don’t know what a JavaScript class is and how they work, I highly recommend checking out [this video](https://www.youtube.com/watch?v=T-HGdc8L-7w) by [Daniel Shiffman](https://medium.com/u/fecd456da1ea) from [The Coding Train](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw), to get a practical introduction to them. After that, you can follow this post about Decorators better.

If you are using Angular, chances are that you are already using Decorators like `@Component`, `@NgModule`, `@Input`, `@Output`, or `@Inject`. This will help a bit with getting a better understanding of Decorators.

## Which Decorators Are There?

To describe what Decorators do in TypeScript, we need to dive deeper into each type. There are a few different types of decorators.

1.  Class Decorator (current post).
2.  [Property Decorator](https://medium.com/better-programming/an-introduction-to-typescript-property-decorators-1c9db23b6ca1) (next post).
3.  Method Decorator (will come later).
4.  Accessor @ Decorator (will come later).
5.  Parameter Decorator (will come later).

## Class Decorator

![](https://cdn-images-1.medium.com/max/800/0*gRbnQWKc5n8C5T_l)

Let’s start with the class Decorator. To visualize that, we are going to build a (fictive) piece of the Lord of the Rings game.

To play the game, we need a lot of characters. Some can be the character you play with, some are for the scene around it.

This is the class for a `Character`. It has an `armour`, `height`, `width`, `weight`, and `type`. The type is bound to the enum `CharacterType`.

In the LOTR, you have a wide variety of characters. We are going to use the class Decorator to make two character types, the Hobbit and the Elf.

Both of the classes extend the `Character` class we defined on top because the Elf and Hobbit both have their own strengths, weaknesses, and capabilities.

### **Hobbit class**

### Elf class

### **Hobbit Decorator**

In the Hobbit Decorator, we override some properties that are specific if our player is a Hobbit. The same for the Elf.

A Decorator is a function that returns a new constructor which extends the `constructor` of the class. In this constructor, we add or overwrite existing properties/methods to the classes we apply the Decorator on.

Sadly enough, we can’t get the information from the original constructor to use that information. I learned that after trying for a day! If you know another method, please write it in a comment so I can include it.

When you want to add the Decorator to a class, you define it as `@hobbitDec` above the class you want it to be applied to.

When you console log that in the browser, you should see the information combined with the information from the `PlayerCharacter`.

### **Elf decorator**

If we want our player to be an Elf, we do the same thing as for the Hobbit.

We apply the `@elfDec` on the `PlayerCharacter` class to add the player type information.

Log the information in the console and you see that the correct information is applied.

Now we know how to use a class Decorator in TypeScript. If you want to check my whole code of the class Decorator, visit the [TypeScript playground](https://www.typescriptlang.org/play/index.html?experimentalDecorators=true&emitDecoratorMetadata=true#code/GYVwdgxgLglg9mABACzgIzTKARAphAHgBVFcAPKXMAEwGdEBvRMXAdwAoA6bgQwCcA5rQBciHmACeAbQC6ASlEMAvoiUA+dhAS0ofENDh9RROYwBQiS4i1gdKdJiiIAvMzaIAEg6zs5FqwH+ljZ2TKww1FDIADQouDACyFCxrPGJyWJ8ALZwIHyxUBIADrgqrqgYWEEBiNV8uFB5SBAANjy09OSUNPQhuvpQhuY1VuGRyC6IY1HVAchpSZPzCUmzowtOrqkrUGuW-Dl5kwe5fHuIhSWTl7jVSmb3ZqCQsAikLcB4hCRdVHSMbg43E4-CEonE0nkihU6k02n6BiMiBMwysfXewEmLFYiAAoh9fOdquiwhEorFlukUhtYic8gViqVJrgPkSAvVGnxmm0OqQKH9evC9IjUSNphMtmTkOdKYtyhtztt0pMlasRvtsqdjpq8ucbtdGXcHmYzFQQFlEABhZD8HjQXB8IiM0WIAByAHlXbjJgByMAIXA+6LVDzugBCYYAkiRXD6Ko4g9VcQAZABivpZwETj1a7Xo1tt9r4LqKIDQLRgEEyhyRYHNaAdkwAjAAGFsAbmqpfLlbiO1EdayDeLrhbXbLFar4oH9cbo-HPanGxnQ7niDHAW7k4ujNEBb4dsojudrn3h4dTpKnA9XuNZlzvK8lScvx6VptB6LJYnvdlUBXw7Ngu27Tsws4jogABMwG9qq-5gauEEACwblYW69jce4fuex5XKe2FFpeuCcKGEbRiaAR9MKgx8L4LoBLQIAlLRfgBPcOY8vQ+KYq+-xnl+DAwVWdK1uBzZth2Ql9ukAFrq2qGWOhU5SrJEGQQpiBKVMy4IYBrgAJwaVpmHvoWR5EZM-HmYynApqmFFokKAyGHRgnqogjHMYSbF3gA9L5iAAAptBIjYQARR5mAAAvGWBfPenFBSFDpWY2bloT+VZgDwWS4KIOh8DAYACL6wU8KFxbZblPqdjm8KaclEHYkl5UpRFDq+J297aHALTES0cACOwPpFI1ohBg1rV8HIQA) where you can also see what the compiled JavaScript looks like.

### Decorator factory

If you want to give your Decorator some options, conditionals, or other extra data, you need to use a Decorator factory.

A Decorator factory is a function that returns the expression that will be called by the Decorator. Let’s take the Hobbit Decorator, for example.

If we want to use that Decorator with an option, we add it like `@hobbitDecorator(true)`.

If we try to get the data from the player to the console, we see that the `condition` attribute is added to the result.

## When Would You Use the Class Decorator?

Well, I think it’s pretty simple. When you want to overwrite or add a bunch of properties/methods to a class, it can be a good idea to use the class Decorator.

### **What is the difference between Decorator and extending a class?**

Maybe you’re thinking that you could also extend the `Hobbit` or `Elf` class at the `PlayerCharacter` class. Yes, that is also possible!

But the difference, when using a class Decorator instead of extending a class, is that when you extend a class, you will and can manipulate the data from the extended class most of the time.

In contrast to extending a class, the class Decorator will always be on top of the class. So you can’t manipulate the data from the Decorator inside your class.

So, if you use a class Decorator, know that you can cause some major side-effects you didn’t think of.

## Thanks

I hope that your now up-to-date with the TypeScript class Decorator and that you learned how to use it. But also what is not possible with it.

In the next post, I’m going to show you how to use the TypeScript property Decorator.

If you have any questions, please post them in the comments 👍.

## Read my other posts

[**Thoughts About Micro-Frontends in 2020**  
_Why it could be good to break up your monolithic front-end codebase_medium.com](https://medium.com/better-programming/thoughts-about-micro-frontends-in-2020-dd95eb7216f "https://medium.com/better-programming/thoughts-about-micro-frontends-in-2020-dd95eb7216f")[](https://medium.com/better-programming/thoughts-about-micro-frontends-in-2020-dd95eb7216f)

[**Dive into GraphQL w/ Apollo Client by building a SpaceX 🚀 app in Angular 8**  
_I know that this sounds odder than it is, but using GraphQL in an Angular 8 application with Apollo Client feels like…_itnext.io](https://itnext.io/dive-into-graphql-w-apollo-client-by-building-a-spacex-app-in-angular-8-20e703c93f0a "https://itnext.io/dive-into-graphql-w-apollo-client-by-building-a-spacex-app-in-angular-8-20e703c93f0a")[](https://itnext.io/dive-into-graphql-w-apollo-client-by-building-a-spacex-app-in-angular-8-20e703c93f0a)

[**From XHR to Fetch With Async/Await on the Finish Line**  
_A look at the evolution and history of requests in JavaScript_medium.com](https://medium.com/better-programming/from-xhr-to-fetch-with-async-await-on-the-finish-line-b021de1d226b "https://medium.com/better-programming/from-xhr-to-fetch-with-async-await-on-the-finish-line-b021de1d226b")[](https://medium.com/better-programming/from-xhr-to-fetch-with-async-await-on-the-finish-line-b021de1d226b)

[**Prevent “Cannot read property ‘…’ of undefined” errors with JavaScript Classes + TypeScript**  
_Every developer who did some JavaScript has got errors like “Cannot read property ‘…’ of undefined”. There is one…_itnext.io](https://itnext.io/prevent-cannot-read-property-of-undefined-errors-with-javascript-classes-typescript-a388c1f0ef45 "https://itnext.io/prevent-cannot-read-property-of-undefined-errors-with-javascript-classes-typescript-a388c1f0ef45")[](https://itnext.io/prevent-cannot-read-property-of-undefined-errors-with-javascript-classes-typescript-a388c1f0ef45)

[**Build a NodeJS mock server (API) with random data**  
_As a frontend developer, you often need data from an API. But sometimes the backend hasn’t been set up by your team. In…_medium.com](https://medium.com/@devbyrayray/build-a-nodejs-mock-server-api-with-random-data-86303db9156a "https://medium.com/@devbyrayray/build-a-nodejs-mock-server-api-with-random-data-86303db9156a")[](https://medium.com/@devbyrayray/build-a-nodejs-mock-server-api-with-random-data-86303db9156a)