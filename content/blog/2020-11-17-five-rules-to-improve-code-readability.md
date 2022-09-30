---
title: 5 Rules to Improve Code Readability
description: Code readability is a feature of your application (even if your users don’t see it)
date: '2020-11-24'
categories: ['Developer']
published: true
tags: ['Tutorials', 'Programming', Software Development']
image: devbyrayray/blog/5-rules-to-improve-code-readability
---

I have five rules to improve code readability. I’ve learned them in all kinds of projects, teams, and organizations. I hope that you can pick some things from this article to improve your code readability.

## TL;DR

To all of you searching for quick tips without reading everything, read the TL;DR version below:

- Reuse what will be used more than once.
- Readability and maintainability over a generic solution.
- Make modules, classes, or components as small as possible.
- Have rules and guidelines for your code.
- Code like you’re in a team — even a one-person team.

## 1. Reuse What Will Be Used More Than Once

Most developers know what D.R.Y. means (Don’t Repeat Yourself). D.R.Y. can help you prevent code duplication.

Why write a function over and over again? You should write it once and reuse it in multiple places. If you need to change that code, you only have to look in one place instead of copy-pasting a bug fix in multiple places.

But be aware that you will introduce complexity with D.R.Y. because, in the end, things will be reused more and more.

The importance of writing tests when reusing parts of your code will be very clear when you start changing that code.

## 2. Readability and Maintainability Over a Generic Solution

Reusability, readability, and maintainability are each other’s friends and enemies at the same time. When you start applying D.R.Y. to your code, you introduce complexity. When you introduce complexity, the readability grade can go down.

So don’t start with a generic solution when building features. Start simple! The first time can’t be perfect.

Through iterations, you can reuse parts of the application but still guard the readability and maintainability.

When you’re working in an organization with a lot of development teams, your team will be divided into internal people and external people (like freelancers or consultants). So in this case, people will be switching from organization to organization more often.

In those cases, readability and maintainability are the keys to success. Generic solutions implemented by a person who could easily leave the team are not a smart choice.

In some cases, you need a generic solution, but those solutions still have to be readable and maintainable.

## 3. Make Modules, Classes, or Components as Small as Possible

When building new features for an application, you probably plan them carefully.

The best solutions are those that can be divided into small modules, classes, or components. Are you wondering why?

Small pieces of code are easier to test and maintain.

Imagine that building a tall building is also done by moving smaller components instead of building the whole thing at once and then trying to move it to the location. OK, there are exceptions.

Most modern libraries and frameworks are divided into smaller building blocks instead of one file. JavaScript libraries and frameworks like Angular, React, and Vue apply the concept of components. I don’t think they are doing this by accident.

## 4. Automate Rules and Guidelines for Your Code

One part of writing readable and maintainable code is the architecture of it. Another part is the code style.

I think a lot of you will be familiar with the discussion of using tabs or spaces for indentation. No, I’m not going to continue that discussion. Whatever you are using in your team, make sure it is clear for everyone.

The best solution is to automate most of these code style rules and guidelines. A lot of IDEs have this integrated or they can be installed via plug-ins.

The easiest one, across multiple languages and code editors, is [editorconfig](https://editorconfig.org). By adding a .`editorconfig`, these rules will be applied.

You can set a lot of settings for your project into those files. It is possible to set them globally and for specific languages. For example:

- Indentation style: tabs or spaces
- Quote type: single or double
- Max length
- Character set
- And more…

This is a config in one of my projects:

```
# Editor configuration, see https://editorconfig.org
root = true
[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true
[*.ts]
quote_type = single
[*.md]
max_line_length = off
trim_trailing_whitespace = false

```

There are a lot more tools that are specific to certain languages. I love to use Prettier for JavaScript, but you may like to [use something different](https://medium.com/better-programming/eslint-vs-prettier-57882d0fec1d). But it’s not important which one you use as long as everyone who works on your project works according to the same rules and guidelines.

## 5. Code Like You’re in a Team — Even a One-Person Team

Last but not least, write like you’re in a team!

I can imagine that it’s very hard for people who have never written code in a team to understand what that’s like.

But if you’re coding a project on your own, it’s very tempting to write code that only you understand (e.g. writing unclear variable names, using 2-3 character variable names, etc.).

Try to write your code like if you’re in a team. Imagine that your code is so clear that someone else can easily understand your code.

You can easily test this out by asking a friend or someone via Twitter in the developer community to check your code’s readability. I can promise that you’ll get feedback you have never thought of.

Don’t panic about negative feedback! Just focus on the feedback that can make your code more readable for someone else.

You should know there is a very thin line between readable code and not so readable code. It’s based on a person’s opinion. Don’t feel bad if someone tells you your code is not readable! Be grateful for the feedback.

## Conclusion

Thanks for reading! I hope that you have learned at least one thing from this article.

If you have anything to add about improving code readability, please feel free to ask my via [Twitter/devbyrayray](https://twitter.com/devbyrayray).