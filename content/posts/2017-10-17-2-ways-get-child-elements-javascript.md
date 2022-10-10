---
title: 'JavaScript basics: 2 ways to get child elements with JavaScript'
author: 'RayRay'
excerpt: 'I want to show you 2 ways how you can use Vanilla JavaScript to get the child elements, even when you don’t know what’s in the parent element'
slug: '2017/10/2-ways-get-child-elements-javascript/'
published: true
date: 2017-10-17
---

In jQuery, it is super easy to get the child elements of a parent HTML element. But do you know how it works with Vanilla JavaScript?

Today I want to show you 2 ways how you can use Vanilla JavaScript to get the child elements, even when you don’t know what’s in the parent element.

If you like reading instead of watching a video? Please scroll down to continue reading.

<Youtube url="https://youtu.be/m3YCD9tifoA" />

Looking for the video resources? Scroll to the bottom!

<h2>Let’s start with a simple webshop page.</h2>
<strong>HTML</strong>

```html
<header class="product__list-header"><h2>Webshop</h2></header>
<section class="product__list">
  <div class="product__item">
    <img
      src="http://lorempixel.com/400/200/food"
      class="product__image"
      alt="Food"
    />
    <span class="product__price">500</span>
  </div>
  <div class="product__item fun__class">
    <img
      src="https://lorempixel.com/400/200/food"
      class="product__image"
      alt="Food"
    />
    <span class="product__price">500</span>
  </div>
  <div class="product__item">
    <img
      src="https://lorempixel.com/400/200/food"
      class="product__image"
      alt="Food"
    />
    <span class="product__price">500</span>
  </div>
  <div class="product__item">
    <img
      src="https://lorempixel.com/400/200/food"
      class="product__image"
      alt="Food"
    />
    <span class="product__price">500</span>
  </div>
  <div class="product__item">
    <img
      src="https://lorempixel.com/400/200/food"
      class="product__image"
      alt="Food"
    />
    <span class="product__price">500</span>
  </div>
</section>
```

As you noticed, I used BEM as naming convention for my webshop example page.

<h2>#1 element.children</h2>
The first way to get the child elements is with the element.children. If you want
to check out what kind of properties the DOM Element Object has for you, check it
on <a
  href="https://www.w3schools.com/jsref/dom_obj_all.asp"
  target="_blank"
  rel="noopener"
>
  W3schools
</a>
. That is btw one of my favorite websites to check JavaScript example’s &amp; documentation.

<strong>JavaScript</strong>

```javascript
var productList = document.querySelector('.product__list').children;
console.log('productList: ', productList);
```

In the console log, you will find a.`HTMLCollection` Check the property `__proto__`, you will find out that he is not an Array.

Loop over the children

The children property will return a.`HTMLCollection` So you can loop over it with the plain-old For-loop.

```javascript
for (i = 0; i &lt; productList.length; i++) {
  console.log('productList[i]: ', productList[i]);
}
```

Check my <a href="http://jsbin.com/kidijef/edit?html,js,output" rel="noopener">element.children jsbin example</a>.

<h2>#2 document.querySelectorAll</h2>
If you know which elements are in a parent element, you can adjust the selector to:.`.product__list
.product__item` With this selector, you target al the product items inside the product
list.

If you don’t know which elements are in the parent element, I would recommend the element.children way. Because then you will definitely get all the children back.

Maybe you remind the `querySelectorAll` from my previous blog post, but I don’t mind to show it again 😉.

<strong>JavaScript</strong>

```javascript
var productList = document.querySelectorAll('.product__list .product__item')
console.log('productList: ', productList)
```

In the console log, you will find a NodeList. If you check the `__proto__` you will find out that he is not an Array.

Just like the HTMLCollection, you can use the For-loop to loop over each element in the NodeList.

```javascript
for (i = 0; i &lt; productList.length; i++) {
  console.log('product: ', productList[i]);
}
```

Check my <a href="http://jsbin.com/pewado/1/edit?html,js,output" rel="noopener">querySelectorAll jsbin example</a>.

<h2>Conclusion: element.children VS querySelectorAll</h2>
But now is the question, which one do you use?

<strong>You know the child elements</strong>

In the case you know what child elements there are in the parent element, it is good to use the `document.querySelectorAll` method.

This a much faster way to target them with the CSS selector. And because of the, `querySelectorAll` it doesn’t matter how much elements there are.

<strong>You don’t know the child elements</strong>

In the case you don’t know what child elements you can expect, you need the. `element.children` All the elements inside the parent element will come back with the DOM Element Object.

## Find other JavaScript posts

- [What to build after a JavaScript course?](https://mrfrontend.org/2019/07/what-to-build-after-a-javascript-course)

<h2>Video resources</h2>
<ul>
  <li>
    <a
      href="https://www.w3schools.com/jsref/met_document_queryselector.asp"
      rel="noopener"
    >
      document.querySelector
    </a>
  </li>
  <li>
    <a
      href="https://www.w3schools.com/jsref/met_document_queryselectorall.asp"
      rel="noopener"
    >
      document.querySelectorAll
    </a>
  </li>
  <li>
    <a href="https://www.w3schools.com/jsref/dom_obj_all.asp" rel="noopener">
      HTML DOM Element Object
    </a>
  </li>
  <li>
    <a
      href="https://www.w3schools.com/jsref/prop_element_children.asp"
      rel="noopener"
    >
      element.children
    </a>
  </li>
  <li>
    <a
      href="https://www.w3schools.com/jsref/prop_html_classname.asp"
      rel="noopener"
    >
      element.className
    </a>
  </li>
  <li>
    <a
      href="https://www.w3schools.com/jsref/prop_element_classlist.asp"
      rel="noopener"
    >
      element.classList
    </a>
  </li>
  <li>
    <a
      href="https://byrayray.dev/posts/2017-10-jquery-will-not-help-you-learn-javascript/"
      rel="noopener"
    >
      jQuery is not gonna help you learn JavaScript
    </a>
  </li>
  <li>
    <a href="http://lorempixel.com/" rel="noopener">
      Image Placeholder LorumPixel
    </a>
  </li>
</ul>
