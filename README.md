# Fullstack Pop Quiz

### Instructions

- Fork and clone this repo.
- Answer the written questions.
- Complete the React app.
- You have 75 minutes.

---

### 1. Explain the Model-View-Controller design pattern for web applications.  
   - **Model**: Defines the database structure, field names and types
   - **View**: Defines what should be rendered to the end user. This would primarily be a webpage but could be any object (ex. JSON)
   - **Controller**: Defines the internal routing and which View should be returned when a user accesses a matching URL (ex. /:id/view)

### 2. In relational databases, what are the kinds of table relations?
   - **One → One**: ex. One username belongs to one user
   - **One → Many**: ex. One Author has many articles, but each article belongs only to one Author
   - **Many ↔ Many**: ex. One category can be assigned to many articles, One article may have many categories

### 3. In MongoDB, what is the difference between Embedded Documents and Document References?
   - **Embedded Documents**: Exist within the parent collection and do not require additional database requests.
      -  **Movie Collection**
      
         Movie_ID | Movie Name | Reviews
         ---------|------------|-------------
         1        | Home Alone | Great Movie!
                  |            | So much fun!
                  |            | Terrible
   - **Document References**: Exist in an external collection and are accessed by a Primary Key. Requires additional database requests.
      -  **Movie Collection**
      
         Movie_ID | Movie Name | Reviews
         ---------|------------|---------------------
         1        | Home Alone | Reference: Review_ID
      
      - **Review Collection**
      
         Review_ID | Movie_ID | Reviews
         ----------|----------|-------------
         1         | 1        | Great Movie!
         2         | 1        | So much fun!
         3         | 1        | Terrible
         
### 4. In React, what is Lifting State Up?
   - **Lifting State Up**: When multiple Component’s state are affected by a common parent Component, the logic is placed in the shared parent Component. It controls the child Component’s state.
      - ex. Parent Calculator Component → Output field, number buttons, modifier buttons
      
### 5. In React, what is Conditional Rendering?
   - **Conditional Rendering**: Only rendering certain Components or content when a criteria is met.
      ``` jsx
      user_logged_in ? <h1>Welcome User</h1> : <h1>Please Log in</h1>
      ```

### 6. Complete The React App

- This repo contains an almost-working frontend React todo app.
- In [src/components/Form.js](src/components/Form.js), complete the 4 tasks marked with `//TODO`.
- To check if you are complete, you can type

```bash
npm run test
```

- You will see there are 5 tests to pass, 1 will be passing to begin with
- To exit out of the tests type `q` or control C, all 5 Tests or the 1 Test Suite should be passing.
