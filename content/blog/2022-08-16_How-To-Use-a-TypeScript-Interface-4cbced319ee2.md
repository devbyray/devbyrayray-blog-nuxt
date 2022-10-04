---
title: How To Use a TypeScript Interface
description: By making pizzas for breakfast
date: '2022-08-16T19:19:45.796Z'
categories: []
keywords: []
slug: /@byrayray/how-to-use-a-typescript-interface-4cbced319ee2
---

![](/images/1__GGHQySa4lhZk1Chd28EuNA.png)

An interface is a blueprint for an Object. It tells you which properties there are, which are required and optional and which type of data they hold.

TypeScript has become more popular than ever. For me, it was not love at first sight, but now we are connected. I don’t start a project without TypeScript! So if you experience the same feelings, you’re not alone.

Most of the models in TypeScript are a combination of interfaces and classes. An `interface` is a blueprint of a class or object. In this `IPizza` interface, we define all the properties a pizza has. In each property, we define what kind of data type the information is.

Every property that is defined in an `interface` is required. If you want to make it optional, you must use the `?` .

For example, `propertyName?: string` if we define this property in an interface, it's optional. TypeScript won't give you an error if the property is missing in an `Object`. On the other hand, if a property is required, it will give an error if it is missing.

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

The example above shows an `interface` for our pizza. We gave all the properties a single data type. Now we can create our Pizza object and use the interface to ensure it has the correct properties.

Now the `pizza` is according to the interface. The `interface` is now a form of property validation. If we would add properties that are not in the `interface` or properties with wrong data types, the TypeScript will give errors.

With this object, you will get errors! 👇 ([_Check it on CodeSandbox for yourself_](https://codesandbox.io/s/typescript-error-with-wrong-property-information-kdi529?file=/index.ts))

![](/images/1__2lVYUioEXcbN31E8FZg6ww.png)

### Multiple values

But what if we want an array of strings or numbers to give our toppings or sizes? We can do that pretty quickly; write `string[]` or `number[]` in the `interface`.

Now our `pizza` object is valid.

If we want to type an Array with multiple pizza objects, we can do that the same way with `IPizza[]`.

### Conditional values

Sometimes, you will say that a property can be a `string` or a `null`. In those cases, we use the pipe | to show that it is both.

For example, with the `cheescrust` it is optional but can be a boolean or null.

So with the Pizza Tuna, we say we don’t want to offer cheese crust, so we give it a value of `null`.

### Thanks!

![](/images/0__VfkbsGbdeKbkzFjc.jpg)

After reading this story, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁



### Read more

[**Latest JavaScript & TypeScript stories**  
_Check my latest JavaScript and TypeScript stories_byrayray.medium.com](https://byrayray.medium.com/list/0358ad941491 "https://byrayray.medium.com/list/0358ad941491")[](https://byrayray.medium.com/list/0358ad941491)