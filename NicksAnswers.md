# Fullstack Pop Quiz

### Instructions
- Fork and clone this repo.
- Answer the written questions.
- Complete the React app.
- You have 75 minutes.

---

### Explain the Model-View-Controller design pattern for web applications.

**Model**
- The model component handles functinality related to the data.
- It defines the shape of the data ("models" data) using methods that retrieve portions of data, that correspond to certain portions of the application.
- E.g. an `index` function that retrieves all records in a `user` table in the database.

**Controller**
- Uses routing to control when the models and views are updated.
- E.g. a `allUsers` route is associated with the `index` function.

**View**
- Where we view the data.
- What the user sees, and how the user triggers controller changes.

---

### In relational databases, what are the kinds of table relations? 

**One to one**
- A table relation in which one record in one table is associated with one record in another table.
- Example: A person associated with their user data on an app
- Sequelize: `hasOne` and `belongsTo` are used
- To store the FK, both tables are valid, but one way to reason about it is:
    - Does “x” rely on “y” to exist? If the answer is yes, then put the FK in x
    - So we'd put the FK in `user` since it can't exist without a `person`


**One to Many**
- A table relation in which one record in one table is associated with many records in another table. Those records cannot be associated with any other records from the original table.
- Example: A customer and their associated restaurant order data.
- Sequelize: `hasMany` and `belongsTo` are used
- Must place the FK in the `belongsTo` record, since the other way would see many FKs in a single record, since it is associated with many records.

**Many to Many**
- A table relation in which one record in one table is associated with many records in another table, and those records can be associated with many records from the original table.
- Example: A student and their associated classes, which are also associated with many students.
- Sequelize: `belongsToMany` is used
- Join Tables!

---
### In MongoDB, what is the difference between Embedded Documents and Document References? 
**Embedded Documents**
- embed entire entities into data that it’s associated with
- Can lead to large, unnecessary data calls if the embedded document is not required for the data call

**Reference Documents**
- E.g. in a relationship between one customer and many orders, we don’t want to embed the customer data in all the orders as this would lead to repetition
- Instead, store the customer data in its own collection and create a reference between the customer and the orders
- Whegitre should you store the reference? Depends on growth rate.
    - In this situation, the number of orders is unbounded, and we want to avoid unbounded reference arrays as this leads to unpredictable sizes.
    - So we'd instead want to store a reference to the customer in the orders.

---

### In React, what is Lifting State Up? 
- Act of initializing state in the closest common ancestor of all components who need that state.
- Allows us to pass state down through props to any component that needs it.

---

### In React, what is Conditional Rendering?
- Conditional rendering uses control flow to determine whether something is rendered based on the state of the application.
- A great use case for conditional rendering is when you want to map over an array of data. If you try to map over undefined data, an error will be thrown.
- Instead, we can conditionally render the list only if it's not empty:

```
function App() {

  const dataCollection = [{
    id: 1,
    title: 'hello',
  }];

  return (
    <div className="App">
      <ul>
        {
          dataCollection.length ? (
            dataCollection.map((item, index) => <li key={index}>{item.title}</li>)
          )
            : <li> No Items </li>
        }
      </ul>
    </div>
  );
}
```

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
