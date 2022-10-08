---
title: How To Add HTML Wrapper On Angular Component In Storybook
description: Storybook Decorators are the answer for creating a bit more markup
date: '2021-08-24T06:55:48.455Z'
categories: []
tags: []
slug: /@byrayray/how-to-add-html-wrapper-on-angular-component-in-storybook-d7091f9f17e0
---

![](/images/0__yKTtL__zPD8SMnw5f.jpg)

Storybook offers a lot of tooling to document all your JavaScript components visually. [Getting started with Storybook and Angular](https://storybook.js.org/docs/angular/get-started/introduction) is pretty easy too. But some features are hidden or not described enough to know them.

So in our team, we were writing an Angular form component with Angular Material. Some of the elements were not getting the proper styling because they didn’t have our application’s context. We needed A wrapper element.

### Storybook Angular Decorators

Storybook Decorators are the answer for creating a bit more markup to add context to your components.

The Storybook team made it super simple to add decorators.

In our case, we only needed a `<div>` with a class `mat-body` to get the font family of a form correct.

With these decorators, you can add extra context or styling around your components.



_Happy coding 🚀_