---
ID: 983
title: How to write better CSS with BEM
author: "Ray Ray"
excerpt:   It is very important to have readable
  CSS, for your teammates and yourself. In
  my opinion BEM is the way to writer
  better CSS for you and your teammates!

slug: 2017/10/write-better-css-with-bem/
published: true
date: 2017-10-03 13:10:22
---
This blog and video are especially for Developers who want to optimize their CSS. It is very important to have readable CSS, for your teammates and yourself.

It will help you and your team with developing the website or application further at a later moment.

In my opinion, the CSS naming convention BEM is the perfect way to write your CSS classes and selectors better than before.

If you like a visual example of how I would change my already CSS developed to the more readable BEM, please check out the video.

If you are more a person to read, please follow the text below

<Youtube url="https://youtu.be/ah1qRTWVVjY" />

<h2><b>Video notes</b></h2>
<b>Example website</b>

For this example I used a Bootstrap theme, you can <a href="https://www.quackit.com/html/templates/simple_website_templates.cfm">download the Business theme for free</a>.

<b>Sublime Text</b>

In this editor I used the Sublime Text editor. <a href="https://www.sublimetext.com">You can download it for free</a>. If you want to a real pro with Sublime Text, please check out the <a href="http://bit.ly/WESBOS-SUBLIME">course/book of our friend Wes Bos</a>.

<b>Detailed BEM information</b>

If you want to read the BEM documentation, please check it on the <a href="http://getbem.com/introduction/">BEM website</a>.

In my video, I showed a <a href="https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">detailed blog post about BEM on the CSSwizardy website</a>.

Let's get into the code !
<h2><b>Step 1: HTML &amp; CSS how we learned it</b></h2>
When you learn to write CSS, it would be something simulair to this:

<b>HTML</b>

```html
<nav>
   <ul>
    <li><a>Home</a></li>
    <li><a>About</a></li>
    <li><a>Blog</a></li>
  </ul>
</nav>
```

<b>CSS</b>

```css
nav {
  height: 60px;
  max-width: 1024px;
}

nav ul {
  margin: 0;
  padding: 0;
  text-align: center;
}

nav ul li {
  display: inline;
}

nav ul li a {
  display: inline-block;
  padding: .5em 1em;
}
```

<b>Analysing the HTML &amp; CSS</b>

If you analyse the HTML and CSS we see the following.

<ul>
 	<li>Structure with only elements</li>
 	<li>No class names</li>
 	<li>Multi level selectors</li>
</ul>

<b>Problems you will discover with writing HTML &amp; CSS like this!</b>

When I started with Frontend Development, this was the way I was told to write it.

Maybe you won’t see the problem, but at the end of this blog you will know it for sure!

The problems you will discover with this (in the video you will see it):
<ul>

 	<li>If you will use the same HTML somewhere else, things will be messy if you change it here, because it will reflect everywhere! So it’s not scalable.</li>
 	<li>To overwrite the styling you will have to write very specific selectors with multiple levels or even whorse, use !important to overwrite.</li>
 	<li>This will cause a lot of bugs with big CSS files.</li>
 	<li>The CSS selectors are not explaining where you can find the HTML elements on the page. So it is not self-explaining.</li>
</ul>
<h2><b>Step 2: Optimise your HTML &amp; CSS a little bit better</b></h2>
When I had a few years of experience in Frontend Development my HTML &amp; CSS started looking like this:

<b>HTML</b>

```html
<nav class=“navigation”>
   <ul>
    <li><a>Home</a></li>
    <li><a>About</a></li>
    <li><a>Blog</a></li>
  </ul>
</nav>
```

<b>CSS</b>

```css
.navigation {
  height: 60px;
  max-width: 1024px;
}

.navigation ul {
  margin: 0;
  padding: 0;
  text-align: center;
}

.navigation li {
  display: inline;
}

.navigation a {
  display: inline-block;
  padding: .5em 1em;
}
```

<b>Analysing the HTML &amp; CSS</b>

If you analyse the more optimised HTML and CSS we see the following.

<ul>
 	<li>The CSS selectors are shorter</li>
 	<li>The CSS selectors have a less specifity</li>
 	<li>The CSS selectors contains some more context, but not the context that BEM could give.</li>
</ul>

When I was at the point of Developing this, it was quite optimised for me, I thought . But it took me a few years to find out that I needed some more optimisation. Because there were still a few issues.

<ul>
 	<li>If i needed to overwrite styling, it was still needed to add a few layers to my selectors by making it more specific.</li>
 	<li>Sometimes when working with CSS libraries/frameworks I still needed to use !important sometimes .</li>
 	<li>The selectors were not that self-explaining.</li>
</ul>

<h2><b>Step 3: Using BEM to write better HTML &amp; CSS</b></h2>

When I discovered that browsers are reading selectors different than humans, it was like “what? huh?” . This was so new for me! I discovered that my CSS selectors were not that good as I thought.

So when searching for methods to take action and make the CSS selectors better, I discovered BEM. In the video, you can check out how I apply BEM on the CSS and HTML on an example website.

In this example you can see how the HTMl &amp; CSS according to BEM will look like.

<b>HTML</b>

```html
<nav class=“main-nav”>
  <ul class=“main-nav__list”>
    <li class=“main-nav__list-item”><a class=“main-nav__link-item”>Home</a></li>
    <li class=“main-nav__list-item”><a class=“main-nav__link-item”>About</a></li>
    <li class=“main-nav__list-item”><a class=“main-nav__link-item main-nav__link-item—active”>Blog</a></li>
  </ul>
</nav>
```

<b>CSS</b>

```css
.main-nav {
  height: 60px;
  max-width: 1024px;
}

.main-nav__list {
  margin: 0;
  padding: 0;
  text-align: center;
}

.main-nav__list-item {
  display: inline;
}

.main-nav__link-item {
  display: inline-block;
  padding: .5em 1em;
}

.main-nav__link-item—active {
  font-weight: bold;
  color: red;
  background: grey;
}
```

<b>Analysing the HTML &amp; CSS</b>

If you analyse the HTML &amp; CSS you will discover a class names on every element. Class names that are self-describing. You don’t need to look to a website to read where this component stands on page.

It declares for itself that it is the main navigation. All the list items and links will also directly give context for you and your team who are working on the same code.

Let’s check out if you fix the problems we saw before.

<ul>
 	<li>Now you can copy the HTML and it will stay intact. If you want to re-use the HTML, change .main-nav for “footer-nav” and you won’t see any inherited styling from the main-navigation. So this is perfectly scalable.</li>
 	<li>If you want to overwrite the styling of 1 or multiple elements, you only have to add another class name, just that simple!</li>
 	<li>Especially when you use a CSS pre-processor your Development structure will have a good architecture.</li>
 	<li>The CSS selectors and class names are self-describing. So it is easy to find now. It gives a lot more context than before.</li>
</ul>

<em><strong>Updated</strong>: 04-10-2017 on 14:27</em>
<h2>Other BEM example's</h2>
If your not convinced by my example why you should use BEM, and that is no problem! Please check out the <a href="https://seesparkbox.com/foundry/bem_by_example">site of Sparkbox</a>, there is a very detailed and practical example of how you can use BEM in your development. (<a href="https://www.reddit.com/r/css/comments/73zu80/how_to_write_better_css_with_bem/">I got this tip from one of the comments on Reddit</a>!
<h2>If you need help</h2>
If you need any help with turning your CSS into the BEM structure, please let me know in the comments or on Messenger 😉!
