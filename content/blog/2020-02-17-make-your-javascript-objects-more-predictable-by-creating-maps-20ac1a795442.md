---
title: Make Your JavaScript Objects More Predictable by Creating Maps
description: No more undefined properties
date: '2020-02-17T11:53:22.929Z'
categories: []
published: true
tags: []
image: https://cdn-images-1.medium.com/max/800/1*Y04Qhnh3Jqj09tvNs95g2A.jpeg
---

## The Problem With Objects

You’re deep into your code, and suddenly you get an error: “Cannot read property _x_ of undefined.” _Awww, man_.

Most of the time, this means debugging — attacking my code with `debugger` here, `console.log()` there. Most of the time, I get it fixed fast. But there are those days that it takes me hours.

## Example Problem

We have an object called `car`.

.

The car object has a set of key-value pairs. We get this information from our API. Normally, you’d get an `events` property inside the object that includes the property `last_updated `— stating the last time this information has been changed.

When running this code, we get an error.

```
Uncaught TypeError: Cannot read property 'last_updated' of undefined at <anonymous>:1:14
```

To prevent the error, we have to check if the property `events` is in the object or not.

This way, we don’t have an error if the `event` property is not in our object. But I find this code to be not that readable.

## The Map Solution

When we turn our object into a `Map()`, we get all the clear methods from the map.

You can turn your object into a map with the `Object.entries()` method and give it your object as a parameter.

This would be the output of the map.

A `Map()` has a range of handy methods we can use to make our code more readable, predictable, and with fewer chances for getting errors.

*   `set('key', 'value')` store a key-value pair
*   `get('key')` returns the value of a key if available
*   `has('key')` returns `true` or `false` depending on if the key exists
*   `delete('key')` deletes a key-value pair from the map
*   `clear()` removes all the key-value pairs from the map
*   `size()` returns the amount of key-value pairs from the map

So if we want to have the information `last_updated` from the `events` the property, we use the `.has('prop')` method. This method returns a boolean based on the existence of the property.

In your console, you’ll see the console logged `‘not available’` without any errors.

> As already a few other helpful developers showed in the comments. The Map isn’t maybe the best solution for every problem for making your Objects more predictable.

> It turns out that the [Reflect API](https://ponyfoo.com/articles/es6-reflection-in-depth), [Optional chaining](https://v8.dev/features/optional-chaining) or even better, [TypeScript](http://www.typescriptlang.org/) helps to write JavaScript that is more predictable.

> Still, I think it could be an interesting solution 😉

## Conclusion

I think using `Map()` can make your code more readable, predictable, and less sensitive to errors. With the normal `Object`, your code will give errors when a certain property is missing. This will lead to bad user experience, so let's prevent this.

If you want to check out more details about `Map()`, please check out the [detailed page of MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

I hope you learned something new with this piece. Happy coding!

## Read More From Me

[**How To Earn Money As Programmer During The Coronavirus**  
_3 Ways Programmers Can Get Paid Without The Need Of A Job_medium.com](https://medium.com/the-human-programmer/how-to-earn-money-as-programmer-during-the-coronavirus-a24971b15d57 "https://medium.com/the-human-programmer/how-to-earn-money-as-programmer-during-the-coronavirus-a24971b15d57")[](https://medium.com/the-human-programmer/how-to-earn-money-as-programmer-during-the-coronavirus-a24971b15d57)

[**2 Ways to Resolve Duplication in JavaScript Arrays and Objects**  
_Do you know how to deal with duplication?_medium.com](https://medium.com/better-programming/2-ways-to-resolve-duplication-in-javascript-arrays-and-objects-e377e1bdc5e1 "https://medium.com/better-programming/2-ways-to-resolve-duplication-in-javascript-arrays-and-objects-e377e1bdc5e1")[](https://medium.com/better-programming/2-ways-to-resolve-duplication-in-javascript-arrays-and-objects-e377e1bdc5e1)

[**What Is The Scope In JavaScript**  
_Explanation about the behavior of Var, Const, Let, Functions, Objects, and Classes in the Global Scope._itnext.io](https://itnext.io/what-is-the-scope-in-javascript-a2add52bf9d8 "https://itnext.io/what-is-the-scope-in-javascript-a2add52bf9d8")[](https://itnext.io/what-is-the-scope-in-javascript-a2add52bf9d8)

[**Make Your JavaScript Objects More Predictable by Creating Maps**  
_No more undefined properties_medium.com](https://medium.com/better-programming/make-your-javascript-objects-more-predictable-by-creating-maps-20ac1a795442 "https://medium.com/better-programming/make-your-javascript-objects-more-predictable-by-creating-maps-20ac1a795442")[](https://medium.com/better-programming/make-your-javascript-objects-more-predictable-by-creating-maps-20ac1a795442)

[**7 Steps to Dockerize Your Angular 9 App With Nginx**  
_Set up your Angular 9 app in a Docker environment and deploy it in no time_medium.com](https://medium.com/better-programming/7-steps-to-dockerize-your-angular-9-app-with-nginx-915f0f5acac "https://medium.com/better-programming/7-steps-to-dockerize-your-angular-9-app-with-nginx-915f0f5acac")[](https://medium.com/better-programming/7-steps-to-dockerize-your-angular-9-app-with-nginx-915f0f5acac)