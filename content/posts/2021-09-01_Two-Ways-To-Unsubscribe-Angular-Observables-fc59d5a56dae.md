---
title: Two Ways To Unsubscribe Angular Observables
description: Angular is full of Observables. But is there is a mechanism that automatically unsubscribes your Observables when components get destroyed? Yes there is! You can use the async pipe or the takeUnitl method.
date: '2021-09-01T14:24:19.678Z'
categories: []
tags: ['angular', 'typescript', 'rxjs']
slug: /@byrayray/two-ways-to-unsubscribe-angular-observables-fc59d5a56dae
image: images/1__vcy2k5n2BEtdZIQORHkuRQ.jpeg
---

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

## Observables In A HTML Template With Async Pipe

Angular offers a simple way to handle your Observables in the HTML template via the async pipe `| async` . The best thing is, Angular takes the unsubscribe process for you instead of doing it yourself.

You can use the async pipe for singular values.

```ts [async-pipe.component.ts]
@Component({
	selector: 'cool-component',
	template: ` <h1>{{ pageTitle$ | async }}</h1> `
})
export class CoolComponent implements OnInit {
	private pageTitle$: Observable<string>
	constructor(private httpService: HttpClient) {}
	ngOninit(): void {
		this.pageTitle$ = this.httpService.get('some-url.com')
	}
}
```

Or you can use it for values that are Objects or Arrays.

```ts [async-pipe.component.ts]
@Component({
    selector: 'cool-component',
    template: `
        <ul>
            <li *ngFor="let item of todoList$ | async">{{item.name}}</li>
        </ul>
    `
    ...
})
export class CoolComponent implements OnInit {
    private todoList$: Observable<string>;
    constructor(private httpService: HttpClient) {}
    ngOninit(): void {
        this.todoList$ = this.httpService.get('other-url.com')
    }
}
```

So in this component, you don’t need to trigger something with the `ngOnDestroy` , but it automatically will unsubscribe to the subscriptions during the destruction process of the component.

> If you want to learn more about the Async pipe in Angular, check out this post “[Angular and RxJS: A deep dive into async pipe](/blog/when-to-use-rxjs-subject-behavioursubject-replaysubject-asyncsubject-or-void-subject-in-angular-c2e9db61b4a0)” by [Erxk](https://erxk.medium.com/)

---

<ContentAd topics="rxjs|angular|typescript|javascript"></ContentAd>

---

## Observables With takeUntil Method

Let’s say you are making multiple AJAX request via the `HttpClient`. You're not going to pass it directly to the HTML, but doing something else with the data first. So the `| async` pipe is not ideal for this situation.

Now you have multiple subscriptions!

How can we unsubscribe them all at once instead of unsubscribing them one by one?

First, we have to make a `Subject` in our component.

```ts [subject.component.ts]
@Component({...})
export class CoolComponent {
    private unsubscribe$ = new Subject<void>;
}
```

This `Subject` is going to be used to store our subscriptions.

Now let’s make some subscriptions in our `ngOnInit` with the `HttpClient`.

```ts [subject-httpclient.component.ts]
@Component({...})
export class CoolComponent implements OnInit {
    private unsubscribe$ = new Subject<void>;

    constructor(private httpService: HttpClient) {}

    ngOninit(): void {
        this.httpService.get('some-url.com')
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((values) => {
                    // Do something with the data
                })

        this.httpService.get('other-url.com')
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((values) => {
                    // Do something with the data
                })
    }
}
```

As you can see, after the `get()` method there is a `pipe(takeUntil(this.unsubscribe$))`. With the `takeUntil` we add a reference from this Observable to the `unsubscribe$` Subject.

The `Subject` holds references to both Observables during the subscription process.

```ts [subject-httpclient.component.ts]
@Component({...})
export class CoolComponent implements OnInit, OnDestroy {
    private unsubscribe$ = new Subject<void>;
    constructor(private httpService: HttpClient) {}
    ngOninit(): void {
        this.httpService.get('some-url.com')
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((values) => {
                    // Do something with the data
                })
        
        this.httpService.get('other-url.com')
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((values) => {
                    // Do something with the data
                })
    }
    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
```

The `ngOnDestroy()` method is called before a component is going to be destroyed.

In this method, we call two methods.

The `next()` will pass an empty value to the subscription. With the `complete()`, we tell the subscription it's done listening for new values.

Now we don’t have to worry about making one or a lot more requests via the `HttpClient`; we can stop them all at once.

> Be careful with this method that you don’t forget to add the `ngOnDestroy` method to your component. We are humans, so we forget them.

## Conclusion

These two strategies will be usable in nine out of ten situations, so a great plan to implement in your Angular applications.

If you have other ideas on how to handle your Observables in an Angular application in a simple way, please let me know.
