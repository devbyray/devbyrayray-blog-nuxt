---
title: Create Your Own Ipsum Generator With JavaScript
description: Generating fake content with random words can be convenient for testing purposes. That’s why today, we will create a JavaScript function that does that. It's super simple with the Math.random, round, while loop and map methods in JavaScript.
date: '2022-02-02T15:56:32.672Z'
categories: []
tags: ['JavaScript']
slug: /@byrayray/create-your-own-ipsum-generator-with-javascript-3241077570e2
image: images/0__xbnw8Z__GlC1RU____r.jpg
---

Generating fake content with random words can be convenient for testing purposes. That’s why today, we will create a JavaScript function that does that. It's super simple with the Math.random, round, while loop and map methods in JavaScript.

> Use this code to build your own Ipsum generator, so you have random generated content as much as you like 👍

You could use a library if you want, but since this is so simple and can be built with not so many lines of code, it’s nice to make it yourself.

For generating content with random words, we need three functions and a source of the phrase.

1.  A function that gives us a random number
2.  A function that provides us with a random word
3.  A function that puts multiple words into a string
4.  The source for the words will be a defined Array with words. ([Get it from my Gist](https://gist.github.com/devbyray/8dbac8a32c7c87f659d9b34137e25ba0))

---

## Generate Random Number

Since we want to get a random word from our source, we need to generate a random index number. With this function, we need to keep in mind what the minimal and maximum of the Array are.

```js
Math.random()
// Returns 0.534098468876492
```

With `Math.random()`, we get a random float between 0 and lower than 1. When we multiply that by, for example, 10, we will get a number between 0 and lower than 10. But in this case, we want to have a number not lower than 0 and lower or equal than 10.

```js
Math.random() * (10 - 0) + 0
// Returns 8.448742196214798
```

But right now, it still returns afloat. So we have to use `Math.round` to get an integer.

```js
Math.round(Math.random() * (10 - 0) + 0)
// Returns 6 or 5 or 9 or 10
```

With this calculation, we can get a number between 0 and 10 or equal to 10. You can test that quickly if it does what you expect.

```js
let number = 0
let steps = 0
while (number != 10) {
	number = Math.round(Math.random() * (10 - 0) + 0)
	steps = steps + 1
	console.log('steps', steps)
}
```

With this code, you are running a loop until it becomes 10. By keeping track of the steps, you can see how many rounds it needs. Every time you run this, you will know that it requires a different amount of rounds.

```js
function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}
```

This is this final function to get a random number between two numbers. Let’s continue to get a random word from our source, Array.

---

## Get a Random Word

I found a nice collection of random words to use for this post. You can [find it on Gist](https://gist.github.com/devbyray/8dbac8a32c7c87f659d9b34137e25ba0). But in this post, I will use a shorter version.

> You can also define your own words in a certain theme. For example [Developer Ipsum](https://developer-ipsum.netlify.app/) or [Cupcake Ipsum](http://www.cupcakeipsum.com/)

```js
const word = [
	'Got',
	'ability',
	'shop',
	'recall',
	'fruit',
	'easy',
	'dirty',
	'giant',
	'shaking',
	'ground',
	'weather',
	'lesson',
	'almost',
	'square',
	'forward',
	'bend',
	'cold',
	'broken',
	'distant',
	'adjective.'
]
```

We need to use the `randomNumber` function that we created in the previous step to get a random word. In this function, we need to give a minimum and a maximum number as parameters; we can easily do that via this.

```js
const word = words[randomNumber(0, words.length - 1)]
```

The first parameter is 0 because the Array’s start with 0. The second parameter is our maximum, so we pick the `words.length - 1`. We do this because, in this example, our Array has 20 words in it so that the length property will give that back. But since an Array starts with counting from 0, the latest position in the Array is 19. That's why we do `- 1`.

```js
function getRandomWord() {
	return words[randomNumber(0, words.length - 1)]
}
```

We have our second function to get a random word from Array.

---

## Get A String With Random Words

Now we want to get multiple words and make it a string, so we can use it as content for whatever we want. The best we can do that is by generating an Array with several positions.

```js
;[...Array(10)] 
// Returns [undefined, undefined, ....] with 10 items
```

With the `.map` method, we can iterate and fill it with random words.

```js
;[...Array(10)].map(() => getRandomWord()) 
// Returns ["hand", "close", "ship", "possibly", "metal", "myself", "everybody", "serious", "adult", "favorite"]
```

Now that we have an Array of random words, we need to turn it into a string using the `.join('')`.

```js
;[...Array(10)].map(() => getRandomWord()).join('')
```

But, we want to give the string some “sense” of its readability. So every first word in the Array should have the first letter as uppercase. Let’s update our `getRandomWord` function.

```js
function getRandomWord(firstLetterToUppercase = false) {
	const word = words[randomNumber(0, words.length - 1)]
	return firstLetterToUppercase ? word.charAt(0).toUpperCase() + word.slice(1) : word
}
```

As we create a function to generate a function to get the generated string, it would look like this. With the comparison in the `getRandomWord(i === 0)` we give a boolean through the function.

```js
function generateWords(length = 10) {
	return (
		[...Array(length)]
			.map((_, i) => getRandomWord(i === 0))
			.join(' ')
			.trim() + '.'
	)
}
```

---

## Complete

Now that we created all the code, it’s time to check the complete code example.

```js
const word = [
	'Got',
	'ability',
	'shop',
	'recall',
	'fruit',
	'easy',
	'dirty',
	'giant',
	'shaking',
	'ground',
	'weather',
	'lesson',
	'almost',
	'square',
	'forward',
	'bend',
	'cold',
	'broken',
	'distant',
	'adjective.'
]

function getRandomWord(firstLetterToUppercase = false) {
	const word = words[randomNumber(0, words.length - 1)]
	return firstLetterToUppercase ? word.charAt(0).toUpperCase() + word.slice(1) : word
}

function generateWords(length = 10) {
	return (
		[...Array(length)]
			.map((_, i) => getRandomWord(i === 0))
			.join(' ')
			.trim() + '.'
	)
}

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

generateWords(20);

// Result: Summer city determine interior coffee engine little pupil horn pain likely dress opinion cost perfectly crack parts daily addition copper.
```

<runkit link="https://runkit.com/devbyrayray/how-to-generate-a-string-with-random-words"></runkit>

---

## Thanks!

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁
