---
title: You Don’t Have To Use Observables In Angular
description: What Nobody Tells You About Observables and Promises in Angular
date: '2021-09-01T23:36:04.934Z'
categories: []
keywords: []
slug: /@byrayray/you-dont-have-to-use-observables-in-angular-4eac6372dd0
---

![](/images/1__6EdSCuXPdUq7TvdhYx5jRA.jpeg)

In Angular, you can perform asynchronous actions in two different ways, Observables, and Promises.

Most people pick Observables because every example on blogs and documentation tells you to do so. But why? Are Promises that bad? Or Observables that good?

In this post, I want to dive with you into the why! Why and when should we use Observables, and when are Promises just fine.

Let’s start with comparing the two with each other.

### Observables VS Promises

Let’s start with the Observables.

#### Observables

Angular is using under the hood RxJS. RxJS comes with a great set of features like Observables.

Observables can perform asynchronous and synchronous actions in comparison to Promises. Promises can only perform asynchronous actions.

When Observables are created, it does nothing until a piece of code decides to subscribe to it. You can cancel a subscription to Observables, or when an error is happening, it’s automatically unsubscribed.

Observables handle a stream of values. It updates very quickly at a later point in time.

**Observables behaviors**

*   Multiple values
*   Can be canceled
*   Great for real-time information
*   Can be subscribed to from multiple places
*   Errors unsubscribe automatically
*   Observables are declarative. They are only performed when something is subscribed to it.
*   Have a built-in mechanism to perform transformations to the data (map, forEach, filter, reduce, retry, and retryWhen operators)
*   Can be both asynchronous and synchronous

#### Promises

A Promise is a general JavaScript concept introduced since ES2015 (ES6). It’s ideal for performing asynchronous actions. It doesn’t have subscribers like Observables.

A Promise can’t be canceled like an Observable. It can be resolved or rejected, nothing more, nothing less. It can handle single values instead of a stream of values.

Promises are performed on creation instead of subscription like Observables are.

**Promises behaviors**

*   Single value
*   Can’t be canceled
*   Great for single time information
*   Can’t re-use or distribute information
*   Promises are performed on the creation
*   Is always asynchronous

> If you want to learn more about Promises, check [a more detailed post I wrote earlier](https://hasnode.byrayray.dev/how-promises-actually-work-in-javascript-1c80b1af7193)

### When Use A Promise Or Observable?

As we saw earlier, the most significant difference between a Promise and an Observable is handling a single value and a stream of values.

#### Use A Observable

An Observable is ideal for situations where the data changes during its lifetime.

Situations to use

*   Real-time data from a WebSocket, for example. Think about dashboards, chat messages, notifications, video subtitles, sound visualizations.
*   Or actions that are performed very often by a user. For example, think about collapsable menus, dark and light modes.

These situations require data to update in a short amount of time, at least in the same lifetime of the subscriptions.

#### Use A Promise

Since a Promise can handle a single value, there are pretty many situations to use it.

Situations to use

*   Forms submission: Creating, editing, and deleting data entities don’t require a constantly updated stream of data. The form data is sent to the API; it’s successfully done or not.
*   API requests for data that doesn’t change real-time: a large amount of data to show an overview page or a detail page

All of these situations don’t require that data to change that often. Data is collected by an API call, displayed, and done. It’s that simple.

### Why Is Everyone Using Observables For Everything?

So this raises for me the question. “Why is everyone using Observables for everything?”

Yes, I’m guilty on this topic myself! I have done singular requests using an Observable. Was it needed? No!

Keeping a subscription open, while the data is not changing in the lifetime of that Observable, is not correctly using the power of a browser. Besides that, most developers (myself included) will forget to unsubscribe from their Observable quite often.

My rule of thumb mostly is: “_If you don’t need it, don’t include or use it!_”

Let’s not waste our resources but use everything for its purpose.

### Summarize

Okay, let’s make this easy for everyone.

> Use an Observable for data that is changing real-time or more often during its lifetime. Don’t waste resources! Use A Promise if the data isn’t changing during the lifetime of a component!



### Thanks!

![](/images/0__Staf1ivDUV4iFxkA.png)

_I hope you learned something new or are inspired to create something new after reading this story! If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a_ [_DM on Twitter @DevByRayRay_](https://twitter.com/@devbyrayray) _when you want to keep it private. My DM’s are always open 😁_