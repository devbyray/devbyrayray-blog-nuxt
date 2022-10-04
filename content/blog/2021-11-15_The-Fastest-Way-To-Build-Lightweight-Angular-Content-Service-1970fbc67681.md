---
title: The Fastest Way To Build Lightweight Angular Content Service
description: The best solutions are simple!
date: '2021-11-15T13:13:37.836Z'
categories: []
keywords: []
slug: /@byrayray/the-fastest-way-to-build-lightweight-angular-content-service-1970fbc67681
---

![](/images/1__HWY53D51pJqJuCKUXFf__9g.jpeg)

In the typical Angular applications, we use a lot of titles, labels, headers, and more content. But if you need a way to put those content elements in one place, you need something like a dictionary. It’s a combination of small words and more extensive sentences.

Some applications need multiple languages, but others need one language but have loads of content to re-use. In this article, I want to show you the fastest way to create a `ContentService` (some call it a dictionary) for your Angular application.

> If you need a content service with multiple languages, I highly recommend [NGX-Translate](http://www.ngx-translate.com/). This package offers a simple API and Pipe mechanism to re-use pieces of content but also supports multiple languages.

### Create a Content Service

The simplest and fastest way to create Angular Services is by using the Angular CLI.

ng generate service services/content

By running this command, you will generate an Angular Service, automatically added to the `app.module.ts` file. If your project has different settings for the CLI, it could appear in another Angular Module.

Now the Content Service looks like this.

### Create a JSON Dictionary File

You need to create a dictionary file to put in all your titles, labels, and other content. Please put it in a place that works best for your application.

I create a `dictionary` folder where I make the `general.dictionary.json` file, but I can have more dictionary files there.

The content I put in there looks like this.

You can create any structure you like; it’s up to you what works best.

### Prepare Content Service For Re-usability

We start with creating a private property `cache$` where we make a `BehaviourSubject`. We do this because we can subscribe to this `BehaviourSubject` from any place in the application. And the best part is, when a content item is being updated, it will automatically be updated everywhere.

> I create a [StackBlitz example](https://stackblitz.com/edit/angular-content-dictionary-service?file=README.md), to show why the `BehaviourSubject` is an important part of the service.

> If you wonder what the difference is between different Subjects, please check this post “[When Use RxJS Subject, BehaviourSubject, ReplaySubject, AsyncSubject, or Void Subject in Angular](https://hasnode.byrayray.dev/rxjs-subject-behavioursubject-replaysubject-asyncsubject-void-subject-angular)”

The next step is importing the dictionary file on the top.

In the constructor of the Service, we want to make sure that if the `BehaviourSubject` is `null`, we need to add the content from the dictionary file.

Now we need a method that exposes the `BehaviourSubject` with its content to the subscribers. We do that by returning the `cache$` property. The return type of the method is `any` for this case because you don't have to type the structure of your dictionary. But if you want to, you can do it.

For making the Service great for usage in your HTML templates, we can expose the `content()` method with the `.getValue()` method chained to it.

Now we have everything in our Service to make it usable. The complete code of the Service looks like this. Simple right 😉.

### Use The Content Service In The Content

I guess you know how to make an Angular Component. The CLI is my favorite way to do it. For example, you generate a `HomepageComponent`.

ng generate component components/homepage

If you have an Angular Component for yourself, it’s fine.

First, we need to import the `ContentService` into our Component and expose it via the `constructor`.

Now we want to expose the content from our `ContentService` to the HTML template. We create a `content` property in our Component and add the value via the `constructor`.

Via the `console.log`, you can test if everything works as expected.

Now add the title from our dictionary file in the HTML template using the `ContentService`.

In the example, you can see that we add an expression to the template. In that expression, we are using the nullish collision technique. We do that, so we don’t get error’s when the property is not in the dictionary file. In this case, it just shows you “title”. If the value is available, it will deliver the value.

### Resources

Code Example in **StackBlitz** 👇

[**Angular Content / Dictionary Service (RxJS) - StackBlitz**  
_Edit description_stackblitz.com](https://stackblitz.com/edit/angular-content-dictionary-service?ctl=1&embed=1&file=src/app/app.component.ts&hideExplorer=1&hideNavigation=1 "https://stackblitz.com/edit/angular-content-dictionary-service?ctl=1&embed=1&file=src/app/app.component.ts&hideExplorer=1&hideNavigation=1")[](https://stackblitz.com/edit/angular-content-dictionary-service?ctl=1&embed=1&file=src/app/app.component.ts&hideExplorer=1&hideNavigation=1)

**Github** example👇

[**GitHub - devbyray/angular-content-dictionary-service: Created with StackBlitz ⚡️**  
_Created with StackBlitz ⚡️. Contribute to devbyray/angular-content-dictionary-service development by creating an…_github.com](https://github.com/devbyray/angular-content-dictionary-service/tree/master "https://github.com/devbyray/angular-content-dictionary-service/tree/master")[](https://github.com/devbyray/angular-content-dictionary-service/tree/master)

### Conclusion

Now you have a straightforward Content Service in Angular without using an external package. So it’s lightweight and super fast, which is the best thing about it. We may often think it too complicated, but all we need is something simple.

Hopefully, this helps you build great Angular applications that are easy to maintain.

### Thanks!

![](/images/0__7pa1RpRxXqdkgYAJ.jpg)

After reading this story, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁



### **Read more**

[**Angular stories**  
_All my Angular stories_byrayray.medium.com](https://byrayray.medium.com/list/24674407532a "https://byrayray.medium.com/list/24674407532a")[](https://byrayray.medium.com/list/24674407532a)