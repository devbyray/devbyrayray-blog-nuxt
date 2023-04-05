---
title: "5 Ways to Improve Your Coding Skills with ChatGPT: Tips and Tricks for Developers"
description: "Get better at coding with ChatGPT! This blog post provides five tips for using ChatGPT as your coding buddy, including spotting errors in code, brainstorming solutions to application problems, and improving code readability. Learn how ChatGPT can help you write better code and save time!"
date: 2023-04-04
tags:
  - developer
  - ChatGPT
image: images/developer-working-computer.png
keywords:
  - AI
  - ChatGPT
---

Are you a developer looking to improve your craft? Look no further than ChatGPT! In this blog post, we'll outline five tips for using ChatGPT to become a better developer, including brainstorming solutions to application problems, spotting errors in code, explaining code functionality, writing better tests, and improving code readability.

---

## ChatGPT helps you brainstorm why a problem is caused in your application

My team and I encountered an issue in our application where data needed to be included, and models still needed to update. We work in an Angular environment for a big bank in the Netherlands.

Let me share a situation where I discovered the power of discovering solutions and problems in an application.

### Situation: Subscription didn't exist

After manually searching for what could happen, we took the leap and started asking questions to ChatGPT. We started with this question. (*sorry, I can't show you a screenshot because it's lost with an error of ChatGPT lately* 🥲)

> We are using RxJS; we have a BehaviourSubject, but at the start, the data is received by the subscribe method, but later it isn't. What could be the problem?
> 

After this question, ChatGPT started answering them with possible situations. Last, it suggested we check if the subscription still exists. It also provided us with a solution to check it.

Well, that worked 😅🎉. Finally, we found the cause, and we could fix the issue 👍

---

## ChatGPT helps spot problems with failing tests

In the last couple of months, I have incorporated ChatGPT into all the work in my team. 

Sometimes you can have failing tests that don't make sense in the first place. ChatGPT can help you discover the problems and help find the solution.

Just like this situation I encountered lately with my team.

### Situation: Date function wrongly calculated date with Vanilla JavaScript

The other day we replaced an old date library with a new one. But we needed to create some translation layer so our dependencies still work.

After we did that, we checked the end-to-end tests. And what was the case? One error! A method that used to work before, but now it doesn't.

```javascript
getCalculatedDate(days: number, months: number, years: number) {
    const today: Date = new Date();
    const calculatedDate = new Date(
      today.getFullYear() + years,
      today.getMonth() + months,
      today.getDate() + days
    );
    const days = String(calculatedDate.getDate()).padStart(2, '0');
    const months = String(calculatedDate.getMonth() + 1).padStart(2, '0');
    const years = String(calculatedDate.getFullYear());
    const formattedDate = days + '-' + months + '-' + years;
    return formattedDate;
  }
```

The issue was a difference of 1 hour time difference. Even though we didn't change the method's input, the comparison function output did.

After trying for a while, we started asking questions like:

1. What if I add 3 months and 1 day to today? What date is that?
2. Explain the calculation
3. Would the answer be different if adding days first in the calculation?
4. And so on.

Eventually, we dropped the function and asked what was going wrong here. It helped us discover that you should first add a day to the date in vanilla JavaScript. Then create a new date and add the month and year.

![](/images/chatgpt-calculate-date-javascript.png)

The funny thing was, it happened on the 31st day of the month. And there seem to be quirky things with Dates in JavaScript (as many of us know)

In the end, we got it fixed. But this shows you that if you're asking many questions, it will explain many things and eventually help resolve them.

---

## ChatGPT explains a piece of code

As I work in a large codebase, developed and maintained by changing team members, the code can not always be as clear as you wish 😅.

ChatGPT got you covered on this as well. 

This one is simple and helped me understand and re-write functionality much more simpler.

Just drop in a piece of the code and ask for an explanation. It's that simple 👍

Like in this example:

**Ask to explain**
![](/images/chatgpt-ask-code-to-explain.png)

**Answer**
![](/images/chatgpt-code-exaplain.png)

---

## ChatGPT can help you write better tests

For many developers, writing tests for our code is a challenging task. After more than a decade of experience, it still keeps me wondering sometimes:

- What tests do I need?
- How many test cases should I create?
- Did I cover all the edge cases?
- And many more

Well, ChatGPT has got me covered as well.

Sometimes I use it to brainstorm and ask for additional test cases I missed.

It really helped my team and me, and I wrote better code for testing 💪

---

## ChatGPT can re-write your code for better readability

Sometimes you find these code examples online and wonder how it works and if there is an easier way to write them.

Please drop in your code and ask it to re-write it for you. It's that simple and really helps!

### Example

Let's say we have a complex product structure in our API.

```json
{
  "products": [
    {
      "id": 1,
      "name": "Product A",
      "category": {
        "id": 10,
        "name": "Electronics",
        "properties": {
          "warranty": "1 year",
          "returnPolicy": "30 days"
        }
      },
      "brand": {
        "id": 100,
        "name": "Brand X",
        "properties": {
          "country": "USA",
          "established": "1995"
        }
      },
      "properties": {
        "color": "black",
        "weight": "1.2 kg"
      }
    },
    {
      "id": 2,
      "name": "Product B",
      "category": {
        "id": 11,
        "name": "Furniture",
        "properties": {
          "material": "wood",
          "assemblyRequired": "yes"
        }
      },
      "brand": {
        "id": 101,
        "name": "Brand Y",
        "properties": {
          "country": "Germany",
          "established": "2001"
        }
      },
      "properties": {
        "dimensions": "100x50x30 cm",
        "color": "brown"
      }
    }
  ]
}
```

We want to sort the products based on the returnPolicy property. Another developed this function long ago; it's not easy to read, so we want to make it more readable and add TypeScript.

```javascript
function s(p){
  return p.sort((a,b)=>a.category.properties.returnPolicy.localeCompare(b.category.properties.returnPolicy))
}
```

We can ask ChatGPT to make it more readable and add types. So this is the result it comes up with:

```ts
interface Properties {
  returnPolicy?: string;
  [key: string]: any;
}

interface Category {
  id: number;
  name: string;
  properties: Properties;
}

interface Product {
  id: number;
  name: string;
  category: Category;
  [key: string]: any;
}

/**
 * Sort an array of products based on the "returnPolicy" property.
 * @param {Product[]} products - The array of products to be sorted.
 * @return {Product[]} - The sorted array of products.
 */
function sortProductsByReturnPolicy(products: Product[]): Product[] {
  return products.sort((productA, productB) => {
    return productA.category.properties.returnPolicy.localeCompare(
      productB.category.properties.returnPolicy
    );
  });
}
```

As you can see, it wrote a Product, Category, and generic Properties interface and applied it to the function. But also added some explicit comments to it.

So refactoring becomes a lot easier with ChatGPT!

---

In short, ChatGPT can help developers in many ways. Whether you're just starting out or have been developing for years, ChatGPT can help you improve. This blog post provides seven tips for using ChatGPT, covering problem-solving and code readability. By using ChatGPT, you can write code faster and with fewer mistakes.

One of the best things about ChatGPT is that it can find errors in code. Even experienced developers make mistakes, and finding them can be tricky. ChatGPT makes it easy to find errors and fix them. ChatGPT can also help you explain what your code is doing and write better tests.

ChatGPT is also good at making code easier to read. Large codebases can be hard to maintain, primarily if the code needs better written. Using ChatGPT to improve code readability, you can make your code more accessible for other developers to understand.

One of the most powerful things about ChatGPT is that it can help developers work together better. Developers can work more effectively using ChatGPT to brainstorm solutions, find errors, and improve code quality. When combined with human experience, ChatGPT can help developers deliver better results and drive innovation.

In conclusion, ChatGPT is a valuable tool for developers of all levels. By following the tips in this blog post and using ChatGPT in your work, you can write better code, save time, and get better results. Whether you're a beginner or an expert, ChatGPT is worth exploring to see how it can help you and your team.

---

## Thanks

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁.
