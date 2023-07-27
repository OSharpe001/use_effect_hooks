import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    const newTodo = {
      text: e.target.value,
      id: Date.now(),
      completed: false
    };
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    setTodos([
      ...todos,
      newTodo
    ]);
    e.target.value = "";
  };

  const completedTodo = (id) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id);
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed;
    localStorage.setItem("todos", JSON.stringify([...todosCopy]));
    setTodos([...todosCopy]);
  };

  const editTodoText = (id, e) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id);
    todosCopy[indexOfTodo].text = e.target.value;
    localStorage.setItem("todos", JSON.stringify([...todosCopy]));
    setTodos([...todosCopy]);
    e.target.value = "";
  };

  const deleteTodo = (id) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id);
    todosCopy.splice(indexOfTodo, 1);
    localStorage.setItem("todos", JSON.stringify([...todosCopy]));
    setTodos([...todosCopy]);
  };

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos && savedTodos !== "undefined" && savedTodos !== "null") {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  return (
    <div className="App">
      <TodoList
        todos={todos}
        addTodo ={addTodo}
        completedTodo={completedTodo}
        editTodoText={editTodoText}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;

// function App() {
//   const [count, setCount] = useState(0);
//   const [evenCounter, setEvenCounter] = useState(0);

//   useEffect(() => {
//   console.log("I'm a random log")
// }, [evenCounter]);

//   const handleIncrement = () => {
//     setEvenCounter((count+1) % 2 === 0 ? evenCounter + 1 : evenCounter);
//     setCount((prev) => prev + 1);
//   };

//   const handleDecrement = () => {
//     setEvenCounter((count-1) % 2 === 0 ? evenCounter - 1 : evenCounter);
//     setCount((prev) => prev - 1);
//   };

//   const handleReset = () => {
//     setCount(0);
//     setEvenCounter(0);
//   };

//   return (
//     <>
//       <h1>useEffect Hooks</h1>
//       <h3>Counter: {count}</h3>
//       <h3>Even Counter: {evenCounter}</h3>
//       <button onClick={handleIncrement}> + </button>
//       <button onClick={handleDecrement}> - </button>
//       <button onClick={handleReset}>Reset</button>
//     </>
//   );
// }

// export default App;
