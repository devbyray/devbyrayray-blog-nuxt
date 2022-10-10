---
title: Classes With Private Properties in TypeScript 3.8
description: 'Finally, privacy in TypeScript/JavaScript classes'
date: '2020-02-23T23:42:56.432Z'
categories: []
published: true
tags: ['Developer', 'WebDev']
image: https://cdn-images-1.medium.com/max/800/1*bmoWRyvZ_5bMlJpIWEA1VQ.jpeg
---

I have the feeling this was not on the radar of a lot of JavaScript developers, but for a while, we had the possibility to use private properties in our JavaScript classes (check the _support_ section below).

In this post, I want to show you how useful private properties are in classes. We can start using it today because of the upcoming browser and tooling support.

Side note: Private properties and methods are part of a [stage 3 proposal for the ECMAScript spec](https://github.com/tc39/proposal-class-properties/#private-properties) so it is possible this will change in the future. It is likely to be added to ES2019 (ES10).

## Pre ES2015 Classes, Module Pattern

Let’s go back to the ES5 days of JavaScript.

We didn’t have any formalized module definition. We used functions smartly (we were also using [RequireJS](https://requirejs.org/), [CommonJS](https://requirejs.org/docs/commonjs.html), and other alternatives). This gave us the ability to create some form of modules.

If you wanted to use the module you had to use it like this.

Ford.brand() // “Ford Mustang”

But we could make use of private properties and methods. To make it public you had to return everything that you wanted to use outside the module.

A lot of developers were very used to the fact of private properties and methods by default in this type of module. Check out the post by Todd Motto for more information about the [module pattern](https://ultimatecourses.com/blog/mastering-the-module-pattern).

## ES2015 Classes

The launch of ES2015 (ES6) brought us a massive upgrade for the JavaScript language. I was very happy with this upgrade just like my fellow JavaScript developers.

class Foo {  
  bar = 10  
}

console.log(new Foo().bar) // 10

JavaScript classes mostly behave like classes in other languages. They are great for re-using functionality in all kinds of ways.

I like them more than the module pattern, but I miss my private properties…

## Use TypeScript Classes With Private Properties

But we don’t have to be sad anymore. Private properties are coming to TypeScript classes! To use them in TypeScript, you have to install version 3.8, which was [released Feb the 20th](https://devblogs.microsoft.com/typescript/announcing-typescript-3-8/).

npm install typescript

> “Finally, something to consider is where you intend for your code to run. TypeScript currently can’t support this feature unless targeting ECMAScript 2015 (ES6) targets or higher.

> This is because our down-leveled implementation uses `_WeakMaps_` to enforce privacy, and `WeakMaps` can’t be polyfilled in a way that doesn’t cause memory leaks.

> In contrast, TypeScript’s `private`\-declared properties work with all targets — even ECMAScript 3!” — [Microsoft DevBlog](https://devblogs.microsoft.com/typescript/announcing-typescript-3-8-beta/)

## How to Make Private Class Properties

Simply by prefixing them with a `#`. It is that simple!

When you try to get the information from the private property, it will give an error in TypeScript.

Property ‘#foo’ is not accessible outside class ‘Foo’ because it has a private identifier.

But we can make it available by returning it via a public method. Like with everything in JavaScript.

Play with the new private properties in classes in the [TypeScript playground](https://www.typescriptlang.org/v2/en/play?ts=3.8.0-beta#code/MYGwhgzhAEBiD29oG8BQ0PQMQDNHQF5oAmABgG51MAjMAJ0OgEZTUqMBzAUwBcF4AFAEoU7TBjq8ArnQB20HgAsAlhAB0uRGIC+qXW2DxZEeCC5qQ8DgNlcA7nETC1tOiID075q0PHT5y2tbB35nbj4nIQ8vMlRfEzMLKxt7R0EhDTx4aOguOjp4OiA).

## Why Set Private Class Properties

The reason I would use private properties is to use the information only locally. If you’re doing all kinds of calculations inside your class, but don’t need to share it publicly, then make it private.

## Browser Support

At this moment, the only browsers that support these private properties are **Chrome** (>74) and **Opera** (>66).

![Source: [CanIUse.com](https://caniuse.com/#feat=mdn-javascript_classes_private_class_fields)](https://cdn-images-1.medium.com/max/1200/1*exT34-AZJ-BTLpMYYAnbHg.png)
Source: [CanIUse.com](https://caniuse.com/#feat=mdn-javascript_classes_private_class_fields)

If you want to use the private properties in **Node.js**, you have to use version 12 at a minimum. **Babel** supports private properties via a [plugin](https://babeljs.io/docs/en/babel-plugin-proposal-private-methods).

If you want to read more about the awesome features in TypeScript 3.8, check out the [Microsoft DevBlog](https://devblogs.microsoft.com/typescript/announcing-typescript-3-8/).

## Angular

Using private class properties inside your Angular application sounds pretty nice, but the Angular team [doesn’t officially support TypeScript 3.8](https://github.com/angular/angular/issues/35204) in Angular 9.0. They say we have to wait until Angular 10.

But I did a small test with the TypeScript 3.8 with an Angular 9 application and it looks like it’s still running. So, I would say give it a shot.

If you have issues using Angular 9 with TypeScript 3.8, please let me know in the comments so we can update others who want to try this.

## Conclusion

As you can see, setting private class properties can be pretty useful and can give a feeling of privacy. But be honest, we are at a very early stage, so it is possible that the specs will change a bit.

Thanks for reading all this way! I hope you are as on-fire about this feature as I am and have learned something new from this post.

If you have any questions, please let me know in the comments.

## Read more from me

[**The Number 1 Skill You Need to Grow as a Developer**  
_Be helpfull to anyone in everything, it’s a WIN-WIN!_medium.com](https://medium.com/@devbyrayray/the-number-1-skill-you-need-to-grow-as-a-person-7d1a6f34afb5 "https://medium.com/@devbyrayray/the-number-1-skill-you-need-to-grow-as-a-person-7d1a6f34afb5")[](https://medium.com/@devbyrayray/the-number-1-skill-you-need-to-grow-as-a-person-7d1a6f34afb5)

[**7 Lessons I Learned While Being a Developer for 10 Years**  
_Lessons I learned which will hopefully save you time and stress_medium.com](https://medium.com/better-programming/7-lessons-i-learned-while-being-a-developer-for-10-years-c0e3db2c1336 "https://medium.com/better-programming/7-lessons-i-learned-while-being-a-developer-for-10-years-c0e3db2c1336")[](https://medium.com/better-programming/7-lessons-i-learned-while-being-a-developer-for-10-years-c0e3db2c1336)

[**An Introduction to TypeScript Property Decorators**  
_A deeper dive into TypeScript decorators_medium.com](https://medium.com/better-programming/an-introduction-to-typescript-property-decorators-1c9db23b6ca1 "https://medium.com/better-programming/an-introduction-to-typescript-property-decorators-1c9db23b6ca1")[](https://medium.com/better-programming/an-introduction-to-typescript-property-decorators-1c9db23b6ca1)

[**5 Reasons Why You Should Write Technical Blog Posts as Developer**  
_How writing technical blog posts can help you early in your developer career_medium.com](https://medium.com/better-programming/5-reasons-why-you-should-write-technical-blog-posts-as-developer-30cd349ece60 "https://medium.com/better-programming/5-reasons-why-you-should-write-technical-blog-posts-as-developer-30cd349ece60")[](https://medium.com/better-programming/5-reasons-why-you-should-write-technical-blog-posts-as-developer-30cd349ece60)

[**7 Steps to Dockerize Your Angular 9 App With Nginx**  
_Set up your Angular 9 app in a Docker environment and deploy it in no time_medium.com](https://medium.com/better-programming/7-steps-to-dockerize-your-angular-9-app-with-nginx-915f0f5acac "https://medium.com/better-programming/7-steps-to-dockerize-your-angular-9-app-with-nginx-915f0f5acac")[](https://medium.com/better-programming/7-steps-to-dockerize-your-angular-9-app-with-nginx-915f0f5acac)