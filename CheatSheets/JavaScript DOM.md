<img src="https://github.com/Vishal-raj-1/Frontend-Development-Essentials/blob/main/Assets/Icons/js.png" width="200px" />

# JavaScript DOM Cheatsheet

### What is DOM?

The Document Object Model (DOM) is a programming interface for HTML documents. It represents the page so that programs can change the document structure, style, and content.

## DOM Methods to find HTML elements:

### Get Element by Id

Returns the element that has the ID attribute with the specified value.

```jsx
let element = document.getElementById("myElement");
```

### Get Elements By Class Name

Returns a collection of all elements in the document with the specified class name.

```jsx
let elements = document.getElementsByClassName("myClass");
```

### Get Elements By Tag Name

Returns a collection of all elements in the document with the specified tag name.

```jsx
let elements = document.getElementsByTagName("p");
```

### Query Selector All

Returns all elements that matches a specified CSS selector(s) in the document

```jsx
let elements = document.querySelectorAll(".myClass");
```

### InnerHTML

Gets or sets the HTML content within an element.

```jsx
element.innerHTML = "<p>New HTML content</p>";
```

### InnerText

Gets or sets the text content within an element.

```jsx
element.innerText = "New text content";
```

### Add Class

Adds one or more class names to an element.

```jsx
element.classList.add("newClass");
```

### Remove Class

Removes one or more class names from an element.

```jsx
element.classList.remove("oldClass");
```

### Add Event Listener

Attaches an event handler to the specified element.

```jsx
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
  console.log("Button clicked!");
});
```


# Learn More about JavaScript DOM from here:

<div align="center">
  <a href="https://youtu.be/85jzHRTVdsc" >
    <img src="http://img.youtube.com/vi/85jzHRTVdsc/0.jpg" alt="JavaScript DOM Manipulation Crash Course" />
  </a>
</div>
