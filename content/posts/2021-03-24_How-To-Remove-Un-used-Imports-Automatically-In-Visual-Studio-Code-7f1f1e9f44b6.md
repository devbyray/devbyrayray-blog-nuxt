---
title: How To Remove Un-used Imports Automatically In Visual Studio Code
description: If you’re working on a project that forces you to run all the linting before you can commit, you can sometimes feel frustrated. But most of the time, I forget to clean un-used imports in my TypoScript/JavaScript files.
date: '2021-03-24T08:55:41.083Z'
categories: []
tags: ['vscode', 'javascript', 'typescript']
slug: /@byrayray/how-to-remove-un-used-imports-automatically-in-visual-studio-code-7f1f1e9f44b6
image: images/1__uAuQLR44CQ6LCZpG7cQA2g.png
---

If you’re working on a project that forces you to run all the linting before you can commit, you can sometimes feel frustrated. But most of the time, I forget to clean un-used imports in my TypoScript/JavaScript files.

Until just yet! I was so done with it 🥺. I knew that there was an option or plugin for it. But though I had it installed.

Well, this can be fixed without any plugin 😁.

![](/images/1__kRYI4gYpWf21657brfzD3Q.png)

Open your settings in JSON.

![](/images/1__oiCt1GzpKgPxswltX527Eg.png)

And paste the following in it.

```json
"editor.codeActionsOnSave": {  
    "source.organizeImports": true  
}
```

Now, every time you press save, it will clean your un-used imports. This will save you time, energy, frustration, and building times for your React or Angular applications.

I hope this short post will save you a lot of time and hassle, as it did for me. 🤗

---

## Thanks!

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁
