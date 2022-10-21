---
title: 7 Web Development Guidelines To Speed up Page Loading
description: Web development has evolved over the last couple of years. We load more and heavier files in the browser, but those things cost the user experience. Let's improve the page loading.
date: '2021-06-14T14:18:52.790Z'
categories: []
tags: ['webdev', 'performance']
slug: /@byrayray/7-web-development-guidelines-to-speed-up-page-loading-e8f0e13a53b
image: images/0_QnAZY15rO37Dt2ZH.jpg
---

Web development has evolved over the last couple of years. We load more and heavier files in the browser, but those things cost the user experience. Let's improve the page loading.

In this post, I want to share a few guidelines that help me keep the performance and user experience at a high quality.

---
## Minimize the Number of Requests

I know this one sounds obvious, but minimizing the number of requests needs some more thought. If you don’t need an image, video, icon, pdf on your page, don’t load it even though users won’t see it.

So if you have a popup window with a YouTube in an iframe, load it when the user has opened the popup window. Not earlier.

When a user is not scrolling through a page, don’t load that image in your footer! The user doesn’t see it, so don’t waste any resources on it.

Only load external sources when you need them! It’s that simple.

---
## Prefer Web-Safe Fonts

I know we love those beautiful fonts from Google Fonts, TypeKit, or other services. But, do we need them? And do you need all of the family, or are we only using one style of that font?

Maybe we need to research finding a great [safe web font](https://www.w3schools.com/cssref/css_websafe_fonts.asp) that looks similar to our custom font. If it comes close, I would suggest picking that one!

Loading a custom font costs some time for the user to download, especially when they have a slow connection. It causes a bad user experience because it can block the complete page from being responsive.

A web-safe font is always safer, faster and improves the user experience in all kinds of ways. For the designers out there, even a web-safe font can improve readability and compliment the website’s branding.

Are you not convinced yet?

I highly recommend reading the article “[Loading Fonts The FOUT Way](https://mattclaffey.medium.com/loading-fonts-the-fout-way-92beed75dc38)” by [Matt Claffey](https://medium.com/u/a21dfccbfdd4). There are some great tips in it for loading fonts the best way.

Next to that, “[The performance cost of custom web fonts, and how to solve it](https://www.wholegraindigital.com/blog/performant-web-fonts/)” by Joshua Stopper is another great in-depth guide on how to keep your Webfont performed.

---

## Use SVG Icon Instead of an Icon Font

Icons, in websites and web apps, we can’t live without them.

Services like FontAwesome, Google Material Icons, and Iconmoon have made icon fonts popular! Icon fonts are great for customizing the colors for your brand. But like standard web fonts, they come with a cost.

A better alternative would be using inline SVG. I mean, just the code from an SVG file, not link it inside an image tag. By using inline SVG, you can style it with CSS as much as you like. Check the example below.

The cool thing is, you can also use some CSS animations with it. You can’t do that with an icon font, right. 😊

::codesandbox
<iframe height="500" style="width: 100%;" scrolling="no" title="Style Inline SVG with CSS 🦄" src="https://codepen.io/devbyrayray/embed/preview/vYxzWWa?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/devbyrayray/pen/vYxzWWa">
  Style Inline SVG with CSS 🦄</a> by Dev By RayRay (<a href="https://codepen.io/devbyrayray">@devbyrayray</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
::

---
## Use Lazy Loading for Images

Earlier I said that you shouldn’t load things that are not used or hidden. Well, this is a critical thing for images. And nowadays it’s easier to fix than before.

Just add `loading="lazy"` to your image tag like below.

```html
<img src="image.jpg" loading="lazy" alt="Landscape The Netherlands" width="480" height="640px"  />
```

It is supported in most modern browsers. Check [CanIUse](https://caniuse.com/loading-lazy-attr) if this meets your browser requirements. If you want to learn more about this, you can read about [natively lazy loading images](https://betterprogramming.pub/native-lazy-loading-in-the-browser-85dabe6653ed) in your browser.

If you need to support some browsers that don’t support this feature yet, and you're interested in achieving the same functionality with a bit of JavaScript, then you can do this with the [intersection observer](https://betterprogramming.pub/lazy-loading-images-with-the-intersection-observer-e8ad57a1682c). It will help you with achieving the same functionality with a bit of JavaScript.

---
## Minimize CSS and JavaScript Files

Since we load so many external files into our browser, we have to keep them as small as possible.

Most JavaScript frameworks already have optimization features built-in. Minification, tree shaking, and many more are methods they use to optimize the CSS and JavaScript files as much as possible.

But, if you don’t use any particular JavaScript framework, you can do that pretty quickly by yourself. There are two tools I highly recommend for making your life easier.

[ViteJS](https://vitejs.dev/) (built by the creator of VueJS [Evan You](https://medium.com/u/4f198f5f1f12)) and [ParcelJS](https://parceljs.org/) are super helpful tools to help you make your CSS and JavaScript smaller for production. Both of them support a couple of CSS pre-processors, so no worries about that. If you use TypeScript, they got you covered.

Check the getting started pages for both tools to see how easy it is.

*   [Getting started with ViteJS](https://vitejs.dev/guide/)
*   [Getting started with ParcelJS](https://parceljs.org/getting_started.html)

I’m a big fan of ViteJS because it’s a modern approach, and it’s super fast.

---
## Load What You Need

This is more of a mindset than a guideline.

Only load external resources when you need them. And only load it on pages, views, or dialogs that are using it.

Don’t waste precious internet bundles and processor power of the user’s device.

---
## Format Images

Sometimes you lead a website where they have banners at the top. But they forgot to preformat the image. Images of a few MB can cause prolonged loading times, and it is not what you want for your users ;-).

Formatting your images is very important!

Use the correct height, width, and file extension. Be careful with png files. They can be high quality but take up a lot of MBs.

*   **JPG**: Use this for photos
*   **PNG**: Use this for high-quality photos for download purposes and transparent images. Be careful. This comes with costly data.
*   **GIF**: Use this for images or icons with a meager amount of colors
*   **WebP**: This is a newer image type. It can hold very high-quality photos without the downside of png files.

But to do this the easy way, create a free account at [Cloudinary](https://cloudinary.com/), and you can format all your images on the fly.

For example, the images from my blog are formatted with Cloudinary with this link:

```
https://res.cloudinary.com/{accountName}/image/upload/c\_scale,g\_center,w\_300,f\_auto/{imageUrl}
```

Cloudinary offers [great documentation](https://cloudinary.com/documentation/image_transformations) on how you can format your images and videos with their service.

---
## Conclusion

As you can see, there are a few guidelines to follow to create a fast-loading website. These are my personal favorites. I’m fully aware that are many more things than my seven guidelines, so if you have some tools that you use yourself, please leave them in the comments to share them with the world.


---

## Thanks!

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁
