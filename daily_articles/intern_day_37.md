# Day 37 of Internship

Hello

This is my day 37 of intern. In this day I learn about some important topics in JavaScript. I covered the concepts of recursion, Json methods, Spread operator. Then I implement some part of these things in my project.

---

## Recursion:

I learn about recursion what is recursion, Recursion is a process in which a function calls itself as a routine. This allows the function to be repeated several times, as it can call itself during its execution. It contains two cases. I mentioned below.

- Base case  
- Recursive case

### Base case:

Base case is the condition that stops the recursion. Without a base case we could not stop the function calling. It is more important for stop the function calling, we can use if condition for Base case.

**Example:**

```javascript
function recursiveFunction(n) {
    if (n === 0) {
        return 1;
    }
}
```

This is example of base case. In this example function becomes stop while value comes 0.

---

### Recursive case:

This is where the function calls itself with a modified input. The function is stop calling when the base case becomes true.

**For example:**

```javascript
function factorial(n) {
    if (n === 0) {
        return 1;  // ---- This is  base case
    } else {
        return n * factorial(n - 1); // ---- This is recursive case
    }
}

console.log(factorial(5)); // ---- Output: 120
```

In this example `n * factorial` calls the function itself — this is recursive case.

---

## JSON Method:

I learn about Json method; JSON stands for JavaScript Object Notation. It is a format for storing and transporting data. It has two methods.

- `JSON.stringify( )`  
- `JSON.parse( )`

---

### JSON.stringify():

`JSON.stringify()` converts a JavaScript value object into a string. This string represents the value in a format that can be easily stored or transmitted, as it is a plain text representation. It's commonly used when sending data to a server or storing it in a file. It helps to store the values in local storage.

---

### JSON.parse():

`parse()` method is used to convert a JSON string into a JavaScript object. It's become important when dealing with data in JSON format, interacting with APIs, or storing data in the browser.

---

## Copy writing:

I read copy write about **Extreme Ownership Chapter 4**. In this chapter I learn how ego can seriously mess things up, whether you're on a battlefield or in a business meeting. People get caught up in wanting to look like the smartest, strongest, or most important person in the room and that gets in the way of teamwork, progress, and even safety.

Real leadership means owning your mistakes, listening to others, and working together, even when your pride takes a hit. It's not about who's in charge — it’s about getting the job done and protecting the team.
