---
title: '3 ways to loop over Object properties with Vanilla JavaScript (ES6 included)'
author: "Ray Ray"
excerpt:   It happens a lot that you need to loop
  over an Array with JavaScript Objects!
  But sometimes you just don’t know what
  kind of properties that Object has.
  Lucky we are that JavaScript offers a
  few ways of looping over JavaScript
  Object properties.

slug: 2017/09/3-ways-to-loop-over-object-properties-with-vanilla-javascript/
published: true
date: 2017-09-29 08:50:41
---
It happens a lot that you need to loop over an Array with JavaScript Objects! But sometimes you just don’t know what kind of properties that Object has. Lucky we are that JavaScript offers a few ways of looping over JavaScript Object properties.

I wanted to share 3 methods with you. Hopefully this will help you in the right direction. Check out the <strong>video</strong>! If you prefer to read, check the text below the video 😉

<Youtube url="https://youtu.be/Xb2aj_P1m7c" />

<h2><b>Notes &amp; Resources of the Video!</b></h2>
The 3 methods to loop over Object Properties in JavaScript are:

<ul>
 	<li>Object.keys (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys">Mozilla Developer reference</a>)</li>
 	<li>Object.entries (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries">Mozilla Developer reference</a>)</li>
 	<li>For-in loop (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in">Mozilla Developer reference</a>)</li>
</ul>

<h2><b>ES6/ES2015</b></h2>
Maybe you heard about ES6 or ES2015. That is the new modern specification of JavaScript nowadays. ES6 has a lot of new cool features like the Arrow Function and Template strings. It's making a lot of things easier in my opinion!

In these examples, I will use some ES6 stuff. Not every browser will support everything that I will show you, so keep that in mind while using it in production web applications/websites.

If you want to learn more about <a href="http://bit.ly/ES6-COURSE-BY-WES-BOS" target="_blank" rel="noopener">ES6/ES2015 please check out the course of our friend <em>Wes Bos</em></a> (and my personal hero in JavaScript Teaching) &#x1f60e;. I have followed it myself and it is super-duper-awesome!

<em>Wes Bos</em> also have a great blog about the <a href="http://wesbos.com/arrow-functions/">ES6 Arrow functions</a>, please check it out!

<a href="http://bit.ly/ES6-COURSE-BY-WES-BOS" target="_blank" rel="noopener"><img class="aligncenter wp-image-977 size-full" src="https://blog.mrfrontend.org/wp-content/uploads/2017/09/es6-for-everyone-wes-bos-course-banner-e1506538732480.png" alt="" width="1200" height="516" /></a>


Let's get back to where we are all talking about 😉
<h2><b>The Object to loop over</b></h2>
First we need an example object to loop over. So I put some of my experience in it 😉 (hahaha)! Keep the fun in it!

```javascript
let experienceObject = {
	name: 'Raymon',
	title: 'Lead Frontend/JavaScript Developer',
	yearsExperience: 8,
	projects: [
		{
			name: ‘Company A’,
			title: 'Senior JavaScript Developer',
			techniques: ['Angular', 'ES6', 'Vanilla JavaScript', 'Less', 'CSS']
		},
		{
			name: ‘Company B’,
			title: 'Lead JavaScript Developer',
			techniques: ['Angular 2', 'AngularJS', 'ES6', 'Vanilla JavaScript', 'Web Sockets', 'D3']
		},
		{
			name: ‘Company C’,
			title: 'Senior Frontend Developer',
			techniques: ['Vanilla JavaScript', 'CSS', 'Responsive Webdesign']
		}
	]
}
```

<h2><b>Object.keys(object)</b></h2>
The Object.keys() method will return an array of keys. If you put this in a variable and put it in a console.log() you will see an array of the keys.

```javascript
var objectKeys = Object.keys(experienceObject);
console.log(‘objectKeys: ‘, objectKeys);
```

<h2>Object.keys(experienceObject).map()</h2>
With the Object.keys.map method we are gonna loop over the Array that the Objec.keys has returned. The map method is one of the JavaScript ways to loop over an Array.

The map method is one of the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" rel="noopener">JavaScript ways to loop over an Array</a>.

```javascript
console.log('======= Object.keys ==========');
Object.keys(experienceObject).map(e =&gt; {
	console.log(`key= ${e} value = ${experienceObject[e]}`)
});
```

<h2><b>Object.entries(object)</b></h2>
The Object.keys() method will return an array of keys. If you put this in a variable and put it in a console.log() you will see an array of the keys.

<em>Be aware that this is ES2017! <a href="https://www.reddit.com/r/javascript/comments/736nle/3_ways_to_loop_over_object_properties_with/" target="_blank" rel="noopener">Thanks to people on Reddit who put it in the comments</a>!</em>

```javascript
var objectEntries = entries(experienceObject);
console.log(‘objectEntries: ‘, objectEntries);
```

<h3></h3>
<h2>Object.entries(experienceObject).forEach()</h2>
With the Object.keys.forEach method we are gonna loop over the Array of key-value pairs that the Object.entries has returned.

In this case we use the forEach method to loop over the Array. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" rel="noopener">forEach another simple method to loop over an Array</a> instead of the for-loop.

```javascript
console.log('======= Object.entries ==========');
Object.entries(experienceObject).forEach(([key, value]) =&gt; {
   console.log(`key= ${key} value = ${value}`)
})
```

<h2><b>For-in loop</b></h2>
The last example is the For-in loop to loop over the properties of the Object it.

The for-in loop is a whole lot simpler than the for-loop.

```javascript
for (property in experienceObject) {
   console.log(`key= ${property} value = ${experienceObject[property]}`)
}
```