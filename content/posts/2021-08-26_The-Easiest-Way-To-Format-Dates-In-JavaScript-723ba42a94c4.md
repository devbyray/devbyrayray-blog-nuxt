---
title: The Easiest Way To Format Dates In JavaScript
description: For many years developers complain about formatting their dates and times in JavaScript. Doing calculations or proper formatting required libraries like MomentJS. Thanks to the ECMAScript Internationalization API, those days are over! It can format dates and times and also calculations.
date: '2021-08-26T16:06:43.822Z'
categories: []
tags: ['javascript']
slug: /@byrayray/the-easiest-way-to-format-dates-in-javascript-723ba42a94c4
image: images/1__y1wx0A3hoCNNmOZTYrHZrw.png
---

For many years developers complain about formatting their dates and times in JavaScript. Doing calculations or proper formatting required libraries like MomentJS. Thanks to the ECMAScript Internationalization API, those days are over! It can format dates and times and also calculations.

In this post, I want to show you how easy it is to format your dates with the Internationalization JavaScript API.

---

## JavaScript Libraries VS Internationalization API

I don’t know about you, but formatting dates, numbers, and currencies have always been JavaScript’s most annoying thing. Out of the box, you had to do a lot with Vanilla JavaScript to get it done.

For dates [Moment.js](https://momentjs.com/) was a powerful player. They made it easier to format, calculate and do all other things with dates. Formatting dates were only doable by using a JavaScript library. But it was an extensive library.

But since libraries make things easier, they also add more data to your JavaScript bundle. In most cases, that’s not a problem, but if you are focussing on performance, this can be a deal-breaker.

That’s why I’m so happy with the [Internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl). They let your format your dates, numbers, times, and currencies. The beauty of this API is that the browser support is almost 100% in all major browsers.

I suggest we go down the rabbit hole and dive into the world of the Internationalization API. Enjoy the ride! 🎢

---

## How To Format Dates in JavaScript

Let’s start with the biggest impact. Formatting dates was terrible but has become so much easier with the `Intl.DateTimeFormat()` and `Intl.RelativeTimeFormat()`. Because they divided it into two methods.

---
## What Can Intl.DateTimeFormat() Do?

The I[ntl.DateTimeFormat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) helps to format dates and times. It keeps location and languages into account by performing those formats.

Format examples like below will be so easy to perform.

-   12/01/2021
-   2021/12/09
-   Aug 5th, 2021
-   Sunday, Dec 20th, 2020 at 04:23 CET
-   Even in Dutch: “Zondag, 20 December 2020 om 16:23”

---

## How To Use Intl.DateTimeFormat()?

The DateTimeFormat is super easy to use. First, we have to configure the `Intl.DateTimeFormat` constructor. There are a few possibilities.

```js
new Intl.DateTimeFormat([])  
new Intl.DateTimeFormat(locales)  
new Intl.DateTimeFormat(locales, options)
```

You can use the constructor as easily as in the example above. If you want to use the browser’s locale, you must pass an empty `Array` in the constructor. If you're going to set the locale yourself, you have to pass it as a string `en-US` or `nl-NL`.

The second parameter offers a few other options which give more control over the formatting. The options are:

-   `dateStyle`: "full", "long", "medium" and "short"
-   `timeStyle`: "full", "long", "medium" and "short"
-   `dayPeriod`: "narrow", "short" and "long"
-   [Check the other options as well](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters).

As you can see, you have many options to control the formatting of a date and time.

In the example below, you can see that we need the `format` method after the constructor in which we pass our `Date`.

```js
function showDateTimeFormat() {
	const today = new Date()
	const formattedDate = new Intl.DateTimeFormat('en-US').format(today)
	const formattedDateNL = new Intl.DateTimeFormat('nl-NL').format(today)
	console.log(`  
    Unformatted date:, ${today}  
    Formatted date: ${formattedDate}  
    Formatted date NL: ${formattedDateNL}  
  `)
}
showDateTimeFormat()
```

The result of this code will be:

```js
// Unformatted date:, Fri Aug 13 2021 11:09:09 GMT+0200 (Central European Summer Time)
// Formatted date: 8/13/2021Formatted date NL: 13-8-2021
```

This makes formatting your date in every language with every calendar type a breeze. I highly recommend checking the [MDN Web Docs for a lot more details](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

---

## What Can Intl.RelativeTimeFormat() Do?

The [Intl.RelativeTimeFormat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat) helps to format dates and times in a human-readable way.

Formatting examples like below will be so easy to create! Even better, it formats them based on location and language.

-   1 year ago
-   in 3 minutes
-   10 seconds ago
-   tomorrow
-   yesterday

---

## How To Use Intl.RelativeTimeFormat()?

The RelativeTimeFormat is similar to the `Intl.DateTimeFormat`. First, we have to configure the `Intl.RelativeTimeFormat` constructor. There are a few possibilities.

```js
new Intl.RelativeTimeFormat()
new Intl.RelativeTimeFormat(locales)
new Intl.RelativeTimeFormat(locales, options)
```

Like the DateTimeFormat, the RelativeTimeFormat is using the locales the same way. Pass an empty `Array`, and it will pick the browser default locale. But if you add `en` or `nl` it will use that language for formatting.

In the second parameter of the constructor, you can add a few options. (For more details, check [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#parameters))

-   `localMatcher`: "lookup" or "best fit" (the last is the default)
-   `numeric`: "always" or "auto" (with auto you can expect values like "yesterday" instead of "1 day ago"
-   `style`: "long", "short" or "narrow"

This makes formatting your relative time in every language with every calendar type a breeze. I highly recommend checking the [MDN Web Docs for a lot more details](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

To use the `Intl.RelativeTimeFormat`, you need to calculate with dates. You can do it yourself, but I find [date-fns](https://date-fns.org/) one of the best modular JavaScript libraries to handle dates. So in this example, I will use that library.

Install date-fns by running `npm install date-fns`.

```js
import { differenceInHours } from 'date-fns'

const diff = differenceInHours(new Date(2021, 6, 2, 19, 0), new Date(2021, 6, 2, 6, 50))

const rtf = new Intl.RelativeTimeFormat('en')
const rtf2 = new Intl.RelativeTimeFormat('nl')

console.log(rtf.format(diff, 'hour')) // Result: "1,300 hours ago"
console.log(rtf2.format(diff2, 'hour')) // Result: "1.300 uur geleden"
```

As you can see, the result is pretty handy. You don’t have to translate the output manually. But you can easily change the language, and the user gets a readable string.

With this constructor, you previously needed libraries to do this. Yes, with date-fns, you can do this too. But if the browser can do it effortlessly, why use a library for that.

The great thing about date-fns is that it is modular. What you don’t use won’t be included in your code. Handy for keeping your codebase small.

---

## Conclusion

I’m very thankful for all those intelligent people who are spending their time developing these developer-friendly browser APIs. So let’s use them and keep our codebase as small as possible.
