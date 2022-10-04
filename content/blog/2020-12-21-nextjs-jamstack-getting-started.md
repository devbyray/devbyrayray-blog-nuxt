---
title: How To Build and Deploy a JAM-stack Website Fast With NextJS — in 5 steps
description: NextJS is one of the best tools for building JAM-stack websites with all kinds of content sources.
date: '2020-12-21'
categories: ['NextJS']
published: true
tags: ['TypeScript', 'JavaScript', 'Programming', 'Software Development']
image: devbyrayray/blog/how-to-build-and-deploy-a-jamstack-website-fast-with-next-js
---

## Building Websites in 2010

When I started with Front-end development, I used only HTML, CSS, and JavaScript. Because at that time, the Back-end developers in my team needed to connect it to the CMS, I was building it into PHP files.

I didn't use any framework like Angular or React. It was just HTML, CSS, and a bit of jQuery. Also, no CSS pre-processor that could help me. Well, at that time, they exist, but I didn't know that.

## Building Websites in 2020

In the current time, we have a lot of tools at our disposal. Frameworks like React and VueJS gave us a fantastic toolbox to build websites a lot faster.

Currently, I don't use PHP anymore. Thank God! Because It made me configure my computer with Apache and MySQL (or any other database).

No! Currently, we have it so much better, in my opinion, when building websites. We can pull data from all kinds of APIs and show it excellently on our website. 

## Why NextJS Is A Smart Choice?

I know, I know, there are so many choices to make right now. What are you going to use as a platform to build your website? Which framework or static site generator are you going to use?

There are so many tools available!

I will always bet on JavaScript! It's my number one language to use in web development—both front-end and back-end.

That's why NextJS is a smart choice to bet in for building websites. You maybe ask why? I will tell you.

1. NextJS is built on top of React
2. It has a great toolbox of plugins
3. You can load data on the server-side
4. Pulling data why a user wants it is no problem with Ajax
5. React is one of the most straightforward libraries when you just learned JavaScript
6. You can load content from Markdown, MDX, JSON, API's, Yaml, GraphQL, and so much more data sources and CMS platforms
7. It has build-in TypeScript support
8. Great image optimization build in
9. Good if you value performance and SEO
10. Big amount of documentation and [getting started tutorial](https://nextjs.org/learn/basics/create-nextjs-app)

If you are not convinced yet, please check out some other static site generators. There is a ton available. Check the website of [Jamstack.org/generators](https://jamstack.org/generators/).

## When You Should Pick NextJS

It's good to think about what you want to build before you start coding. This can help to smooth your development process. But it's also good what you need in your knowledge toolbox to make the process easy when you build a website with NextJS.

1. You should be familiar with JavaScript! If you don't know JavaScript, this will not be a smart choice 🥴. Learn JavaScript first will be my advice before diving into any JavaScript framework or library.
2. It will be nice if you know React. NextJS is built on top of it.
3. There is no pre-defined way of writing your styling. You can bring any flavor of pre-processor or any CSS framework you want.
4. You should know HTML & CSS. If you don't know them, please don't start with JavaScript. You probably are going to have a tough time building something with NextJS.

> Want to order a great custom domain for it, <a href="https://www.dpbolvw.net/click-100299090-11429042" target="_top">Register Your Domains Hassle-Free with Namecheap starting at $3.98/year</a><img src="https://www.lduhtrp.net/image-100299090-11429042" width="1" height="1" border="0"/>


## How To Build A Website With NextJS

### 0. Installation

You should have NodeJS and Git installed on your computer. If you don't have NodeJS, download the installer is the easiest way.

If you want to most practical way? Use NVM.

### 1. Create a project

It's as simple as running this command in your terminal.

```bash
npx create-next-app
```

First, it will ask you the question "What is your project named?" so type in the name of your project, and it will generate all the needed files.

In your terminal, go to the directory of your project. The script will show you the folder when it has installed all the dependencies.

When you open this folder via your favorite editor, it should be something like this.

![NextJS Started Project](https://miro.medium.com/max/1400/1*OGX09m-Kx_a723gcm5pJ2Q.png)

### 2. Add content and styling

If you check the pages folder, you will see 2 JavaScript files and one folder. 

The `index.js` is your homepage. The `_app.js` is the wrapper for all page components. Here you can add all kinds of global styling.

Run `npm run dev` and open your browser on `localhost:3000`. Now you can see your new NextJS website.

If you want to get content from Markdown files, API, or a CMS. Then I recommend checking out all the [starter projects](https://nextjs.org/docs/basic-features/data-fetching) from NextJS.

Running it locally is cool, but eventually, you want to show it to the world. 

### 3. Create a Github project

Before we can deploy it, create a project, and host your code safely there.

We want to host it for free on Netlify. For Netlify, you should add a config file to get your site running in no time.

Create a `netlify.toml` file and copy this code in it.

```yaml
[build]
  command = "npm run build"
  publish = "out"
```

With this code, you tell Netlify which command your build command is and in which folder it needs to serve that build version.

### 4. Deploy on Netlify for FREE

Login to Netlify and create a new project based on your Github account.

Select the repo your website is in and click next. The next step should be configured for you because of the `netlify.toml` file.

When everything goes as planned, you should see that there is a deployment running.

When that build and deployment process is finished, you can visit your site by clicking on "**Preview deploy**"**.** Now your website is alive, you can share it with the world.

Of course, I recommend spending a reasonable amount of time adding content and styling, so it is very pleasing to your visitors' eyes. I wish you good luck!

### Follow up
If you like to learn how to [add Tailwind CSS to your NextJS website](https://byrayray.dev/posts/2020-12-27-why-use-tailwind-css-with-nextjs), check this post I published Lately.

## Thanks

Hopefully, this has helped you publish your first NextJS website. If you have any questions or feedback? Please let me know in the comments. 😁

Happy coding 🚀
