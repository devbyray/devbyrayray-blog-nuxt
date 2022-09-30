---
title: 'JavaScript basics: Select one or multiple HTML elements'
author: Ray Ray
excerpt: "I'm a big fan of learning Vanilla JavaScript instead of jQuery. I want to show how easy the querySelector() and querySelectorAll() are! (video included)."

slug: 2017/10/javascript-basics-select-one-or-multiple-html-elements/
published: true
date: 2017-10-10 16:20:22
---
If you search StackOverflow for selecting HTML elements on a page you will be overloaded by jQuery examples.

Since I’m a bigger fan of learning Vanilla JavaScript to get into JavaScript in general, I want to show you how to do it with the `querySelector()` and `querySelectorAll()`.

The querySelector methods are just that easy as the jQuery selector.

So let’s dive into the code 👍

If you are more a fan of reading than watching a video about the <em>querySelector()</em> than scroll down to read it 😉

<Youtube url="https://youtu.be/cLsTHYS7-7A" />

<h2><b>The querySelector() methods</b></h2>
You can use both the querySelector methods to search for one or more elements via a:

<strong>class</strong>

```javascript
document.querySelector('.class__name')```
<strong>ID</strong>
```

```javascript
document.querySelector('#ID__name')```
<strong>attribute</strong>
```

```javascript
document.querySelector('input[type="text"]')```
<strong>data-attribute</strong>
```

```javascript
document.querySelector('header[data-info="product-header"]')
```

The querySelectors work both similar! And if you are familiar with jQuery than you have no problem with this 👍

<h2><b>How to select 1 element on the page with JavaScript</b></h2>
To select one single element on a HTML page you need the <em>document.querySelector()</em>! Just put a condition as a parameter and the DOM will be searched for the element.

For example, we want to find the header with a class "<strong>header__main</strong>". (as you maybe notice, I used the <a href="https://byrayray.dev/posts/2017-10-write-better-css-with-bem/">template from the BEM video</a>).

```javascript
document.querySelector('.header__main')
```

The document.querySelector is gonna returns the first element on the page that matches the selector.

The element is a NodeList Object. You can find a lot of information of your element in this Object. For example: style, height, width, classnames, data-attributes, child elements and a whole lot more!

If you want to use the height or width from the element you need to do it like this.

```javascript
var headerElement = document.querySelector('.header__main')
var headerHeight = headerElement.clientHeight;
var headerWidth = headerElement.clientWidth;
```

<h2><b>How to get multiple elements on the page</b></h2>
To select multiple elements on a HTML page you need the `document.querySelectorAll()`! Put your selector in and you will get all the elements.

The document.querySelectorAll is gonna return all the elements on the page that matches the selector as a NodeList Object.

For example, you have a navigation. But in the JavaScript you want to have access to all the `<li>` elements. Than the `querySelectorAll()` method comes to the rescue!

<strong>HTML</strong>

```html
<nav class=“main-nav”>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Blog</a></li>
  </ul>
</nav>
```

<strong>JavaScript</strong>

```javascript
var navElements = document.querySelectorAll('.main-nav li');
navElements.forEach(function(navElement) {
  console.log('navElement: ', navElement);
})
```

I discovered that not all the browsers will accept the <strong>forEach()</strong> method on a NodeList Object. So it is saver to choose for the 

<strong>for-loop</strong>.

```javascript
var navElements = document.querySelectorAll('.main-nav li');

for (var i = 0; i &lt; navElements.length; i++) {
  console.log('navElements[i]: ', navElements[i].clientHeight);
}
```

This NodeList Object looks similar to an Array, but there is a difference. Read on Quora what the <a href="https://www.quora.com/What-is-the-difference-between-a-NodeList-and-an-Array" target="_blank" rel="noopener">difference is between a NodeList Object and an Array</a>.

If you need any help or have questions about the querySelector, please let me know so I can help you out!