---
title: An Introduction to TypeScript Property Decorators
description: A deeper dive into TypeScript decorators
date: '2020-02-11T19:55:58.361Z'
categories: []
published: true
tags: []
image: https://cdn-images-1.medium.com/max/1200/1*ypxYKNA2e3VeqE7UcNhXkg.jpeg
---

In a previous piece, we explored the TypeScript class decorators. This time, we’re going to dive into the property decorators. The property decorators can change the value that comes out of the class properties.

If you haven’t read [my piece on class decorators](https://medium.com/better-programming/a-practical-introduction-to-typescript-class-decorators-afb996af0763), I recommend doing so first. It contains essential information to help you follow along.

## Decorator Types

To describe what decorators do in TypeScript, we need to dive deeper into each type. There are a few different ones:

*   [Class decorator](https://medium.com/me/stats/post/afb996af0763) (previous piece)
*   Property decorator (current piece)
*   Method decorator (will come later)
*   Accessor decorator (will come later)
*   Parameter decorator (will come later)

## Property Decorator

With a property decorator, you can change the value that is in a property at runtime. The property decorator is declared before the property declaration. It cannot be used in a declaration file or used in combination with a `declare` [statement](https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html).

This is how you would use a property decorator:

## How To Create a Property Decorator

When you create a property decorator function, you need to have two arguments.

1.  `target`, which refers to the constructor or prototype of the class you’re using the decorator on.
2.  `key`, which refers to the class property you’re using the decorator on.

When using `target[key]`, you will get the value (of that instance of the class) inside the property. This is super useful!

The `Class decorator` function has no access to any property value. That’s why the class decorator is better for adding properties. It’s not so useful for modifying property values. It is possible but introduces side effects.

Let’s create our player name emoji decorator to add an emoji after the player’s name based on the player type:

## Getter

The `getter` function is for getting the property value of the class where you used the property decorator.

Inside this function, we have access to the instance of the class. In the return statement, we return the `val`, which includes the value of that property. Next to that, we call the `getEmoji(this.type)`, which gives us the correct emoji based on the player type.

If we tried to access `this` inside the `getEmoji()` function without passing the `this` variable, we would get an error. This is because we only have access to the instance of `PlayerCharacter` in the `getter` function.

## Setter

With the `setter`, we can change the value of the class property’s instance. In this case, I didn’t change it but added an emoji to it.

When we try to add the emoji there, which sounds very logical to me, we would get an error. This is because we don't have access to the whole instance of the class in the `setter`.

## defineProperty

Finally, we have an accessor descriptor `Object.defineProperty()` in the property decorator. This descriptor will describe how our property will behave inside a class. Note: I highly recommend reading about this because it's very powerful.

Inside the descriptor, we have a `getter` and `setter` method. They will be executed when you want to get the value or change it. Next to that, we set the `enumerable` to `true`. This will make sure it's visible during the enumeration of the corresponding object.

According to [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), “An accessor descriptor is a property described by a getter-setter pair of functions.”

## Errors

I guess a lot of you gonna have some error’s down the road. (_Like me_ 😉) Hopefully, these solutions gonna help you further.

### noImplicitThis

It can happen that you get an error like this. [Nathaniel May](https://medium.com/u/dd2a1653ff14) asked this question in the [comments](https://medium.com/@nathaniel.may22/any-idea-how-to-handle-the-errors-related-to-the-noimplicitthis-tsconfig-json-complieroption-62b527add101).

```
'this' implicitly has type 'any' because it does not have a type annotation.
```

A quick but dirty fix is setting `noImplicitThis` to `false` in the tsConfig.json.

The problem is potentially is, you are using a `function` inside one of your `Class` method and want to have a property of the `Class` .

The solution to this is using a Arrow function because they don’t have their own `this` . `this` in an [Arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) refers to its parent.

Hopefully this would fix your error.

## Conclusion

Thanks for reading!

Now you’re ready to use the full functionality of a property decorator in your classes. If you have any questions, please let me know so I can help you out.

## Read More From Me

[**2 Ways to Resolve Duplication in JavaScript Arrays and Objects**  
_Do you know how to deal with duplication?_medium.com](https://medium.com/better-programming/2-ways-to-resolve-duplication-in-javascript-arrays-and-objects-e377e1bdc5e1 "https://medium.com/better-programming/2-ways-to-resolve-duplication-in-javascript-arrays-and-objects-e377e1bdc5e1")[](https://medium.com/better-programming/2-ways-to-resolve-duplication-in-javascript-arrays-and-objects-e377e1bdc5e1)

[**What Is The Scope In JavaScript**  
_Explanation about the behavior of Var, Const, Let, Functions, Objects, and Classes in the Global Scope._itnext.io](https://itnext.io/what-is-the-scope-in-javascript-a2add52bf9d8 "https://itnext.io/what-is-the-scope-in-javascript-a2add52bf9d8")[](https://itnext.io/what-is-the-scope-in-javascript-a2add52bf9d8)

[**Top 5 Favourite Medium JavaScript Posts**  
_My favorite posts of February 2020 about JavaScript Development_medium.com](https://medium.com/the-human-programmer/top-5-favourite-medium-javascript-posts-6549c9a5c2e1 "https://medium.com/the-human-programmer/top-5-favourite-medium-javascript-posts-6549c9a5c2e1")[](https://medium.com/the-human-programmer/top-5-favourite-medium-javascript-posts-6549c9a5c2e1)

[**Make Your JavaScript Objects More Predictable by Creating Maps**  
_No more undefined properties_medium.com](https://medium.com/better-programming/make-your-javascript-objects-more-predictable-by-creating-maps-20ac1a795442 "https://medium.com/better-programming/make-your-javascript-objects-more-predictable-by-creating-maps-20ac1a795442")[](https://medium.com/better-programming/make-your-javascript-objects-more-predictable-by-creating-maps-20ac1a795442)

[**7 Steps to Dockerize Your Angular 9 App With Nginx**  
_Set up your Angular 9 app in a Docker environment and deploy it in no time_medium.com](https://medium.com/better-programming/7-steps-to-dockerize-your-angular-9-app-with-nginx-915f0f5acac "https://medium.com/better-programming/7-steps-to-dockerize-your-angular-9-app-with-nginx-915f0f5acac")[](https://medium.com/better-programming/7-steps-to-dockerize-your-angular-9-app-with-nginx-915f0f5acac)