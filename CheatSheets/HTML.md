<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/HTML/IMAGES/html5.png" width="250px" />
</div>

# HTML CheatSheet
# HTML5 (2008)
- The final version of HTML5 was published as a W3C Recommendation on October 28, 2014. 
- The content inside the <body> section will be displayed in a browser. 
- The content inside the <title> element will be shown in the browser's title bar or in the page's tab.
<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/HTML/IMAGES/i1.png" width="800px" />
</div>

## FACTS
- The <!DOCTYPE> declaration is not case sensitive.
- HTML is Not Case Sensitive
- All HTML elements can have attributes
- The href is attribute of <a> element/tag
- The src attribute is attribute of <img> element/tag
- The width and height attributes are attributes of <img> element/tag
- The alt is attribute of <img> element/tag


## Basic Structure
```html

<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>
    Content goes here
  </body>
</html>

```


## Headings
```html

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

```

## Paragraphs
```html

<p>This is a paragraph</p>

```

## Line Break
```html

<p>This is the first line.<br>This is the second line.</p>

```

## Horizontal Line
```html
<hr>
```

## Pre Tag (preformatted text)
The pre tag in HTML is used to display blocks of text or code exactly as they are, preserving whitespace and line breaks. It is useful for presenting content that requires maintaining precise spacing or indentation.
``` html
<pre>
    This is some
    preformatted
    text.
</pre>
```

## Lists
### Unordered List
```html
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
```

### Ordered List
```html
<ol>
  <li>List item 1</li>
  <li>List item 2</li>
</ol>
```

## Tables
```html 
<table>
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Column 1</td>
      <td>Row 1, Column 2</td>
    </tr>
    <tr>
      <td>Row 2, Column 1</td>
      <td>Row 2, Column 2</td>
    </tr>
  </tbody>
</table>
```

## Forms
```html
<form>
  <label for="input">Input Label:</label>
  <input type="text" id="input" name="inputName">
  
  <label for="checkbox">Checkbox Label:</label>
  <input type="checkbox" id="checkbox" name="checkboxName" value="checkboxValue">
  
  <label>Radio Label 1:</label>
  <input type="radio" name="radioName" value="radioValue1">
  
  <label>Radio Label 2:</label>
  <input type="radio" name="radioName" value="radioValue2">
  
  <label for="date">Date:</label>
  <input type="date" id="date" name="dateName">
  
  <label for="number">Number:</label>
  <input type="number" id="number" name="numberName">
  
  <label for="color">Color:</label>
  <input type="color" id="color" name="colorName">
  
  <label for="file">File:</label>
  <input type="file" id="file" name="fileName">
  
  <button type="reset">Reset</button>
  <button type="submit">Submit</button>
</form>
```

## Formatting Elements TAGS
<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/HTML/IMAGES/Formatting_Elements.png" width="800px" />
</div>

## Quotation and Citation TAGS
bdo TAG (Bi-Directional Override)
```html
<bdo dir="rtl">This line will be written from right to left</bdo>
```
<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/HTML/IMAGES/Quotation_and_Citation.png" width="800px" />
</div>



## Comment Tag
```html
<!-- Write your comments here -->
```

## Colors
[COLOR FORMATIONS](https://htmlcolorcodes.com/ "Named link title")

## Links
```html
<a href="https://www.example.com">Link text</a>
```

## Links (Create Bookmarks)
This will help to jump from current position of tag to the chapter 4
```html
<h2 id="C4">Chapter 4</h2>
<a href="#C4">Jump to Chapter 4</a>
```

## Images
```html
<img src="image.jpg" alt="Image description">
```

## Image Maps
With image maps, you can create clickable areas on an image.(which can be used as link)
```html
<img src="image.jpg" alt="image" usemap="#workmap">
<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
</map>
```

## Background Images
```css
.example {
  background-image: url('path/to/image.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #f5f5f5;
  background-attachment: fixed;
  background-origin: padding-box;
  background-blend-mode: multiply;
  background-clip: content-box;
  background-opacity: 0.5;
}
```
<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/HTML/IMAGES/Background_Images.png" width="800px" />
</div>

## Favicon
A favicon is a small image displayed next to the page title in the browser tab.
```html
<head>
  <title>My Page Title</title>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
```

## Iframes
An inline frame is used to embed another document within the current HTML document.
### Youtube Video
```html 
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

### External Webpage
```html 
<iframe src="https://www.example.com"></iframe>
```

## Audio
```html
<audio src="audio_file.mp3" controls></audio>
```

## Video
```html
<video src="video_file.mp4" controls></video>
```

## Block and Inline Elements
### Block-level Elements
- A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.
- A block-level element always takes up the full width available (stretches out to the left and right as far as it can).
- The <div> element is a block-level and is often used as a container for other HTML elements
```html
<div>
  <h1>Welcome to Our Website</h1>
  <p>This is a paragraph of text.</p>
</div>
```

### Inline Elements
- An inline element does not start on a new line.
- The <span> element is an inline container used to mark up a part of a text, or a part of a document
```html
<p>
  This is a <span style="color: blue;">blue</span> text.
</p>
```

## Difference Between Class and ID
- A class name can be used by multiple HTML elements, while an id name must only be used by one HTML element within the page

## Layout Elements

<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/HTML/IMAGES/layout.png" width="800px" />
</div>

## Layout Techniques
- CSS framework : CSS framework, like W3.CSS or Bootstrap.
- CSS float property : It is common to do entire web layouts using the CSS float property.
- CSS flexbox 
- CSS grid

## Semantic and Non-Semantic Elements
A semantic element clearly describes its meaning to both the browser and the developer.
- Examples of semantic elements: <form>, <table>, and <article> - Clearly defines its content.
- Examples of non-semantic elements: <div> and <span> - Tells nothing about its content.

## Responsive Web Design
Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones):
Responsive screen
1. Viewport
By setting viewports as per device sizes

1.  Responsive Images
- Using the width Property
If the CSS width property is set to 100%, the image will be responsive and scale up and down
- Using the max-width Property
If the max-width property is set to 100%, the image will scale down if it has to, but never scale up to be larger than its original size.

3. picture TAG
The HTML <picture> element allows you to display different pictures for different devices or screen sizes.
It is used to make a responsive web page
```html
<picture>
  <source media="(min-width: 650px)" srcset="img_food.jpg">
  <source media="(min-width: 465px)" srcset="img_car.jpg">
  <img src="img_girl.jpg">
</picture>
```

4. Responsive Text Size
The text size can be set with a "vw" unit, which means the "viewport width".
```html
<h1 style="font-size:10vw">Hello World</h1>
```

## HTML elements
1. head Element/TAG
The head tag contains metadata.Metadata typically define the document title, character set, styles, scripts, and other meta information.

2. title Element
The content of a page title is very important for search engine optimization (SEO)

3. style Element
Will be discussed at end of this document and in CSS part

4. link Element
```html
<link rel="stylesheet" href="mystyle.css">
```

5. meta Element
The meta element is typically used to specify the character set, page description, keywords, author of the document, and viewport settings.
This content is used by a SEO.
Setting The Viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/HTML/IMAGES/meta.png" width="800px" />
</div>


## TAGS AND ITS ATTRIBUTES
### FORM
<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/HTML/IMAGES/form_attributes.png" width="800px" />
</div>

### ANCHOR
<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/HTML/IMAGES/anchor_attributes.png" width="800px" />
</div>

### IMAGES
<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/HTML/IMAGES/image_attributes.png" width="800px" />
</div>

### AUDIO
<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/HTML/IMAGES/audio_attributes.png" width="800px" />
</div>

### VIDEO
<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/HTML/IMAGES/video_attributes.png" width="800px" />
</div>

### STYLE ATTRIBUTE 
<div align="center">
<img src="https://github.com/Ronixa584/WEB-DEVELOPMENT/blob/main/HTML/IMAGES/style_attribute.png" width="800px" />
</div>

# Learn More about HTML from here:

<div align="center">
  <a href="https://youtu.be/EOwWXNBKtBM" >
    <img src="http://img.youtube.com/vi/EOwWXNBKtBM/0.jpg" alt="HTML Crash Course" />
  </a>
</div>

