---
title: How To Build A Custom Checkbox With JavaScript
description: Learn JavaScript The Easy Way
date: '2021-02-12T19:04:59.011Z'
categories: []
tags: []
slug: /@byrayray/how-to-build-a-custom-checkbox-with-javascript-82083a66ae04
---

![](/images/1__D9CpjPJlQqcamwfdDFCAeg.png)

### HTML & CSS

So let’s start with the HTML & CSS to make our component static. I have created the HTML and CSS for you. But if you want to change it, please go ahead and make your flavor of it.

In the HTML, we have 2 checkboxes because, with JavaScript, we will create a custom checkbox. But it is way cooler to make every input with a type checkbox, a custom checkbox.

**HTML**

<section class="form-wrapper">  
    <label class="label" for="checkbox1">  
        <strong>Checkbox 1</strong>  
        <input type="checkbox" name="checkbox1" id="checkbox1">  
    </label>  
    <label class="label" for="checkbox2">  
        <strong>Checkbox 2</strong>  
        <input type="checkbox" name="checkbox2" id="checkbox2">  
    </label>  
</section>

**CSS**

:root {  
    --red: rgb(209, 3, 3);  
    --white: #fff;  
    --black: #000;

    --blue: rgb(0, 191, 255);  
    --grey: rgb(211, 211, 211);  
}

body {  
    font-family: "Helvetica";  
    background: #e9e9e9  
}  
.container {  
    width: 100vw;  
    height: 100vh;  
    display: flex;  
    justify-content: center;  
    align-items: center;  
}

.wrapper {  
    max-width: 600px;  
    height: 400px;  
    display: flex;  
    justify-content: center;  
    align-items: center;  
}  
.project-header {  
    position: absolute;  
    top: 0;  
    background: rgb(180,58,116);  
    background: linear-gradient(90deg, rgba(180,58,116,1) 0%, rgba(253,29,29,1) 50%, rgba(252,139,69,1) 100%);    width: 100%;  
    text-align: center;  
    color: var(--white);  
}  
.form-wrapper {  
    display:flex;  
    flex-direction: column;  
    background: var(--white);  
    padding: 4rem 4rem 3rem;  
    border-radius: 10px;  
    box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.2);  
}  
input\[type="checkbox"\].hide {  
    display: none;  
}  
.label {  
    line-height: 30px;  
    display: flex;  
    justify-content: space-between;  
    margin-bottom: 1rem;  
    cursor: pointer;  
}  
.label strong {  
    margin-right: 3rem;  
}

/\*===== Custom Checkbox ===== \*/  
.chkBox {  
    display: inline-block;  
    width: 50px;  
    height: 25px;  
    background: var(--blue);  
    border-radius: 20px;  
    padding: 5px;  
    transition: 0.5s ease-in-out;  
}

/\*===== Custom Checkbox switch ===== \*/  
.chkBox--switch {  
    display: block;  
    width: 25px;  
    height: 25px;  
    border-radius: 100%;  
    background: var(--white);  
    transition: 0.5s ease-in-out;  
}

.chkBox.checked {  
    background: var(--blue);  
}  
.chkBox.checked .chkBox--switch {  
    transform: translate(0);  
}

.chkBox.unchecked {  
    background: var(--grey);  
}  
.chkBox.unchecked .chkBox--switch {  
    transform: translate(24px);  
}

I have used CSS Variable to easily change the colors if you don’t like the ones I have picked.

Now that we have created the button component statically, we start with JavaScript. 😇

### Tutorial

Now that we have created a page with checkboxes, it’s looking ugly, right. These are the default browser styled checkboxes.

In this project, I want to teach you a couple of new things and repeat a couple of items from the previous project because repetition is the key to mastery 😉.

### What you will learn

*   Variables
*   Functions
*   If statement
*   Return
*   classList API
*   Event Listener ‘change’
*   Arrow function
*   ForEach loop
*   QuerySelectorAll
*   NodeList
*   Array

### Step 1. Get all the checkboxes

First, we need to get access to all the checkboxes on the page. If we need 1 element on the page, we will use the `querySelector()` method. But, we need to get all the checkboxes on the page, so we need the `querySelectorAll()` method for that.

The `querySelectorAll()` method returns an `NodeList`. A [Nodelist looks like an Array](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) but is a bit different.

> It’s a good idea to check the documentation links when I include them. It will help you can a bit more knowledge about certain terms.

A Nodelist has multiple Nodes in a list. A Node is a reference to an HTML element. An Array can be a list of multiple values. It can be a list of strings, objects, booleans, and a lot more values.

const checkboxElements = document.querySelectorAll('input\[type="checkbox"\]');

In the `querySelectorAll(selector)` we give a selector as a parameter. The method will search the whole page to find those elements and returns them in a `NodeList`.

### Step 2. Loop through the checkboxes

Now that we have a variable `checkboElements` with a `NodeList` of all checkboxes on our page, we need to loop through the list and create a custom checkbox for each of them.

If you check the NodeList documentation page, you can see [we have a list of methods](https://developer.mozilla.org/en-US/docs/Web/API/NodeList#Methods) to use.

*   `item()`
*   `entries()`
*   `forEach()`
*   `keys()`
*   `values()`

Right now, I’m not gonna tell what every one of them does. But we are going to focus on the `forEach()` method.

With this method, you can perform a particular task for every item in the `NodeList`.

const checkboxElements = document.querySelectorAll('input\[type="checkbox"\]');  
checkboxElements.forEach((checkboxItem) => console.log('checkboxItem: ', checkboxItem))

In this case, when we execute this code above with the `querySelectorAll(selector)`, you will see 2 messages in your console tab (developer tools in the browser).

Now that we can create a function which will be called just like the `console.log()` function in the example above.

### Step 3. Create custom checkbox HTML with JavaScript

Let’s define a function in which we write the logic for creating the custom checkbox element.

function createCustomChkBox(checkboxEl) {  
    // logic comes here  
}

We could also write this just in the method. `.forEach()`. But when you create a different function, it's much better to read when you check the code later on.

In the function, we have defined a parameter in which we reference the original checkbox element.

We want to create our custom checkbox inside the label, next to the input element. So we need the parent element of the original input element. We do that by using `checkboxEl.parentElement`. Every HTML element on the page has a property called `parentElement` except the `<html>` tag, because that's the parent element of all elements.

We store the reference to the parent element in a variable to use that later on in the function.

const checkboxLabel = checkboxEl.parentElement

To prevent our code from breaking with errors, we want to check if the reference to an element is correct. We create an if-statement to check that. If the reference is not right, we give a return statement so that the function stops and continues with the `forEach()` loop.

if (!checkboxEl) {  
    // If the checkbox element is a falsy value  
    // We will cancle this function with a return statement  
    return  
}

With `!checkboxEl` we check if the `checkboxEl` has a falsy value. So if it's `null`, `undefined` or `false` it will execute the `return` statement.

#### **What is truthy and falsy?**

Falsy means that a value can be `null`, `false`, `0`, `NaN`, `""` or `undefined`. Most of the time this means, it has no value or is negative.

Truthy means that a value is given. The value can be a `"string"`, `{}`,`[]`, `"0"`, `number`, `function() {}` or a boolean which is set to `true`.

If the value has a valid reference (`Node`) to an element, it will continue with creating our HTML elements. For this, we need the `createElement()` method. In this method, you define the element you want to make. For example, create an `<div></div>` element.

const divElement = document.createElement('div')  
divElement.classList.add('cool-class-name')

Now you maybe think, where is the `<div></div>` created? I don't see it in my HTML structure. That's correct, and it's not placed in the HTML yet. Now the element is only created into the browser's memory. But we can add class names or other attributes to it while it's in memory.

To add it to the page, we need to append it to an existing element with the `appendChild()` method. With this method, we place an `<div class="cool-class-name"></div>` inside the current element.

existingElement.appendChild(divElement)

Via this method, we add our custom checkbox element with the checkbox switcher inside.

// Create the custom checkbox element  
// Add some classes to it  
const chkBox = document.createElement('div')  
chkBox.classList.add('chkBox')  
chkBox.classList.add('unchecked')

// Create the custom checkbox element switch  
// Add a class to it  
const chkBoxSwitch = document.createElement('span')  
chkBoxSwitch.classList.add('chkBox--switch')

// Add the custom checkbox switch to the custom checkbox element  
chkBox.appendChild(chkBoxSwitch)

// Add the custom checkbox element to the parent label element  
checkboxLabel.appendChild(chkBox)

Here you can see that first, I’ve created the `<div></div>` element gave it the class names `chkBox` and `unchecked` with the `classList` API. Next, I made the `<span></span>` for the switcher.

The switcher `chkBoxSwitch` is added to the `chkBox` element via `chkBox.appendChild(chkBoxSwitch)` and the `chkBox` is being added to the `checkboxLabel`, which is already in the HTML.

Now our custom checkbox element is created in the HTML 👏.

The last step is to add a class to the original checkbox “hide”. In the CSS we described when the class “hide” is on an input with the type checkbox, we set the style on `display: none;`. If there goes something wrong along the road of the creation of elements, the original checkbox will stay visible.

Finally, this is how the function looks when finished.

function createCustomChkBox(checkboxEl) {  
    const checkboxLabel = checkboxEl.parentElement

    if (!checkboxEl) {  
        // If the checkbox element is a falsy value  
        // We will cancle this function with a return statement  
        return  
    }

    // Create the custom checkbox element  
    // Add some classes to it  
    const chkBox = document.createElement('div')  
    chkBox.classList.add('chkBox')  
    chkBox.classList.add('unchecked')

    // Create the custom checkbox element switch  
    // Add a class to it  
    const chkBoxSwitch = document.createElement('span')  
    chkBoxSwitch.classList.add('chkBox--switch')

    // Add the custom checkbox switch to the custom checkbox element  
    chkBox.appendChild(chkBoxSwitch)

    // Add the custom checkbox element to the parent label element  
    checkboxLabel.appendChild(chkBox)

    checkboxEl.classList.add('hide')

    // Add a event listener to the checkbox to switch classes in the toggleCustomChkBox function  
    checkboxEl.addEventListener('change', (event) => toggleCustomChkBox(event, chkBox))

}

### Step 4. Create an event to change checkbox classes

Now that we have created our HTML elements, we need to make an event listener for all the checkboxes. We want to hoop into the event when a checkbox is changed. I mean, we want to know when the value has changed.

With `addEventListener()` we can listen to the "change" event. When the checkbox is checked or unchecked, the change event will be called.

When the event is called, we want to replace the class name “unchecked” with “checked” when the real checkbox has been set to `checked`. When the checked property is not on the element anymore, it will replace the "checked" class name for "unchecked".

> _For debugging the state of the checkbox, you can always do_ `_console.log(event.target.checked)_` _to see a_ `_true_` _or_ `_false_` _value._

This is how that function will be.

function toggleCustomChkBox(event, chkBox) {  
    if (event.target.checked) {  
        chkBox.classList.replace('unchecked', 'checked');  
    } else {  
        chkBox.classList.replace('checked', 'unchecked');  
    }  
}

You can see that we are giving the function a reference to them `event` from the event listener in the first parameter. In the second parameter, `chkBox` we are providing a reference to our new custom checkbox element.

If we didn’t add these references in our function, we could not replace the class names. When we create a function, we create another scope. With scopes in JavaScript, you can look up but can’t look down for a variable reference.

A variable that is defined in a function is not visible outside of that function. The function protects it from code outside. You can pass values of those variables outside a function by returning them.

#### **What is a scope in JavaScript?**

A scope is create by a JavaScript function. It can protect variables from code outside that function from being overwritten. If a function can’t reach a certain variable, it can be passed by parameters, otherwise it can’t reach the variable.

This short explanation is way to short to explain everything of this. In the past I’ve created a complete guide about [JavaScript scopes](https://medium.com/dev-together/es6-var-let-and-const-explained-e4c6ad14c195) it so you can read it here.

In the previous code example, you can see that this function is added to the event listener.

checkboxEl.addEventListener('change', (event) => toggleCustomChkBox(event, chkBox))

### Step 5. Done ✅

Now you have everything to make this custom checkbox work. I would advise you to play with the code to see how it works. I will encourage you to change the styling and animation to make it your own style.

But the best way to put this into practice is to implement this in one of your own projects. Because by building things yourself, you will better memorize everything you’ve just learned.

#### Conclusion

_If you want to be notified of the next project?_ [_Subscribe here, and I will update you as soon as possible!_](https://mailchi.mp/7ea77c9742bb/learn-javascript-the-easy-way) _🤗_

When you finished your project, please share the result with a Tweet 😁. You can use this example tweet if you want! 👇

```
I have created project 2 of the "Learn JavaScript The Easy Way" program. 😁
```

```
[ADD LINK HERE] 🔥
```

```
Do You Want To Learn #javascript like me? Check the link below and start for free. 🚀
```

```
[TODO: LINK]
```

```
#html #css #codenewbie #coding #frontend #developer #creativity #learnJavaScript #easyJavascript
```

### Read more

[**How Promises Actually Work in JavaScript**  
_Learn when and how to use them_betterprogramming.pub](https://betterprogramming.pub/how-promises-actually-work-in-javascript-1c80b1af7193 "https://betterprogramming.pub/how-promises-actually-work-in-javascript-1c80b1af7193")[](https://betterprogramming.pub/how-promises-actually-work-in-javascript-1c80b1af7193)

[**Build A Custom Like Button with HTML, CSS and Vanilla JavaScript**  
_Learn JavaScript The Easy Way_medium.com](https://medium.com/javascript-in-plain-english/build-a-custom-like-button-with-html-css-and-vanilla-javascript-b81fa4b00aad "https://medium.com/javascript-in-plain-english/build-a-custom-like-button-with-html-css-and-vanilla-javascript-b81fa4b00aad")[](https://medium.com/javascript-in-plain-english/build-a-custom-like-button-with-html-css-and-vanilla-javascript-b81fa4b00aad)

[**Setting Up a Next.js Project With TailWind CSS**  
_Integrate Tailwind and Next.js today_medium.com](https://medium.com/better-programming/setting-up-a-next-js-project-with-tailwind-css-85fcc882d0b8 "https://medium.com/better-programming/setting-up-a-next-js-project-with-tailwind-css-85fcc882d0b8")[](https://medium.com/better-programming/setting-up-a-next-js-project-with-tailwind-css-85fcc882d0b8)

[**How to Build and Deploy a Jamstack Website Fast With Next.js**  
_Why Next.js is a smart choice_medium.com](https://medium.com/better-programming/how-to-build-and-deploy-a-jamstack-website-fast-with-next-js-a61df3c822f "https://medium.com/better-programming/how-to-build-and-deploy-a-jamstack-website-fast-with-next-js-a61df3c822f")[](https://medium.com/better-programming/how-to-build-and-deploy-a-jamstack-website-fast-with-next-js-a61df3c822f)

[**5 Development Retrospective Questions to Have Great Discussions**  
_Not all discussions are great. Let’s improve them_medium.com](https://medium.com/better-programming/5-development-retrospective-questions-to-have-great-discussions-aa77f96cf793 "https://medium.com/better-programming/5-development-retrospective-questions-to-have-great-discussions-aa77f96cf793")[](https://medium.com/better-programming/5-development-retrospective-questions-to-have-great-discussions-aa77f96cf793)