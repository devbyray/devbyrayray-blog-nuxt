---
title: The Fastest Way To Build Lightweight Angular Content Service
description: Some applications need multiple languages, but others need one language but have loads of content to re-use. In this article, I want to show you the fastest way to create a ContentService (some call it a dictionary) for your Angular application.
date: '2021-11-15T13:13:37.836Z'
categories: []
tags: ['Angular', 'TypeScript']
slug: /@byrayray/the-fastest-way-to-build-lightweight-angular-content-service-1970fbc67681
image: images/1__HWY53D51pJqJuCKUXFf__9g.jpeg
---

In the typical Angular applications, we use a lot of titles, labels, headers, and more content. But if you need a way to put those content elements in one place, you need something like a dictionary. It’s a combination of small words and more extensive sentences.

Some applications need multiple languages, but others need one language but have loads of content to re-use. In this article, I want to show you the fastest way to create a `ContentService` (some call it a dictionary) for your Angular application.

> If you need a content service with multiple languages, I highly recommend [NGX-Translate](http://www.ngx-translate.com/). This package offers a simple API and Pipe mechanism to re-use pieces of content but also supports multiple languages.

---
## Create a Content Service

The simplest and fastest way to create Angular Services is by using the Angular CLI.

```sh
ng generate service services/content
```

By running this command, you will generate an Angular Service, automatically added to the `app.module.ts` file. If your project has different settings for the CLI, it could appear in another Angular Module.

Now the Content Service looks like this.

```ts [content.service.ts]
import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class ContentService {
   constructor() {}
}
```

---

## Create a JSON Dictionary File

You need to create a dictionary file to put in all your titles, labels, and other content. Please put it in a place that works best for your application.

I create a `dictionary` folder where I make the `general.dictionary.json` file, but I can have more dictionary files there.

The content I put in there looks like this.

```json
{
   "pages" : {
       "home": {
            "title" : "Home",
            "name" : "Company name"
        }
   }
}
```


You can create any structure you like; it’s up to you what works best.

---

## Prepare Content Service For Re-usability

We start with creating a private property `cache$` where we make a `BehaviourSubject`. We do this because we can subscribe to this `BehaviourSubject` from any place in the application. And the best part is, when a content item is being updated, it will automatically be updated everywhere.

> I create a [StackBlitz example](https://stackblitz.com/edit/angular-content-dictionary-service?file=README.md), to show why the `BehaviourSubject` is an important part of the service.

```ts
private cache$: BehaviorSubject<any> = new BehaviorSubject(null);
```

> If you wonder what the difference is between different Subjects, please check this post “[When Use RxJS Subject, BehaviourSubject, ReplaySubject, AsyncSubject, or Void Subject in Angular](/posts/2021-09-03_when-to-use-rxjs-subject-behavioursubject-replaysubject-asyncsubject-or-void-subject-in-angular-c2e9db61b4a0)”

The next step is importing the dictionary file on the top.

```ts
import content from '../dictionary/general.dictionary.json';
```

In the constructor of the Service, we want to make sure that if the `BehaviourSubject` is `null`, we need to add the content from the dictionary file.

```ts
constructor() {
     if (this.cache$.getValue() === null) {
         this.cache$.next(content);
     }
}
```

Now we need a method that exposes the `BehaviourSubject` with its content to the subscribers. We do that by returning the `cache$` property. The return type of the method is `any` for this case because you don't have to type the structure of your dictionary. But if you want to, you can do it.

```ts
public content(): BehaviorSubject<any> {
    return this.cache$;
}
```

For making the Service great for usage in your HTML templates, we can expose the `content()` method with the `.getValue()` method chained to it.

```ts
public value(): any {
     return this.content()?.getValue();
}
```

Now we have everything in our Service to make it usable. The complete code of the Service looks like this. Simple right 😉.

```ts
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import content from '../dictionary/general.dictionary.json'

@Injectable({
    providedIn: 'root'
})
export class ContentService {
    private cache$: BehaviorSubject<any> = new BehaviorSubject(null)

    constructor() {
        if (this.cache$.getValue() === null) {
            this.cache$.next(content)
        }
    }

    public content(): BehaviorSubject<any> {
        return this.cache$
    }

    public value(): any {
        return this.content()?.getValue()
    }
}
```

---
## Use The Content Service In The Content

I guess you know how to make an Angular Component. The CLI is my favorite way to do it. For example, you generate a `HomepageComponent`.

```sh
ng generate component components/homepage
```

If you have an Angular Component for yourself, it’s fine.

First, we need to import the `ContentService` into our Component and expose it via the `constructor`.

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
    constructor(private contentService: ContentService) {}
}
```

Now we want to expose the content from our `ContentService` to the HTML template. We create a `content` property in our Component and add the value via the `constructor`.

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
    public content: any = null
    constructor(private contentService: ContentService) {
        this.content = this.contentService.value()
        console.log('content:', content)
    }
}
```

Via the `console.log`, you can test if everything works as expected.

Now add the title from our dictionary file in the HTML template using the `ContentService`.

```html
<header>
     <h1>{{content?.pages?.home?.title ?? 'title'}}</h1>
</header>
```

In the example, you can see that we add an expression to the template. In that expression, we are using the nullish collision technique. We do that, so we don’t get error’s when the property is not in the dictionary file. In this case, it just shows you “title”. If the value is available, it will deliver the value.

---

## Examples

I've created some example's so you can use copy-paste it to your projectn 😉.

- [StackBlitz](https://stackblitz.com/edit/angular-content-dictionary-service?file=src%2Fapp%2Fapp.component.ts)
- [Github repo](https://github.com/devbyray/angular-content-dictionary-service)


---

## Conclusion

Now you have a straightforward Content Service in Angular without using an external package. So it’s lightweight and super fast, which is the best thing about it. We may often think it too complicated, but all we need is something simple.

Hopefully, this helps you build great Angular applications that are easy to maintain.

---
## Thanks!

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁