---
title: How To Generate an Alphabet JavaScript Array
description: 'Imagine building a word game with JavaScript, and you need to pick a random character from the alphabet, but you don’t want to type all the letters by hand. We will generate it with JavaScript .map, string and the Math.round methods.'
date: '2022-01-28T14:31:34.165Z'
categories: []
tags: []
slug: /@byrayray/how-to-generate-an-alphabet-javascript-array-eae6940ea646
image: images/0__G__8ku__Yvyc4iWT8U.jpg
---

Imagine building a word game with JavaScript, and you need to pick a random character from the alphabet, but you don’t want to type all the letters by hand. (_Please tell me you didn’t consider that 🙈_). We will generate it with JavaScript .map, string and the Math.round methods.

No, we want to generate an Array with all the characters of the alphabet (I’m referring to the [_latin alphabet_](https://en.wikipedia.org/wiki/Latin_alphabet)). We want to do that most straightforwardly and shortly as possible.

Let’s go.

---

## Generate an Array with 26 items

First, we need an Array with 26 items because the Latin alphabet has 26 letters. We can do that simply with this code.

```javascript
;[...Array(26)]
// returns [...undefined, undefined]
```

---

## Get a letter based on a number

Now that we have an Array with 26 items in it, we need to have a way to get letters based on this Array. So let’s create an Array with 26 numbers.

```javascript
;[...Array(26)].map((_, i) => i)
// returns [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
```

Based on those numbers, we are going to get a letter. To achieve this, we need the `String.fromCharCode()` (check the [MDN documentation for what you can do with the fromCharCode method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)).

```javascript
;[...Array(26)].map((_, i) => String.fromCharCode(i))
// returns ['\x00', '\x01', '\x02', '\x03', '\x04', '\x05', '\x06', '\x07', '\b', '\t', '\n', '\v', '\f', '\r', '\x0E', '\x0F', '\x10', '\x11', '\x12', '\x13', '\x14', '\x15', '\x16', '\x17', '\x18', '\x19']
```

---

## Get the correct letter from the alphabet

But those characters are not the ones we want. So we have to add something more. [W3Schools offers a list](https://www.w3schools.com/charsets/ref_utf_basic_latin.asp) of all the available letters. We can see that the “a” is on number 97. Now we can start counting.

```javascript
;[...Array(26)].map((_, i) => String.fromCharCode(i + 97))
// returns ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
```

Now we have our alphabet!

---

## Choose between capital and lowercase characters

If you want capital letters instead of lowercase letters, you should start at position 65. Let’s make a function that supports both.

```javascript
function generateAlphabet(capital = false) {
	return [...Array(26)].map((_, i) => String.fromCharCode(i + (capital ? 65 : 97)))
}
```

Inside the `fromCharCode`method, a ternary operator checks if `capital` is `false` or not. Notice that the default value of the parameter `capital` is `false`. When the value is `true`, it will return `65`, when it’s false, it will return `97`. So we can easily call the function like this `generateAlphabet()` without getting errors.

<runkit link="https://runkit.com/devbyrayray/how-to-generate-an-alphabet-array-with-javascript"></runkit>

If you want to have a random letter from the alphabet, you can achieve that by this.

```javascript
function getRandomLetter() {
	const alphabet = generateAlphabet()
	return alphabet[Math.round(Math.random() * alphabet.length)]
}
```

<runkit link="https://runkit.com/devbyrayray/get-random-letter-from-alphabet-with-javascript"></runkit>

I hope you learned something new or are inspired to create something new after reading this story!

---

## Thanks!

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this story, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁
