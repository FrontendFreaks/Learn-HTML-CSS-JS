# CSS CheatSheet

## Adding CSS to HTML (3 methods & precedence)

```css

<!-- Inline CSS -->
<h1 style="color: red;">Hello World</h1>

<!-- Internal CSS -->
<head>
  <style>
    h1 {
      color: red;
    }
  </style>
</head>

<!-- External CSS -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>

```

## Understanding CSS syntax

```css

selector {
  property: value;
}

```

## CSS selectors and specificity


```css 
/* Element selector */
h1 {
  color: red;
}

/* Class selector */
.heading {
  color: blue;
}

/* ID selector */
#title {
  color: green;
}

/* Specificity example */
.heading#title {
  color: yellow;
}
```


## Working with CSS fonts

```css
/* Font family */
body {
  font-family: Arial, sans-serif;
}

/* Font size */
h1 {
  font-size: 3rem;
}

/* Font weight */
h2 {
  font-weight: bold;
}

```

## Using CSS colors effectively


```css

/* Hex code */
h1 {
  color: #ff0000;
}

/* RGB */
.heading {
  color: rgb(0, 255, 0);
}

/* HSL */
#title {
  color: hsl(240, 100%, 50%);
}

```

## CSS backgrounds and gradients

```css
/* Background color */
body {
  background-color: #fff;
}

/* Background image */
.container {
  background-image: url(bg.jpg);
}

/* Linear gradient */
.heading {
  background-image: linear-gradient(to bottom, #ff0000, #0000ff);
}

/* Radial gradient */
.title {
  background-image: radial-gradient(circle, #ff0000, #0000ff);
}

```

## Creating CSS borders and Shape

```css

/* Border */
.container {
  border: 1px solid black;
}

/* Border radius */
.box {
  border-radius: 10px;
}

/* Box shadow */
.heading {
  box-shadow: 5px 5px 10px #888888;
}

/* Triangle */
.triangle {
  width: 0;
  height: 0;
  border-top: 50px solid red;
  border-right: 50px solid transparent;
}

/* Circle */
.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
}

```


## Understanding the CSS box model

```css

/* Content box */
.container {
  width: 300px;
  height: 200px;
}

/* Padding box */
.container {
  padding: 10px;
}

/* Border box */
.container {
  border: 1px solid black;
}

/* Margin box */
.container {
  margin: 10px;
}


```

## Formatting CSS text

```css

/* Text alignment */
h1 {
  text-align: center;
}

/* Text decoration */
a {
  text-decoration: none;
}

/* Text transformation */
.heading {
  text-transform: uppercase;
}

/* Letter spacing */
.title {
  letter-spacing: 2px;
}

/* Line height */
p {
  line-height: 1.5;
}


```


## Creating CSS Links

```css

/* unvisited link */
a:link {
  color: blue;
}

/* visited link */
a:visited {
  color: purple;
}

/* mouse over link */
a:hover {
  color: red;
}

/* selected link */
a:active {
  color: green;
}

```

## Using CSS Display Property

```css

/* block-level element */
div {
  display: block;
}

/* inline-level element */
span {
  display: inline;
}

/* inline-block element */
img {
  display: inline-block;
}

```

## Positioning Elements with CSS

```css

/* static positioning (default) */
div {
  position: static;
}

/* relative positioning */
div {
  position: relative;
  top: 10px;
  left: 20px;
}

/* absolute positioning */
div {
  position: absolute;
  top: 10px;
  left: 20px;
}

/* fixed positioning */
div {
  position: fixed;
  top: 10px;
  left: 20px;
}


```

## CSS Media Queries

```css

/* Small screens (mobile devices) */
@media only screen and (max-width: 767px) {
  /* Styles go here */
}

/* Medium screens (tablets) */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  /* Styles go here */
}

/* Large screens (desktops) */
@media only screen and (min-width: 1024px) and (max-width: 1279px) {
  /* Styles go here */
}

/* Extra large screens (large desktops) */
@media only screen and (min-width: 1280px) {
  /* Styles go here */
}


```


# Learn More about CSS from here:

[Click Here](https://www.w3schools.com/css/)
