---
title: When To Use RxJS Subject, BehaviourSubject, ReplaySubject, AsyncSubject, or
    Void Subject in Angular
description: The power is in the details
date: '2021-09-03T14:37:45.292Z'
categories: []
tags: ['rxjs', 'angular', 'typescript']
slug: /@byrayray/when-to-use-rxjs-subject-behavioursubject-replaysubject-asyncsubject-or-void-subject-in-angular-c2e9db61b4a0
---

Angular has many types of Observables which you can use. Maybe you’ve seen Subject, `BehaviourSubject`, `ReplaySubject`, or `AsyncSubject` in Angular examples and wondering what they are and when you can use them.

In this post, I want to dive deeper into what those types of Subjects are and when you should use them. So buckle up and enjoy the ride.

---

## TLDR

For the readers that are in a hurry and don't want to read the indept content, here is the summary 👍.

-   Use a `BehaviourSubject` when you need the last given value.
-   Use a `ReplaySubject` when you need more than the last given value (_For example, the previous five values_). Or you want to set a time window for the values can be validly sent to subscribers.
-   Use an `AsyncSubject` when you only want the last value to be passed to the subscribers.
-   Use a Void `Subject` if you don't want to pass any value but just want to hook into the event.

---

## What is a Subject?

RxJS is responsible for the reactivity in Angular. A Subject is a particular type of Observable from the RxJS library.

If you don’t know what an Observable is, check this post by “[Understanding RxJS Observables and why you need them](https://blog.logrocket.com/understanding-rxjs-observables/)” on the LogRocket blog.

### Unicast

![](/images/0__Xw95j6jKwFE7NpmO.jpg)

An Observable is unicast. An Observer and its Subscriber have a one-to-one relationship. Each subscribed Observer owns an independent execution of the Observable.

### Multicast

![](/images/0__T1tftHIsMCcvhn7h.jpg)

In comparison to a regular Observable, a Subject allows values to be multicasted to many Observers. A Subject and its subscribers have a one-to-many relationship.

A Subject can be an Observable as well as an Observer. They hold a registry of many listeners to multiple Observables.

---

## Observable VS Subject in Code

An Observable and Subject share their API. Both of them have the same methods and how you create them. But they behave very differently from each other.

### Observable in Code

```ts [observable.ts]
import { Observable } from 'rxjs'

const observable = new Observable(subscriber => {
	subscriber.next(1)
	subscriber.next(2)
	subscriber.next(3)
	subscriber.complete()
})

console.log('just before subscribe')

// Subscriber 1
observable.subscribe({
	next(x) {
		console.log('sub1: got value ' + x)
	},
	error(err) {
		console.error('sub1: something wrong occurred: ' + err)
	},
	complete() {
		console.log('sub1: done')
	}
})

// Subscriber 2
observable.subscribe({
	next(x) {
		console.log('sub2: got value ' + x)
	},
	error(err) {
		console.error('sub2: something wrong occurred: ' + err)
	},
	complete() {
		console.log('sub2: done')
	}
})

console.log('just after subscribe')
```

<runkit link="https://runkit.com/devbyrayray/basic-rxjs-observable"></runkit>

Here, you can see that the data is sent to the first subscriber and will finish before it continues to the next subscriber.

In the [RxJS documentation](https://rxjs.dev/guide/observable#subscribing-to-observables), they are describing that “Each call to `observable.subscribe` triggers its independent setup for that given subscriber."

That’s why every subscriber is running independently from each other. But the RxJS team offers a way to create “[multicasted Obsevables](https://rxjs.dev/guide/subject#multicasted-observables).”

### Subject in Code

```ts [subject.ts]
import { Subject } from 'rxjs'

const subject = new Subject()

// Subscriber 1
subject.subscribe({
	next: v => console.log(`observerA: ${v}`)
})

subject.next(1)

// Subscriber 2
subject.subscribe({
	next: v => console.log(`observerB: ${v}`)
})

subject.next(2)
```

<runkit link="https://runkit.com/devbyrayray/basic-rxjs-subject"></runkit>

With the Subject, you can see that the Subject takes the lead. It sends messages to both subscribers instead of waiting. In my opinion, this clearly shows the difference between a regular Observable and a Subject.

The [RxJS documentation](https://rxjs.dev/guide/subject#subject) says the following about subscribing to a Subject:

> Internally to the Subject, subscribe does not invoke a new execution that delivers values. It simply registers the given Observer in a list of Observers, similarly to how addListener usually works in other libraries and languages.”

---

## Subject

We know that a `Subject` is an `Observable`. But instead of sending information to one subscriber, they can send their data to multiple subscribers simultaneously (they multicast).

A `Subject` has three methods that you can use:

-   `subscribe` with this method, you can activate the subscription of a new subscriber.
-   `next` with this method, you can pass new values. All the current subscribers will receive this.
-   `complete` with this method, you close all the subscriptions to the Subject.

A vital detail is that a Subject doesn’t have an initial value. Every value passed with the `next` method will send the values to all the subscribers.

But if the value is already sent before a subscriber is subscribed, it won’t receive that data (_Click the “run” button to see it working_).

```ts [subject.ts]
const rxjs = require('rxjs')
const { Subject } = rxjs

const subject = new Subject()

// Subscriber 1
subject.subscribe({
	next: v => console.log(`observerA: ${v}`)
})

subject.next(1)

// Subscriber 2
subject.subscribe({
	next: v => console.log(`observerB: ${v}`)
})

subject.next(2)
```

<runkit link="https://runkit.com/devbyrayray/rxjs-subject-pass-value-before-subscribing"></runkit>

---

## BehaviourSubject

The `BehaviourSubject` is a variant of the `Subject`. This variant knows about the current value, which a normal `Subject` doesn't.

When there has already been sent data to the current subscribers, this Subject becomes very useful. But another subscriber get’s introduced at a later moment. Sometimes you want to pass the current value to that subscriber. With the `BehaviourSubject` you can do that (_Click the "run" button to see it working_).

```ts [behavioursubject.ts]
import { BehaviorSubject } from 'rxjs'

const subject = new BehaviorSubject(0) // 0 is the initial value

subject.subscribe({
	next: v => console.log(`observerA: ${v}`)
})

subject.next(1)
subject.next(2)

subject.subscribe({
	next: v => console.log(`observerB: ${v}`)
})

subject.next(3)
```

<runkit link="https://runkit.com/devbyrayray/rxjs-pass-current-value-with-behavioursubject"></runkit>

So use the `BehaviourSubject` to give a subscriber the last known value of the `Observable`. But, what if you want a bit more than the previous value?

---

## ReplaySubject

The `ReplaySubject` does what it says. It can replay a fixed amount of values to new subscribers.

Think of an online playlist that a DJ is playing. But you want to go back in that stream. The `ReplaySubject` can make sure you can revert three tracks and start listening from there (_Click the "run" button to see it working_).

```ts [ReplaySubject.ts]
import { ReplaySubject } from 'rxjs'

const subject = new ReplaySubject(2) // buffer 3 values for new subscribers

subject.subscribe({
	next: v => console.log(`observerA: ${v}`)
})

subject.next(1)
subject.next(2)
subject.next(3)

subject.subscribe({
	next: v => console.log(`observerB: ${v}`)
})

subject.next(4)
subject.next(5)
```

<runkit link="https://runkit.com/devbyrayray/rxjs-send-passed-to-new-subscribers-with-replaysubject"></runkit>

As you can see at the creation of the `ReplaySubject(2)`, I passed the number two, which tells the `Subject` that it needs to send the last two values to every new subscriber.

When that new subscriber received the passed values, it will stay in sync with the other subscriber, which is excellent.

But to make sure that the `ReplaySubject(10000)` won't pass constant values to every new subscriber, we can give it a time limit. The example below defines that it can keep a hundred values in memory and pass it to new subscribers, but those values are valid for 500 milliseconds.

```ts
const subject = new ReplaySubject(100, 500)
```

This feature gives a lot of possibilities, so be smart with it.

---

## AsyncSubject

When I saw the `AsyncSubject` and saw that it only sends the latest value to subscribers when it's completed, I thought, "why would I want to use this?". Until I saw [this post on Medium](https://satyapriyamishra111.medium.com/all-you-need-to-know-about-async-subject-2cd72ea646ea).

So this gave an idea that an `AsyncSubject` is a great candidate for Ajax requests. Because with most GET requests, you're only going to wait for one response, right.

```ts [AsyncSubject.ts]
import { AsyncSubject } from 'rxjs'

const subject = new AsyncSubject()

subject.subscribe({
	next: v => console.log(`observerA: ${v}`)
})

subject.next(1)
subject.next(2)
subject.next(3)
subject.next(4)

subject.subscribe({
	next: v => console.log(`observerB: ${v}`)
})

subject.next(5)
subject.complete()
```

<runkit link="https://runkit.com/devbyrayray/rxjs-send-last-value-to-subscribers-with-asyncsubject"></runkit>

When you click the “run” button above, you will see that the `AsyncSubject` will pass multiple values, but only the last value before the `complete()` method is called will give to the subscribers.

---

## Void Subject

In most of the scenarios where you use a `Subject` with subscribers, it's relevant that you get access to the value that has passed. But what if you don't need an actual value but only want to hook into the event and don't need a value. That's when you use a void subject.

The default behavior for a `Subject` is just that (_Click the "run" button to see it working_).

```ts [Subject.ts]
import { Subject } from 'rxjs'

const subject = new Subject() // Shorthand for Subject<void>

subject.subscribe({
	next: () => console.log('One second has passed')
})

setTimeout(() => subject.next(), 1000)
```

<runkit link="https://runkit.com/devbyrayray/rxjs-hook-into-subject-but-don-t-need-a-value-with-void-subject"></runkit>

---

## Conclusion

Let’s wrap this up and conclude when you need a regular `Observable` or one of the `Subject` types.

### Use a Observable when…

A regular `Observable` should be used when you only need one subscriber. Or you don't care that the subscriber that comes first will be finished first until the second will get its values.

### Use a Subject when…

When you need multiple subscribers and care that all the subscribers are getting their new values simultaneously, you need a `Subject`.

-   Use a `BehaviourSubject` when you need the last given value.
-   Use a `ReplaySubject` when you need more than the last given value (_For example, the previous five values_). Or you want to set a time window for the values can be validly sent to subscribers.
-   Use an `AsyncSubject` when you only want the last value to be passed to the subscribers.
-   Use a Void `Subject` if you don't want to pass any value but just want to hook into the event.

Hopefully, this will help you make the right choice!

> If you want to learn more about Hot and Cold Observables, I would recommend reading this post “[Hot vs Cold Observables](https://benlesh.medium.com/hot-vs-cold-observables-f8094ed53339)” by [Ben Lesh](https://medium.com/u/da6839d28258).

---

## Thanks!

![](/images/0__Qay6DRNLz9jUR0UQ.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁
