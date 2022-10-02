---
title: 2 Ways to Resolve Duplication in JavaScript Arrays and Objects
description: Do you know how to deal with duplication?
date: '2020-03-04T03:13:38.913Z'
categories: []
published: true
tags: ['Developer', 'WebDev']
image: https://cdn-images-1.medium.com/max/1200/0*DZg0829DQKwA3fxP
---

In this article, I want to show you how simple it is to get rid of duplicated data. There are a few places duplicated data can appear for whatever reason.

There’s nothing more annoying than duplicated data in your JavaScript. So let’s get into a practical walk-through of how you can work against it.

I highly suggest not simply copying and pasting my code. Of course, you can — but please follow my explanation to understand how it works.

## 1\. Array With Duplicated Strings or Numbers

const dupStrings = \['Angular', 'React', 'VueJS', 'Svelte', 'React'\]  
const dupNumbers = \[1,2,3,4,5,6,2,4,6,7,8,9,0\]

The first array has some duplicated strings, and the other array has duplicated numbers in it.

To get rid of the duplicated data, we’re going to use `Set`. `Set` only accepts unique values.

> "`Set` objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the `Set` **may only occur once**; it is unique in the `Set`'s collection.” — [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

console.log(new Set(dupStrings))

// Set(5) {"Angular", "React", "VueJS", "Svelte", ""}

console.log(new Set(dupNumbers))

// Set(10) {1, 2, 3, 4, 5, 6, 7, 8, 9, 0}

When we put the arrays in a `Set` and output it to the console, you’ll see the duplicated values are removed from the array.

In the CodeSandbox below, you can see how it works.

Check out the [CodeSandbox](https://codesandbox.io/s/array-with-duplicated-strings-ornumbers-fu3d2)

But now, we turned it into a `Set`, and we need the cleaned array back so we can do our JavaScript magic further.

The easiest way to do this is by using the `...` [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) inside the array brackets `[...]`. Let’s put that into a function so we can reuse it everywhere in our application.

### Create a function

Now we need to create a function from it so we can reuse it on other places.

### How does the function work?

In our function, we define a parameter, `array`, which we expect to be an array. We check this in the `if` statement.

*   `!array`: We simply check if the array is `null` or `undefined`
*   `!Array.isArray(array)`: We use the array helper method to check if the value of `array` is, indeed, an array. If you put the `!` before it, we check if the output is `false` .
*   `array.length === 0`: We use this to check if the array has a length of `0 `— this indicates an empty array

If one of the conditions are met, we let the function return the array that has been given in the function.

If the conditions aren’t met, it’ll put the array in the `new Set()`, and we turn it into an array by using the `...` spread syntax.

Finally, we need to call the function.

unDuplicateArraySingleValues(array)

### Test the function

Check in the example below if everything works correctly.

Check the [CodeSandbox](https://codesandbox.io/s/array-with-duplicated-strings-ornumbers-with-function-jwrj9)

## 2\. Array With Duplicated Objects

Let’s define an example array of objects with duplicate information

const dupObjects = \[  
   { id: 1, name: "a", value: "c" },  
   { id: 2, name: "b", value: "d" },  
   { id: 2, name: "c", value: "e" },  
   { id: 3, name: "d", value: "c" }  
\];

You can see there are a few property values that are duplicated.

I think it sounds obvious that you don’t want any duplicated information in your array of objects.

### Create a function

So we need a function that checks our array and, based on a given property, checks if there’s an other object that has a property with the same information.

This `function` starts the same as in the previous example. So it’d be a good idea to make a new `function` for that. In this example, we keep it the same.

### How does the function work?

In our `function`, we define a parameter, `array,` which we expect to be an array. We check this in the `if` statement.

*   `!array`: We simply check if the array is `null` or `undefined`
*   `!Array.isArray(array)`: We use the array helper method to check if the value of `array` is, indeed, an array. If you put the `!` before it, we check if the output is `false`.
*   `array.length === 0`: We use this to check if the array has a length of `0 `— this indicates an empty array.
*   `!property`: With this, we check if the property value is `false` — which means we check for `null`, `undefined`, or `0` . Because if any of these are the case, we can’t check for duplicate information in our objects.

Then we create a variable, `objectArrayKeys,` in which we store an array of the values of the properties we’ve given in the `propertyName` parameter.

In `uniqueKeys`, we remove duplicate values. But we make use of our previous function. This function returns a new array with only unique values.

At last, we return an array with only unique objects based on the `uniqueKeys` array.

Finally, we need to call the function.

unDuplicateArrayObjects(dupObjects, "id")

### Test the function

In the example below, check changing the property names in the function so we can verify everything works correctly.

Check out the [CodeSandbox](https://codesandbox.io/s/array-with-duplicated-objects-with-function-44pdz)

## Conclusion

I hope you learned how to get rid of duplicated data in your array with single values or an array with objects.

I personally have googled this question thousands of times. That’s why I’ve written this tutorial for you.

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