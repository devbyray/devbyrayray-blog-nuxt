---
title: 'Polished.js: A Utility CSS-in-JS library for Styled-Components in React.js'
description: Styling Utilities Inspired By Sass for CSS-inJS
date: '2021-03-18T14:01:46.695Z'
categories: []
keywords: []
slug: >-
  /@byrayray/polished-js-a-utility-css-in-js-library-for-styled-components-in-react-js-32c1649d3831
---

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/0____vCuVf0JjUeJitMs.jpg)

Sass functions like `lighten()`, `darken()`, `complement()`, `invert()` are pretty useful. I was wondering if there was something for styled-components. Well, I found the great library [Polished.js](https://polished.js.org/).

The nice thing about this library is that it doesn’t matter if you use [styled-components](https://styled-components.com/), [emotion](https://emotion.sh/), [jss](https://cssinjs.org/?v=v10.6.0), [aphrodite](https://github.com/Khan/aphrodite), [radium](https://formidable.com/open-source/radium/), or just inline styling in JavaScript. It works with all of them!

It is a utility library, so you only import what you need to save some bytes for the user. Do you need typings for TypeScript? They got you covered!

So let’s dive into how to use Polished.js.

### Installation

Running the all-familiar command is enough for the installation.

npm install --save polished  
\# or if you're using yarn  
yarn add polished

### Importing

Import the utility function you need in the JavaScript, TypeScript, or React component file.

import { cssVar, darken } from 'polished'

My favorite functions are `lighten()`, `darken()`, `complement()` and `linearGradient()` but they have loads more [functions in their documentation](https://polished.js.org/docs/).

### Usage

To demonstrate how you can use Polished.js with styled-components, we will create a component for a `<input>` field. I'm gonna use the CSS variable to make it darker for the background of my `<input>` field.

My CSS variables are defined in the `global.css` file in the public folder. I'm currently using this in a Next.js project.

The `cssVar()` function can pull the variables from the root and turn them to a darker color.

The output color becomes `#eee`. So I don't have to decide that for myself.

### Better usage

But I think it would be even better to define this as its own color in the root component from my React/Next application. I have a `<Layout>` component as my root component, so it's best to define those CSS variables in there.

Since I want my colors to be available in my JavaScript, I’ve created a function with all the colors in it. I’ve added this to a separate file to make it easier to re-use in the future. Now I can assign this to a const variable `root` to make it available in a component.

Now we can use the `<GlobalStyle />` component in the `<Layout />` component. Now all the CSS variables are available across the application.

So in my `<Input />` component, I can use my CSS variables like any other component.

### Conclusion

I hope you learned something new from this post. If you use other utilities for your CSS-in-JS, please share them. I love to hear them!

_Happy Coding_ 🚀

**Further reading**

[**How to Build and Deploy a Jamstack Website Fast With Next.js**  
_Why Next.js is a smart choice_betterprogramming.pub](https://betterprogramming.pub/how-to-build-and-deploy-a-jamstack-website-fast-with-next-js-a61df3c822f "https://betterprogramming.pub/how-to-build-and-deploy-a-jamstack-website-fast-with-next-js-a61df3c822f")[](https://betterprogramming.pub/how-to-build-and-deploy-a-jamstack-website-fast-with-next-js-a61df3c822f)

[**How Promises Actually Work in JavaScript**  
_Learn when and how to use them_betterprogramming.pub](https://betterprogramming.pub/how-promises-actually-work-in-javascript-1c80b1af7193 "https://betterprogramming.pub/how-promises-actually-work-in-javascript-1c80b1af7193")[](https://betterprogramming.pub/how-promises-actually-work-in-javascript-1c80b1af7193)

[**How To Add Props To Styled Components in React.js with TypeScript**  
_Write Predictable Code With styled-components in React.js_devbyrayray.medium.com](https://devbyrayray.medium.com/how-to-add-props-to-styled-components-in-react-js-with-typescript-1df49ef951bf "https://devbyrayray.medium.com/how-to-add-props-to-styled-components-in-react-js-with-typescript-1df49ef951bf")[](https://devbyrayray.medium.com/how-to-add-props-to-styled-components-in-react-js-with-typescript-1df49ef951bf)

[**How to use CSS Media Queries with Styled Components in React.js**  
_Use Media Queries Smarter In Styled Components_devbyrayray.medium.com](https://devbyrayray.medium.com/how-to-use-css-media-queries-with-styled-components-in-react-js-f5db5ffcc5f0 "https://devbyrayray.medium.com/how-to-use-css-media-queries-with-styled-components-in-react-js-f5db5ffcc5f0")[](https://devbyrayray.medium.com/how-to-use-css-media-queries-with-styled-components-in-react-js-f5db5ffcc5f0)

[**CSS variable with Styled Components**  
_Use them easily in Next.js/React.js_devbyrayray.medium.com](https://devbyrayray.medium.com/css-variable-with-styled-components-7e91d89f13f3 "https://devbyrayray.medium.com/css-variable-with-styled-components-7e91d89f13f3")[](https://devbyrayray.medium.com/css-variable-with-styled-components-7e91d89f13f3)