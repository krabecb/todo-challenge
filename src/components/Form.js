const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    const inputTextHandler = (e) => {
      setInputText(e.target.value);
    };
  
    const submitTodoHandler = (e) => {
      e.preventDefault();
      if (inputText.length > 0) {
        setTodos([
          ...todos,
          { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
      }
      //TODO: CLEAR USER INPUT
      setInputText("");
    };
  
    const statusHandler = (e) => {
      //TODO: TRACK USER INPUT
      setStatus(e.target.value);
    };
  
    return (
      <form>
        <input
          data-testid="input"
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
          placeholder="Add item to your list..."
        />
        <button
          data-testid="submit-test"
          className="todo-button"
          type="submit"
          onClick={submitTodoHandler}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select
            data-testid="select"
            onChange={statusHandler}
            name="todos"
            className="filter-todo"
          >
            <option value="all">All</option>
            <option data-testid="completed" value="completed">
              Completed
            </option>
            <option data-testid="uncompleted" value="uncompleted">
              Uncompleted
            </option>
          </select>
        </div>
      </form>
    );
  };
  
  export default Form;
  