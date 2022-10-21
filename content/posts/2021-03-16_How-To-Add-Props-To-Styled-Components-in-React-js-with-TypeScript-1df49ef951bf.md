---
title: How To Add Props To Styled Components in React.js with TypeScript
description: I’m pleased with Styled-components. Adding proper TypeScript typings was a big question for me, until now! So I want to share them with you. 😉
date: '2021-03-16T09:03:16.794Z'
categories: []
tags: ['react', 'typescript']
slug: /@byrayray/how-to-add-props-to-styled-components-in-react-js-with-typescript-1df49ef951bf
image: images/0__D6ITWPzc2BHX__O3S.jpg
---

Using React.js with TypeScript is not as straightforward for everyone when building a React application. I have quite some experience with TypeScript that I didn’t have significant issues (anymore 😅).

I’m pleased with Styled-components. Adding proper TypeScript typings was a big question for me, until now! So I want to share them with you. 😉

If you haven’t TypeScript experience yet, please check my TypeScript beginner post. 👇

> [TypeScript for Beginners](/posts/2020-04-07-typescript-for-beginners-97b568d3e110)

---
## TypeScript Interface and Enum

```ts [sending-state.type.ts]
export enum sendState {
    sending = 'sending',
    recieved = 'recieved',
    error = 'error',
}
export interface iSendingState {
    state: sendState
}
```

Let’s clarify what I do here.

I want to add a prop `state` to my component, but the value's that I want to accept in it are: `sending`, `received`, and `error`. That's what I do in my enum.

I define the property `state` in my interface, and I tell that I accept only the values of the `sendState` enum. So if I put in another value, my IDE and build system starts complaining.

TypeScript helps me write predictable code, as you can see.

---
## Styled Component with typing

```tsx [message.component.tsx]
import { iSendingState, sendState } from './sending-state.type'

export const StatusMessage = styled.div<iSendingState>`
    display: inline-block;
    color: #fff;
    ${(props) => {
        if (props.state === sendState.sending) {
            return 'background-color: orange;'
        }
        if (props.state === sendState.recieved) {
            return 'background-color: green;'
        }
        if (props.state === sendState.error) {
            return 'background-color: red;'
        }
    }};
`
```

You usually define a styled-component like: `export const StatusMessage = styled.div` this. But now I add the `iSendingState`, which tells that my component accepts a `state` property.

Hopefully, this helps you further building an excellent application with predictable code 💪

---

## Thanks!

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁
