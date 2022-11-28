---
title: How To Embed Youtube In Nuxt Website Via Markdown File
description: Embedding Youtube in a blog build with Nuxt has never been easier. Include the lite-youtube-embed package, create a Nuxt plugin and component, and you can use it in all your Markdown content files.
date: '2022-09-20T08:18:20.547Z'
tags: ['nuxt', 'vue']
image: images/jidjm3sl1cx53hvs18w5.webp
---

Embedding Youtube in a blog build with Nuxt has never been easier. Include the `lite-youtube-embed` package, create a Nuxt plugin and component, and you can use it in all your Markdown content files.

In this post, I will show you how you can do it yourself. We follow the following steps:

1. Include the Youtube Lite package
2. Add plugin
3. Create Component
4. Use component in the Markdown file

---

## 1. Include Youtube Lite package

First, we need to install the npm package [lite-youtube-embed](https://www.npmjs.com/package/lite-youtube-embed), created by Google Chrome team member and Frontend Developer [Paul Irish](https://www.paulirish.com/) 💪. This package is built for embedding Youtube videos with better performance than the "normal" way.

But I don't want to dive into the performance bottlenecks of embedding Youtube players on your blog. I want to show you how you can implement a Youtube player in your Markdown files with Nuxt.

Run this command to install it in your Nuxt project.

```shell
yarn add lite-youtube-embed

```

Or

```shell
npm i lite-youtube-embed

```

Add the CSS file in your `nuxt.config.js` into the `css` property.

```javascript [nuxt.config.js]
export default {
  css: [
        'node_modules/lite-youtube-embed/src/lite-yt-embed.css'
    ]
}
```

---

## 2. Add plugin

Create a plugin file `youtube.client.js` into your plugins folder. Make sure you include `.client.js` in the name, so Nuxt will only load this in the browser. We also need to import the JavaScript library, of course.

```javascript [youtube.client.js]
import 'lite-youtube-embed'
```

Now you need to register this plugin in your `nuxt.config.js` like below.

```javascript [nuxt.config.js]
export default {
  plugins: ['@/plugins/youtube.client.js']
}
```

---

## 3. Create Component

To use the `<lite-youtube>` web component in your Markdown files, you must create a Vue component to wrap it. Otherwise, you won't be able to show it on the page.

I created a `Youtube.vue` component in the `components` folder. I added two props to pass the Youtube video ID and a label.

```vue [components/Youtube.vue]
<template>
    <div class="youtube">
        <lite-youtube
            :videoid="id"
            :playlabel="label"
        />
    </div>
</template>
<script>
    export default {
        props: {
            id: String,
            label: String,
        },
        fetchOnServer: false,
    }
</script>
```

With this Youtube component, you can start using it in your Markdown files.

---

<ContentAd topics="vue|javascript"></ContentAd>

---

## 4. Use component in Markdown file

So the question is, how to use it in your Markdown files?

Add it into your files like you usually would do with your Vue components.

```md [post.md]
<youtube id="5SR_NUdg7t8"></youtube>
```

Nuxt will magically turn your whole Markdown file into a page of HTML, which you can see in the browser like this.

![Screenshot Youtube Video player embed](/images/v0Y7mUNjd.jpg)

---

## Thanks

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁.
