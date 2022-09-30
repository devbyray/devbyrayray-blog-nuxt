---
title: TypeScript’s New Top-Level Await
description: We don’t need an async function wrapper anymore
date: '2020-06-22'
categories: []
published: true
tags: ['TypeScript', 'JavaScript', 'Programming', Software Development']
image: https://miro.medium.com/max/1280/0*z4OdHrTJHQO9KlEs
---

If you want to use `async`/`await` inside JavaScript in general, you have to define an `async` function before you can use the `await`.

In this article, I want to show you that it is possible to finally use top-level `await` instead of wrapping it between an `async` function.

_Note: The top-level `await` is part of a [stage 3 proposal](https://github.com/tc39/proposal-top-level-await) for the ECMAScript spec. It may change in the future._

---

## How Does async/await Work?

In a previous article, I wrote about the history of doing Ajax calls in the early days with XHR until now with the Fetch API.

Promises are an essential part of async/await. Without them, we can’t use them.

Most modern environments in JavaScript (like HTTP requests) are asynchronous, and many modern APIs return promises.

While this has a lot of benefits in making operations non-blocking, it makes certain code for loading files or external content less readable.

https://gist.github.com/raymonschouwenaar/5121334be6ff8363c39347aa33208738#fetch.ts

People are used to using promises in JavaScript with an async function to use `await`.

But this will execute the function right after the definition, which feels weird. It’s missing the point of using a function.

https://gist.github.com/raymonschouwenaar/5121334be6ff8363c39347aa33208738#async-function-call-api.ts

---

## Top-Level await

It would be better to use await without wrapping it in an async function.

With the release of [TypeScript 3.8](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#top-level-await), we received this feature. Take into account that it’s only supported natively in Chrome.

To use it, we have to create a module. It’s a module when it is exporting something via `export`.

https://gist.github.com/raymonschouwenaar/5121334be6ff8363c39347aa33208738#top-level-async.ts

If you ask me, this code is much more readable. Because we don’t have to create an async function, it also saves a bit of code.

Read more about JavaScript modules at MDN Web Docs.

---

## TypeScript Configuration

To use top-level `await` in TypeScript, you have to set the target compiler option to `es2017` or higher. The `module` option has to be set to `esnext` or `system`.
Conclusion

---

## Conclusion

I think it’s awesome that the TypeScript team has built top-level `await` into the language.

What do you think? Are you going to use it? Please let me know in the comments.

> I’ve gathered a couple of [aspiring developers around the world on a Discord server](https://mailchi.mp/fb82491d03f8/dev-by-rayray-discord-community), feel free if you like to join in.
