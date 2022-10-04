---
title: How To Format a Value With Angular NGX-Formly
description: A handy way to format postal codes, phone numbers, bank accounts, and so much
  more
date: '2022-01-04T12:48:30.509Z'
categories: []
keywords: []
slug: /@byrayray/how-to-format-a-value-with-angular-ngx-formly-c18dcd7be647
---

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/1__O__EKcNrJVWS18ZG__bP1FtA.png)

That’s why I love to use [NGX-Formly](https://formly.dev/) ! They make writing small, big, and even complex forms easier. But lately, I have wanted to change the format of input values after the user has filled them in. Because there is a certain way, the backend API expects them.

> If you don’t know how to use NGX-formly, I highly recommend reading the below posts (they are even included in the documentation from NGX-formly itself)

1.  [Build Fast, JSON-Powered Forms on Angular With Ngx Formly](https://betterprogramming.pub/build-fast-json-powered-forms-on-angular-with-ngx-formly-b7a00733e66e)
2.  [How to Build Fast, Advanced JSON-Powered Forms on Angular With ngx-formly](https://betterprogramming.pub/build-fast-json-powered-forms-on-angular-with-ngx-formly-b7a00733e66e)

### NGX-Formly Formatters

For example, we want to create a postal code field and a field for initials. In these fields, we want to apply specific formatting on the value. In this case, it will be visual formatting, nothing very complex.

The logic behind the `formatInitials()` method looks like this.

### Formatters

So every field that needs a formatter needs a property `parser.`

```
{    //...    parsers: [(value: string) => value?.toUpperCase()],    //...}
```

The parser needs to be an array of functions. Every function has a parameter that holds the value. Since the parsers need an Array, you can apply multiple formatters on every field.

The function needs to return a new value. So it can be updated in the input field.

Ensure that the field config also has the property `expressionProperties` in which the model is updated; otherwise, it will not work.

```
expressionProperties: {    'model.postal': 'model.postal',},
```

### Example

I’ve created an example project for this tutorial via [StackBlitz](https://stackblitz.com/edit/angular-vibhz9?file=src%2Fapp%2Fapp.component.ts), which you can use to experiment with the parsers.

If you want to check the project on Github, [please find the repository here](https://github.com/devbyray/angular-ngx-formly-value-formatter-parser).

### Conclusion

Hopefully, this tutorial helps you to format your values easier with NGX-Formly. And if you didn’t use NGX-Formly, I hope this will let you build forms even faster!

Good luck and have fun.

### Thanks!

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/0__7pa1RpRxXqdkgYAJ.jpg)

After reading this story, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁



### Read more

[**Angular stories**  
_All my Angular stories_byrayray.medium.com](https://byrayray.medium.com/list/24674407532a "https://byrayray.medium.com/list/24674407532a")[](https://byrayray.medium.com/list/24674407532a)