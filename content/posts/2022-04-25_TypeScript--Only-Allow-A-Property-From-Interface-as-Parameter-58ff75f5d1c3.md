---
title: 'TypeScript: Only Allow A Property From Interface as Parameter'
description: So lately I was working with a team member on an Angular Pipe. We had an
    Address Interface and wanted to only allow an argument that was…
date: '2022-04-25T08:46:08.039Z'
categories: []
tags: ['TypeScript']
slug: /@byrayray/typescript-only-allow-a-property-from-interface-as-parameter-58ff75f5d1c3
image: images/0__DDj3doC__JLqvXbKk.jpg
---

So lately I was working with a team member on an Angular Pipe. We had an Address Interface and wanted to only allow an argument that was property from the Adress Interface. But how do you define that?

It turns out very simple, we need to use the keyof operator!

## Interface

First, we have to check the Address interface. Below is a more simplified version of what we use, but this is perfect for this example.

```ts [adress.interface.ts]
interface Address {
	streetname: string
	housnumber: number
	postal: string
	city: string
}
```

---

## Use keyof operator

With the [keyof operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html), we can say that a parameter should be equal to the property of an interface.

```ts [fake-function.ts]
function fakeFunc(param: keyof Address): void {
  console.log(param);
}
```

Now we can ensure that this function is only being used with a parameter that exists in the Address interface. Otherwise, you will get a TypeScript interface.

---
## Validate the function

In the [example](https://codesandbox.io/embed/musing-haslett-eiyzup?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor), you can see that the param ‘streetname’ is accepted, but the parameter ‘random’ is giving the error “_Argument of type ‘“random”’ is not assignable to parameter of type ‘keyof Address’._” because it’s not in the interface. (_To see the compile error, you need to click the check it on_ [_CodeSandbox_](https://codesandbox.io/embed/musing-haslett-eiyzup?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor))

::codesandbox
<iframe src="https://codesandbox.io/embed/typescript-keyof-example-eiyzup?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="TypeScript Keyof Example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
::

---

## Thanks

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this story, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁.
