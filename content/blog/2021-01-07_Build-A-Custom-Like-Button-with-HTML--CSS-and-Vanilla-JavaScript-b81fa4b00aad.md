---
title: 'Build A Custom Like Button with HTML, CSS and Vanilla JavaScript'
description: Learn JavaScript The Easy Way
date: '2021-01-07T14:24:05.275Z'
categories: []
keywords: []
slug: /@byrayray/build-a-custom-like-button-with-html-css-and-vanilla-javascript-b81fa4b00aad
---

![](./images/1__OfviGMYRfxsauWEEomSq__g.png)

When you want to learn JavaScript, where do you start? Well I thought about some easy to build UI components. In this post I will show you to code a custom like button. I will explain how it works so you can build your own.

Enjoy!

### HTML & CSS

So let’s start with the HTML & CSS to make our component static. I have created the HTML and CSS for you. But if you want to change it, please go ahead and make your flavor of it.

<button class="btn btn-like">  
    <span class="btn-icon btn--icon-default">  
        <span class="fa fa-heart"></span>  
    </span>  
    <span class="btn-icon btn--icon-liked">  
        <span class="fa fa-heart"></span>  
    </span>  
    <span class="btn-content  btn-content--liked">  
        Liked  
    </span>  
    <span class="btn-content btn-content--default">  
        Like  
    </span>  
</button>

We are building everything in a `<button>` tag like we should do with buttons. I have added some `<span>` tags for the content and icon of the button for the animations. If we don't do this, the animations won't work.

:root {  
    --red: rgb(209, 3, 3);  
    --white: #fff;  
    --black: #000;  
}

.btn {  
    width: 200px; height: 88px;  
    outline: 0;  
    border: 2px solid #ccc;  
    color: #000;  
    cursor: pointer;  
    overflow: hidden;  
    position: relative;  
    display:flex;  
    justify-content: space-between;  
    box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.05);  
    transition: 1.5s cubic-bezier(.21,.04,.26,.99);  
}

.btn:hover {  
    box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.2);  
    border-color: var(--red);  
}

.btn-like {  
    padding: 1.5rem 1.5rem 1.5rem 6rem;  
    font-size: 2rem;  
    border-radius: 10px;  
    background: #fff;  
    transition: 1.5s cubic-bezier(.21,.04,.26,.99);  
}  
.btn-like.liked {  
    background: var(--red);  
    border-color: var(--red);  
}

/\*-- Button Icon -- \*/  
.btn-icon {  
    display: inline-block;  
    width: 32px;  
    height: 36px;  
    position: absolute;  
    left: 1.5rem;  
    transition: 1s cubic-bezier(.21,.04,.26,.99);  
    transform: rotate(0deg)  
}  
.btn:hover .btn-icon {  
    color: var(--red);  
}  
.btn.liked:hover .btn-icon {  
    color: var(--black);  
}  
.liked .btn--icon-default {  
    transform: rotate(-90deg)  
}  
.btn:not(.liked).btn--icon-liked {  
    transform: rotate(-90deg)  
}  
.liked .btn--icon-default,  
.btn--icon-liked {  
    opacity: 0;  
    color: #fff;  
    position: absolute;  
}  
.btn--icon-default,  
.liked .btn--icon-liked {  
    opacity: 1;  
    left: 1.5rem;  
}

/\*-- Button Content -- \*/  
.btn-content {  
    transition: transform 0.1s ease;  
    display: inline-block;  
    /\* position: absolute;  
    right: 0; \*/  
}  
.liked .btn-content {  
    color: var(--white);  
}  
.btn:hover.liked .btn-content {  
    color: var(--black);  
}  
.btn:not(.liked) .btn-content--liked {  
    transform: translate(110px)  
}  
.btn:not(.liked) .btn-content--default {  
    transform: translate(-56px)  
}  
.liked .btn-content--default {  
    transform: translate(24px)  
}

I have used CSS Variable to easily change the colors if you don’t like the ones I have picked. Now that we have created the button component statically, we start with the JavaScript. 😇

### Demo

### Variables

A JavaScript variable is a memory where we can store information like some strings, numbers, objects, and a lot more. The handy thing about variables is that you can re-use them later on in your JavaScript. Otherwise, you will duplicate a lot of code.

We are going to use a variable to store the information on our button. We do that with a `const` variable. This type of variable stores information but doesn't allow to change the data type.

const button = document.querySelector('.btn')

The code above stores the information of our `<button class="btn"></button>` element. With the `document` property, we get access to the D.O.M., which means all the HTML on our page.

But we want to know when a user is clicking on the button, right? Because when the user does that, we want to add a class to the button `liked`. With this class, we trigger the CSS with the transition.

### Functions

In JavaScript, we have functions. We use them to re-use functionality. Many developers are working according to the D.R.Y. principal. It stands for “Don’t Repeat Yourself”.

Below you can see how a normal function is defined and executed. A function can be anonymous or defined with a function name.

// Function is defined here  
function coolFunction() {  
    console.log('Cool function is called 🚀')  
}

// Function is called here  
coolFunction();

### Events

So we need to create an [eventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener). With this, we listen to clicks, scrolls, and so much more.

const button = document.querySelector('.btn')

button.addEventListener('parameter1', 'parameter2')

The `addEventListener` is a function on every HTML element. This function takes some options, which we call parameters.

On the place where we see `'parameter1'`, we need to define what kind of events we want to listen to. We see `'parameter2'`, we need to define a function called every time the event is triggered. We call this a callback in JavaScript.

const button = document.querySelector('.btn')

button.addEventListener('click', function() {})

### Functions and parameters

Now we have defined that we want to listen to `'click'` events with our event listener. In the second property's callback function, we want to add the class 'liked' to the button. But when the user clicks again, we want to remove the class.

In the JavaScript ClassList API, we have a `toggle()` method for that. (_What is the difference between a function and a method? Check_ [_FAQ: 1_](https://gist.github.com/FAQ.md#1-what-is-the-difference-between-a-function-and-a-method)) When it's called the first time, it will add the class name you have defined in it. The second time it's called, it will remove the class name.

const button = document.querySelector('.btn')

button.addEventListener('click', function() {  
    button.classList.toggle('liked')  
})

In the file [our example](https://codepen.io/devbyrayray/pen/WNGyKqG), you will see that the code is a bit different.

const button = document.querySelector('.btn')

button.addEventListener('click', () => {  
    button.classList.toggle('liked')  
})

Instead of using a normal `function() {}`, I'm using a `() => {}` which is called an [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Since the introduction of the arrow function, I’m a big fan of it. It’s much shorter to write than the normal one. But it’s not always smart to use. Just remember, when we need to use `this` inside an arrow function, choose a normal function. You can read more about the arrow function on the [Mozilla Blog](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)

### Finish

I think we have created an excellent button component with a cool click effect. Right now, it’s up to you to add some even cooler effects. Let your creativity flow and build something cool!

When you finished your button, please share the result with a Tweet 😁. You can use this example tweet if you want! 👇

```
I have created project 1 of the "Learn JavaScript The Easy Way" program. 😁
```

```
[ADD LINK HERE] 🔥
```

```
Do You Want To Learn #javascript like me? Check the link below and start for free. 🚀
```

```
[TODO: LINK]
```

```
#html #css #codenewbie #coding #frontend #developer #creativity #learnJavaScript #easyJavascript
```