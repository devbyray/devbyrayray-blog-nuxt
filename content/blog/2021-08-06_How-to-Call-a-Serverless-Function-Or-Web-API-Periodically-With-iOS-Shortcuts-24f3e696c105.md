---
title: How to Call a Serverless Function Or Web API Periodically With iOS Shortcuts
description: Automate your tasks using the power of shortcuts in iOS
date: '2021-08-06T13:37:57.718Z'
categories: []
keywords: []
slug: /@byrayray/how-to-call-a-serverless-function-or-web-api-periodically-with-ios-shortcuts-24f3e696c105
---

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/0__nEoNUltgtIlkTXhY.jpg)

Running a Serverless function or Web API every periodically can be done in so many ways. But today, I want to show you a free option if you have an iPhone or iPad. It is the Shortcut app.

The Shortcut app is available to every iPhone, iPad, or iPod touch running iOS 13.1 and higher. If you don’t own an Apple device, scroll down to the alternative ways to do the same via a different service.

### Running Time-Based Actions

I don’t know about you, but I feel the need to run an API or serverless function once a day or an hour every time I work on a side project.

But I don’t particularly appreciate setting up a cron job. Since I run all my applications on Netlify, I don’t have any place to do that.

So I thought, I saw that I could call a Web API via the iOS Shortcuts app. Let’s automate that!

### My use case

I’m building a dashboard with Angular, Angular Material, Serverless functions, and [Upstash](https://upstash.com/) (a serverless database for Redis). For that dashboard, I’m using the data from “Our World In Data,” which is open-source.

Since loading a large amount of data from [their repository](https://github.com/owid/owid-datasets/tree/master/datasets) takes a very long time, I thought let’s save that into Redis via Upstash, so the data loads faster.

Updating the information is going to be time-intensive, so my goal is to create a serverless function for Netlify and call it every day with the Shortcuts app.

> PS: I’m running that for a few days right now, and it’s a total blessing.

For instance, checkout can find my serverless function below, to get an idea of how I’ve created it:

I won’t dive into the creation of serverless functions in this post, but If you want to learn more about serverless functions and how to build them, check the links below.

*   [4 Steps to Get Started With Serverless Functions on Netlify](https://betterprogramming.pub/4-steps-to-get-started-with-serverless-functions-on-netlify-a6942bf071ca)
*   [How To Build A Serverless Webshop](https://medium.com/how-to-build-a-serverless-webshop/how-to-build-a-serverless-webshop-3dabd13b0ac7)

### How To Automatically Call a Web API Periodically

#### 1\. Setup Shortcut

First, let’s open the Shortcuts app and tap the + sign to create a new shortcut.

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/1__z6gbXiiIKBIil6ibS7QoCQ.png)

Click on “Add Action” and search for “URL”, click it and add the API URL you want to call.

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/1__wkfj4EUtoiDo9YAZNCJhWg.png)

I’ve pasted in a URL to an API. To choose what type of request we want to do, we have to tap on “Get Contents of URL” (if it’s not visible on your device, your can search for it in the input field on the bottom).

You can pick GET, POST, PUT, PATCH, and DELETE. If you want, you can send some headers when needed.

In the meantime, try creating the request by pressing the “Play” button on the bottom.

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/1__KtWCQ0by6Cqo4kDyT__oLPg.png)

After making the request, we want to have a notification that tells us when it’s done. Tap the bottom input field for searching “Show Notification”, when found press it.

You can type here anything you like. For this example, I’ve done “Received Posts URL”. URL is, in this case, the URL we’ve set at the top.

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/1__77ujA6STZKiKQDsZihBgRQ.png)

Let’s test our shortcut by pressing the “Play” button at the bottom:

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/1__4hNtv4__NhMg__fvVYi2EAtQ.gif)

#### Automate shortcut

Now that we demonstrated that our shortcut works, we can automate it to run it daily, weekly, or anything else.

Open the automation tap, which you can find at the bottom of your home screen of the Shortcuts app, and click “Create Personal Automation”.

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/1__Oawje5hmFb4aDM__QR4lMDw.png)

Click on the “Time of Day” and select when you want to run this automation. The choice is yours!

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/1__0SF0tBieyzInFTG__H61p7Q.png)

Press “Next” at the top and click “Add Action”. Now find the “Run Shortcut” action and press it.

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/1__gLPVRNx5cRM8YhwHLkd2Tg.png)

Now we have to select our “Call Web API” shortcut we made earlier. Press “Shortcut” and search for your shortcut and press it.

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/1__D__ZCzkhk1zuDPJxofrn__ig.png)

In my case, this automation will be performed daily at 15:10, which is so awesome!

![](/Users/devbyrayray/Downloads/medium-export-a7b31d8cfbafc479a349e86525a0598d57555fb548cdfad5aa20f48d7b4db09d/posts/md_1664876347726/img/1__Tyx7O3vR8qY7YFlz4iPRiA.png)

The best thing about using the Shortcuts app is everything runs locally on my device. Just call “Hi Siri, Call Web API,” and the shortcut will do it!

### Github Actions as Alternative For Automating Web API Calls

If you don’t own an Apple device, you can’t use the Shortcuts app. I’m not familiar enough with Android for offering the same functionality, but I think Github Actions is an excellent alternative for automating your Web API or Serverless function call.

Since Github Actions offers so much more than just automating Web API calls, I highly recommend checking the tutorial “[Run your Github Actions workflow on a schedule](https://jasonet.co/posts/scheduled-actions/)” by [Jason Etcovitch](https://twitter.com/JasonEtco).

### Conclusion

There are probably many other ways to automate Web API or Serverless function calls besides using iOS Shortcuts or Github Actions. But the most important is that you use what you find the easiest to use.

For me, doing it on my device for free is very important — that’s why I’ve used the Shortcuts app. If you have other suggestions, please share them. I love to add them to the post as well

Happy coding and automating.

> For more Productivity tips with the Shortcuts app, check “[Amazing Productivity Shortcuts for Your iPhone](https://medium.com/macoclock/5-cool-tricks-your-iphones-shortcuts-app-can-do-fcdcd4fe153e)” from [Manish Jain](https://medium.com/u/728e7aeac31a)

### Read more of my JavaScript & TypeScript stories

[**Medium**  
_Edit description_blog.byrayray.dev](https://blog.byrayray.dev/list/latest-javascript-typescript-stories-0358ad941491 "https://blog.byrayray.dev/list/latest-javascript-typescript-stories-0358ad941491")[](https://blog.byrayray.dev/list/latest-javascript-typescript-stories-0358ad941491)