---
title: How To Create a Random String with JavaScript
description: Handy for testing and generating test data
date: '2022-01-24T15:26:13.459Z'
categories: []
keywords: []
slug: /@byrayray/how-to-create-a-random-string-with-javascript-9f130ae2227e
---

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/0__UQtuHklwRW4uxOcO.jpg)

For many purposes, you can need a random string. Sometimes a long one and sometimes a short one. A lot of time, I use these functions in a unit or end-to-end test to automate even more.

In this post, I will show you how you can create it yourself; I will explain every part of the function to extend it yourself.

Enjoy the ride!

### Get a random number

In JavaScript, we have a Math Object with all kinds of mathematical constants and functions. You need `Math.random()` when you want to create random things. This will return a random float. (_Try it in your console_). The result of this function is always higher than 0 and lower than 1.

```
Math.random()
```

But since we want to generate a short random string, we don’t need a number in the first place. By multiplying the result `Math.random() * 10` you will get a number between 1 and not higher than 10. Our result could be `5.698829761336681` something like that.

```
Math.random() * 10 // returns 5.698829761336681
```

So how do we turn this into a string? Pretty simple, if you put `.toString(36)` behind this, you will get a string with numbers and letters with a dot in between. With the number 36 as a parameter in the `.toString()` method, you apply a base 36 encoding on the string.

```
(Math.random() * 10).toString(36); // returns '9.ja773x85wr'
```

Every time you run this code, it will be different. If you want to remove the dot, then replace it like this.

```
(Math.random() * 10).toString(36).replace('.', ''); // returns '1cq54mxwg9hl'
```

Now that you have generated a random string every time you run it, you can turn it into a function.

```
function randomString() {    return (Math.random() * 1000000).toString(36).replace('.', '');}
```

What are you want to have a longer string? You can create a loop and turn that into a string again.

```
function randomString() {    return [...Array(5)].map((value) => (Math.random() * 1000000).toString(36).replace('.', '')).join('');}
```

```
// returns '8mtmvtuzzfnau0bf0ecy668tzrc3ztc57a7b87vehyu51yb8gj35t7'
```

I would recommend playing around with this function and using it for something practical.

The next post will be another JavaScript exercise.

### Thanks!

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/0__7pa1RpRxXqdkgYAJ.jpg)

After reading this story, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁

[**Get My Articles Via Email Click here**](https://byrayray.medium.com/subscribe) **|** [**Buy a $5 Medium Membership**](https://byrayray.medium.com/membership)

### Read more

[**Latest JavaScript & TypeScript stories**  
_Check my latest JavaScript and TypeScript stories_byrayray.medium.com](https://byrayray.medium.com/list/0358ad941491 "https://byrayray.medium.com/list/0358ad941491")[](https://byrayray.medium.com/list/0358ad941491)