---
title: Getting Started With Storybook Without a JavaScript Framework
description: Use it with plain HTML and CSS
date: '2021-06-04T14:36:43.869Z'
categories: []
tags: []
slug: /@byrayray/getting-started-with-storybook-without-a-javascript-framework-c2968d3f3d9f
---

We all want to use well-documented UI components in our frontend. With [Storybook](https://storybook.js.org/), you can do that reasonably quickly with React, Angular, Vue, or any other framework.

But since the documentation lacks clear information about how to set up Storybook without any JavaScript framework, I’m going to write it all down for you because it is possible to use plain HTML and CSS.

_If you want to learn more about why you should use Storybook, check out_ [_Why You Should Always Use Storybook When Developing User Interfaces_](https://levelup.gitconnected.com/why-you-should-always-use-storybook-when-developing-user-interfaces-4c69b93b2f65) _by_ [_Tyler Hawkins_](https://medium.com/u/5a27f1e0e31b)_._

### Installation

Add Storybook by running the following command in the terminal:

npx sb init

This command will add all the dependencies for Storybook and create initial files so that you can get started right away.

After the installation, you will see this question: “Do you want to manually choose a Storybook project type to install?” Type “yes.” Then “Please choose a project type from the list” will appear. For this, type “HTML.”

Now the CLI will set everything up to use Storybook with plain HTML.

Run `npm run storybook` when the installation is finished.

### Global Setup

When you check your directory, you will see a folder named `.storybook`. In this folder, there are two files: `main.js` and `preview.js`.

In the `main.js` file, you can configure what directory will be checked for `*.stories.js` files (other file extensions are possible). Storybook also has a plugin system called [add-ons](https://storybook.js.org/docs/html/addons/introduction) that you can add here as well.

In the `preview.js` file, you can add everything that needs to be loaded while previewing your UI components.

For example, add your global CSS file or icon font to have it available in all the components.

### Example Story File for Plain HTML

In the stories folder, you will find the files `Button.stories.js`. It looks like this:

This is an excellent example of what a story file looks like. The code in `Button.js` will create a `<button>` element.

Even though it looks good and clear, the way `createButton` is creating a `<button>` tag doesn't let us generate a clear code example to copy and paste. So we're going to do it a bit differently.

### Plain HTML Story With Code Example

To make this work, we need a Storybook add-on. Run the code below to install it:

npm i @storybook/addon-storysource

After the installation, add it to the `.storybook/main.js` file like below:

Create a folder named `helpers` in the `stories` folder. In that folder, create a file named `code-example.js`. In this file, we will create a helper function that generates data for our code example.

In this function, we take the `component` and the `templateConfig` as parameters. These parameters are going to provide us with information from the components themselves.

For this example, I will minimize the length of the `Button.stories.js` by adding only one example of a button. So copy-paste the code below:

If you check the button component in Storybook, your code example will not be ready to copy-paste yet.

By using the function to generate that example, you will see the difference:

Here, you can see that I added `Primary` as the first parameter and `Template` to the next. This will generate the simple HTML code you can copy and paste.

### Conclusion

Now that you know how to use Storybook with plain HTML and CSS, you can create your UI components much more effectively!

Storybook is a great tool to use in any web application. I’m super happy with it! If you want, check out their [project on GitHub](https://github.com/storybookjs/storybook) and show some support!

In what kind of application or architecture are you using or planning to use Storybook? Please let me know.

**_Happy coding! 🚀_**

### Thanks!

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this story, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁



### Read more

[**Angular stories**  
_All my Angular stories_byrayray.medium.com](https://byrayray.medium.com/list/24674407532a "https://byrayray.medium.com/list/24674407532a")[](https://byrayray.medium.com/list/24674407532a)

[**Latest JavaScript & TypeScript stories**  
_Check my latest JavaScript and TypeScript stories_byrayray.medium.com](https://byrayray.medium.com/list/0358ad941491 "https://byrayray.medium.com/list/0358ad941491")[](https://byrayray.medium.com/list/0358ad941491)