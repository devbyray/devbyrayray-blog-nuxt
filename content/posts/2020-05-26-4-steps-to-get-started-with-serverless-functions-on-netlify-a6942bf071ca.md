---
title: 4 Steps to Get Started With Serverless Functions on Netlify
description: In this article, I want to tell you everything I know about serverless functions. I’m not going to dive into the small details. I want to talk about what they are and why you want to use them as front-end developers. What Are Serverless Functions?
date: '2020-05-26T15:50:59.895Z'
categories: []
published: true
tags: ['serverless', 'javascript', 'typescript']
image: https://cdn-images-1.medium.com/max/800/0*h-Oc-BQ3UWnRKq_z
---

You’ve heard the buzzword for a while now: serverless functions. Every cloud host is using them. They sound so simple!

But why would front-end developers want to use them? Are they any good?

In this article, I want to tell you everything I know about serverless functions. I’m not going to dive into the small details. I want to talk about what they are and why you want to use them as front-end developers.
What Are Serverless Functions?

Serverless functions are functions that execute application logic, without storing data, on a Faas platform.

There are many FaaS providers these days. Amazon made them popular with AWS Lambda. Since then, the rise of FaaS platforms got its traction.

Currently, there are a lot more. [Google Cloud Functions](https://cloud.google.com/functions), [IBM Cloud Functions](https://cloud.ibm.com/functions/), and [Azure Functions by Microsoft](https://azure.microsoft.com/en-ca/services/functions/) are the big players.

[Netlify](https://www.netlify.com/) is maybe not as big (yet) as Google, IBM, Amazon, or Microsoft, but it’s more powerful because it makes it so easy to create and host serverless functions.

All these providers have a free tier to try out their serverless functions. So that’s awesome!

In this article, I will use [Netlify](https://www.netlify.com/products/functions/).

---

## Why Should You Use Serverless Functions?

Are you wondering why you should use serverless functions?

Well, if you are familiar with JavaScript on the back end, you know Node.js (the new alternative, Deno, sounds promising too). Node.js is a JavaScript runtime that is a great fit to use for APIs.

Hosting a Node.js application as a front-end developer can be a bit of a hassle. You have to start it and stop it.

With serverless functions, you can do calculations, API calls, and a lot more — like you can with Node.js — but serverless functions are a lot simpler.

Every serverless function lives in one single JavaScript file. You can also use shared logic or dependencies.

As front-end developers, we don’t have to worry about managing a Node.js application.

We deploy a `functions` folder in our project and deploy it to Netlify. Every JavaScript file now becomes an API endpoint.

---

## How Do You Create a Serverless Function?

Now that it’s clear why serverless functions are powerful weapons, we’re going to create a serverless function ourselves.

### 1. Set up project

Create a simple GitHub repo for this project. Log into the Netlify website with your GitHub account. Accept the needed authorization.

### 2. Add project to Netlify

Netlify is great for its CI/CD features. No more manual deployments or even transferring files via FTP.

Add your GitHub project to Netlify and you’re ready to get started.

### 3. Set up serverless functions

Clone your GitHub project to your computer. Create a folder named `functions` and a `netlify.toml` file in the main directory.

https://gist.github.com/devbyray/5823e267be7149accf1da3bf4f659d37#netlify.toml

```toml
[build]
    functions = ".netlify/functions/"
```

In the `netlify.toml`, we put the setting we need to run the serverless function on our local computer and online.

Every JavaScript file in the `functions` folder has the same base.

```js [hello.js]
exports.handler = async (event, context) => {
	// return data here
}
```

When you call the endpoint, the `event` variable has information about the request (e.g. the headers, body, and the path).

Create a file in the `functions` folder called `hello.js` with the content below:

```js
exports.handler = async (event, context) => {
  return {
   statusCode: 200,
   body: JSON.stringify({
    message: 'Hello world"
   }),
  }
}
```

Commit and push it. Go to your project on Netlify and wait until the build finishes.

### 4. Check serverless function URL

Click on “Functions” in the navigation. If you worked in the `master` branch, then you will find `hello.js` in the list. If you worked on a feature branch, you have to search in the input field.

Click on your `hello.js` function and you will see the URL of your serverless function. Copy and paste it in your browser. The result should look like this:

```json [response.json]
{
	"message": "Hello world"
}
```

Write any logic you want your serverless function to have. You are ready to use it in any application you like!

---

## What Is the Alternative?

Of course, there are alternatives, like Node.js applications.

If you are comfortable with writing JavaScript but not so much keeping your server online, this is a very powerful option for you!

Yes, you can put your Node.js into a Docker container, but you’d still have to manage that too.

Serverless functions live in your project. You host it on Netlify. This is great for keeping it simple! If you ask me, that’s perfect for front-end developers!

---

## Conclusion

I’m diving into serverless functions on Netlify myself. I will combine them with [FaunaDB](https://fauna.com), so you can expect some future articles about that.

What do you think of serverless functions? Are you going to use them or experiment with them? Please let me know in the comments.

> I’ve gathered a couple of [aspiring developers around the world on a Discord server](https://mailchi.mp/fb82491d03f8/dev-by-rayray-discord-community), feel free if you like to join in.
