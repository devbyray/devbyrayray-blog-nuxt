---
title: "Dive into GraphQL with Apollo Client by Building a SpaceX \U0001F680 App in Angular 9"
description: I know that this sounds odder than it is, but using GraphQL in an Angular 9
  application with Apollo Client feels like flying a SpaceX…
date: '2020-01-22T13:26:21.402Z'
categories: []
published: true
tags: ['developer', 'webdev']
image: https://cdn-images-1.medium.com/max/1200/1*jfFiJr4OxVaU882JZBp1Hg.jpeg
---

I know that this sounds odder than it is, but using GraphQL in an Angular 9 application with Apollo Client feels like flying a SpaceX rocket 🚀. Why can only React developer be an astronaut and fly with the GraphQL rocket? _And I don’t have anything against React! Everyone can pick their flavor 😉_

> This project is updated to Angular 9, so make sure you install all the needed tools on your computer. Check this post what you should [update for your application for Angular 9](https://levelup.gitconnected.com/upgrade-to-angular-9-within-10-minutes-671c6fd6174b) by [Jeroen Ouwehand](https://medium.com/u/dc695ec3c2c2)

In this tutorial, I’m not gonna tell you how to steer the GraphQL rocket, but I’m going to help you get your engine started so you can learn to fly.

## Rocket members that will help you start this tutorial smoothly

Of course, I mean that it will help you to follow this tutorial if you have basic knowledge of:

*   Angular 9
*   Typescript 3.7
*   GraphQL (basics on how to use it)

**NodeJS requirements**

*   NodeJS (_Latest version preferable_)
*   Typescript (_Latest version preferable_)

## What will you learn from it

You will learn how to fly the GraphQL rocket with the Apollo Client in an Angular 8 application. As real Angular astronauts, there is one way to learn this rocket at best, to build our own SpaceX explorer 👨‍🚀

## Let’s start the Angular engine

The Apollo client supports Angular Router, Ionic, NativeScript. But thank God they support Angular Schematics, which make our life so much easier in the first step 🚀.

## 1: Create Angular application with CLI

Make sure you installed the Angular CLI on your computer. Then run the command to create a new Angular.

_you want to use your existing Angular app, then you can skip this step._

Go with the terminal to the `spacexGraphQL` folder, or open Visual Studio Code (or other IDE you like) and open the terminal in that.

## 2: Add apollo client

Apollo is the most popular tool to use GraphQL in the industry. Let’s install the Apollo Client via the Angular CLI so it can automatically set up the stuff you need.

## 3: Add spacex GraphQL url

Go to the [SpaceX GraphQL page,](https://api.spacex.land/graphql/) copy the URL `[https://api.spacex.land/graphql/](https://api.spacex.land/graphql/)` and paste it in the `uri` const variable in the `src/app/graphql.module.ts`.

After adding the SpaceX URL, start the application by the following command `npm start` to see if it runs correctly.

## 4: Auto-generate types from API schema

Each GraphQL API will show it’s a schema. So instead of writing all those models and types by hand, we can automatically generate them 🙌.

First, we need to install `graphql-codegen` CLI.

After installation run `npx graphql-codegen init` to start the setup wizard.

1.  What type of application are you building? **Angular**
2.  Where is your schema? [**https://api.spacex.land/graphql**](https://api.spacex.land/graphql/)
3.  Where are your operations and fragments? `**src/**/*.graphql**`
4.  Pick plugins: (_Select these plugins with your spacebar_)
5.  TypeScript (required by other typescript plugins)
6.  TypeScript Operations (operations and fragments)
7.  TypeScript Apollo Angular (typed GQL services)
8.  Where to write the output? `**src/generated/graphql.ts**`
9.  Do you want to generate an introspection file? **No**
10.  How to name the config file? `**codegen.yml**`
11.  What script in package.json should run the codegen? `**codegen**`

After answering a few questions it generates a `codegen.yml` file with all the configuration based on your answers.

Which looks something like this.

Run `npm install` to install the plugin's for GraphQL codegen.

Now we only have to run `npm run codegen` to generate the schemas based on the current GrapQL API, sounds handy right!

But we are not there yet, because this command currently fails because we don’t have any `.graphql` files in our project yet.

## 5: Create the first GraphQL file

To generate all our type files from the GraphQL API we need to create a GraphQL file. In this file we define which data we are gonna use in our application, so we can leave the data we don’t want.

Go to the [SpaceX GraphQL](https://api.spacex.land/graphql/) playground in your browser. Select the “rockets” option in the **Explorer** sidebar.

![](https://cdn-images-1.medium.com/max/1200/1*_O-Whnhs8S9056RJFNubxQ.png)

Since we want to show a list of all the SpaceX rockets, we are gonna ask for all the rockets. If we want to have a maximum of 3 rockets, we only have to give it a limit by selecting it.

Let’s define which information we want to have for each rocket. You can pick any information you want by selecting the properties.

**I’m gonna pick the following:**

*   company
*   cost\_per\_launch
*   country
*   description
*   diameter (meters)
*   first\_flight
*   id
*   name
*   wikipedia

In the editor, we now see the GraphQL builds the query for you and if you press the play button, you will get the actual data on the right.

The data should look something like the example below. You can see we gave our query a name to re-use it in more places in the application.

Before we can make a file for this query, we need a `rockets` component for that.

Let’s run the following command for that.

Now we have a directory to put our `.graphql` with the content of the query which we got from the SpaceX GraphQL API. So let's create a file `rockets.graphql` in the rockets component folder, right where we need it.

Right now we can run `npm run codegen` to generate our GraphQL schema into `src/generated/graphql.ts` so we can use that to refer to in our components.

To see what has been generated, open the file. When scrolling through this you see that the codegen generated Typescript types of the whole SpaceX GraphQL schema.

When you scroll to the bottom you will see something like this. This is what has been generated based on our `rockets.graphql` file. Our query name has the name `getRockets` so we find that back in the generated file 🙌.

## 6: Show list of rockets

Now let’s show the data from the awesome SpaceX API 🚀. First, we need to take a few steps to do this.

Clean the `app.component.html`, only leave the `router-outlet` in there.

Go to the `app-routing.module.ts` and add the rocket component to the routes Array.

Go to the `rockets.component.ts` and set it up for getting the data from the GraphQL API.

You can copy-paste this code in your component and it should work. But I will walk you through it.

We created a public property `rockets` with the type `Rocket[]`. ( _This type comes from our generated GraphQL schema_) It's gonna be an Array of rockets. It's public because we need it in our HTML to show the data.

Inside the `constructor` we added a private property to `GetRocketsGQL` this is to refer to generated query document. Which will do the magic to do a request through the Apollo Client.

Inside the `ngOnInit()` we do a request to the GraphQL API with the defined query and watch for a result. When we get the result we add the data to `this.rockets` so we can show it in the HTML.

In the HTML we can out the JSON to see that it’s working.

Go to [http://localhost:4200](http://localhost:4200) and check if you see the JSON in your HTML. If you see it, it works! If you don’t, check the console in the browser for errors.

But to show the information properly you can build your HTML like this.

Which looks like

![](https://cdn-images-1.medium.com/max/800/1*veEmZu713brm4tbx_p6Ekw.png)

## Final: What did we learn?

I know, it isn’t a good looking app that you want to show your users 😉. But I leave that up to you!

Add some styling with Angular Material or Bootstrap, you name it and make something pretty!

I could go on and on with more GraphQL tips and tricks, but to learn it deeper you have to work and play a lot with it.

If you want to see my source of this application because something is not working? Please check out the [Angular SpaceX GraphQL Github repo](https://github.com/mrfrontend-development/angular-spacexGraphQL).

## Thanks

Thanks for reading all the way down to here 🙌. I hope you found this tutorial useful! If you prefer a video, please add in the comments so I can consider that.

## Read my other posts

[**GraphQL (microservices) architecture by Apollo**  
_GraphQL is fantastic! Apollo build tooling around it to make our life easier, to use it at scale_itnext.io](https://itnext.io/graphql-microservices-architecture-by-apollo-8b6eb557c5e2 "https://itnext.io/graphql-microservices-architecture-by-apollo-8b6eb557c5e2")[](https://itnext.io/graphql-microservices-architecture-by-apollo-8b6eb557c5e2)

[**Prevent “Cannot read property ‘…’ of undefined” errors with JavaScript Classes + TypeScript**  
_Every developer who did some JavaScript has got errors like “Cannot read property ‘…’ of undefined”. There is one…_itnext.io](https://itnext.io/prevent-cannot-read-property-of-undefined-errors-with-javascript-classes-typescript-a388c1f0ef45 "https://itnext.io/prevent-cannot-read-property-of-undefined-errors-with-javascript-classes-typescript-a388c1f0ef45")[](https://itnext.io/prevent-cannot-read-property-of-undefined-errors-with-javascript-classes-typescript-a388c1f0ef45)

[**From XHR to Fetch with Async/Await on the finish line**  
_It’s been a while ago that I’ve written my latest post. I’ve been busy exploring some other skills related to my…_medium.com](https://medium.com/@devbyrayray/from-xhr-to-fetch-with-async-await-on-the-finish-line-b021de1d226b "https://medium.com/@devbyrayray/from-xhr-to-fetch-with-async-await-on-the-finish-line-b021de1d226b")[](https://medium.com/@devbyrayray/from-xhr-to-fetch-with-async-await-on-the-finish-line-b021de1d226b)