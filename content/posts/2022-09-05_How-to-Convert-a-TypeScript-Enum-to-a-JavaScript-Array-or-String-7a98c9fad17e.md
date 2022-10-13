---
title: How to Convert a TypeScript Enum to a JavaScript Array or String
description: Subtract the data from the enum and remodel it into a JavaScript Array of
    Strings so you can use it for whatever you like.
date: '2022-09-05T08:18:20.547Z'
categories: []
tags: ['TypeScript', 'JavaScript']
slug: /@byrayray/how-to-convert-a-typescript-enum-to-a-javascript-array-or-string-7a98c9fad17e
image: images/0__QqYrHkjkASsx8czS.jpg
---

Converting a TypeScript Enum to a JavaScript Array is pretty easy, and I often use it to fill a `<select>` with all the values from that enum.

**In this post, I love to show you how you can subtract the data from the enum and remodel it into a JavaScript Array of Strings so you can use it for whatever you like. Next, we create a generic utility function for it so that you can reuse it across your application.**

---

## What Are TypeScript Enums?

Yes, I know you are searching for a solution for turning your enum into a JavaScript Array. But do you know there are multiple ways to create an enum?

### 1. Numeric TypeScript Enum

The numeric enum is the most commonly used in TypeScript. You can create a numeric enum like this. (_Since I love 🍕 we make a PizzaToppings enum._)

```ts [pizza-toppings.enum.ts]
enum PizzaToppings {
	TOMATO,
	BBQ,
	NONE,
	CREAM
}
```

The first key in the enum gets the value 0, the second value 1, and so on. You don’t have to do anything about that. But if you want to change it, you can.

```ts [pizza-toppings.enum.ts]
enum PizzaToppings {
	TOMATO = 1,
	BBQ = 2,
	NONE = 3,
	CREAM = 4
}
```

Via this, we can define the values of each key in an enum.

### 2. String TypeScript Enum

As it said, a string enum is an enum with values as a string.

```ts [pizza-sizes.enum.ts]
enum PizzaSizes {
	Small = 's',
	Medium = 'm',
	Large = 'l',
	XL = 'xl',
	XXL = 'XXL'
}
```

Via this enum, we can get string values from our enum. Super handy if you use them a lot in your application and the string value has to change 😉.

All these enum members are constant. But if you like to have them depending on another data type, you can make them computed.

```ts [pizza-sizes.enum.ts]
enum PizzaSizes {
  Small = "s",
  Medium = "m",
  Large = "l",
  XL = "xl",
  XXL = "XXL"
  Custom = stringValueFromVar.length
}
```

I haven’t used this, but it’s possible according to the [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/enums.html#computed-and-constant-members).

### 3. Heterogeneous TypeScript Enums

A what you might ask? That’s what I thought, haha! But it means an enum can have mixed values, strings, and numbers. (_What Pizza Type do you prefer? I haven’t tried a vegan Pizza yet_ 😅)

```ts [pizza-types.enum.ts]
enum PizzaTypes {
	Vegan = 0,
	NonVegan = 'No meat'
}
```

Now we have a PizzaTypes enum with both numeric and string values.

---

## How To Get Single Value From A TypeScript Enum?

Sometimes you need a single value from your enum in your application.

Let’s create a part of the customer's receipt when ordering the pizzas.

```ts [pizza.enums.ts]
enum PizzaFlavours {
	Peperoni = 'peperoni',
	Texas = 'texas',
	Tuna = 'tuna',
	Hawai = 'hawai'
}

enum PizzaToppings {
	TOMATO = 1,
	BBQ = 2,
	NONE = 3,
	CREAM = 4
}

enum PizzaSizes {
	Small = 's',
	Medium = 'm',
	Large = 'l',
	XL = 'xl',
	XXL = 'xxl'
}

const receiptTitle = `Pizza ${PizzaFlavours[Peperoni]} ${PizzaSizes[XXl]} with topping ${PizzaToppings[TOMATO]}`
// value = "Pizza peperoni XXL with topping 1"
```

In a real-world scenario, the types and flavors will not be defined as an enum in TypeScript but will come from the backend API. But for this example, it works great.

---

## How To Get Values From A TypeScript Enum?

Now that we know how to get a value from our TypeScript enum, we can dive into our goal to get the multiple values into a JavaScript Array.

It’s pretty simple with the `Object.keys()` .

::code-sandbox
<iframe src="https://codesandbox.io/embed/how-to-convert-a-typescript-to-javascript-array-with-object-keys-e0j153?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="How To Convert A TypeScript To JavaScript Array With Object.keys()"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

::

In the example, you can see that the console will output an Array. With both the keys and values of the enum, we can prevent that with the `.filter()`.

::code-sandbox
<iframe src="https://codesandbox.io/embed/how-to-convert-a-typescript-to-javascript-array-with-object-keys-and-filter-82nyfs?expanddevtools=1&fontsize=14&hidenavigation=1&moduleview=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="How To Convert A TypeScript To JavaScript Array With Object.keys() and .filter()"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
::

Now we can see that in the console, it will only show the strings of the values.

---

## How To Create A Generic Utility Function For Re-usability

Now that we know our code works, we can create a super handy utility function that can turn all our enums (both string and numeric enums) into JavaScript Arrays.

```ts [enum-to-array.lib.ts]
function enumToArrayNames<Type>(data: Type): string[] {
  return Object.keys(data).filter(
    (topping: string) => !new RegExp(/[0-9]/g).test(topping)
  );
}
```

::code-sandbox
<iframe src="https://codesandbox.io/embed/how-to-convert-a-typescript-enums-to-javascript-array-generic-util-function-mzqvhi?expanddevtools=1&fontsize=14&hidenavigation=1&moduleview=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="How To Convert A TypeScript Enums To JavaScript Array Generic Util Function"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
::

And with this function, we can see that the function works with both string and numeric enums. 👍

---

## Thanks

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this story, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁.
