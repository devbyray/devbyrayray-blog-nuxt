---
title: Native Lazy Loading in the Browser
description: How we do it now and how we did it in the early days
date: '2020-05-20T14:24:00.210Z'
categories: []
published: true
tags: ['html', 'frontend', 'javascript']
image: https://cdn-images-1.medium.com/max/800/0*hA_k1Tueal3Lb7tJ
---

When I heard about Native Lazy Loading in early 2019, I was stoked! Chrome was the first browser to support it.

Fast-forward to early 2020, and [it’s supported](https://caniuse.com/#feat=loading-lazy-attr) by Edge, Firefox, Chrome, Opera, Android, and Android Chrome. Since that support is currently much better, I thought it was time to write about it.

In this article, I want to show you how simple it is to lazy-load images and iframes in the browser.

But first, we’ll dive into what lazy loading is, why you want to use it, how we did this before, and how you want to do it moving forward.

## 1\. What Is Lazy Loading?

When an `img` or `iframe` tag is in the HTML and parsed by the browser, it will immediately load the sources. This blocks the whole page to finish loading.

This will cause a longer time to load the page, so it takes longer for the user to interact with the page. We want the user to interact with the page as fast as possible.

So smart people came up with lazy loading. This is a technique to show images and only load iframes when they’re visible to the user. This will make sure the user only downloads what is visible.

### History

Back in the day, we did lazy loading via a scroll event listener. With every event, we checked the array with images and iframes if one of them was visible.

If they were visible, we had to change the attribute `data-src=" source URL"` to `` `src=“source URL” ``. This loads an image or page at that moment.

But a scroll event is very inefficient because it fires countless events in a very small timeframe.

We had to calculate if the element was visible with `getBoundingClientRect()`. The downside of this was that with every call, it forced the browser to lay out the whole page again.

For that time, it was not ideal. But it was better than loading in all the images by page load so that the user had to wait until the page was fully loaded.

### Intersection Observer

In early 2016, the Intersection Observer was available in Chrome. Other browsers followed later.

The Mozilla Web Docs describe the Intersection Observer in a very clear way:

> “The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document’s viewport.” — [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

The Intersection Observer observes what you tell it. It’s different than events. Events are constantly fired, even though you’re not doing anything with them.

## 2\. Native Browser Lazy Loading

https://gist.github.com/raymonschouwenaar/3be8ed0ee9a1dc5f0397bffb815c441f

Native lazy loading is super simple! Add a `loading` attribute on your `img` or `iframe` tag. You can choose the values `lazy`, `eager`, and `auto`.

-   `lazy`: For using lazy loading.
-   `eager`: Load directly.
-   `auto`: The browser will choose to lazy-load or not.

This way of doing lazy loading is so simple that using it is a no-brainer.

## 3\. How Does It Work?

If you want to use the lazy-loading functionality, add a `loading` attribute with the value `lazy` to your images or iframes:

```html
<img src="“imageurl.jpg”" loading="“lazy”" alt="“...”" />
```

With this attribute, you will tell the browser to only show the image when it becomes visible to the user. When it’s not visible, it won’t download the image or load the page for the iframe.

We need support across multiple browsers, but not all browsers support native lazy loading yet, so we need a polyfill.

## 4\. Fallback With Intersection Observer

Because [Safari (on macOS and iOs)](https://caniuse.com/#feat=intersectionobserver) doesn’t support native lazy loading yet but does support Intersection Observer, we can use a [polyfill based on the Intersection Observer](https://github.com/mfranzke/loading-attribute-polyfill) to make native lazy loading work.

### Support

This polyfill supports most modern browsers.

-   Mac: Firefox, Safari 12, 11
-   iOS: Safari 12
-   Windows: Chrome, Edge, Internet Explorer 11

### Plugins

There are also some plugins available for PHP and WordPress to use native lazy loading.

-   [WordPress plugin](https://wordpress.org/plugins/native-lazyload-polyfill/)
-   [PHP Twig Extension](https://github.com/tim-thaler/twig-loading-lazy)
-   [Craft Twig Loading plugin](https://github.com/tim-thaler/craft-twig-loading-lazy)

### More support

If you need to support IE 11, you also need to load a [polyfill for the Intersection Observer](https://github.com/w3c/IntersectionObserver/tree/master/polyfill).

I’ve written an in-depth article about [how to use the Intersection Observer to lazy-load your images](https://medium.com/better-programming/lazy-loading-images-with-the-intersection-observer-e8ad57a1682c).

## Conclusion

It is super awesome that we finally have native lazy loading baked into the browser! With a polyfill added, we can make sure that all modern browsers can make use of it.

Are you already using the native lazy-loading functionality on your website or web app? Or are you interested in implementing it? Please let me know in the comments what you think and if you discovered some secrets around it.

> I’ve gathered a couple of [aspiring developers around the world on a Discord server](https://mailchi.mp/fb82491d03f8/dev-by-rayray-discord-community), feel free if you like to join in.
