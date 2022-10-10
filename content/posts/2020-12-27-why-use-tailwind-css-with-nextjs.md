---
title: Why use Tailwind CSS with NextJS
description: TailWind CSS + NextJS = Web Dev ♥️
date: '2020-12-27'
categories: ['NextJS']
published: true
tags: ['React', 'JavaScript', 'NextJS', 'Programming', 'Software Development']
image: devbyrayray/blog/TailWind-CSS-NextJS-Web-Dev.webp
---

For a few weeks, I'm convinced to use Tailwind CSS more in my web development projects with NextJS. In this blog post, I want to tell you why it's a great combination.

Some people hate writing CSS, but others love to write it. I'm one of those people who love to write CSS himself. But using a tool that helps me create a website a lot faster and brings stability into my work will always make me excited to give it a try.

**Currently, your reading this post on my blog on which I've used Tailwind CSS. I have to say, and I'm convinced to use it in more of my web development projects.**

1. Why use Tailwind CSS?
2. You have to know CSS!
3. How to add Tailwind CSS to NextJS


## 1. Why use Tailwind CSS?

Compare [Tailwind CSS](https://tailwindcss.com/) to a CSS framework like Bootstrap or Foundation, and you will find out that it's completely different.

I can sniff a bootstrap website or application from miles away. You won't notice a website or application that is using Tailwind CSS is. (Only if you check to class names in the source code).

Tailwind CSS is a utility framework like no other. There is no set of pre-built components. It's a framework where you find classes like "text-white," "grid," "object-fit," and a lot more.

So it doesn't matter how your design looks; Tailwind CSS is the ideal partner in building every stunning design.

So here is the question "Why use Tailwind CSS?". Why not 🤣, hehe I'm kidding. Tailwind CSS will give you all the powers to build whatever you wish. You can easily adjust the colors, sizes, and media queries.

From the outside, you will not notice that Tailwind CSS is the driving force behind it.

## 2. You have to know CSS

But there is something you need to know before you use Tailwind CSS. You have to understand CSS.

If you can't build a design with plain CSS, I won't recommend picking Tailwind CSS.

Developers who know the most basic stuff like font-size, padding, margin, position, flex, and the grid will have no issue using Tailwind.

Better said, if you know all these things in CSS, I highly recommend you to use Tailwind CSS.

For example, set a different font-size on a specific media query is a simple as adding this class name "md:font-size" or changing height "sm:w-16".

You can change those numbers in the class names can be changed in the configuration file.

So why not give it a shot and add it to your NextJS project 😁👍

> Check out how [deploy your NextJS easy, fast and for free](https://byrayray.dev/posts/2020-12-21-nextjs-jamstack-getting-started). Want to order a great custom domain for it, <a href="https://www.dpbolvw.net/click-100299090-11429042" target="_top">Register Your Domains Hassle-Free with Namecheap starting at $3.98/year</a><img src="https://www.lduhtrp.net/image-100299090-11429042" width="1" height="1" border="0"/>

## 3. How to add Tailwind CSS to NextJS

It's super simple to add Tailwind CSS to your NextJS, so you will be able to start in no time. In this case, I will assume you use Next.js v10, because why wouldn't you not.😄


### Installation
```bash
# If you're on Next.js v10
npm install tailwindcss@latest postcss@latest autoprefixer@latest
```

Via the command above, you install Tailwind CSS and the dependencies PostCSS (you can also use it with any other CSS pre-processor) and autoprefixer.

### Configuration

With this command, you generate the config file `tailwind.config.js` and `postcss.config.js`. 

```bash
npx tailwindcss init -p
```

These files will be at the root of your project. In the `tailwind.config.js` file, you can configure things like the sizes, fonts, and colors. In the `postcss.config.js` you can add all the PostCSS plugins you want to use.

```jsx
// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

In the config, we want to define the place of our pages and components. By defining this, we can let Tailwind tree shake all the un-needed styles in our production builds.

### Include Tailwind CSS

Open the globals.css and add the code below.

```css
/* ./styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

You can also include everything from Tailwind in the `pages/_app.js` like below.

```jsx
// pages/_app.js
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

## How To Use Tailwind CSS

There are two ways to use Tailwind in your CSS.

The first is using all the class names that Tailwind has. You can use it like the example below.

```html
<div className="container mx-auto px-4 mb-16 flex justify-center flex-col">
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
    //....loads of content
  </div>
</div>  
```

The second option you could use is this, for example.

```css
.content__container {
  @apply container mx-auto px-4 mb-16 flex justify-center flex-col;
}

.content {
  @apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8;
}
```

It's just a matter of preference which way you want to use it. In the first example, your HTML is going to be full of class names. In the other example, you have a maybe more cleaner way.

But in both ways, you should get familiar with all the class names Tailwind has. But lucky you, Tailwind has created a significant amount of documentation.

## Thanks

Hopefully, you can use Tailwind CSS in your Next.js website. If you have any questions or want to show your Next.js website, please share it with me on [Twitter/@devbyrayray](https://twitter.com/devbyrayray).
