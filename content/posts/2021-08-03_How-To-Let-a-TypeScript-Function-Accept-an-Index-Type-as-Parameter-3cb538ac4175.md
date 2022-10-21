---
title: How To Let a TypeScript Function Accept an Index Type as Parameter
description: "If you got the error “_Element implicitly has an ‘any’ type because expression of type ‘string’ can’t be used to index type_” in TypeScript via TSLint or Visual Studio Code? The solution is KeyOf type in TypeScript"
date: '2021-08-03T15:36:51.938Z'
categories: []
tags: ['typescript']
slug: /@byrayray/how-to-let-a-typescript-function-accept-an-index-type-as-parameter-3cb538ac4175
image: images/0__IeggnBQuHiNid7d0.jpg
---

If you got the error “_Element implicitly has an ‘any’ type because expression of type ‘string’ can’t be used to index type_” in TypeScript via TSLint or Visual Studio Code? Here is your solution 👍

It sometimes happens that you want to have a generic function to get a specific property from an array of key-value pairs. But how do you type that correctly in TypeScript?

## Problem

Let’s see this example function. TSLint won’t accept this.

```ts [getGraphItemData.component.ts]
getGraphItemData(dataProp: string, data: Vaccination[]) : GraphDataItemModel[] {
  return data?.map(
    (item) => {
      const { date } = item
      const value =
      return new GraphDataItemModel({
          label: item.date,
          value: item[dataProp] ?? 0
      })
    }
  )
}
```

You will get an error like “_Element implicitly has an ‘any’ type because expression of type ‘string’ can’t be used to index type ‘Vaccination’._”.

The error is given because you can’t guarantee that the `dataProp` parameter has a property from the `Vaccination` interface. When we keep it a `string` type, it will give error's when a property is not found in the `Vaccination` interface.

## Solution

The `Vaccination` interface looks like this.

```ts [vaccination.interface.ts]
export interface Vaccination {
	location: string
	date: string
	vaccine?: string
	source_url?: string
	total_vaccinations?: number | null
	people_vaccinated?: number | null
	people_fully_vaccinated?: number | null
	total_vaccinations_per_hundred?: number | null
	daily_vaccinations_raw?: number | null
	daily_vaccinations?: number | null
	daily_vaccinations_per_million?: number | null
	people_vaccinated_per_hundred?: number | null
	people_partly_vaccinated_per_hunderd?: number | null
	people_not_vaccinated_per_hunderd?: number | null
	people_fully_vaccinated_per_hundred?: number | null
	share_doses_used?: number | null
	total_distributed_per_hundred?: number | null
	total_distributed?: number | null
}
```

So how can we correctly resolve this error and still use it like `item[dataProp]`?

```ts [getGraphItemData.component.ts] {1}
getGraphItemData(dataProp: keyof Vaccination, data: Vaccination[]) : GraphDataItemModel[] {
  return data?.map(
    (item) => {
      return new GraphDataItemModel({
          label: item.date,
          value: item[dataProp] ?? 0
      })
    }
  )
}
```

It’s super simple. Just use `keyof Vaccination` here. Via the `keyof` we can tell that we only accept properties from the `Vaccination` interface as a function parameter.

> If you want to dive deeper into TypeScript, I highly recommend the story “[Mastering TypeScript’s Mapped Types](https://betterprogramming.pub/mastering-typescripts-mapped-types-5fa5700385eb)” by [Jose Granja](https://medium.com/u/8ae6a5b70ece) .

## Conclusion

[Learning the basics and advanced types of TypeScript](/posts/2020-04-07-typescript-for-beginners-97b568d3e110) will be very beneficial to prevent error’s in the browser. Do you like TypeScript? Or do you think it’s too much?

---

## Thanks!

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁
