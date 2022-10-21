---
title: 'Polished.js: A Utility CSS-in-JS library for Styled-Components in React.js'
description: Sass functions like lighten(), darken(), complement(), invert() are pretty useful. I was wondering if there was something for styled-components. Well, I found the great library Polished.js.
date: '2021-03-18T14:01:46.695Z'
categories: []
tags: ['react', 'styledcomponents']
slug: /@byrayray/polished-js-a-utility-css-in-js-library-for-styled-components-in-react-js-32c1649d3831
image: images/0__vCuVf0JjUeJitMs.jpg
---

Sass functions like `lighten()`, `darken()`, `complement()`, `invert()` are pretty useful. I was wondering if there was something for styled-components. Well, I found the great library [Polished.js](https://polished.js.org/).

The nice thing about this library is that it doesn’t matter if you use [styled-components](https://styled-components.com/), [emotion](https://emotion.sh/), [jss](https://cssinjs.org/?v=v10.6.0), [aphrodite](https://github.com/Khan/aphrodite), [radium](https://formidable.com/open-source/radium/), or just inline styling in JavaScript. It works with all of them!

It is a utility library, so you only import what you need to save some bytes for the user. Do you need typings for TypeScript? They got you covered!

So let’s dive into how to use Polished.js.

---

## Installation

Running the all-familiar command is enough for the installation.

```sh
npm install --save polished
```

or if you're using yarn

```sh
yarn add polished
```

---

## Importing

Import the utility function you need in the JavaScript, TypeScript, or React component file.

```tsx
import { cssVar, darken } from 'polished'
```

My favorite functions are `lighten()`, `darken()`, `complement()` and `linearGradient()` but they have loads more [functions in their documentation](https://polished.js.org/docs/).

---

## Usage

To demonstrate how you can use Polished.js with styled-components, we will create a component for a `<input>` field. I'm gonna use the CSS variable to make it darker for the background of my `<input>` field.

My CSS variables are defined in the `global.css` file in the public folder. I'm currently using this in a Next.js project.

The `cssVar()` function can pull the variables from the root and turn them to a darker color.

```tsx [input.component.tsx] {2,9}
import styled from 'styled-components'
import { cssVar, darken } from 'polished'
const Input = styled.input<HTMLInputElement>`
	padding: 0.8rem 0.8rem;
	min-width: 300px;
	outline: 0;
	border: 1px solid var(--greyLight);
	border-radius: 8px;
	background: ${darken(0.01, '#f1f1f1')};

	&:focus {
		border: 1px solid var(--sec-color);
	}
`

export default Input
```

The output color becomes `#eee`. So I don't have to decide that for myself.

---

## Better usage

But I think it would be even better to define this as its own color in the root component from my React/Next application. I have a `<Layout>` component as my root component, so it's best to define those CSS variables in there.

```tsx [layout.tsx] {4-11}
import styled, { createGlobalStyle } from 'styled-components'
import { Footer } from 'styles/styled'

const LayoutEl = styled.div`
	background: #fff;
	min-height: calc(100vh - 1rem);
	height: 100%;
	box-sizing: border-box;
	padding-bottom: 82px;
	position: relative;
`

const Layout = props => {
	return (
		<LayoutEl>
			<GlobalStyle />
			{props.children}
			<Footer />
		</LayoutEl>
	)
}

export default Layout
```

Since I want my colors to be available in my JavaScript, I’ve created a function with all the colors in it. I’ve added this to a separate file to make it easier to re-use in the future. Now I can assign this to a const variable `root` to make it available in a component.

```tsx [global-styles.tsx]
import { lighten, darken } from 'polished'
import styled, { createGlobalStyle } from 'styled-components'

const rootColors = () => {
	const mainColor = '#00E271'
	const secColor = '#0076FF'
	const white = '#fff'
	const grey = '#ccc'
	const greyLight = lighten(0.01, grey)
	const greyDarken = darken(0.01, grey)

	return {
		mainColor,
		secColor,
		white,
		grey,
		greyLight,
		greyDarken
	}
}

export const root = rootColors()

export const GlobalStyle = createGlobalStyle`
    :root {
        --header-height: calc(48px + 2rem);
        --main-color: ${root.mainColor};
        --sec-color: ${root.secColor};

        --white: ${root.white};
        --grey: ${root.grey};
        --greyLight: ${root.greyLight};
        --greyDarken: ${root.greyDarken};
    }
`
```

Now we can use the `<GlobalStyle />` component in the `<Layout />` component. Now all the CSS variables are available across the application.

```tsx [Layout.tsx]
import styled from 'styled-components'
import { Footer } from 'styles/styled'
import { GlobalStyle } from '../styles/styled'

const LayoutEl = styled.div`
	background: #fff;
	min-height: calc(100vh - 1rem);
	height: 100%;
	box-sizing: border-box;
	padding-bottom: 82px;
	position: relative;
`

const Layout = props => {
	return (
		<LayoutEl>
			<GlobalStyle />
			// more code
			{props.children}
			<Footer />
		</LayoutEl>
	)
}

export default Layout
```

So in my `<Input />` component, I can use my CSS variables like any other component.

```tsx [Input.tsx]
import styled from 'styled-components'

const Input =
	styled.input <
	HTMLInputElement >
	`
	padding: 0.8rem 0.8rem;
	min-width: 300px;
	outline: 0;
	border: 1px solid var(--greyLight);
	border-radius: 8px;
	background: var(--greyDarken);

	&:focus {
		border: 1px solid var(--sec-color);
	}
`

export default Input
```

---

## Conclusion

I hope you learned something new from this post. If you use other utilities for your CSS-in-JS, please share them. I love to hear them!

---

## Thanks!

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁
