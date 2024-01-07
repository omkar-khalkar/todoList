import "./App.css";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { SlTrash } from "react-icons/sl";


const TodoInput = ({ todo, setTodo, addTodo, setTodos, todos }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        id="todo-input"
        name="todo"
        value={todo}
        placeholder="add task"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        onKeyUp={(e) => {
          if(e.key==='Enter') {
            e.preventDefault();
            setTodo(e.target.value);
            setTodos([...todos, todo]);
            setTodo('');
          }
        }}
      ></input>
      <button className="add-button" id="urmom" onClick={addTodo}>
        <MdAdd size={21}/>
      </button>
    </div>
  );
};

const TodoList = ({ todoList, removeTodo }) => {
  return (
    <div className="input-list">
      {todoList?.length > 0 ? (
        <ul className="todo-list">
          {todoList.map((entry, index) => (
            <div className="todo">
              <li key={index}>{entry}</li>
              <button className="delete-button" onClick={()=>{removeTodo(entry)}}>
                <SlTrash size={18}/>

              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>Add some tasks! :)</p>
        </div>
      )}
    </div>
  );
};



const App = () => {

  const [todo, setTodo] = useState("");
 
  const [todos, setTodos] = useState([]);
  
  const addTodo = () => {
    if (todo !== "") {
      
      setTodos([...todos, todo]);
      setTodo(""); 
    }
  };
  

  const deleteTodo = (task) => {
    const newTodos = todos.filter((todo) => {
      return todo !== task;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1> To-Do List!</h1>
      <div className="Content">
        <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} setTodos={setTodos} todos={todos}/>
        <TodoList todoList={todos} removeTodo={deleteTodo} />
      </div>
      
    </div>
  );
}

export default App;
