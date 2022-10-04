---
title: How To Create a Random String With Maximum Characters in JavaScript
description: Create your own random data generator in JavaScript!
date: '2022-01-31T14:27:52.823Z'
categories: []
keywords: []
slug: /@byrayray/how-to-create-a-random-string-with-maximum-characters-in-javascript-389ea3698721
---

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/0__0cXiApiYCr5yrGCM.jpg)

You can use a library for generating random data in JavaScript, but I think it’s even cooler to do it yourself. If you want to spice up your JavaScript skills, these functions are the best to practice.

So in this post, I would like to explain how you can generate random strings with a maximum amount of characters. This post is a follow-up to my previous post [How To Create a Random String with JavaScript](https://hasnode.byrayray.dev/how-to-create-a-random-string-with-javascript).

If you haven’t checked my previous post, I highly recommend checking it out. In this, we will continue with that last function from that post.

```
function randomString() {    return [...Array(5)].map((value) => (Math.random() * 1000000).toString(36).replace('.', '')).join('');}
```

This function now generates a random string with a variable length.

The return value is always different.

```
randomString();'63lklfirmmc2baknxlzou171jyq7q7wnd8ag53r6kv95buvp1qme8ou'randomString();'j9qfsxifdugz5bgfmqfwg3c2jefsidxikhl2c4qjwti6i0zm5y5x5'
```

But right now, we want to make sure that it has a certain length so we have more control over the data we generate.

We only have to make sure that the Array it’s starting with has the length.

### Minimal length

To make sure we have at least the number of characters we are given in the function parameter, we are making the Array a bit longer.

```
[...Array(length + 10)]
```

### Fixed length

But to prevent that will be longer, we are taking a substring, so we are returning the exact amount of characters by using `substring`.

```
[...Array(length + 10)].map((value) => (Math.random() * 1000000).toString(36).replace('.', '')).join('').substring(0, length);
```

This will be our result if we turn all of this into a function.

```
function randomString(length = 50) {    return [...Array(length + 10)].map((value) => (Math.random() * 1000000).toString(36).replace('.', '')).join('').substring(0, length);};
```

I recommend playing around with this function and using it for something practical.

### Thanks!

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/0__7pa1RpRxXqdkgYAJ.jpg)

After reading this story, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁

