---
title: 'How to Build Fast, Advanced JSON-Powered Forms on Angular With ngx-formly'
description: Validations, repeatable sections, conditional fields, and submitting your form
  to your API
date: '2020-03-25T17:15:17.082Z'
categories: []
published: true
tags: ['Developer', 'WebDev']
image: https://cdn-images-1.medium.com/max/800/0*ObTlBymPfhHxX6en
---

![Photo by [Kelly Sikkema](https://unsplash.com/@kellysikkema?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)]()
Photo by [Kelly Sikkema](https://unsplash.com/@kellysikkema?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

This article is the second installment of a two-part series called “JSON Powered Forms in Angular.” If you didn't check [the first part](https://medium.com/better-programming/build-fast-json-powered-forms-on-angular-with-ngx-formly-b7a00733e66e), I recommend doing that first.

In the first article, I discussed how you can implement [ngx-formly](https://github.com/ngx-formly/ngx-formly) in your Angular project with the UI framework [Angular Material](https://material.angular.io/).

We are going to continue with the same project in this article. We will implement basic validation, custom validation, repeatable sections, conditional fields, how you can reset your form, and how you can submit the form to an API endpoint.

Sit back and get yourself some drinks because we are going to dive into the rabbit hole of advanced forms with ngx-formly in Angular.

**Part 1  
**1\. [What’s Ngx Formly?](https://medium.com/@devbyrayray/b7a00733e66e#3d0d)  
2\. [Install Dependencies](https://medium.com/@devbyrayray/b7a00733e66e#8175)  
3\. [Set Up an Angular Project](https://medium.com/@devbyrayray/b7a00733e66e#0e6c)  
4\. [Add Ngx Formly and Your UI Framework](https://medium.com/@devbyrayray/b7a00733e66e#8521)  
5\. [Create a Simple Form](https://medium.com/@devbyrayray/b7a00733e66e#1778)  
6\. [Check the Data From the Form](https://medium.com/@devbyrayray/b7a00733e66e#ded9)

**Part 2**  
**1\.** [**Validation**](https://medium.com/@devbyrayray/77aeed406f73)**2\.** [**Repeating Sections**](https://medium.com/@devbyrayray/77aeed406f73)**3\.** [**Conditional Fields**](https://medium.com/@devbyrayray/77aeed406f73)**4\.** [**Reset Form**](https://medium.com/@devbyrayray/77aeed406f73)**5\.** [**Submit Form**](https://medium.com/@devbyrayray/77aeed406f73)

## 1\. Validation

Let's start with validation. Every form should have some validation to help its users fill in the correct information.

Adding basic validation is super easy by only adding some properties to the object. If you want to have custom validation, you only have to create two functions and add them to the formly module.

### 1.1 Basic validation

There are a few validations you can add by only adding properties to the input objects.

*   `required`: If a field is required.
*   `min`: This is only for the number input field to define a minimum number.
*   `max`: This is only for the number input field to define a maximum number.
*   `minlength`: With this property, you can define the minimum amount of characters.
*   `maxlength`: With this property, you can define the maximum amount of characters.

In every input object, you can add those properties. If you don't add the field, it won't be validated.

If you want to have a validation message for the required property, you have to add it in the `angular.module.ts`.

With the parameter `field`, you can get access to the values that have been filled into the validation properties. This will help to make it more dynamic.

Check the [commit in the example project](https://github.com/raymonschouwenaar/angular-ngx-formly-material-example/tree/d8a1f15ffd82f3505a06fe947f643e588fc0a276) on GitHub.

### 1.2 Custom validation

If you want to have custom validation for your field, you need to add two functions. One function (`IpValidator`) does the validation and another (`IpValidatorMessage`) function handles the validation message. Those functions need to be included in `FormlyModule`.

In the `FormModule.forRoot()`, you give a config object. For the validation function, you add the property `validators` in which you add an array with one object (`{ name: 'ip', validation: IpValidator }`). To add the validation message, you add the property `validationMessages` in which you add an array with an object (`{ name: 'ip', message: IpValidatorMessage }`) like this.

Your `app.module.ts` should look something like this:

In the field config of the field you want to have the custom validation, you have to add the property `validators` that includes a `validation` property with a value `["ip"]`. This value is the same as you have added in the `app.module.ts`.

Check the [commit in the example project](https://github.com/raymonschouwenaar/angular-ngx-formly-material-example/tree/0571ff48b5e396f9622d14ab7ff8269de9b83c92) on GitHub.

## 2\. Add Repeatable Sections

Not all the applications would need this. But when you need it, this feature becomes very handy.

You can group an array of fields to make them repeatable. But first, we have to create a new formly type (`RepeatTypeComponent`) that includes a `<formly-field>` and a button for creating a new group of input types.

We have to add this formly type to the `declaration` property and `FormlyModule` so we can use it in our form configuration.

Now we are able to add it to our form config array.

If you output your model in `<pre>{{model | json }}</pre>`, click on the + button and fill in the input fields. Now you will see that there is an array with all the information.

Check the [commit in the example project](https://github.com/raymonschouwenaar/angular-ngx-formly-material-example/tree/100723445ab5308651e9dde890f7fd02efa13039) on GitHub.

## 3\. Add Conditional Fields

If you're building a big application with Angular, you probably need conditional fields. With formly, we can do that in a very easy way.

You only have to add a `hideExpression` property to your field config. The value will refer to the model. If the previous input name is empty, the `email` field will be hidden. When it contains a value, it will be shown.

The great thing about this is that the `email` property is also not visible in the model, so you won’t send it.

Check the [commit in the example project](https://github.com/raymonschouwenaar/angular-ngx-formly-material-example/tree/575b4febae9758ace7894ba657edfbaeab048822) on GitHub.

## **4\. Reset Form**

With formly, it is also very easy to add a reset button to clear all the values in the form.

Just add the buttons, create an `options` property in the component class with the type `FormlyFormOptions` and add the button to the form. Then add `[options]=”options”` to the form component and `(click)=”options.resetModel()”` to the button.

It’s important to know that if your model is already filled with values, this functionality won’t delete that information. When you change the value or add a new one, it will reset the values.

Check the [commit in the example project](https://github.com/raymonschouwenaar/angular-ngx-formly-material-example/tree/10852832404b515b216ac4fceb9374c2b6335eb4) on GitHub.

## **5\. Submit Form**

Submitting our forms is also very easy with formly.

Add to your `<form>` tag a `(ngSubmit)=“submit()”`, which will call a method to submit that should be declared in that component.

onSubmit() {  
  if (this.form.valid) {  
    console.log(JSON.stringify(this.model));  
  }  
}

Right now, this will show the model data in the console. But I guess if you are using Angular, you are familiar with how to send requests in it. If not, please use this example.

Make sure that you have loaded the [HttpClientModule](https://angular.io/api/common/http/HttpClientModule) in your `app.module.ts`.

In your component, make sure you include the `HttpClient` in the constructor, which will make sure you can use this `.http` in your component.

constructor(private http: HttpClient) { }

In the `submit` method, we are going to use the `HttpClient` to do a post request.

We know that this URL is not valid, so it will result in an error. But if you replace it with a valid one, it will work.

It is better to do the request via an Angular service off-course, but I’ll leave that to you.

Check the [commit in the example project](https://github.com/raymonschouwenaar/angular-ngx-formly-material-example/tree/15e0f3800da0825c36585d8da37e2c1dcb548a7b) on GitHub.

## **Conclusion**

I hope that this second part of the tutorial helped you to build more advanced forms with ngx-formly. If you still have questions on how to do certain things, please add them to the comments.

Are you still unsure of whether ngx-formly is valid for enterprise-grade applications? I can assure you that my team and I use it ourselves to build all the forms with more than one input field.

We even made it so generic with our API based on the Open API spec 3.0. For every model, it builds the form automatically.

If you need help setting up your forms, check the [example repo on GitHub](https://github.com/raymonschouwenaar/angular-ngx-formly-material-example).

> I’ve gathered a couple of [aspiring developers around the world on a Discord server](https://mailchi.mp/fb82491d03f8/dev-by-rayray-discord-community), feel free if you like to join in.

## Read more

[**Jump Start Your Developer Career From Zero To Hero**  
_A Method So Simple It Will Blow Your Mind!_levelup.gitconnected.com](https://levelup.gitconnected.com/jump-start-your-developer-career-from-zero-to-hero-89cb62a1829 "https://levelup.gitconnected.com/jump-start-your-developer-career-from-zero-to-hero-89cb62a1829")[](https://levelup.gitconnected.com/jump-start-your-developer-career-from-zero-to-hero-89cb62a1829)

[**5 Steps Give Structure To Your Development Projects**  
_Are you not able to manage your programming projects? Try this!_medium.com](https://medium.com/dev-together/5-steps-give-structure-to-your-development-projects-e1348eb9f17d "https://medium.com/dev-together/5-steps-give-structure-to-your-development-projects-e1348eb9f17d")[](https://medium.com/dev-together/5-steps-give-structure-to-your-development-projects-e1348eb9f17d)

[**How To Build A Dark Mode Switcher with CSS Variables**  
_Build a Dark Mode Switcher with CSS Variable, JavaScript and TypeScript_levelup.gitconnected.com](https://levelup.gitconnected.com/how-to-build-a-dark-mode-switcher-with-css-variables-ccb13f7441a0 "https://levelup.gitconnected.com/how-to-build-a-dark-mode-switcher-with-css-variables-ccb13f7441a0")[](https://levelup.gitconnected.com/how-to-build-a-dark-mode-switcher-with-css-variables-ccb13f7441a0)

[**JavaScript Concepts You Need Before Starting w/ Frameworks & Libraries**  
_Don’t start before you are comfortable with them_medium.com](https://medium.com/dev-together/javascript-concepts-you-need-before-starting-w-frameworks-libraries-25a325312b5c "https://medium.com/dev-together/javascript-concepts-you-need-before-starting-w-frameworks-libraries-25a325312b5c")[](https://medium.com/dev-together/javascript-concepts-you-need-before-starting-w-frameworks-libraries-25a325312b5c)