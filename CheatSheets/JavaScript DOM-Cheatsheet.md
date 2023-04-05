![JavaScript DOM Tutorial for Beginners](https://vishal-raj-1.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2ce8ae32-c03f-42db-9865-9a8abc50aa83%2Fjs.png?table=block&id=408271f3-22a5-4395-8ee8-755bc459674e&spaceId=2119cbee-b8d9-4533-9b59-63ea95d76e4e&width=250&userId=&cache=v2)

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


## Learn More about JavaScript DOM from here:
[![JS DOM Tutorial for Beginners](https://i.ytimg.com/vi/85jzHRTVdsc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDs_B6goLnSFqU6x2aesa56jJmg_Q)](https://www.youtube.com/watch?v=85jzHRTVdsc&t=5s&ab_channel=VishalRajput "JS DOM Tutorial for Beginners")
