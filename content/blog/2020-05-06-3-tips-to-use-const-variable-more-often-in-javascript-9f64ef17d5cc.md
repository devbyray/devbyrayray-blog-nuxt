---
title: 3 Tips To Use Const Variable More Often in JavaScript
description: 'Use Const by default, unless it needs to change.'
date: '2020-05-06T10:01:01.264Z'
categories: []
published: true
tags: ['Developer', 'WebDev']
image: https://cdn-images-1.medium.com/max/1200/0*wj4v6dHYxFayhCkh
---

We should use the `const` variable more often in JavaScript. I want to share my 3 tips on when you can use `const` instead of using `let` or `var`.

## 1\. Const Variables Usage

A lot of times we found ourselves storing information in a variable, no `var` is not a good fit anymore. (find out why in [another post](https://itnext.io/what-is-the-scope-in-javascript-a2add52bf9d8).)

From my experience a lot of times the information doesn’t need to change, so we can use the `const` variable.

Only use `let` if it needs to change, otherwise use the `const` variable by default.

But Ray, what about `object` and `array` they need to be changed a lot of times.

> _Constants are block-scoped, much like variables defined using the_ [_let_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) _keyword. The value of a constant can’t be changed through reassignment, and it can’t be redeclared. Source:_ [_MDN Web Docs_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

That’s true! But we can store them in a `const` and still add and remove information because this won’t change the data type. So pick a `const` variable to store the `object` or `array`.

## 2\. For…of and for…in loops: use const variables

We all know these ugly for-loops in JavaScript or any other languages. But since ES2015 there are 2 for-loops which are much easier to write and read.

The for…of and for…in loops are so simple! Days are over that you have to create a variable that has to add a number every iteration.

And the nice thing is, you can use `const` variables in them, which you can’t do with the normal for-loop.

### For…of

![](https://cdn-images-1.medium.com/max/800/1*8LOQC7qJjfdVdZSopoapVw.png)

The for…of loop is for looping over iterable objects. You can use it with String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.

```
const arr = ['Angular', 'React', 'VueJS', 'Svelte', '', 'React']
```

```
for(const item of arr) {    console.log(item)}
```

In comparison to the for-loop where the variable is being updated every iteration. The for…of loop the `const`variable is being created with every iteration.

### For…in

![](https://cdn-images-1.medium.com/max/800/1*gIhGfeBzAtab2RxSCGLo-w.png)

The for…in loop is for looping over the properties of an Object.

```
const object = {a: 1, b: 2, c: 3};
```

```
for (const property in object) {  console.log(`${property}: ${object[property]}`);}
```

Like the for…of loop, the `const` variable is being created every iteration. Don’t use a `let` or `var` here.

## 3\. Store Elements in Const variables

![](https://cdn-images-1.medium.com/max/800/1*KquyP6coxIaXMg7KCQdmCA.png)

If you need to access the DOM by using `querySelector` for example, I see a lot of times that people use `var` or `let`.

But if you only want to access the element, it’s better to store it in a `const` variable.

```
const wrapper = document.querySelector('.wrapper')
```

Even if you are gonna change the element, `const` is still a good choice. Because the element is an `Object` so it can change when needed.

> I’ve gathered a couple of [aspiring developers around the world on a Discord server](https://mailchi.mp/fb82491d03f8/dev-by-rayray-discord-community), feel free if you like to join in.

## Conclusion

I hope that one or more of these tips will help you improve your JavaScript skills. If you have questions or any additions to add here, please let me know in the comments 😉

## Read more

[**TypeScript For Beginners**  
_A practical way to learn TypeScript from scratch_levelup.gitconnected.com](https://levelup.gitconnected.com/typescript-for-beginners-97b568d3e110 "https://levelup.gitconnected.com/typescript-for-beginners-97b568d3e110")[](https://levelup.gitconnected.com/typescript-for-beginners-97b568d3e110)

[**The Thin Line Between Flexibility, Readability, and Scalability in Software Development**  
_What would be your strategy?_medium.com](https://medium.com/better-programming/the-thin-line-between-flexibility-readability-and-scalability-in-software-development-35c6dd32deb6 "https://medium.com/better-programming/the-thin-line-between-flexibility-readability-and-scalability-in-software-development-35c6dd32deb6")[](https://medium.com/better-programming/the-thin-line-between-flexibility-readability-and-scalability-in-software-development-35c6dd32deb6)

[**3 Tools to Start Programming on a Tablet or Mobile Phone**  
_Coding doesn’t only have to take place when you’re at your desktop or laptop_medium.com](https://medium.com/better-programming/3-tools-to-start-programming-on-a-tablet-or-mobile-phone-9dd89fc89f69 "https://medium.com/better-programming/3-tools-to-start-programming-on-a-tablet-or-mobile-phone-9dd89fc89f69")[](https://medium.com/better-programming/3-tools-to-start-programming-on-a-tablet-or-mobile-phone-9dd89fc89f69)