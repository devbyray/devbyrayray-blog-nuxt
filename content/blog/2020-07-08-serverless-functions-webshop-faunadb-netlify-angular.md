---
title: How To Build A Serverless Webshop
description: Connect Angular and FaunaDB with Netlify Serverless functions
date: '2020-07-08'
categories: ['Serverless']
published: true
tags: ['TypeScript', 'JavaScript', 'Angular', 'FaunaDB', 'Serverless functions']
image: https://miro.medium.com/max/1280/0*cAnIYaAnz3zzWt5t
---

# Connect Angular and FaunaDB with Netlify Serverless functions

This is a a 6 parts series to build a webshop application with [Angular](https://angular.io/), [Netlify](https://www.netlify.com/) Serverless functions in combination with [FaunaDB](https://dashboard.fauna.com/accounts/register?utm_source=Medium&utm_medium=referral&utm_campaign=WritewithFauna_BuildServerlessWorkshop_Raymon).

### **Series**

1.  Connect Angular and [FaunaDB](https://dashboard.fauna.com/accounts/register?utm_source=Medium&utm_medium=referral&utm_campaign=WritewithFauna_BuildServerlessWorkshop_Raymon) with Netlify Serverless functions
2.  Product list and detail view with Angular
3.  Create crud for products and show products on an Angular page.
4.  Setup Authentication to register and log in (so people can shop)
5.  Create a shopping cart to order products.
6.  Best practices on how to use [FaunaDB](https://dashboard.fauna.com/accounts/register?utm_source=Medium&utm_medium=referral&utm_campaign=WritewithFauna_BuildServerlessWorkshop_Raymon) with Netlify Serverless functions

In this part, we are going to set up a basic Angular application with Angular Material. Next to that, we are creating our Serverless function which is going to be hosted on Netlify. That Serverless function will retrieve data from our database on [FaunaDB](https://dashboard.fauna.com/accounts/register?utm_source=Medium&utm_medium=referral&utm_campaign=WritewithFauna_BuildServerlessWorkshop_Raymon) via the API.

We are exploring this Angular in combination with serverless functions and [FaunaDB](https://dashboard.fauna.com/accounts/register?utm_source=Medium&utm_medium=referral&utm_campaign=WritewithFauna_BuildServerlessWorkshop_Raymon), because it will make our process of building full stack applications much easier. After this whole series of posts you will become a practical expert in how to use all of these techniques.

Most of the times people would use a NodeJS application, which is in much more need for maintenance than serverless functions.

If you want to learn more about serverless functions, than check my introduction article to it.

_Let’s get started and Happy coding! 🚀_



## **1\. Install dependencies**

Before we start we have to make sure we have a couple of things installed on our computer.

1.  NodeJS & NPM/Yarn: _You can download it from the NodeJS website or install it via_ [_NVM_](https://github.com/nvm-sh/nvm) _on Mac or_ [_Windows_](https://github.com/coreybutler/nvm-windows) _which is more effective when you need to update NodeJS in the future_.
2.  Angular CLI: `run npm install -g @angular/cli` or `yarn global add @angular/cli`
3.  FaunaDB: run `npm install -g fauna-shell` or `yarn global add fauna-shell`

Now that we installed every dependency on our computer, we will set up the project.



## **2\. Create a Github project**

First, we are going to create a project on Github so we can store our code safely. Netlify is also using this project to pull the code and build it on their servers. We will work on this project together.

If you want to check for my code, please check the [Github repo](https://github.com/DevByRayRay/ng-faunadb-netlify-serverless-functions) I will use throughout the whole series.



## **3\. Make an account on Netlify and FaunaDB**

### **Netlify**

![](https://cdn-images-1.medium.com/max/800/0*dRqNB1fFH9RuVsyy)

Go to the Netlify website, log in or register if you don’t have an account yet (you can use Github for it).

### **FaunaDB**

![](https://cdn-images-1.medium.com/max/800/0*-7rmlI4lYfIDM_iB)

Go to the [FaunaDB](https://dashboard.fauna.com/accounts/register?utm_source=Medium&utm_medium=referral&utm_campaign=WritewithFauna_BuildServerlessWorkshop_Raymon) website, login or register if you don’t have an account yet.



## **4\. Link Github Project to Netlify**

When you are on Netlify click on the “New site from Git”.

![](https://cdn-images-1.medium.com/max/800/0*xTTd1plCxUOZzrbd)

Click on the Github button and authorize it with your Github account.

![](https://cdn-images-1.medium.com/max/800/0*HPy_ycnF2XcV1iT9)

Search for your project and select it.

![](https://cdn-images-1.medium.com/max/800/0*8Q5xojpsOz78ZBDo)

If you are using a clean project don’t fill in any of the input fields. Only if you’re not working on the master branch off-course.

![](https://cdn-images-1.medium.com/max/800/0*dM-fQcElPBkydEE4)

Now your project is ready to get started!



## **5\. Create Angular Project**

Now we are going to create a brand new Angular project. Run ng new project-name in your terminal.

_In the branch “_[_add-angular-project_](https://github.com/DevByRayRay/ng-faunadb-netlify-serverless-functions/tree/add-angular-project)_” you can see how this looks._

Open this project in your favorite editor/IDE.

I’m going to add Angular Material, but if you want to use something else, please go ahead, this doesn’t affect the tutorial, only a different visual end result 😉

```bash
ng add @angular/material
```

I chose the purple/green theme, added the animations and typography. But pick whatever you like, it has no effect for the rest of the tutorial.

![](https://cdn-images-1.medium.com/max/800/0*LzznBvq_DFF28VIX)

This is how it [should look](https://5ecd6416a9751a7f6ebdc7ad--ng-serverless-faunadb.netlify.app/).

> [The branch](https://github.com/DevByRayRay/ng-faunadb-netlify-serverless-functions/tree/add-angular-material) can be found on Github.



## **6\. Create functions folder with Netlify config**

Now that we have set up the start for our Angular application, it is time to set up our functions folder.

Remember that every JavaScript file that you create here becomes an endpoint. If you have shared or re-usable code don’t put it in the functions folder.

Create a functions folder in the root of your project.

To make sure we can call the serverless function we have to tell the Netlify system where our functions live. We do that in the `netlify.toml` file.

```toml
\[build\]
   functions = “.netlify/functions/”
```



## **7\. Serverless function example**

Netlify builds a tool for running and testing serverless functions on your local computer.

If you use Yarn use this command.

```bash
yarn add netlify-lambda
```

For NPM users use this command.

```bash
npm install netlify-lambda — save-dev
```

In the `package.json` we add 2 new commands in the scripts to make it easier to call. See the `fn:serve` and `fn:build` commands.

https://gist.github.com/raymonschouwenaar/42f6c91488446828419b86e06f190281

Now create the first serverless function `hello.js` in the functions folder.

https://gist.github.com/raymonschouwenaar/8c091bee4ad2dec31b0002b31ec2547e

Run `yarn fn:serve` or `npm run fn:serve` to test the function locally. For making a build run `yarn fn:build` or `npm run fn:build`.

> If you want to have [**support for TypeScript**](https://github.com/netlify/netlify-lambda#use-with-typescript), check how to set it up on the Netlify-lambda repo.

Now push this to GitHub. The Netlify build will start and make your function visible on the “functions” page.

> In [this branch, you can check this function](https://github.com/DevByRayRay/ng-faunadb-netlify-serverless-functions/tree/add-first-serverless-function) on Github.



## **8\. Create Fauna DB collection**

Create an account on [FaunaDB](https://dashboard.fauna.com/accounts/register?utm_source=Medium&utm_medium=referral&utm_campaign=WritewithFauna_BuildServerlessWorkshop_Raymon) if you haven’t already. Otherwise go to the [FaunaDB dashboard](https://dashboard.fauna.com/), login and create a new database.

![](https://cdn-images-1.medium.com/max/800/0*dDAPPppLBhfH89ys)

Give your database the name that you want. For the purpose of building a webshop, I select the “Pre-populate with demo data” option.

![](https://cdn-images-1.medium.com/max/800/0*YDpAAQALHLb6xPqc)

This option fills your database with a couple of collections, indexes, and data. _I think this is super useful when discovering the FaunaDB service!_

![](https://cdn-images-1.medium.com/max/800/0*lSZ7sPu__tcMyVkC)



## **9\. Create a Security Key**

Click on “security” on the sidebar and create a new security key. Initialy there are two Roles to choose from, Admin and Server. Choose the Server role, we do not need Admin access. You can create your own fine-grained roles later if you want to restrict access further.

![](https://cdn-images-1.medium.com/max/800/0*L9tQFncN28JbSghK)

After saving you will see a key, copy this key and keep it private! Go to the settings of Netlify.

![](https://cdn-images-1.medium.com/max/800/0*UJuat_fiP4UVtVsR)

Find the “Environment variables” section and create your environment variable. I use the secret key: “FAUNADB_SERVER_SECRET” and paste the security key from FaunaDB in the value input.

![](https://cdn-images-1.medium.com/max/800/0*a9v9VEFuE45P7vWd)



## **10\. Create a Config File**

I think it’s a good idea to create a lib folder where we can put all the logic for our functions.

We need to install the `faunadb` npm package to access the [FaunaDB](https://dashboard.fauna.com/accounts/register?utm_source=Medium&utm_medium=referral&utm_campaign=WritewithFauna_BuildServerlessWorkshop_Raymon) API. To have access to the `FAUNADB_SERVER_SECRET` we need to install `dotenv`.

For NPM:

```bash
npm install faunadb dotenv
```

For Yarn:

```bash
yarn add faunadb dotenv
```

We create `config.js` outside the functions folder, where we can add header information, the Fauna DB server secret, and more.

https://gist.github.com/raymonschouwenaar/4e13cf1599b84c4d3a2df89cfa43f393

To have a local environment variable `FAUNADB_SERVER_SECRET` we create a `.env` file in the main directory of the project.

```
FAUNADB\_SERVER\_SECRET=type-code-here
```



## **11\. Get product data from FaunaDB**

In this function, I want to retrieve the data from the products. In that folder we create `product-service.js`.

https://gist.github.com/raymonschouwenaar/4e868a08e11d75773b0fa7023cf135fd

The `ProductService` class will be used in our `products` function.

Create a `products.js` in the functions folder and import the `faunadb` package and create a client where we use the environment variable.

https://gist.github.com/raymonschouwenaar/ac6d5b67fcaeea075a6a887d9347761c

To test if everything works as intended, we have to run `yarn fn:serve` or `npm run fn:serve`. When the build is finished successfully check this url in the browser: [http://localhost:9000/.netlify/functions/products.](http://localhost:9000/.netlify/functions/products.) The data you should get back looks similar as the example below.

https://gist.github.com/raymonschouwenaar/59c7b16847755782ec302ad6a124e691

Push the changes to Github, wait until the build finished and test the URL from Netlify to see if everything works as expected.

In [this branch, you can check the product function](https://github.com/DevByRayRay/ng-faunadb-netlify-serverless-functions/tree/add-first-serverless-function) on Github. You can also check the [preview URL](https://deploy-preview-5--ng-serverless-faunadb.netlify.app/.netlify/functions/products) from my application.



## 12\. Call serverless function from Angular and show results.

Now that we have seen that the serverless function gives back the data we would expect we can retrieve the data from our Angular application.

We need to make sure that our `app.module.ts` has the `HttpsClientModule` imported.

https://gist.github.com/raymonschouwenaar/a9ffe60d544b9038493830af19e083de

And in the `app.component.ts` we need to use the `ngOnInit` method to get the data when our component is finished with rendering. We need to import the `HttpClient`and use it in the `ngOnInit` method to call our local serverless function.

https://gist.github.com/raymonschouwenaar/1e8e1b1b78d5aa34a5da461440fc8e34

Test in the browser if you can see the data from the products.

### **Conclusion**

Now we have learned how to make a serverless function, get data from the [FaunaDB](https://dashboard.fauna.com/accounts/register?utm_source=Medium&utm_medium=referral&utm_campaign=WritewithFauna_BuildServerlessWorkshop_Raymon) and retrieve it in the Angular application.

Next time we go a step further with Angular, [FaunaDB](https://dashboard.fauna.com/accounts/register?utm_source=Medium&utm_medium=referral&utm_campaign=WritewithFauna_BuildServerlessWorkshop_Raymon) and Netlify’s serverless function. If you can’t wait for the next tutorial, please experiment a bit more with what we already have build.

_Happy Coding 🚀_

> I’ve gathered a couple of [aspiring developers around the world on a Discord server](https://mailchi.mp/fb82491d03f8/dev-by-rayray-discord-community), feel free if you like to join in.

