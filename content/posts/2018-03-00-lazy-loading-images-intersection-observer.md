---
title: Lazy-loading images with the Intersection Observer
author: "Ray Ray"
date: 2018-03-30T21:32:08+00:00
slug: 2018/03/lazy-loading-images-intersection-observer/
categories: ['javascript']
tags: ['developer', 'webdev']
excerpt: 'The Intersection Observer does a pretty good job in detecting if a certain element is inside the visible part of your browser. So we build lazyloading functionality with it.'
banner: './images/intersection-observer.png'
published: true
---

Lazy loading has always been a popular toppic on the web! But with the Intersection Observer that will all be so much better than it was!

Last year I tried to focus more and more on the performance of websites and web-apps. It’s quite a challenge in the world of all the big frameworks and libraries.

Hopefully, you know that loading images can cost even more time and data. But lucky that we are, there is a technique called lazy-loading images.

## Loading images

Loading images with the normal `<img>` tag, let’s the browser wait for being ready until all of the images are loaded.

```html
  <img src="https://loadyourimages.nl/image-nam.jpg" src="This is my awesome image">
```

Especially if you have a website with a lot of images, it can take maybe up till 10 seconds before the user has an interactive page.

On mobile connections that can even worse. With bad or slow connections your user sometimes will wait for tens of seconds or even minutes.

But we all know that those users want to wait that long! They will leave after a few seconds!

## Lazy-loading images

We want our pages loaded as fast as it is possible. Our goal should be 0 - 5 seconds, this is the amount of time a user will be patient for the page to load.

So if we avoid the normal `<img src="URL">`, so our pages will load a lot faster.

If we use a data-attribute to put in the URL of the image, we can put it in the src attribute to load them when it's in the viewport.

Most developers will use libraries for lazy-loading that are using an `eventListener` on the `scroll` event to check if an element is in the viewport. But we need something better since the eventListener on the scroll is kind of heavy on some devices!

## Intersection Observer

The Intersection Observer does a pretty good job in detecting if a certain element is inside the visible part of your browser.

> The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport. **source: [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)**

With this API we can listen to an element is in the viewport if they intersecting with the viewport.

### Configure the Intersection Observer

We have a few options in configuring the observer.

```javascript
const options = {
  root: document.querySelector('#container'),
  rootMargin: '0px',
  threshold: 1.0,
}

const observer = new IntersectionObserver(callback, options)
```

#### root

In the `root` property define the element that will be set as the viewport. Keep in mind that if you target an element (or the body) and when its height is on auto than all the elements will be set to visible. So if you set an element, set a height that is not auto, otherwise, it won't work like expected. If you don't define this property it will automatically use the browser viewport.

#### rootMargin

If the `rootMargin` value is set to 0, it will not look outside the `root` element. If you put in 10px, it will check earlier if an element is scrolled into it's `root` element.

#### threshold

If this value of `threshold` is 0, it will run the callback when 1px of the element is inside the `root` element. When the value is 1.0 it will trigger the callback when it's 100% inside the `root` element. But if you want the callback to be called when the element is 50% inside the `root` element, put in the value 0.5.

### Target elements

In order to use the Intersection Observer, we need an element to observe some elements!

The elements we want to observe have a class name 'fake-image', and we are gonna loop through the elements to start an observer for every fake-image element.

We also want to make sure, that when the element is in our root element, that the observation will be stopped. This saves some power on your computer or device.

```javascript
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      io.unobserve(entry.target)
    }
  })
}, options)

const targetElements = document.querySelector('.fake-image')
for (let element of targetElements) {
  io.observe(element)
}
```

### Demo

Let's try this out!

I've created a small demo to show you that Intersection Observer works really smooth.

Start scrolling, everytime an element is 100% visible it will turn green and the text will be "Loaded!".

<p data-height="500" data-theme-id="dark" data-slug-hash="GxOGwK" data-default-tab="js,result" data-user="rsschouwenaar" data-embed-version="2" data-pen-title="Example Intersection Observer" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/rsschouwenaar/pen/GxOGwK/">Example Intersection Observer</a> by Raymon Schouwenaar (<a href="https://codepen.io/rsschouwenaar">@rsschouwenaar</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Browser support

The [support for the intersection observer](https://caniuse.com/#feat=intersectionobserver) is pretty nice. It's implemented in Chrome (desktop & mobile), Firefox, Edge, Android browser. So it's missing in IE11 and Safari (desktop & mobile). The [webkit team is working hard](https://webkit.org/status/#specification-intersection-observer) on it because it's marked as "In Development" 👍, so hopefully it will soon be supported in Safari (March 2018).

To support the browsers that don't support this cool API (yet) we can use a polyfill. We can get it via npm: [intersection-observer](https://www.npmjs.com/package/intersection-observer) `npm install intersection-observer --save`.

## Let's build lazy loaded images

Now we know how we can use the intersection observer, we're gonna make our images load asynchronously into our browser when they are in the visible viewport.

At the beginning of this blogpost, I've shown you how most of the lazy load functionality is build last years. So let's replace the scroll event listener for the intersection observer.

### HTML

If you remember the HTML we used in the example before then you see we only need to add a `<img>` tag with the data-attribute `data-src`.

A data-attribute is a perfect solution to put in the URL, so we can put the URL in theirs.

```html
	<div class="fake-image">
	  <h2>Fake image</h2>
	    <img data-src="https://images.unsplash.com/photo-1521315807607-8220d719f0e4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=558cae1f662f20ea31f3ffda21a766f8" alt="" />
	</div>
```

### JavaScript

For the JavaScript, we only need one function to make our image load. Call the function inside the intersection observer.

```javascript
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // console.log('entry: ', entry);
    if (entry.intersectionRatio > 0.9) {
      loadImage(entry.target)
      entry.target.classList.add('active')
      // entry.target.innerHTML = '<h2>Loaded!</h2>';
      io.unobserve(entry.target)
    }
  })
}, options)

function loadImage(imageElement) {
  setTimeout(() => {
    console.dir(imageElement.querySelector('img'))
    imageElement.querySelector('img').src = imageElement.querySelector(
      'img',
    ).dataset.src
  }, 1000)
}
```

The only thing we need to do in the function is, putting the URL from the `data-src` attribute into the `src` attribute.

When the `src` attribute will be present, the image will load in the browser.

In the JavaScript code, I've put in a timeout for 1 sec to see the loading happen.

### Example

Let's check out the example. Scroll the view with images down so you can see for yourself that it works.

<p data-height="679" data-theme-id="dark" data-slug-hash="jzYGJM" data-default-tab="js,result" data-user="rsschouwenaar" data-embed-version="2" data-pen-title="Lazy Load image w/ Intersection Observer 🚀" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/rsschouwenaar/pen/jzYGJM/">Lazy Load image w/ Intersection Observer 🚀</a> by Raymon Schouwenaar (<a href="https://codepen.io/rsschouwenaar">@rsschouwenaar</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Thanks

If you learned something or have other ways to loop over a NodeList Object from the querySelectorAll, please let me know on twitter 😉: [@devbyrayray](https://twitter.com/devbyrayray)
