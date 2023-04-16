<img src="https://github.com/Vishal-raj-1/Frontend-Development-Essentials/blob/main/Assets/Icons/css.png" width="200px" />


# CSS Flexbox CheatSheet

### Display Property

```css
/* Set the container to a flexbox */
.container {
  display: flex;
}
```

### Flex Direction Property

```css
/* Set the main axis direction */
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

### Flex Wrap Property

```css
/* Allow items to wrap */
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

### Flex Flow Property

```css
/* Combine flex-direction and flex-wrap */
.container {
  flex-flow: row wrap;
}
```

### Justify Content Property

```css
/* Align items along the main axis */
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

### Align Items Property

```css
/* Align items along the cross axis */
.container {
  align-items: stretch | flex-start | flex-end | center | baseline;
}
```

### Align Content Property

```css
/* Align wrapped lines along the cross axis */
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

### Gap Property

```css
/* Set the gap between flex items */
.container {
  gap: 10px;
}
```

### Order Property

```css
/* Change the order of flex items */
.item {
  order: 2;
}
```

### Flex Grow Property

```css
/* Allow an item to grow to fill available space */
.item {
  flex-grow: 1;
}
```

### Flex Shrink Property

```css
/* Allow an item to shrink to fit available space */
.item {
  flex-shrink: 1;
}
```

### Flex Basis Property

```css
/* Set the initial main size of an item */
.item {
  flex-basis: auto | 0 | 50%;
}
```

### Flex Property

```css
.item {
    flex: 3 5 500px; /* shorthand for flex-grow flex-shrink flex-basis  */
}
```

### Align Self Property

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

# Learn More about CSS Flexbox from here:

<div align="center">
  <a href="https://youtu.be/3nLglJtUHjA" >
    <img src="http://img.youtube.com/vi/3nLglJtUHjA/0.jpg" alt="Learn More about CSS Flexbox from here" />
  </a>
</div>
