---
title: 'TypeScript: Only Allow A Property From Interface as Parameter'
description: So lately I was working with a team member on an Angular Pipe. We had an
  Address Interface and wanted to only allow an argument that was…
date: '2022-04-25T08:46:08.039Z'
categories: []
keywords: []
slug: /@byrayray/typescript-only-allow-a-property-from-interface-as-parameter-58ff75f5d1c3
---

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/0__DDj3doC__JLqvXbKk.jpg)

So lately I was working with a team member on an Angular Pipe. We had an Address Interface and wanted to only allow an argument that was property from the Adress Interface. But how do you define that?

It turns out very simple, we need to use the keyof operator!

### Interface

First, we have to check the Address interface. Below is a more simplified version of what we use, but this is perfect for this example.

```
interface Address {    streetname: string;    housnumber: number;    postal: string;    city: string;}
```

### Use keyof operator

With the [keyof operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html), we can say that a parameter should be equal to the property of an interface.

```
function fakeFunc(param: keyof Address): void {    console.log(param);}
```

Now we can ensure that this function is only being used with a parameter that exists in the Address interface. Otherwise, you will get a TypeScript interface.

### Validate the function

In the [example](https://codesandbox.io/embed/musing-haslett-eiyzup?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor), you can see that the param ‘streetname’ is accepted, but the parameter ‘random’ is giving the error “_Argument of type ‘“random”’ is not assignable to parameter of type ‘keyof Address’._” because it’s not in the interface. (_To see the compile error, you need to click the check it on_ [_CodeSandbox_](https://codesandbox.io/embed/musing-haslett-eiyzup?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor))

### Thanks!

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/0__dzPeN7i6oCb3qhFe.jpg)

After reading this story, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁

