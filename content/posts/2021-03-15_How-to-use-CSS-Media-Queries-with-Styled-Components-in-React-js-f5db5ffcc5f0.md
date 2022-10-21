---
title: How to use CSS Media Queries with Styled Components in React.js
description: Use Media Queries Smarter In Styled Components
date: '2021-03-15T15:07:50.417Z'
categories: []
tags: ['react', 'styledcomponents']
slug: /@byrayray/how-to-use-css-media-queries-with-styled-components-in-react-js-f5db5ffcc5f0
image: images/0__XvyrK2MHdTS0Q02q.jpg
---

Just like regular CSS, you write your Media Queries in your CSS file. In Styled Components, you can include them as well.

```tsx [column.component.tsx]
import styled from 'styled-components'

export const Columns = styled.div`
	padding-top: 2rem;
	display: grid;
	gap: 2rem;
	@media (min-width: 769px) {
		grid-template-columns: 2fr 3fr;
	}
`
```

But if you want to make it smart, you set all the sizes in an Object and create a function to call them from your styled-components in React.

Create a file `breakpoints.tsx`.

```tsx [breakpoints.tsx]
const size = {
	xs: '320px',
	sm: '768px',
	lg: '1024px',
	xl: '1200px',
}

const mediaQueries = (key: keyof typeof size) => {
	return (style: TemplateStringsArray | String) => `@media (min-width: ${size[key]}) { ${style} }`
}
export { size, mediaQueries }
```

Import the file in the component where you defined your styled-components, and you can easily use your media queries without remembering your exact sizes.

```tsx [column.component.tsx]
// File where you defined your styled components
import { mediaQueries } from 'styles/components/breakpoints'

export const Columns = styled.div`
	padding-top: 2rem;
	display: grid;
	gap: 2rem;
	${() => mediaQueries('sm')(`grid-template-columns: 2fr 3fr;`)}
`
```

I believe in making it yourself as simple as possible, so hopefully, this solution will help you further.

---

## Thanks!

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁
