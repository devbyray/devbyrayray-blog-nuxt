---
title: How To Let a TypeScript Function Accept an Index Type as Parameter
description: A perfect solution for the KeyOf type in TypeScript
date: '2021-08-03T15:36:51.938Z'
categories: []
keywords: []
slug: /@byrayray/how-to-let-a-typescript-function-accept-an-index-type-as-parameter-3cb538ac4175
---

![](/images/0__IeggnBQuHiNid7d0.jpg)

If you got the error “_Element implicitly has an ‘any’ type because expression of type ‘string’ can’t be used to index type_” in TypeScript via TSLint or Visual Studio Code? Here is your solution 👍

It sometimes happens that you want to have a generic function to get a specific property from an array of key-value pairs. But how do you type that correctly in TypeScript?

Let’s see this example function. TSLint won’t accept this.

You will get an error like “_Element implicitly has an ‘any’ type because expression of type ‘string’ can’t be used to index type ‘Vaccination’._”.

The error is given because you can’t guarantee that the `dataProp` parameter has a property from the `Vaccination` interface. When we keep it a `string` type, it will give error's when a property is not found in the `Vaccination` interface.

The `Vaccination` interface looks like this.

So how can we correctly resolve this error and still use it like `item[dataProp]`?

It’s super simple. Just use `keyof Vaccination` here. Via the `keyof` we can tell that we only accept properties from the `Vaccination` interface as a function parameter.

> If you want to dive deeper into TypeScript, I highly recommend the story “[Mastering TypeScript’s Mapped Types](https://betterprogramming.pub/mastering-typescripts-mapped-types-5fa5700385eb)” by [Jose Granja](https://medium.com/u/8ae6a5b70ece) .

### Conclusion

[Learning the basics and advanced types of TypeScript](https://levelup.gitconnected.com/typescript-for-beginners-97b568d3e110) will be very beneficial to prevent error’s in the browser. Do you like TypeScript? Or do you think it’s too much?

_More content at_ [**_plainenglish.io_**](http://plainenglish.io)