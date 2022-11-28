---
title: Convert A CSV To A JavaScript Array of Objects — The Practical Guide
description: The simplest way to convert a CSV file into a JavaScript Array of Objects is, using the JavaScript split, map, forEach, trim methods, and spread operator. In this post, I love to show you how you can exactly do that by using a file upload form.
date: '2022-09-16T08:18:20.547Z'
tags: ['javascript']
image: images/5vdek9ihj4bqw8kl5zdh.jpg
---

The simplest way to convert a CSV file into a JavaScript Array of Objects is, using the JavaScript split, map, forEach, trim methods, and spread operator. In this post, I love to show you how you can exactly do that by using a file upload form.

> In this post, I hope you have some JavaScript knowledge because that will make it easier for you to follow. If not, I will do my best to give you as much information as possible.

---

## TLDR;

If you only need the code to convert a CSV value to a JavaScript Array of Objects, please copy and paste the code 😉

```javascript
function csvToArr(stringVal, splitter) {
  const [keys, ...rest] = stringVal
    .trim()
    .split("\n")
    .map((item) => item.split(splitter));

  const formedArr = rest.map((item) => {
    const object = {};
    keys.forEach((key, index) => (object[key] = item.at(index)));
    return object;
  });
  return formedArr;
}
```

But if you want to understand everything in the code? I advise you to read further 🤗 or scroll down to step 3, where I explain its logic.

---

## Create a form for uploading a CSV file

First, we need an HTML form to upload a file.

```javascript
<form id="csvForm">
    <input type="file" id="csvInput" accept=".csv" />
    <input type="submit" value="Submit" />
</form>
<textarea name="" id="csvResult" cols="30" rows="10"></textarea>

```

Since I didn't focus on a user-friendly form, but more on converting a CSV to an Array of Objects, I added minimal CSS to it.

```javascript
body {
  font-family: sans-serif;
  padding: 1rem;
  background: #ccc;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}
input[type="submit"] {
  width: 100px;
}
textarea {
  width: 90%;
  height: 300px;
}

```

::code-sandbox
<iframe src="https://codesandbox.io/s/how-to-convert-csv-to-javascript-array-of-objects-e6e3nc?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Convert A CSV To A JavaScript Array of Objects — The Practical Guide"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
::

---

<ContentAd topics="javascript"></ContentAd>

---

## Read the content from the CSV file

Now we need to have access to 3 things in our JavaScript.

1. Form: For getting access to the file reader
2. Input: For selecting a CSV file
3. Textarea: For showing the Array of Objects

```javascript
const form = document.querySelector("#csvForm");
const csvFileInput = document.querySelector("#csvInput");
const textArea = document.querySelector("#csvResult");

```

When a user selects a CSV file and clicks the "Submit" button, we want to read the content of it so that we can convert it to an Array of Objects.

We start with an `addEventlistener` on the form; we listen to a submit event.

```javascript
form.addEventListener("submit", function (event) {
  //logic for when the form is submitted
});

```

Since the natural behavior of a submit event is that the page does a refresh, we want to cancel that behavior. Otherwise, we will be unable to read the file and its content. We do that with the `event.preventDefault()`.

```javascript {3}
form.addEventListener("submit", function (event) {
  //logic for when the form is submitted
  event.preventDefault();
});

```

Now we want to get access to the content of the file. We can do that by using the `FileReader` API (read more on [MDN Web Docs about the FileReader AP](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)I). This API helps us get access to files that a user selects.

```javascript
const file = csvFileInput.files[0];
const reader = new FileReader();

reader.onload = function (e) {
  // Access to content with e.target.result
  console.log("content: ", e.target.result);
};

reader.readAsText(file);

```

In the code above, we create the `file` variable for the first selected file. Then we create a new instance of the FileReader in the `reader` variable by calling `new FileReader()`.

Second, we jump to the bottom of the snippet. `reader.readAsText(file)` will convert the blob to text after the reading process is finished.

When that process has finished, we have the `reader.onload` event, where we get access to the file's content. Here we use the `e` for a reference to the event since we use `event` in the `addEventListener("submit", {...})` with this, we prevent conflicts from happening.

Console logs the content to test if everything works how it should.

---

> I hope that you followed everything until now 🙏. If not, don't hesitate to contact me via Twitter [@devbyrayray](https://twitter.com/devbyrayray) so I can help you further.

---

## Convert CSV to Array of Objects

Now we dive into the bread and butter of turning CSV content into an Array of Objects.

We know that a CSV can have many forms and sizes. I discovered that doing this in the frontend can be very heavy with large CSV files, so don't try to do that in a production application.

Smaller size CSV files are no problem. But it's good to test this yourself.

How will we turn this CSV content into a JavaScript Array of Objects? Straightforward, step by step!

### 3.0 CSV content

Let's add this CSV content in a variable so we can use it for testing our function.

```javascript
const csvString = `
Series_reference,Period,Data_value,Suppressed,STATUS,UNITS,Magnitude,Subject,Group,Series_title_1,Series_title_2,Series_title_3,Series_title_4,Series_title_5
BDCQ.SEA1AA,2011.06,80078,,F,Number,0,Business Data Collection - BDC,Industry by employment variable,Filled jobs,"Agriculture, Forestry and Fishing",Actual,,
BDCQ.SEA1AA,2011.09,78324,,F,Number,0,Business Data Collection - BDC,Industry by employment variable,Filled jobs,"Agriculture, Forestry and Fishing",Actual,,
BDCQ.SEA1AA,2011.12,85850,,F,Number,0,Business Data Collection - BDC,Industry by employment variable,Filled jobs,"Agriculture, Forestry and Fishing",Actual,,
`

```

_The file I used to test it in combination with the [file uploading can be found on my gist.](https://gist.github.com/devbyray/2fcd917bbe92ee660853a0eff9833bff)_

### 3.1 Create a function

We want to add a parameter for the content so let's call it `stringValue`.

```javascript
function csvToArr(stringValue) {
  // Add logic
}

```

### 3.2 Clean your content

First, we need to clean the content of the CSV with trimming spaces. We do that with the `trim()` method.

```javascript
function csvToArr(stringValue) {
  // Add logic
  const formattedString = stringValue.trim();
}

```

### 3.3 Split on new line

We want every line in the CSV file to become an Object in the array. So we need to split the whole content on that. We do that by chaining the `split('\n')` method after the `trim()` method.

```javascript
function csvToArr(stringValue) {
  // Add logic
  const formattedString = stringValue.trim().split('\n');
  console.log('formattedString: ', formattedString)
}

csvToArr(csvString)

```

This function will return an Array of strings. Check the console for the result while trying to put in the CSV content above and call the function.

### 3.4 Divide the property names from values

In the example, we see that the property names of the CSV are in the first line. The following lines are the values in those properties. Let's divide those keys from the values by using destructuring with the spread syntax (read more about [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) and the [spread syntax on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)).

```javascript
function csvToArr(stringValue) {
  // Add logic
  const [keys, ...rest] = stringValue.trim().split('\n');
  console.log('CSV keys: ', keys);
  console.log('CSV values: ', rest);
}

```

Thanks to destructuring, we now have a variable with the `keys` and a variable `rest` with all the rest of the values.

### 3.5 Split property values

Next, we need to split the long strings of values into different values, so we can use them in the next step to create objects. We do that by chaining the `map()` method and using the `split(',')` method to create an array of the values.

```javascript
function csvToArr(stringValue) {
  // Add logic
  const [keys, ...rest] = stringVal
    .trim()
    .split("\n")
    .map((item) => item.split(','));

  console.log('csv keys: ', keys);
  console.log('csv values: ', rest);
}

```

### 3.6 Create an Array of Objects

Now that we have prepared the data, we can create an Array of Objects. We use the `map()` method on the `rest` variable so we can loop through the multidimensional array.

For every array of values, we loop through the keys. So that every key will have its value, even when a value is an empty string, it won't cause a problem since we take the keys as a base.

Every iteration inside the `map` will create an object and returns it to the array. Eventually, the array of objects will be returned by the function.

```javascript
function csvToArr(stringValue) {
  // Add logic
  const [keys, ...rest] = stringVal
    .trim()
    .split("\n")
    .map((item) => item.split(','));

  const formedArr = rest.map((item) => {
    const object = {};
    keys.forEach((key, index) => (object[key] = item.at(index)));
    return object;
  });

  return formedArr;
}

```

<runkit link="https://runkit.com/devbyrayray/create-javascript-array-of-objects-from-csv-value"></runkit>


### 3.7 Implement function in the form

Now we are ready to implement the function into the form. The code below is the result of JavaScript.

```javascript
const form = document.querySelector("#csvForm");
const csvFileInput = document.querySelector("#csvInput");
const textArea = document.querySelector("#csvResult");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const file = csvFileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const csvArray = csvToArr(e.target.result, ",");
    textArea.value = JSON.stringify(csvArray, null, 4);
  };

  reader.readAsText(file);
});

function csvToArr(stringVal, splitter) {
  const [keys, ...rest] = stringVal
    .trim()
    .split("\n")
    .map((item) => item.split(splitter));

  const formedArr = rest.map((item) => {
    const object = {};
    keys.forEach((key, index) => (object[key] = item.at(index)));
    return object;
  });
  return formedArr;
}

```

When we combine HTML and JavaScript, you will get a result like this. In my example, I show the JSON in the `<textarea>` element. And with `JSON.stringify(csvArray, null, 4)` I can get it nicely formatted.

::code-sandbox
<iframe src="https://codesandbox.io/s/how-to-convert-csv-to-javascript-array-of-objects-e6e3nc?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Convert A CSV To A JavaScript Array of Objects — The Practical Guide"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
::

_When the CodeSandbox embed doesn't work, [check it on CodeSandbox itself](https://codesandbox.io/embed/how-to-convert-csv-to-javascript-array-of-objects-e6e3nc)._

Okay, that's all! Now we have an HTML form that converts a CSV file into an array of objects with JavaScript 💪. Good job! If you created a different version or look more user-friendly, please share them in the comments 😉.

---

## Thanks

![](/images/0__4aTcitCaVTWHHeiO.jpg)

After reading this post, I hope you learned something new or are inspired to create something new! 🤗

If I left you with questions or something to say as a response, scroll down and type me a message. Please send me a [DM on Twitter @DevByRayRay](https://twitter.com/@devbyrayray) when you want to keep it private. My DM’s are always open 😁.
