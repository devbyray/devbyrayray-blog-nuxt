---
title: Prevent “Cannot read property ‘…’ of undefined” errors with JavaScript Classes
  + TypeScript
description: Every developer who did some JavaScript has got errors like “Cannot read
  property ‘…’ of undefined”. There is one simple way to prevent…
date: '2020-01-24T14:37:56.387Z'
categories: []
published: true
tags: ['Developer', 'WebDev']
image: https://cdn-images-1.medium.com/max/1200/1*MUg0PD9atBi8lF9IIvDQnA.png
---


Every developer who did some JavaScript has got errors like “Cannot read property ‘…’ of undefined”. There is one simple way to prevent them, with JavaScript Classes.

## ES2015 JavaScript Classes

Since ES2015 we received Classes in JavaScript 🙌, and a lot of developers were very happy with them! Before we had Classes we use something like the Module patter to do similar things.

Classes are ideal to make new instances of a group of properties and methods.

Now that we have defined the `class Vehicle` we always know which properties it has. When we make an instance of it, it has for sure those properties.

Now it is a given that the car variable has properties: type, length, width, height, and wheels. But we don’t know the values of it. When you log this to the console you find our that they are equal to the class we defined.

When asking for the square centimeter it will be 0.

To change the values, we need to give them when we create the instance or we do it afterward.

If you log the variable to the console, you will see that the values are changed.

### How do we prevent undefined errors with this?

Well, when defining a class you give it properties and or methods. So it’s not gonna be a guess if the property you need somewhere else, is gonna be there because it will be there!

## Let’s make it more predictable in TypeScript 🙌

The example above, is the class defined in TypeScript. But why is it more predictable in TypeScript than normal JavaScript?

When you define a `function` and give it a parameter `car`. But you want to make sure the `car` is based on the class `Vehicle` and have all the properties you expect.

We can guarantee that TypeScript is gonna give you an error if you give it a regular Object like below.

The error will look like the screenshot below.

![](https://cdn-images-1.medium.com/max/1200/1*tyBYnPiSz8TDRPXXKJr01A.png)

This is the reason why I love to work with TypeScript. It helps you prevent all kinds of error’s while developing instead of finding them as run-time errors in your browser.

## Thanks for reading this far 😉

I hope this short guide will help you prevent those annoying errors and gonna push you forwards to use classes.

Before you make any object in your code, think twice and consider making a class for it 😉.

> If you want to become better in JavaScript, I highly recommend the [JavaScript Beginner](https://BeginnerJavaScript.com/friend/MRFRONTEND) course by [Wes Bos](https://medium.com/u/86a55cd7983b)
