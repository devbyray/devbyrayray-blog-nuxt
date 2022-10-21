---
title: Improve React Components With Optional Chaining & Nullish Coalescing
description: "If you’re working on a big React (Next.js) application, sometimes you might need to dive deep into a data structure. Let's use Optional Chaining & Nullish Coalescing to improve React components."
date: '2021-03-23T15:21:57.757Z'
categories: []
tags: ['react', 'javascript']
slug: /@byrayray/how-to-improve-react-components-with-optional-chaining-6081456cccfe
image: images/1_rR83UvgOUgVlK4JMFigWXg.png
---

If you’re working on a big React (Next.js) application, sometimes you might need to dive deep into a data structure. It’s pretty generic. The React component I’m talking about would look like this:

```js {2-3}
const MyComponent = content => {
	const firstPart = content.content.blok.split('/')[0]
	const secondPart = content.content.blok.split('/')[1]

	return (
		<>
			<h1>{firstPart}</h1>
			<h2>{firstPart}</h2>
		</>
	)
}

export default MyComponent
```

If any property of `content` or `blok` is missing, we have a big problem. The page will break and the user will get an error. 🥺

---

## Improvement

We need two JavaScript features to prevent a massive error: [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) and the [nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator). Don’t worry, this all sounds more complicated than it actually is.

---

## Optional chaining

Optional chaining looks like this: `content?.content?.blok`. The browser will first check if there is a `content` property inside the `content` object instead of assuming that this property exists. If it doesn't exist, it won't show an error but will make the variable `nullish`. So it doesn't have a value.

---

## Nullish coalescing operator

Now that our variable can be nullish, this means it can be `null` or `undefined`. But we want to show both titles on the page instead of nothing.

The nullish coalescing operator looks like this: `??`. It checks if the operator's left value is `null` or `undefined`. If it is, you can give it a fallback value.

So it looks like this: `content?.content?.blok ?? 'Title'`. If the value is nullish, it will assign the `'Title'` to the variable. If the value isn't nullish, it will assign the title from the deeply nested object.

---

## Improved React Component

If we implement the solutions we discussed before, our component looks like this:

```js {2-3}
const MyComponent = content => {
	const firstPart = content?.content?.blok?.split('/')[0] ?? 'First title'
	const secondPart = content?.content?.blok?.split('/')[1] ?? 'Second title'

	return (
		<>
			<h1>{firstPart}</h1>
			<h2>{firstPart}</h2>
		</>
	)
}

export default MyComponent
```

Now, the user will always have a title and no errors. It’s better to be prepared for mistakes so that the user can continue their journey through the application.

Yes, the user will see a faulty title, but that’s far better than showing an actual error or, even worse, the page not showing!

---

## Conclusion

Hopefully, this will help you improve your React components. Be prepared if the content doesn’t load or exist! And make sure the user has a great user experience.

---

## Thanks!

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁
