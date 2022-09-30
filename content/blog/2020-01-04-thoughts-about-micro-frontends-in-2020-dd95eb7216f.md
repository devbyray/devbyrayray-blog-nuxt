---
title: Thoughts About Micro-Frontends in 2020
description: Why it could be good to break up your monolithic front-end codebase
date: '2020-01-04T09:57:56.888Z'
categories: []
published: true
tags: []
image: https://cdn-images-1.medium.com/max/800/1*Ma0IL7DbvC2dJAN5WRXxRg.jpeg
---

In the last few years, I have seen the term “micro-frontends” become more common than before.

In the world of back-end developers, it’s already more common to split everything into microservices. Thanks to the techniques of Docker, it’s easier than ever to scale the back end into multiple services and instances of those services.

But in the world of front-end developers, it is not that common yet.

In this post, I want to share my thoughts on why I think it could be good to go from a monolithic front-end application to a micro-frontend approach.

<a href="https://skillshare.eqcm.net/c/2339544/300218/4650" id="300218">
				<img
					src="https://a.impactradius-go.com/display-ad/4650-300218"
					border="0"
					alt="Learn on Skillshare"
					width="400"
					height="200"
				/>
			</a>

## Why?

For all those front-end developers who have been building websites or web apps for years in a monolithic architecture, the micro-frontend approach feels a bit off. (Well, that was my first opinion when I discovered it.)

### Problems with monolithic front ends

When you think about the challenges we have with a monolithic front-end application:

*   Harder to work on with multiple people/teams.
*   Long build times.
*   Overrides of styling without you knowing it.
*   When APIs have breaking changes, the whole application needs to be deployed.

When you first start to build a single website this is not a big problem. But when the organization grows, the number of people that work on it will become a challenge.

<a href="https://skillshare.eqcm.net/c/2339544/300210/4650" id="300210"><img src="https://a.impactradius-go.com/display-ad/4650-300210" border="0" alt="Learn on Skillshare" width="1200" height="628"/></a>

### Problems solved with micro-frontends

Switching to a micro-frontend approach could solve some of those problems.

*   Easy to deploy in small parts.
*   Shorter build times.
*   Easier to work on with multiple people/teams.
*   Breaking API changes will only require one small deployment.

But it will take a different mindset for the development team. Besides that, it needs some additional work to change the front-end architecture.

## How

Luckily enough, we are not the first developers who have experienced these challenges with monolithic front-end architectures.

### Big companies lead the way

Big companies like Spotify, Klarna, Zalando, Upwork, Allegro, HelloFresh, Airbnb, and Facebook have experienced these challenges too.

So, they pioneered a lot with this and found some cool approaches to solve the problems.

*   Zalando built [Mosaic9](https://www.mosaic9.org/). Check out their talk about it: [Mosaic Microservices at Zalando Tech](https://www.microservices.com/talks/mosaic-microservices-zalando-tech/).
*   Klarna explains on [HackerNews how they approached it](https://news.ycombinator.com/item?id=13012916).
*   Upwork has written a blogpost: [Modernizing Upwork with Micro-Frontends](https://www.upwork.com/blog/2017/05/modernizing-upwork-micro-frontends/).
*   Allegro has written a blogpost: [Managing Front end in the Microservices Architecture](https://allegro.tech/2016/03/Managing-Frontend-in-the-microservices-architecture.html).
*   HelloFresh has written a blogpost: [Front-end Microservices at HelloFresh](https://engineering.hellofresh.com/front-end-microservices-at-hellofresh-23978a611b87).
*   Airbnb created a tool called [HyperNova](https://github.com/airbnb/hypernova) to serve JavaScript views server-side.

## Techniques

If you’ve checked all the posts of the big companies, you would have seen a few techniques on how to approach the micro-frontend technically.

*   Meta framework: [Single-SPA](https://single-spa.js.org), this framework lets you combine multiple JavaScript frameworks/libraries on runtime without refreshing the page.
*   Multiple SPA on different URLs: This is the simplest way of having multiple micro-frontends.
*   IFrames.
*   Web components: Using a JavaScript wrapper to turn your Angular and React components into web components and serve them next to each other. [**Chris Kitson**](https://medium.com/u/222c05246f8e) created a cool and practical blog post about it: [_Creating Micro-Frontends Using Web Components_ (with support for Angular and React)](https://medium.com/javascript-in-plain-english/create-micro-frontends-using-web-components-with-support-for-angular-and-react-2d6db18f557a)

## When

But the question: “When would it be a good idea to switch to micro-frontends?”

Well, I think it’s relatively simple. When you build a small website, stick with the monolithic approach. When you build a big application, work with a big amount of people/teams, and use “microservices” as your back-end architecture, you could definitely benefit from the micro-frontend approach.

## Thanks

Thanks for reading all the way down to here. I hope it gave you some material for your investigation of micro-frontends with a microservices architecture.