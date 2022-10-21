---
title: 'Define NodeJS, NPM, and TypeScript version in your Package.json'
description: I think this is a pretty unknown feature in the package.json. But you can define what version a computer needs to be able to run your project.
date: '2021-03-19T14:34:38.360Z'
categories: []
tags: ['node', 'npm', 'typescript']
slug: /@byrayray/define-nodejs-npm-and-typescript-version-in-your-package-json-6933d3ef280e
image: images/0__kIGc2Km__PQZMLbzZ.jpg
---

I think this is a pretty unknown feature in the package.json. But you can define what version a computer needs to be able to run your project.

I discovered this because I did get different error’s on a Next.js project than my team members. The issue was because we were using different versions of Node & TypeScript.

Right now, I defined this in our package.json, so everyone gets a message they have other versions. This configuration reminds people to update their Node and TypeScript.

```json
{
	//.... more configuration package.json
	"engines": {
		"tsc": "3.7.2",
		"node": "14.16.0",
		"npm": "7.6.3"
	}
}
```

I hope this will help you create better applications and get fewer errors 😅

---

## Thanks!

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁
