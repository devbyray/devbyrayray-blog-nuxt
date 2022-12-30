---
title: 'Mastering The JavaScript Includes() Method'
description: Learn how to use the includes() method in JavaScript to search an array and return a boolean value indicating whether a specific value is present. Quick and easy guide for beginners."
date: '2022-12-30'
tags: ['javascript']
image: images/arnold-francisca-f77Bh3inUpE-unsplash.jpg
---

The `includes()` method helps check whether an array contains a specific value. It is a simple and efficient way to validate if a value is in an array and can be particularly useful when working with large or complex data sets.

To use the `includes()` method, you call it on the array you want to search and pass in the value you are looking for as an argument. If the value is in the array, the `includes()` method will return a boolean value of `true`. If the value is not in the array, the `includes()` method will return `false`.

---

**TLDR;**

For those that don't want to deep-dive into how to use the `includes()` method, here is the TLDR; 😉

-   The `includes()` method is used to check if a value is in an array.
-   It returns a boolean value of `true` if the value is in the array and `false` if it is not.
-   You can pass in a second argument as the starting index to search for the value within a specific array range.
-   The `includes()` method is case-sensitive, so searching for an value with a different capitalization than it appears in the array will return `false`.

---

## Search for a value in a JavaScript array

Let's dive into the code and see how to use the `includes()` method in JavaScript. Here is an example of how to use the `includes()` method:

```javascript
const fruits = ['apple', 'banana', 'orange']

console.log(fruits.includes('apple')) // Output: true
console.log(fruits.includes('grape')) // Output: false
```

<runkit link="https://runkit.com/devbyrayray/check-if-string-is-in-javascript-array-with-includes"></runkit>

---

## Search for a value in a part of a JavaScript array

You can also use the `includes()` method to search for something inside a part of the array. To do this, you can give the `includes()` method a second number that tells it where to start looking. For example:

```javascript
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(3, 3)) // Output: false
console.log(numbers.includes(3, 2)) // Output: true
```

<runkit link="https://runkit.com/devbyrayray/search-for-a-value-in-a-part-of-a-javascript-array"></runkit>

Remember that the `includes()` method is picky about capital letters. If you want something spelled differently with capital letters, the `includes()` method will return `false`.

---

## Find a value while ignoring the case sensitivity

There is an easy way to make the `includes()`method does not care about capital letters. We can use the `some()` method to look at each thing in the array. For each thing, we can use the `toLowerCase()`method to make all the letters lowercase. Then we can see if things are the same. For example:"

```javascript
const names = ['Bob', 'Rachel', 'Jack Christopher', 'RayRay', 'Leon', 'Abigail Marie']

function stringInArray(array, name) {
	return array.some(item => item.toLowerCase() === name.toLowerCase())
}

console.log('JaCk ChriStopher', stringInArray(names, 'JaCk ChriStopher'))
console.log('RAYRAY', stringInArray(names, 'RAYRAY'))
```

<runkit link="https://runkit.com/devbyrayray/find-a-value-while-ignoring-the-case-sensitivity-of-javascript-array-method-includes"></runkit>

---

## Advanced scenario’s for the includes() method

I wrote two real-world scenarios where the `includes()` method could be helpful. I hope you can use them for your situation.

### Filtering a list of email addresses

Imagine you have a list of email addresses you want to filter based on whether they contain a specific domain. You can use the `includes()` method to check if each email address contains the domain you are looking for and then add it to a new list if it does. For example:

```javascript
const emailList = ['john@gmail.com', 'sarah@yahoo.com', 'tim@gmail.com']
const filteredEmails = []

for (let email of emailList) {
	if (email.includes('gmail')) {
		filteredEmails.push(email)
	}
}

console.log(filteredEmails) // Output: ['john@gmail.com', 'tim@gmail.com']
```

<runkit link="https://runkit.com/devbyrayray/filtering-a-list-of-email-addresses"></runkit>

### Validating user input

You have a form on your website where users can enter their zip codes. You can use the `includes()` method to check if the user's zip code is in a list of valid zip codes for your delivery area. For example:

```javascript
const validZipCodes = [90210, 12345, 11111]

function isZipCodeValid(zipCode) {
	return validZipCodes.includes(zipCode)
}

console.log(isZipCodeValid(90210)) // Output: true
console.log(isZipCodeValid(22222)) // Output: false
```

<runkit link="https://runkit.com/devbyrayray/validating-user-input"></runkit>


So whether you're trying to find a specific fruit in a list of fruits, check if someone's zip code is in the right place, or see which number appears the most in a list of numbers, the `includes()` the method can help you out. Remember to be careful about capital letters (unlike the `includes()` method) when you use it, and you'll be all set! Happy coding!

---

## Thanks

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁.
