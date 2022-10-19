---
title: How To Format a Value With Angular NGX-Formly
description: Creating forms in Angular with NGX-Formly is super easy. But sometimes you want a little more, like formatting postal codes, phone numbers, or bank accounts. In this post, I will show you how you can do it.
date: '2022-01-04T12:48:30.509Z'
categories: []
tags: ['angular', 'ngx-formly', 'typescript']
slug: /@byrayray/how-to-format-a-value-with-angular-ngx-formly-c18dcd7be647
image: images/1__O__EKcNrJVWS18ZG__bP1FtA.png

---

Creating forms in Angular with NGX-Formly is super easy. But sometimes you want a little more, like formatting postal codes, phone numbers, or bank accounts. In this post, I will show you how you can do it.

I love to use [NGX-Formly](https://formly.dev/)! They make writing small, big, and even complex forms easier. But lately, I have wanted to change the format of input values after the user has filled them in. Because there is a certain way, the backend API expects them.


---

<blockquote>
If you don’t know how to use NGX-formly, I highly recommend reading the below posts.

1.  [Build Fast, JSON-Powered Forms on Angular With Ngx Formly](posts/2020-03-10-build-fast-json-powered-forms-on-angular-with-ngx-formly-b7a00733e66e)
2.  [How to Build Fast, Advanced JSON-Powered Forms on Angular With ngx-formly](posts/2020-03-25-how-to-build-fast-advanced-json-powered-forms-on-angular-with-ngx-formly-77aeed406f73)

</blockquote>

---

## NGX-Formly Formatters

For example, we want to create a postal code field and a field for initials. In these fields, we want to apply specific formatting on the value. In this case, it will be visual formatting, nothing very complex.

The logic behind the `formatInitials()` method looks like this.

So every field that needs a formatter needs a property `parser.`

```ts
{
  parsers: [(value: string) => value?.toUpperCase()],
}
```

The parser needs to be an array of functions. Every function has a parameter that holds the value. Since the parsers need an Array, you can apply multiple formatters on every field.

The function needs to return a new value. So it can be updated in the input field.

Ensure that the field config also has the property `expressionProperties` in which the model is updated; otherwise, it will not work.

```ts
expressionProperties: {
   'model.postal': 'model.postal',
},
```

---

## Example

I’ve created an example project for this tutorial via [StackBlitz](https://stackblitz.com/edit/angular-vibhz9?file=src%2Fapp%2Fapp.component.ts), which you can use to experiment with the parsers.

<stackblitz id="angular-vibhz9" filename="src/app/app.component.ts" height="700"></stackblitz>

If you want to check the project on Github, [please find the repository here](https://github.com/devbyray/angular-ngx-formly-value-formatter-parser).

---
## Conclusion

Hopefully, this tutorial helps you to format your values easier with NGX-Formly. And if you didn’t use NGX-Formly, I hope this will let you build forms even faster!

Good luck and have fun.

---
## Thanks!

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁
