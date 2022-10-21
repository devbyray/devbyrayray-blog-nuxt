---
title: CSS variable with Styled Components
description: Using CSS variables in Styled Components with React is supereasy. With this example you can start using them 💪
date: '2021-03-12T09:02:50.346Z'
categories: []
tags: ['styledcomponents', 'react']
slug: /@byrayray/css-variable-with-styled-components-7e91d89f13f3
image: images/0__WFA6P83M3iwE59mv.jpg
---

Since I’m working with [Next.js](https://nextjs.org/) and [Styled-components](https://styled-components.com/) (also [TypeScript](https://nextjs.org/docs/basic-features/typescript), React, GraphQL, [Apollo](https://www.apollographql.com/), [Storybook](https://storybook.js.org/) & [Storyblok CMS](https://www.storyblok.com/)) I was wondering, is it possible to use CSS variable’s in Styled Components.

```tsx
import React, { Component } from 'react'
import styled from 'styled-components'

const CSSVariables = styled.div`
	--color: ${props => props.color};
`

const Heading = styled.h1`
	margin: 2rem 0 0 0;
	color: var(--color);
`

const SingleStep = (props: Istep) => {
	return (
		<CSSVariables>
			<Heading>My Heading</Heading>
		</CSSVariables>
	)
	// All component logic
}
```

As you can see in the example above, it is possible and super simple, just like in normal CSS. So make sure that you CSS variable are created in a parent component. It can also be created on a page/layout level if you like.

So I hope this helps you further with building a cool Next.js or React application with Styled-components.

---

## Thanks!

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁
