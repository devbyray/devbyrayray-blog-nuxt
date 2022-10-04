---
title: How To Remove Un-used Imports Automatically In Visual Studio Code
description: Save a lot of time and hassle with this solution
date: '2021-03-24T08:55:41.083Z'
categories: []
keywords: []
slug: /@byrayray/how-to-remove-un-used-imports-automatically-in-visual-studio-code-7f1f1e9f44b6
---

![](/images/1__uAuQLR44CQ6LCZpG7cQA2g.png)

If you’re working on a project that forces you to run all the linting before you can commit, you can sometimes feel frustrated. But most of the time, I forget to clean un-used imports in my TypoScript/JavaScript files.

Until just yet! I was so done with it 🥺. I knew that there was an option or plugin for it. But though I had it installed.

Well, this can be fixed without any plugin 😁.

![](/images/1__kRYI4gYpWf21657brfzD3Q.png)

Open your settings in JSON.

![](/images/1__oiCt1GzpKgPxswltX527Eg.png)

And paste the following in it.

"editor.codeActionsOnSave": {  
    "source.organizeImports": true  
}

Now, every time you press save, it will clean your un-used imports. This will save you time, energy, frustration, and building times for your React or Angular applications.

I hope this short post will save you a lot of time and hassle, as it did for me. 🤗

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