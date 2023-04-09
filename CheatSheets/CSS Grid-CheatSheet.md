# CSS Grid Cheatsheet
## 1. Grid container properties

## Display
```css
/* Sets the element to a grid container. */
.container {
  display: grid;
}
```

## Grid Template Columns
```css
/* Defines the columns of the grid. */
.container {
  grid-template-columns: 100px 100px 100px;
}
```

## Grid Template Rows
```css
/* Defines the rows of the grid. */
.container {
  grid-template-rows: 100px 100px;
}
```

## Grid Template Areas
```css
/* Defines the areas of the grid. */
.container {
  grid-template-areas: 
    "header header"
    "sidebar content"
    "footer footer";
}
```

## Gap
```css
/* Specifies the size of the gap between grid items. */
.container {
  gap: 10px;
}
```

## Justify Items
```css
/* Aligns items along the inline (row) axis. */
.container {
  justify-items: center;
}
```

# Align Items
```css
/* Aligns items along the block (column) axis. */
.container {
  align-items: center;
}
```

# Justify Content
```css
/* Aligns the grid along the inline (row) axis. */
.container {
  justify-content: center;
}
```

# Align Content
```css
/* Aligns the grid along the block (column) axis. */
.container {
  align-content: center;
}
```

## 2. Grid Item Properties
## Grid Column Start

```css
/* Specifies the start position of a grid item along the inline (row) axis. */
.item {
  grid-column-start: 1;
}
```

## Grid Column End
```css 
/* Specifies the start position of a grid item along the inline (row) axis. */
.item {
  grid-column-start: 1;
}
```

## Grid Row Start
```css
/* Specifies the start position of a grid item along the block (column) axis. */
.item {
  grid-row-start: 1;
}
```

## Grid Row End
```css
/* Specifies the end position of a grid item along the block (column) axis. */
.item {
  grid-row-end: 3;
}
```

## Grid Area
```css
/* Specifies both the start and end positions of a grid item. */
.item {
  grid-area: 1 / 1 / 3 / 3;
}
```

## Justify Self
```css
/* Aligns a grid item along the inline (row) axis. */
.item {
  justify-self: center;
}
```

## Align Self
```css
/* Aligns a grid item along the block (column) axis. */
.item {
  align-self: center;
}
```

## Learn More about CSS Grid from here:

[![CSS Grid Tutorial for Beginners](https://i.ytimg.com/vi/ULp7wPJ-rzQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAF_KnaTkQYj55zEN0fDGX-74JVKQ)](https://www.youtube.com/watch?v=ULp7wPJ-rzQ&ab_channel=VishalRajput "CSS Grid Tutorial for Beginners")
