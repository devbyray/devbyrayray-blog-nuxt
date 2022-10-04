---
title: How To Add Props To Styled Components in React.js with TypeScript
description: Write Predictable Code With styled-components in React.js
date: '2021-03-16T09:03:16.794Z'
categories: []
keywords: []
slug: /@byrayray/how-to-add-props-to-styled-components-in-react-js-with-typescript-1df49ef951bf
---

![](/images/0__D6ITWPzc2BHX__O3S.jpg)

Using React.js with TypeScript is not as straightforward for everyone when building a React application. I have quite some experience with TypeScript that I didn’t have significant issues (anymore 😅).

I’m pleased with Styled-components. But typing them was a big question for me, until now! So I want to share them with you. 😉

If you haven’t TypeScript experience yet, please check my TypeScript beginner post. 👇

[**TypeScript For Beginners**  
_A practical way to learn TypeScript from scratch_levelup.gitconnected.com](https://levelup.gitconnected.com/typescript-for-beginners-97b568d3e110 "https://levelup.gitconnected.com/typescript-for-beginners-97b568d3e110")[](https://levelup.gitconnected.com/typescript-for-beginners-97b568d3e110)

### TypeScript Interface and Enum

Let’s clarify what I do here.

I want to add a prop `state` to my component, but the value's that I want to accept in it are: `sending`, `received, and` error\`. That's what I do in my enum.

I define the property `state` in my interface, and I tell that I accept only the values of the `sendState` enum. So if I put in another value, my IDE and build system starts complaining.

TypeScript helps me write predictable code, as you can see.

### Styled Component with typing

You usually define a styled-component like: `export const StatusMessage = styled.div` this. But now I add the `iSendingState`, which tells that my component accepts a `state` property.

Hopefully, this helps you further building an excellent application with predictable code 💪

_Happy coding_ 🚀

### [Get my weekly newsletter “Developer Underdogs” with the best developer content created by aspiring developers.](https://www.getrevue.co/profile/devbyrayray)