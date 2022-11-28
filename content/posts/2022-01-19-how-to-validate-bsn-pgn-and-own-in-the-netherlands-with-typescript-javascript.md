---
title: How to validate BSN, PGN & OWN in the Netherlands with TypeScript/JavaScript
description: Learn How To Use The Elfproef for dutch identification numbers
date: '2022-01-19T12:48:30.509Z'
categories: []
tags: ['javascript', 'typescript']
slug: /@byrayray/how-to-format-a-value-with-angular-ngx-formly-c18dcd7be647
image: images/1__O__EKcNrJVWS18ZG__bP1FtA.png
---

The BSN, PGN and OWN in the Netherlands can be validated with a 11 proef (elf proef). In this post I show you the JavaScript and TypeScript code.

In the Netherlands, we have a few identification numbers from the government. In this example, you can create a function to validate both of them [based on the specification](https://developers.wiki.kennisnet.nl/index.php?title=OSO:2022/beveiliging/versleuteling_bsn).

-   BSN = Burgerservice nummer
-   PGN = Burgerservice nummer in schools where the student doesn't have a BSN. The PGN is also called OWN.

---

## How to use the code?

Define the function in your code and call it like this:

### TypeScript example

```typescript
// PGN/OWN
elfProefValidation('114435231', ElfproefType.own) // returns true;
elfProefValidation('34564366349', ElfproefType.own) // returns false;
// BSN
elfProefValidation('232262536', ElfproefType.bsn) // returns true;
elfProefValidation('247594057', ElfproefType.bsn) // returns false;
```

### JavaScript example

```javascript
// PGN/OWN
elfProefValidation('114435231', 'own'); // returns true;
elfProefValidation('34564366349', 'own')); // returns false;
// BSN
elfProefValidation('232262536', 'bsn')); // returns true;
elfProefValidation('247594057', 'bsn')); // returns false;
```

<runkit link="https://runkit.com/devbyrayray/elfproef"></runkit>

---

## Code

### JavaScript function

```js
function elfProefValidation(value, type) {
	let returnValue = false
	if (!value || value?.length === 0) {
		return true
	}
	if (value === '00000000000' || value.length !== 9) {
		return false
	}
	const values = value.split('')
	const firstCharacter = parseInt(values[0], 10)
	const lastCharacter = parseInt(values[values.length - 1], 10)
	const [a, b, c, d, e, f, g, h, i] = values.map(char => parseInt(char, 10))
	let result = 0

	if (type === 'bsn') {
		result = 9 * a + 8 * b + 7 * c + 6 * d + 5 * e + 4 * f + 3 * g + 2 * h + -1 * i
		returnValue = result > 0 && result % 11 === 0
	} else if (type === 'own') {
		result = 9 * a + 8 * b + 7 * c + 6 * d + 5 * e + 4 * f + 3 * g + 2 * h
		returnValue = result > 0 && firstCharacter === 1 && result % 11 === lastCharacter + 5
	} else {
		returnValue = false
	}

	return returnValue
}
```

---

<ContentAd topics="typescript|javascript"></ContentAd>

---


### TypeScript

```ts
export enum ElfproefType {
    bsn,
    own
}

function elfProefValidation(value: string, type: ElfproefType): boolean {
    let returnValue = false;
    if (!value || value?.length === 0) {
        return true;
    }
    if (value === '00000000000' || value.length !== 9) {
        return false;
    }
    const values = value.split('');
    const firstCharacter = parseInt(values[0], 10);
    const lastCharacter = parseInt(values[values.length - 1], 10);
    const [a, b, c, d, e, f, g, h, i] = values.map((char: string) => parseInt(char, 10));
    let result = 0;

    if (type === ElfproefType.bsn) {
        result = 9 * a + 8 * b + 7 * c + 6 * d + 5 * e + 4 * f + 3 * g + 2 * h + -1 * i;
        returnValue = result > 0 && result % 11 === 0;
    } else if (type === ElfproefType.own) {
        result = 9 * a + 8 * b + 7 * c + 6 * d + 5 * e + 4 * f + 3 * g + 2 * h;
        returnValue = result > 0 && firstCharacter === 1 && result % 11 === lastCharacter + 5;
    } else {
        returnValue = false;
    }

    return returnValue;
}
```

---

## Thanks!

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁
