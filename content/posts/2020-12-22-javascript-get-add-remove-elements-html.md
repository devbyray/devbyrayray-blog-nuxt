---
title: Get, Add or Remove HTML Elements with JavaScript
description: Manipulating the HTML DOM is easy with JavaScript methods querySelector and querySelectorAll. In this post, I will show you how easy it is!
date: '2020-12-22'
categories: ['javascript']
published: false
tags: ['beginner']
image: https://miro.medium.com/max/1400/0*lKcwQ2biZcSro827
---

Creating, getting, and removing HTML elements with JavaScript is super simple, as long as you know the methods you need to use.

In this tutorial, I want to show you that only four methods are needed to create, get, and remove one or multiple HTML elements to the DOM.

- 1. Get access to one or more HTML elements
- 2. Create one ore more HTML elements
- 3. Add text to an HTML element
- 4. Remove one or more HTML elements

## 1. Get access to one or more HTML elements

Before we can create HTML elements via JavaScript, we need to know how to access the existing HTML elements.

We have several DOM methods, but I will show you two that are the easiest to understand.

We have the `querySelector()` and `querySelectorAll()` methods to get access to the HTML elements. The first is for getting a single element, and the second is for getting multiple elements.

## 2. Create one or more HTML elements

First, let’s add an HTML element to our page via JavaScript.

Creating an HTML element can be done via `createElement`. This method creates the element in memory. 

```js
const divElement = document.createElement('div')
const ulElement = document.createElement('ul')
const liElement = document.createElement('li')
const spanElement = document.createElement('span')
const imageElement = document.createElement('image')
const linkElement = document.createElement('a')
```

To add the HTML element to the DOM, you have to use the `appendChild` method.

We have a completely empty HTML page with only the `<html>` and `<body>` tags. And we want to add our HTML elements to the `<body>` tag. We have to access that element via the `querySelector` method.

```javascript
// Get access to the HTML body element
const body = document.querySelector('body')

// Create a list of HTML elements
const divElement = document.createElement('div')
const ulElement = document.createElement('ul')
const liElement = document.createElement('li')
const spanElement = document.createElement('span')
const imageElement = document.createElement('image')
const linkElement = document.createElement('a')

// Add HTML elements to the body tag
body.appendChild(divElement)
body.appendChild(ulElement)
body.appendChild(liElement)
body.appendChild(spanElement)
body.appendChild(imageElement)
body.appendChild(linkElement)
```

Now all the elements are created in the HTML. With the `createElement` and `appendChild` method. If you check the inspector you will see it.

## 3. Add text to an HTML element


## 4. Remove one or more HTML elements


<ul>
  <li>
    <a href="https://www.w3schools.com/jsref/met_document_createtextnode.asp">
      createTextNode
    </a>
  </li>
  <li>
    <a href="https://www.w3schools.com/jsref/met_document_createelement.asp">
      createElement
    </a>
  </li>
  <li>
    <a href="https://www.w3schools.com/jsref/met_node_appendchild.asp">
      appendChild
    </a>
  </li>
  <li>
    <a href="https://www.w3schools.com/jsref/met_node_removechild.asp">
      removeChild
    </a>
  </li>
</ul>

