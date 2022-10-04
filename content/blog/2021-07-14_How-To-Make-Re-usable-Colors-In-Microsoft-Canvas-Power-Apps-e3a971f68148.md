---
title: How To Make Re-usable Colors In Microsoft Canvas Power Apps
description: Prevent typing color codes over and over again!
date: '2021-07-14T10:06:37.267Z'
categories: []
keywords: []
slug: /@byrayray/how-to-make-re-usable-colors-in-microsoft-canvas-power-apps-e3a971f68148
---

![](/images/1__N6j8yyRENowFQG0Q77b3ug.png)

Microsoft made it easy to build apps via their Power Apps Platform. As a professional developer, I love to make things re-usable, so I don’t have to type them every time.

The Power Apps Canvas application lets you do that very quickly. But it requires some code in the Formula Bar. This formula bar works almost the same as in Excel but has a lot of functionality you can add. (_Microsoft has an extensive list of available formulas you can_ [_check in their documentation_](https://docs.microsoft.com/nl-nl/powerapps/maker/canvas-apps/formula-reference))

### Add Formula onStart

![](/images/1__ZKXikNZrMHv9CBfx9hM0RA.png)

If you open Power App studio, click on the left sidebar App (_1_). Then select on the top “OnStart” (_2_) and paste the code below in the formula bar (_3_).

Set(Colors; {  
 PrimaryYellow: RGBA(250; 246; 0; 1);  
 PrimaryBlack: RGBA(35; 31; 32; 1);  
 AccentBlack: RGBA(65; 64; 66; 1)  
})

With this code, we set a variable with the `Set` function. We define a variable `Colors`, which contains an `Object` with key-value pairs. I defined three properties in the example above, which I can use later to select the colors for backgrounds or text colors.

This should look like the example below.

![](/images/1__IAPE6hcMVkzr__l93Mgr5Wg.png)

### Use Defined Colors

Before we can use those colors, we have to run the `OnStart` event. We do this by clicking on the three dots after the App structure.

![](/images/1__1MFvBz36q__BQTXythNnSdg.png)

Now you can use the colors for backgrounds or text colors. You can do that by selecting a screen part. In my example, I selected some text components.

![](/images/1__tiYjvxWHRKAK8uqDJCMOjQ.png)

After the selection, I opened the “Advanced” panel on the right and searched for “Color”. In that input field, you can type `Colors` which refers to the variable. After that, type `.PrimaryYellow` or your color of choice to use one of the colors you have defined.

![](/images/1__tTMlLD5YWTaL8nU6mxMWeg.png)

You can use this also for backgrounds or other colors you want to add.

> If you want to learn how you can use the Formula bar for keeping your navigation items consistent? Check the post “[_PowerApps — Consistent navigational elements_](https://wrikto.medium.com/whos-got-the-button-6bc00473932c)” by [Wrikto](https://medium.com/u/5b8cfe70bdb4), which is very helpful 😉

### Conclusion

Via this way, you can easily create a color pallet that meets your brand colors. I hope this helped you prevent copy-and-pasting your color codes all the time. I’m looking forwards to post more content about Microsoft Power Apps.

_Happy Building 🚀_

### Read more from me

*   [Declare Missing Helper Function (TypeScript) in Visual Studio Code](https://medium.com/dev-together/declare-missing-helper-function-typescript-in-visual-studio-code-c058ea72de8d)
*   [4 Reasons Why Low-code Is Great For Professional Developers](https://javascript.plainenglish.io/4-reasons-why-low-code-is-great-for-professional-developers-f374c3ba4182)
*   [Getting Started With Storybook Without a JavaScript Framework](https://betterprogramming.pub/getting-started-with-storybook-without-a-javascript-framework-c2968d3f3d9f)
*   [7 Web Development Guidelines To Speed up Page Loading](https://betterprogramming.pub/7-web-development-guidelines-to-speed-up-page-loading-e8f0e13a53b)