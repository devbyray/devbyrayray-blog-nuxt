---
title: Mastering The JavaScript Find() Method
description: Searching specific values in arrays is easy with the JavaScript `find()` method. It doesn't matter if you want to find a string, number, boolean, or property of an object in an array. In this post, I will show you how to find values very easily. The find() Array method in JavaScript returns the first item in the array that matches your condition.
date: '2022-12-14'
tags: ['javascript']
image: images/denis-pavlovic-wl5AypUmamo-unsplash
---

Searching specific values in arrays is easy with the JavaScript `find()` method. It doesn't matter if you want to find a `string`, `number`, `boolean`, or property of an object in an array. In this post, I will show you how to find values very easily.

---

## The find() method

The `find()` Array method in JavaScript is super easy to use. The method returns the first item in the array that matches your condition. ([check the documentation on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find))

In the find method, you pass an Arrow function with a parameter that will be equal to each item in the array. Internally the `find()` method will loop through all the items in the array trying to find your search value.

In the arrow function, we check if `student` is equal to 'Jake' or 'Rob'. It will return the string immediately when the value is found. It will return `undefined` when the value isn't found.

## Find a string in an array

```js
const students = [
    'Jake',
    'Ray',
    'Lisa',
    'Isabella',
    'Tom',
    'Kevin',
    'Armin'
]

students.find((student) => student === 'Jake'); // Returns 'Jake'
students.find((student) => student === 'Rob'); // Returns undefined
```

<runkit link="https://runkit.com/devbyrayray/how-to-find-string-in-javascript-array-with-find-method"></runkit>


Now we are searching for 'Jake' in the `students` array. This method will return 'Jake' when it is found. When we search for 'Rob', it will return `undefined` because 'Rob' is not in the array. 

---

## Find a number in an array

```js
const numbers = [
    5000,
    538,
    78123,
    2,
    45,
    34097
]

numbers.find((number) => number === 538); // Returns '538'
numbers.find((number) => number === 1); // Returns undefined
```

<runkit link="https://runkit.com/devbyrayray/how-to-find-number-in-javascript-array-with-find-method"></runkit>


Now we are searching for `538` in the `numbers` array. This method will return `538` when it is found. When we search for `1` it will return `undefined` because `1` is not in the array. 

---

## Find an object property value in the array.

When you want to find a property value in an array of objects, it is as easy as with singular values. In the example below, we try to find the first project with the type of 'development'. With the second example, we try to find a project where '2024-01-27' is between the `startDate` and the `endDate`.

> A few years ago, I created a package is-between-js for my personal usage. You can calculate if a specific value is between a minimal and a maximum number. You are free to use it [because it's free on NPM](https://www.npmjs.com/package/is-between-js) and [GitHub](https://github.com/devbyray/is-between-js) 😉
> 

```js
import { isBetween } from "is-between-js";
const dateNumber = (date) => new Date(date).getTime();

const projects = [
    {
        startDate: '2022-11-26',
        endDate: '2023-11-26',
        title: 'Build an API',
        type: 'Development',
    },
  {
        startDate: '2022-11-26',
        endDate: '2023-11-26',
        title: 'Build Frontend',
        type: 'Development'
    },
  {
        startDate: '2023-03-05',
        endDate: '2024-03-26',
        title: 'Create marketing content',
        type: 'Marketing'
    },
  {
        startDate: '2022-11-26',
        endDate: '2024-03-26',
        title: 'Project management',
        type: 'Management'
    },
]

console.log(projects.find((project) => project.type.toLowerCase() === 'development'))
console.log(projects.find((project) => isBetween(dateNumber('2024-01-27')).min(dateNumber(project.startDate)).max(dateNumber(project.endDate)).calc()))
```

<runkit link="https://runkit.com/devbyrayray/find-a-object-property-value-in-a-javascript-array"></runkit>


You can check if a property value equals a value by returning this with the arrow function `project.type === 'value'`. In this case, we modify the string to lowercase characters in the example above to match even though the capitalization isn't equal.

In the example above, we compare a few property values in the isBetween function, which returns a boolean to the find method. It's that easy!

As you've seen, you can find values of every data type in a JavaScript array. It is not difficult to learn JavaScript; just practice practice, and practice 👍

---

## Thanks

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁.
