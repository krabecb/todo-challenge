# Fullstack Pop Quiz

### Instructions
- Fork and clone this repo.
- Answer the written questions.
- Complete the React app.
- You have 75 minutes.

---

### Explain the Model-View-Controller design pattern for web applications.
- The MVC design pattern for web applications divides the application into three more easily managed sections. The M in MVC, or Model, is the sections of an application that moulds data into a structure suitable to the application's needs. The View section is where the UI is developed, and where data can be displayed in ways that make sense to the user. The C in MVC, or Controller, is how where code is written to move data to and from the application and the application's database. Here, routes are created that determine what action is acted with data both on the front end of the application, and in the database.
---

### In relational databases, what are the kinds of table relations? 
Give examples for each.
- One to One
- One to Many
- Many to Many
---
### In MongoDB, what is the difference between Embedded Documents and Document References? 
Give examples for each.
- An embedded document is one which is wholly stored within another data structure. For example, if you were to have an array of fruit objects, and each object in the array contained an array of its varieties as objects, the varieties, in this case, would be embedded within the fruit object at the level above them.
- A document referece is a lot like a star map you can buy for an undetermined fee on Hollywood Blvd. The document contains information you need to find any particlar star, at their home address or in the Walk of Fame, but does not contain the celebrity themselves. 
---

### In React, what is Lifting State Up? 
Give an example.
- In React, Lifting State Up is how you make data, altered in child elements, available to parent components and their peers. This is done by passing a reference to the target data down to the child component via props. When the child component accesses the reference and alters the data, the data then changes it at it's origin.
---

### In React, what is Conditional Rendering?
Give an example.
- In React, conditional rendering is making UI elements visible to the user dynamically, or dependent on a condition being met. This is best achieved by storing a property in state that is a type boolean, which, if true, would render an element to the UI that otherwise would not be.
---

### Complete The React App

- This repo contains an almost-working frontend React todo app.
- In [src/components/Form.js](src/components/Form.js), complete the 4 tasks marked with `//TODO`.
- To check if you are complete, you can type
```bash
npm run test
```
- You will see there are 5 tests to pass, 1 will be passing to begin with
- To exit out of the tests type `q` or control C, all 5 Tests or the 1 Test Suite should be passing.
