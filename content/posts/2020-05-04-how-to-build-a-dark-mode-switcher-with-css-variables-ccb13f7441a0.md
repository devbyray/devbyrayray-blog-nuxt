---
title: How To Build A Dark Mode Switcher with CSS Variables
description: 'Build a Dark Mode Switcher with CSS Variable, JavaScript and TypeScript'
date: '2020-05-04T13:39:33.588Z'
categories: []
published: true
tags: ['developer', 'webdev']
image: https://cdn-images-1.medium.com/max/1200/1*iTipwoyBgMFA0yd0ctozfg.png
---

Back in the days when CSS didn’t have variables, I didn’t miss it. But when Sass/SCSS came with variables, this became a whole other story.

Since the days I’ve used variables in Sass, this made it clear to me that this is super useful. But I’ve waited for this feature so long to come to CSS.

Lucky us we are living in a time where all the browsers have implemented the CSS variables 🙌! In this post, I’m going to teach you CSS variables. We are combining that with TypeScript/JavaScript, to build a cool Dark mode switcher.

It is super easy, because why make it more complex than needed right! I will add all code example’s in both TypeScript and JavaScript. I choose to add TypeScript because this will become more important in the future to have in your toolbox.

## 1\. Dive Into CSS Variables

Let’s get started with CSS variables. Open your CSS file and create them like this.

### Root

If you define your CSS variable `—-textcolor` in `:root {...}` it will be available throughout your whole CSS.

But we want to use that variable to add the color to our `h1`. We do that by using the `var()` function in CSS. Everywhere you apply `var(...)` the color will be applied to the property you gave it to.

### Class, element or ID

If you define that variable on for example on a class, element, or ID it will only be available in that scope.

So if we apply the `.class-name` on the `div` with that class, then the color will be changed.

In the example the `div` with the `class-name` will be green, the other one will be the default color black.

### Overwrite CSS variable

This means that you can overwrite the color of your CSS variable based on its context.

Now we have made the default color in the root yellow, but in the `class-name` we have the green. This means that we can overwrite the CSS variable based on its context.

## 2\. Change CSS Variables with JavaScript

Now that we changed the CSS variables based on its context, we need to check how we can change it with JavaScript.

### Get CSS Variable Value Root

When you declare a CSS variable in the root we have to get the value via the `documentElement`. With the method `getPropertyValue` on the `style` object we can get access to the CSS variable.

### Get CSS Variable Value Context

Declare a CSS variable in the context of a class, ID, or element. Then you get the element by using `document.querySelector()`. With that method `getPropertyValue` on the `style` object we can get access to the CSS variable.

### Change CSS Variable in Root

Want to change the value of the CSS variable in the root, use the `setProperty` method.

### Change CSS Variable in Context

Want to change the value of the CSS variable in a context (class, ID, or element), use the `setProperty` method.

### Example

So to wrap it all up, I created an example to toggle CSS variables in the root or a context. You can reset the value back to normal to pass `null` instead of a color value.

## 3\. Create a Dark Mode Switcher

Now we know how CSS variables behave. Both when changing the context of an element or when we change them with JavaScript. The time has come to create that dark mode switcher 🌓.

### Color Schemes

Let’s define our color schemes. I have used [uiGradients.com](https://uigradients.com/) for the beautiful gradient backgrounds.

### Apply background on body

To apply the background gradient, we use the variable on the `background` property.

The HTML would look something like this.

### Switching color schemes

To switch the dark and light mode, we are changing the class name via JavaScript on the body. In this case, it’s not needed to change the variable via JavaScript.

**TypeScript**

**JavaScript**

Here you see that I use the `classList.toggle` to toggle the class name between “light mode” and “dark mode”. Next, we change the text in the button based on the class of the body.

_It’s that simple_ 🤗

Check the example to see how it works.

## Conclusion

We have learned the CSS variable in combination with JavaScript and TypeScript! Now it’s time for you to use it in your projects. Let me know what you build with it!

If you liked this tutorial or have any questions about it, please let me know in the comments.

Want to get some tips about creating content for programmers, [please let me know](https://mailchi.mp/239d4f7b0d9d/programming-content-creator).

## Read more

[**You Picked The Wrong Side of the JavaScript War**  
_And nobody is winning!_medium.com](https://medium.com/undefined-developer/you-picked-the-wrong-side-of-the-javascript-war-583e64fe9c74 "https://medium.com/undefined-developer/you-picked-the-wrong-side-of-the-javascript-war-583e64fe9c74")[](https://medium.com/undefined-developer/you-picked-the-wrong-side-of-the-javascript-war-583e64fe9c74)

[**TypeScript For Beginners**  
_A practical way to learn TypeScript from scratch_levelup.gitconnected.com](https://levelup.gitconnected.com/typescript-for-beginners-97b568d3e110 "https://levelup.gitconnected.com/typescript-for-beginners-97b568d3e110")[](https://levelup.gitconnected.com/typescript-for-beginners-97b568d3e110)

[**The Thin Line Between Flexibility, Readability, and Scalability in Software Development**  
_What would be your strategy?_medium.com](https://medium.com/better-programming/the-thin-line-between-flexibility-readability-and-scalability-in-software-development-35c6dd32deb6 "https://medium.com/better-programming/the-thin-line-between-flexibility-readability-and-scalability-in-software-development-35c6dd32deb6")[](https://medium.com/better-programming/the-thin-line-between-flexibility-readability-and-scalability-in-software-development-35c6dd32deb6)

[**3 Tools to Start Programming on a Tablet or Mobile Phone**  
_Coding doesn’t only have to take place when you’re at your desktop or laptop_medium.com](https://medium.com/better-programming/3-tools-to-start-programming-on-a-tablet-or-mobile-phone-9dd89fc89f69 "https://medium.com/better-programming/3-tools-to-start-programming-on-a-tablet-or-mobile-phone-9dd89fc89f69")[](https://medium.com/better-programming/3-tools-to-start-programming-on-a-tablet-or-mobile-phone-9dd89fc89f69)