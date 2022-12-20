---
title: How To Sum Total From Array Of Object Properties With JavaScript Reduce Method
description: Calculating the total price for your shopping cart was a hassle in the days before the JavaScript reduce method. In this post, I will show you how easy it is to use the reduce method to calculate the total price of a product array in the shopping cart. The JavaScript reduce method is powerful and can calculate a total price based on an array of object properties.
date: '2022-12-19'
tags: ['javascript']
image: images/linus-mimietz-gvptKmonylk-unsplash
---

Calculating the total price for your shopping cart was a hassle in the days before the JavaScript `reduce` method. In this post, I will show you how easy it is to use the `reduce` method to calculate the total price of a product array in the shopping cart. The JavaScript `reduce` method is powerful and can calculate a total price based on an array of object properties.

---

## How does the reduce method work?

The **`reduce()`** method in JavaScript is used to execute a function to each element in an array, resulting in a single output value. It operates on an array of elements, performing a computation on each element in the array and building up the result.

Here is the syntax for using the **`reduce()`** method:

```js
array.reduce((accumulator, currentValue, currentIndex, array) => {
  // code to be executed
}, initialValue);
```

The **`reduce()`** method takes in a callback function as its first argument. This callback function is called for each element in the array and takes four parameters:

- **`accumulator`**: This is the value returned in the final iteration. It starts with the initial value if provided or the first element of the array if no initial value is provided. And adds up every iteration.
- **`currentValue`**: This is the current element being processed in the array.
- **`currentIndex`** (*optional*): This is the index of the current item that is being processed in the array.
- **`array`** (*optional*): This is the array **`reduce()`** that was called upon.

The callback function should return the updated value for the accumulator.

Here is a simple example of using **`reduce()`** to calculate all the numbers in an array:

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 15
```

<runkit link="https://runkit.com/devbyrayray/calculate-total-based-on-numbers-array-with-javascript-reduce"></runkit>

In this example, the **`reduce()`** method is called on the **`numbers`** array and is passed a callback function that adds the accumulator and the current value. The initial value for the accumulator is 0. 

The **`reduce()`** method iterates through the numbers in the array, starting with the first element, and applies the callback function to each element. 

The returned value from the callback function becomes the new value for the accumulator, which is passed to the next iteration. This process continues until all elements in the array have been processed and the final value of the accumulator is returned.

Let's check how we can apply this to our product array of a fictional shopping cart.

---

## Get a total price from an array of object properties

Let's say you have an array of products in your shopping cart.

```js
const products = [
    {
      "price": 10,
      "title": "Item 1"
    },
    {
      "price": 20,
      "title": "Item 2"
    },
    {
      "price": 30,
      "title": "Item 3"
    }
]
```

To calculate the prices, we first need an array of prices. We want to calculate the total price of our shopping cart. We can do that by using the `.map()` method. In the example below, we create a new array with only the prices of our products.

```js
const prices = shoppingCart.map((product) => product.price)
```

After that, we can use that array to calculate the total price with the `reduce` method.

```js
const prices = shoppingCart.map((product) => product.price)
const total = prices.reduce((acc, curr) => acc + curr)

console.log('total: ', total )
```

We can also write this shorter and chain the `map()` and `reduce()` methods.

```js
const totalPrice = shoppingCart.reduce((acc, curr) => acc + curr.price, 0)

console.log('total: ', totalPrice )
```

<runkit link="https://runkit.com/devbyrayray/calculate-total-price-from-javascript-array-of-product-objects"></runkit>

That was easy. 👍 

---

## Thanks

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁.
