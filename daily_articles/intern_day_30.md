
# Hello

This is my day 30 of intern. In this day I did dashboard page for my trading applications this page contains deposit, withdraw, deposit and withdraw history, then Details of the trading id. Then I learn about display in CSS and flex direction. 

## Web trading angular project:

I did my dashboard page with angular. My dashboard contains some div, hr, and some heading tags then I use CSS to style the dashboard div I use some margin, padding, gradient background colour, then I use some box-shadow for my dashboard page I learn how to use box-shadow. Then I also learn about display in CSS and flex direction. Then I use some box icon from google for deposit, withdraw buttons. 

## Box-shadow:

The box-shadow property attaches one or more shadows to an element. The box-shadow adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

**Example:**

```css
Div {
    box-shadow: 5px 10px #888888;
}
```

## CSS Display:

The display property specifies the display behavior of the element. I mention some display type below.

- Block  
- Inline  
- Flex  
- Grid  

### Block:

Displays an element as a block element (like `<p>`). It starts on a new line and takes up the whole width. The `<div>` element is a block level element.  By default display contain block we can change into inline or something else.

**Example:**

```css
.block {
    display: block;
}
```

### Inline:

Displays an element as an inline element. Any height and width properties will have no effect. This is default. It displays in one block example I have h1 tag then I have h2 tag if I give inline the h2 displays beside of h1.

**Example:**

```css
.inline {
    display: inline;
}
```

### Flex:

The flex property sets the flexible length on flexible items. In flex property we also use flex direction. 

#### Flex-direction:

The flex-direction property in CSS is used to set the direction of the flex container's main axis. It can have one of four values: `row`, `row-reverse`, `column`, or `column-reverse`.

**Syntax:**

```css
flex-direction: row|row-reverse|column|column-reverse|initial|inherit;
```

**Example:**

```css
.flex {
    display: flex;
    flex-direction: row;
}
```

In this example the flex direction will be row the elements align in row side.

```css
.flex {
    display: flex;
    flex-direction: column;
}
```

In this example the flex direction will be column the elements align in column side.
