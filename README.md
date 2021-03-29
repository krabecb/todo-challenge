# Fullstack Pop Quiz

### Instructions
- Fork and clone this repo.
- Answer the written questions.
- Complete the React app.
- You have 75 minutes.

---

### Explain the Model-View-Controller design pattern for web applications.

with the mvc design pattern, we design a backend for our web application based on a Model for data input and storage. We, then, use our frontend to set up the "views" for user interaction with our database/backend. Lastly, our controller is our user. We create our models, the apparatus to view them, then relenquish handling to our controller (the user) to fulfill interactions with the application.

---

### In relational databases, what are the kinds of table relations? 
Give examples for each.
There are three main relations used in relational databases.
For my examples, I would like to layout a basic wireframe to assist in relating the data points.

a social media platform that allows user to user interaction as well as users an individualized profile, and categorized public posting.

1:1 (one to one) relation
this would be best exemplified as a single user's profile information. with a one to one relationship, there is one data point within a given data structure (users) related to a single data point within a separate data structure (profiles). a single user can only have a single profile with this relation.

1:M (one to many) relation
this would be best exemplified as a single user's posting ability. with a one to many relationship, there is one data point within a given data structure (users) related to many data points within a separate data structure (posts). a single user can have many unique posts with this relation.

M:M (many to many) relation
this would be best exemplified as the categories that user posts can be organized by. with a many to many relationship, there are many data points within a given data structure (categories) related to many data points within a separate data structure (posts). a single category can have many posts, a single post can have many categories. many categories can have many posts.

---
### In MongoDB, what is the difference between Embedded Documents and Document References? 
Give examples for each.

in mongoDB specifically, the difference between embedded documents and document references are that embedded documents are models nested within a given model, where document references are the addition of a separate model's primary key included within the creation of said document. no avaiable examples to provide at this time.

---

### In React, what is Lifting State Up? 
Give an example.
Lifting state up is the act of passing a variable's state from one component to a different component through it's props. 

a great example of this would be setting a state variable that tracks a user's interaction with a specific element in x component, then passing that variable's updated state to y component after user interaction that will cause y component function differently based on the user's interaction with the element in x component.

---

### In React, what is Conditional Rendering?
Give an example.

in react, conditional rendering is setting a component to render based on conditions set and met by a specific function/code block.

a great example of this is a conditional rendering method i used in my third project that displays elements based on the user's interaction with components in a separate "game" page. if the user interacted in a way that was deemed "correct" by the logic set on the "game" page, the elements on their "stats" page would render and update in relation to the variables passed through our database that were updated on the "game" page. this required the use of a map function as well as two conditional code blocks that compared the state of the user with specific logic variables to determine whether or not a component was generated, and what css styling would be attached when the component was generated.

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
