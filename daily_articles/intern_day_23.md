## Day 23 of Internship

### CRUD Operations in Angular

What is CRUD? It means **Create, Read, Update, Delete**. These are called CRUD operations.

- **CREATE**: It allows users to add new data records to the application’s data store.
- **READ**: It allows users to view and read the data, displaying a list of items.
- **UPDATE**: It allows users to modify the data, like updating a user profile.
- **DELETE**: This operation is used to remove data from the application’s data storage.

---

### Angular Project

I started my **Todo list project** using Angular. This project contains all CRUD operations, so that’s why I chose this project first. 

First, I started the Angular project with `components.html`. I created titles, some `div` classes, then a heading as **My Todo List**. Then, I created the body part containing an input box and a button. Next, I created some `div` elements for tasks and added a delete button to the task box.

I used a Bootstrap link for styling. Some Bootstrap classes I used:

- **m** - stands for margin
- **py** - stands for padding (vertical)
- **px** - stands for padding (horizontal)

I learned about **Template URL**, which in Angular components, specifies the external HTML files that define the component view.

I used `*ngFor` to iterate through items. Then, I learned how to import files in Angular and how to create files using the **VS Code terminal**.

So far, I have only completed the **Create** operation. I will continue working on the other operations soon.

---

### Components in Angular

Components are the **foundation building blocks** for any Angular application. Each component consists of three parts:

- **TypeScript Class**
- **HTML Template**
- **CSS Style**

#### TypeScript Class
- It adds types and access modifiers like `public`, `private`, `protected`, and features such as `readonly` fields, `static` members, and parameter properties.
- It is used to create functions.

#### HTML Template
- Used for structuring HTML inside components.
- Declared as a `template`, where HTML code is written.

#### CSS Style
- Used to style the Angular page inside the component.
- Defined directly inside the component file using inline CSS.

---

### How to Run Angular

I learned how to **run an Angular project** using a command in the VS Code terminal. The command is:

```sh
ng s my-app
```

Explanation of the command:

- `ng` - Angular CLI command
- `s` - Stands for **serve**, which runs the Angular project
- `my-app` - The name of the created Angular project

---

### TypeScript

I learned about **TypeScript**. It is a programming language similar to JavaScript.

- TypeScript allows specifying **data types** within the code.
- It has the ability to **report errors** when types don’t match.

---

### Conclusion

I learned many things on **Day 23**. It was very useful for building web applications, and it helped improve my thinking as well. I want to improve even more, so I will put in more effort in the upcoming days!
