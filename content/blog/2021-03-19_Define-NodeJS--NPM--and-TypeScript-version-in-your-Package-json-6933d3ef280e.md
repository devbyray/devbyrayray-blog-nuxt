---
title: 'Define NodeJS, NPM, and TypeScript version in your Package.json'
description: I think this is a pretty unknown feature in the package.json. But you can
  define what version a computer needs to be able to run your…
date: '2021-03-19T14:34:38.360Z'
categories: []
keywords: []
slug: /@byrayray/define-nodejs-npm-and-typescript-version-in-your-package-json-6933d3ef280e
---

![](/images/0__kIGc2Km__PQZMLbzZ.jpg)

I think this is a pretty unknown feature in the package.json. But you can define what version a computer needs to be able to run your project.

I discovered this because I did get different error’s on a Next.js project than my team members. The issue was because we were using different versions of Node & TypeScript.

Right now, I defined this in our package.json, so everyone gets a message they have other versions. This configuration reminds people to update their Node and TypeScript.

}  
//.... more configuration package.json  
    "engines": {  
        "tsc": "3.7.2",  
        "node": "14.16.0",  
        "npm" : "7.6.3"  
    }  
}

I hope this will help you create better applications and get fewer errors 😅

_Happy Coding_ 🚀

### [Get my weekly newsletter “Developer Underdogs” with the best developer content created by aspiring developers.](https://www.getrevue.co/profile/devbyrayray)

### Read more from me

[**How Promises Actually Work in JavaScript**  
_Learn when and how to use them_betterprogramming.pub](https://betterprogramming.pub/how-promises-actually-work-in-javascript-1c80b1af7193 "https://betterprogramming.pub/how-promises-actually-work-in-javascript-1c80b1af7193")[](https://betterprogramming.pub/how-promises-actually-work-in-javascript-1c80b1af7193)

[**CSS variable with Styled Components**  
_Use them easily in Next.js/React.js_devbyrayray.medium.com](https://devbyrayray.medium.com/css-variable-with-styled-components-7e91d89f13f3 "https://devbyrayray.medium.com/css-variable-with-styled-components-7e91d89f13f3")[](https://devbyrayray.medium.com/css-variable-with-styled-components-7e91d89f13f3)

[**How to use CSS Media Queries with Styled Components in React.js**  
_Use Media Queries Smarter In Styled Components_devbyrayray.medium.com](https://devbyrayray.medium.com/how-to-use-css-media-queries-with-styled-components-in-react-js-f5db5ffcc5f0 "https://devbyrayray.medium.com/how-to-use-css-media-queries-with-styled-components-in-react-js-f5db5ffcc5f0")[](https://devbyrayray.medium.com/how-to-use-css-media-queries-with-styled-components-in-react-js-f5db5ffcc5f0)

[**Developer Dilemmas: New Technology VS Old Technology**  
_Medium Short Story_devbyrayray.medium.com](https://devbyrayray.medium.com/developer-dilemmas-new-technology-vs-old-technology-3de8726ef6c1 "https://devbyrayray.medium.com/developer-dilemmas-new-technology-vs-old-technology-3de8726ef6c1")[](https://devbyrayray.medium.com/developer-dilemmas-new-technology-vs-old-technology-3de8726ef6c1)