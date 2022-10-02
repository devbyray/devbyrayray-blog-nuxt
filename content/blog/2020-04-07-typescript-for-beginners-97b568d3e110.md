---
title: TypeScript For Beginners
description: A practical way to learn TypeScript from scratch
date: '2020-04-07T03:19:03.683Z'
categories: []
published: true
tags: ['Developer', 'WebDev']
image: https://cdn-images-1.medium.com/max/800/0*BP2ZZa91y7-S7yZz
---

TypeScript is becoming more popular than ever. As beginner it was not love at first sight for me and TypeScript, but we’ve got to know each other. Currently, I don’t start a project without using TypeScript!

In this post, I want to dive into the basics of TypeScript. We’re going to learn some theory, but since I believe in learning by building something, we are gonna be practical.

## What is TypeScript?

In plain English, I would explain it as a Type system layer on top of JavaScript which compiles cross-browser JavaScript. On the TypeScript website, they explain it like this.

> _TypeScript is a typed superset of JavaScript that compiles to plain JavaScript._

For people with experience in languages like Java, #C, and several others, are familiar with types. Those types will help users make our JavaScript more predictable.

Because there are already so many libraries build with TypeScript, or have support with TypeScript our IDE can help us with our JavaScript.

For example, it will tell us what kind of methods or properties a certain Object has. In the case of a function, it will tell what kind of parameters the function takes and the return type.

## TypeScript Basics

You probably know that TypeScript is solving a bunch of problems we all have experienced in our time as a developer with JavaScript. Using string methods on numbers, trying to access properties that are not available in a certain object.

If you don’t see the point of learning TypeScript, read this post about why it is a good choice to start learning TypeScript right now, hope you like it.

## Learning By Building

Let’s build a fictive pizzeria shop. (_no we are not gonna build a real one_) By building this you are going learn all the basics of TypeScript. If you have experience with a backend programming languages, some of the terms will be familiar for you, that’s great!

If you don’t have any experience with any backend programming languages, don’t be afraid, I will teach you everything. And I know for sure you can learn it. I’m also a very visual person, when I first started with TypeScript it was difficult, but along the way, I started to fall in love with it. Just give yourself some time and practice.

In my example, I would like to give a very practical way to start using TypeScript right away instead of only studying the theory so you have to implement it yourself. I like the practicality!

> _All my code can be found in my_ [_CodeSandbox envoirment_](https://codesandbox.io/s/pizza-store-typescript-demo-8mw4j) _which I created for this tutorial._

## Set up your workspace

We need a few things on our computer to use TypeScript.

### NodeJS

Install NodeJS via the [NodeJS website](https://nodejs.org/en/) or install it via [Homebrew or NVM](https://pawelgrzybek.com/install-nodejs-installer-vs-homebrew-vs-nvm/) if you are on a mac.

### TypeScript

```
npm install -g typescript
```

This will install TypeScript globally. After installation, it will be available via the `tsc` command.

### Editor of Choice

I pick [Visual Studio Code](https://code.visualstudio.com) because it has TypeScript integrated.

Or if you just want to fiddle around with TypeScript, I would recommend using [CodeSandbox](http://codesandbox.io/) with their TypeScript starter which helps you start right now.

The TypeScript website has a great playground to play around with TypeScript so you could see how the JavaScript looks that will be compiled.

Now we are good to go!

## Primitives

Hopefully, you know all the [primitive data and structure types in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).

*   String `'string'`
*   Number `785`
*   Boolean `true`
*   Undefined `undefined`
*   Null `null`
*   Object `{}`
*   Function `function fake() {...}`

If you don’t know them, I highly recommend you start learning them first. They are essential for using JavaScript and TypeScript. Check the MDN web docs section about [data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).

In TypeScript, we use these primitive values in an `interface` to form a blueprint for an `Object` or `Class` like in the example below.

## Interface

Most of the models in TypeScript are a combination of interfaces and classes. An `interface` is a blueprint of a class or object. In this `IPizza` interface, we define all the properties a pizza has. In each property, we define what kind of data type the information is.

Every property that is defined in an `interface` is required. If you want to make it optional you have to use the `?`. For example `propertyName?: string` if we define this property in an interface, it's optional. TypeScript won't give you an error if the property is missing in an `object`. On the other hand, if a property is required, it will give an error if the property is missing.

When a property is not defined in an `interface` you will get an error from the TypeScript compiler because the data is not according to the blueprint.

### Example

We can all come up with properties for a pizza.

*   Name
*   Slices (the number of slices)
*   Toppings
*   Price
*   Cheesecrust
*   Vegan
*   Vegetarian

Let’s put them in the interface and decide what kind of data type they are.

In the example above we see an `interface` for our Pizza. We gave all the properties a single data type. Now we can create our Pizza object and use the interface to make sure it has the correct properties.

Now the `pizza` is according to the interface. The `interface` is now a form of data validation. If we would add properties that are not in the `interface` or property with wrong data types, the TypeScript will give errors.

With this object, you will get errors!

## Multiple values

But what if we want to have an array of strings or numbers to give our toppings or sizes. We can do that pretty easy, just write `string[]` or `number[]` in the `interface`.

Now our `pizza` object is valid.

If we want to make a type an Array with multiple pizza objects, we can do that the same way with `IPizza[]`.

## Enums

In the `IPizza` we have set that the value of toppings needs to be an Array of strings `string[]`. But we can do that a lot smarter because we don’t have tons of toppings for our Pizza. (_We can apply this also for the sizes_)

Let’s say we have 4 types of toppings and 5 sizes for our pizzas. We can define an `enum` for that. The first option that is defined in the enum will have value `0` by default. But you can set other values if you like.

In the `interface` we add this to our properties. With the enums, we can have multiple choices for the sizes and toppings.

So our object will look like this.

## Classes

Instead of creating a normal `interface`, we can use a `class`, but we use the `interface` in the `constructor`to validate the data we put in the `class`.

Classes are handy because you can give your `class` methods, getters and setter which are not possible in an `interface`.

An `interface` won't be compiled into your JavaScript files, a `class` will be, because it's a valid data structure.

Let’s create a class based on our `IPizza` interface.

As you probably know, a `class` is great for making new instances of a special type of `object`.

If you would check your console, you will see that this `bbqPizza` is from type `Pizza` and not directly from type `object`. Off-course this is an `object` under the hood!

## Array

But a pizza store with just one pizza is not enough right. Let’s make a big catalog of pizzas.

`Pizza[]` will tell TypeScript that the property `list` gonna be an Array. Everywhere you put a `[]` after, will till it's gonna be an Array. Like `string[]`, `number[]`or `Pizza[]`, pick any type and it will work.

Now we can make a list of pizzas with the `PizzaCatalog` class.

When you put it in a console.log it will output this.

We can add even more pizzas to it.

The result will be.

Perfect to loop through and build a cool webshop around it.

## Loop through enums

To get our pizza toppings and sizes in a more readable way, we have to map through enums.

To explain what it does. First we `map` through all the keys of the enum, then we check if a key is a `number`, because `enum` values are numbers by default. We set the enum string to `lowercase` and then we filter out all the `undefined` values.

The output from those variables is this.

## Functions

Now that we have our `Pizza` and `PizzaCatalog` classes, it's time to add a function to calculate the prices of the pizza based on the size. In the function we loop through all the sizes, calculate (in this case a random) an addition and sum it up with the `price` property value.

For each pizza that is created with this `class`, you will get an array of prices because we calculate them in the `constructor` and add them to the `prices` property.

In this case, we have defined the `getPizzaPrices` method to output `IPizzaPrice[]` as an array. But if this would have been a function that would not return a value, we should have typed it with `void` like this example.

## Any

When I got started with TypeScript when the Angular team just launched Angular 2.0 I didn’t understand the benefit of TypeScript at all. So when I got errors, I just typed everything with `any` 🙈 that was bad!

The type `any` could be any type you want. This can be handy if you have to deal with a lot of generic types where you don't know what the type could be or it could be of any type.

## Null and undefined

Hopefully, you know the difference between `null` and `undefined`. Because `null` could be simply explained with an empty value. `undefined` is not defined and in the case of an `object` property you can say the value of the property is not defined.

In TypeScript the behavior is the same as in normal JavaScript. But you can type property in a `class` with a type and say it has a default value that is `null` or `undefined`. Like we do in the `Pizza` class.

The weird thing with `null` is that if you check with `typeof` it will appear as an `object`, which can be weird.

That’s a wrap. Now it is time for you to build cool stuff with TypeScript! If you want to share your projects in the comments, please do 😉.

> I’ve gathered a couple of [aspiring developers around the world on a Discord server](https://mailchi.mp/fb82491d03f8/dev-by-rayray-discord-community), feel free if you like to join in.

## Conclusion

I hope it all becomes clear to use TypeScript. How it works and why it’s a great addition to your developer toolbox.

_If you want to know why it is a good idea to learn TypeScript, check out my other post “_[_Does Learning TypeScript Today Make Sense?_](https://www.kirupa.com/hodgepodge/learning_typescript.htm)_”_

## Read more

[**Dear CodeNewbie, Be 1% Better Everyday!**  
_Please don’t think that experienced developers know everything from their head! No! I’m searching basic switches a lot…_medium.com](https://medium.com/dev-together/dear-codenewbie-be-1-better-everyday-c7688a4166b5 "https://medium.com/dev-together/dear-codenewbie-be-1-better-everyday-c7688a4166b5")[](https://medium.com/dev-together/dear-codenewbie-be-1-better-everyday-c7688a4166b5)

[**How To Build A Dark Mode Switcher with CSS Variables**  
_Build a Dark Mode Switcher with CSS Variable, JavaScript and TypeScript_levelup.gitconnected.com](https://levelup.gitconnected.com/how-to-build-a-dark-mode-switcher-with-css-variables-ccb13f7441a0 "https://levelup.gitconnected.com/how-to-build-a-dark-mode-switcher-with-css-variables-ccb13f7441a0")[](https://levelup.gitconnected.com/how-to-build-a-dark-mode-switcher-with-css-variables-ccb13f7441a0)

[**JavaScript Concepts You Need Before Starting w/ Frameworks & Libraries**  
_Don’t start before you are comfortable with them_medium.com](https://medium.com/dev-together/javascript-concepts-you-need-before-starting-w-frameworks-libraries-25a325312b5c "https://medium.com/dev-together/javascript-concepts-you-need-before-starting-w-frameworks-libraries-25a325312b5c")[](https://medium.com/dev-together/javascript-concepts-you-need-before-starting-w-frameworks-libraries-25a325312b5c)

[**5 Tips To Make 100DaysOfCode Effective For Everyone!**  
_Spend Your Time Wisely To Learn To Code_medium.com](https://medium.com/undefined-developer/5-tips-to-make-100daysofcode-effective-for-everyone-3695587aad64 "https://medium.com/undefined-developer/5-tips-to-make-100daysofcode-effective-for-everyone-3695587aad64")[](https://medium.com/undefined-developer/5-tips-to-make-100daysofcode-effective-for-everyone-3695587aad64)