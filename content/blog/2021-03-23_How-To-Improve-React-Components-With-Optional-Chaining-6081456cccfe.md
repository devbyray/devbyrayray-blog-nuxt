---
title: How To Improve React Components With Optional Chaining
description: Let’s minimize errors in our web apps
date: '2021-03-23T15:21:57.757Z'
categories: []
keywords: []
slug: /@byrayray/how-to-improve-react-components-with-optional-chaining-6081456cccfe
---

If you’re working on a big React (Next.js) application, sometimes you might need to dive deep into a data structure. It’s pretty generic. The React component I’m talking about would look like this:

If any property of `content` or `blok` is missing, we have a big problem. The page will break and the user will get an error. 🥺

### Improvement: Optional Chaining and Nullish Coalescing Operator

We need two JavaScript features to prevent a massive error: [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) and the [nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator). Don’t worry, this all sounds more complicated than it actually is.

#### Optional chaining

Optional chaining looks like this: `content?.content?.blok`. The browser will first check if there is a `content` property inside the `content` object instead of assuming that this property exists. If it doesn't exist, it won't show an error but will make the variable `nullish`. So it doesn't have a value.

#### Nullish coalescing operator

Now that our variable can be nullish, this means it can be `null` or `undefined`. But we want to show both titles on the page instead of nothing.

The nullish coalescing operator looks like this: `??`. It checks if the operator's left value is `null` or `undefined`. If it is, you can give it a fallback value.

So it looks like this: `content?.content?.blok ?? 'Title'`. If the value is nullish, it will assign the `'Title'` to the variable. If the value isn't nullish, it will assign the title from the deeply nested object.

### Improved React Component

If we implement the solutions we discussed before, our component looks like this:

Now, the user will always have a title and no errors. It’s better to be prepared for mistakes so that the user can continue their journey through the application.

Yes, the user will see a faulty title, but that’s far better than showing an actual error or, even worse, the page not showing!

### Conclusion

Hopefully, this will help you improve your React components. Be prepared if the content doesn’t load or exist! And make sure the user has a great user experience.

_Happy coding_ 🚀!

### Read more from me

[**7 Web Development Guidelines To Speed up Page Loading**  
_Improve the user experience for the love of your visitors_betterprogramming.pub](https://betterprogramming.pub/7-web-development-guidelines-to-speed-up-page-loading-e8f0e13a53b "https://betterprogramming.pub/7-web-development-guidelines-to-speed-up-page-loading-e8f0e13a53b")[](https://betterprogramming.pub/7-web-development-guidelines-to-speed-up-page-loading-e8f0e13a53b)

[**Getting Started With Storybook Without a JavaScript Framework**  
_Use it with plain HTML and CSS_betterprogramming.pub](https://betterprogramming.pub/getting-started-with-storybook-without-a-javascript-framework-c2968d3f3d9f "https://betterprogramming.pub/getting-started-with-storybook-without-a-javascript-framework-c2968d3f3d9f")[](https://betterprogramming.pub/getting-started-with-storybook-without-a-javascript-framework-c2968d3f3d9f)

[**How Promises Actually Work in JavaScript**  
_Learn when and how to use them_betterprogramming.pub](https://betterprogramming.pub/how-promises-actually-work-in-javascript-1c80b1af7193 "https://betterprogramming.pub/how-promises-actually-work-in-javascript-1c80b1af7193")[](https://betterprogramming.pub/how-promises-actually-work-in-javascript-1c80b1af7193)

[**CSS variable with Styled Components**  
_Use them easily in Next.js/React.js_devbyrayray.medium.com](https://devbyrayray.medium.com/css-variable-with-styled-components-7e91d89f13f3 "https://devbyrayray.medium.com/css-variable-with-styled-components-7e91d89f13f3")[](https://devbyrayray.medium.com/css-variable-with-styled-components-7e91d89f13f3)