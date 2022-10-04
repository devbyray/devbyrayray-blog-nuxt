---
title: Two Ways To Unsubscribe Angular Observables
description: "Clean up Angular observables in an easy\_way"
date: '2021-09-01T14:24:19.678Z'
categories: []
keywords: []
slug: /@byrayray/two-ways-to-unsubscribe-angular-observables-fc59d5a56dae
---

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/1__vcy2k5n2BEtdZIQORHkuRQ.jpeg)

Angular is full of Observables. But is there is a mechanism that automatically unsubscribes your Observables when components get destroyed?

I’ve read a ton of different posts about cleaning your subscriptions. There are so many different ways, but I missed that one post that showed me how you should handle your subscriptions and when.

To prevent you from reading all these posts like me, here is a practical post explaining how to unsubscribe from your Observables easily.

---

## TLDR;

The short version, for those who don’t want to dive into it 😅. Here are the solutions.

### Async Pipe

`| async` the async pipe offers you to handle Observables in your HTML template. The async pipe automatically runs the unsubscribe process after the destruction process of a component.

### takeUntil

`takeUntil` can be called in the `.pipe()` method before you subscribe. With this method, you can add your subscription to a `Subject`. If you have a few subscriptions in it, you can unsubscribe it in the `ngOnDestroy` event with the `.next()` and `.complete()` methods.

---

## 1\. Observables In A HTML Template With Async Pipe

Angular offers a simple way to handle your Observables in the HTML template via the async pipe `| async` . The best thing is, Angular takes the unsubscribe process for you instead of doing it yourself.

You can use the async pipe for singular values.

Or you can use it for values that are Objects or Arrays.

So in this component, you don’t need to trigger something with the `ngOnDestroy` , but it automatically will unsubscribe to the subscriptions during the destruction process of the component.

> If you want to learn more about the Async pipe in Angular, check out this post “[Angular and RxJS: A deep dive into async pipe](/blog/when-to-use-rxjs-subject-behavioursubject-replaysubject-asyncsubject-or-void-subject-in-angular-c2e9db61b4a0)” by [Erxk](https://erxk.medium.com/)

---

## 2\. Observables With takeUntil Method

Let’s say you are making multiple AJAX request via the `HttpClient`. You're not going to pass it directly to the HTML, but doing something else with the data first. So the `| async` pipe is not ideal for this situation.

Now you have multiple subscriptions!

How can we unsubscribe them all at once instead of unsubscribing them one by one?

First, we have to make a `Subject` in our component.

This `Subject` is going to be used to store our subscriptions.

Now let’s make some subscriptions in our `ngOnInit` with the `HttpClient`.

As you can see, after the `get()` method there is a `pipe(takeUntil(this.unsubscribe$))`. With the `takeUntil` we add a reference from this Observable to the `unsubscribe$` Subject.

The `Subject` holds references to both Observables during the subscription process.

The `ngOnDestroy()` method is called before a component is going to be destroyed.

In this method, we call two methods.

The `next()` will pass an empty value to the subscription. With the `complete()`, we tell the subscription it's done listening for new values.

Now we don’t have to worry about making one or a lot more requests via the `HttpClient`; we can stop them all at once.

> Be careful with this method that you don’t forget to add the `ngOnDestroy` method to your component. We are humans, so we forget them.



## Conclusion

These two strategies will be usable in nine out of ten situations, so a great plan to implement in your Angular applications.

If you have other ideas on how to handle your Observables in an Angular application in a simple way, please let me know.