---
title: How To Create a Random String With Maximum Characters in JavaScript
description: You can use a library for generating random data in JavaScript, but I think it’s even cooler to do it yourself. If you want to spice up your JavaScript skills, these functions are the best to practice.
date: '2022-01-31T14:27:52.823Z'
categories: []
tags: ['javascript']
slug: /@byrayray/how-to-create-a-random-string-with-maximum-characters-in-javascript-389ea3698721
image: images/0__0cXiApiYCr5yrGCM.jpg
---

You can use a library for generating random data in JavaScript, but I think it’s even cooler to do it yourself. If you want to spice up your JavaScript skills, these functions are the best to practice.

So in this post, I would like to explain how you can generate random strings with a maximum amount of characters. This post is a follow-up to my previous post [How To Create a Random String with JavaScript](https://hasnode.byrayray.dev/how-to-create-a-random-string-with-javascript).

---

If you haven’t checked my previous post, I highly recommend checking it out. In this, we will continue with that last function from that post.

```js
function randomString() {
	return [...Array(5)].map(value => (Math.random() * 1000000).toString(36).replace('.', '')).join('')
}
```

This function now generates a random string with a variable length.

The return value is always different.

```js
randomString();
// Output: '63lklfirmmc2baknxlzou171jyq7q7wnd8ag53r6kv95buvp1qme8ou'
randomString();
// Output: 'j9qfsxifdugz5bgfmqfwg3c2jefsidxikhl2c4qjwti6i0zm5y5x5'
```

But right now, we want to make sure that it has a certain length so we have more control over the data we generate.

We only have to make sure that the Array it’s starting with has the length.

---
## Minimal length

To make sure we have at least the number of characters we are given in the function parameter, we are making the Array a bit longer.

```js
;[...Array(length + 10)]
```

---

<ContentAd topics="typescript|javascript"></ContentAd>

---

## Fixed length

But to prevent that will be longer, we are taking a substring, so we are returning the exact amount of characters by using `substring`.

```js
;[...Array(length + 10)]
	.map(value => (Math.random() * 1000000).toString(36).replace('.', ''))
	.join('')
	.substring(0, length)
```

This will be our result if we turn all of this into a function.

```js
function randomString(length = 50) {
	return [...Array(length + 10)]
		.map(value => (Math.random() * 1000000).toString(36).replace('.', ''))
		.join('')
		.substring(0, length)
}
```

I recommend playing around with this function and using it for something practical.

---
## Thanks!

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁
