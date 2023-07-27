// import React from 'react';
import Todo from './Todo';

function TodoList({
    todos,
    addTodo,
    completedTodo,
    editTodoText,
    deleteTodo
}) {
    // console.log("todos", todos);
    // console.log("addTodo", addTodo);
    // console.log("completedTodo", completedTodo);
    // console.log("editTodoText", editTodoText);
    // console.log("deleteTodo", deleteTodo);

  return (
    <div>
        <h1>Create Todo</h1>
        <input type="text" onKeyDown={(e) => {e.key === "Enter" && addTodo(e)}}/>
        {todos.length ?
            <>
                <h2>Todo List</h2>
                <ul className="todolist">
                    {todos.filter((i) => !i.completed).map((todo) => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            completedTodo={completedTodo}
                            editTodoText={editTodoText}
                            deleteTodo={deleteTodo}
                        />
                    ))}
                </ul>
                <h2>Comleted Items </h2>
                <ul className="todoList">
                    {todos.filter((i) => i.completed).map((todo) => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            completedTodo={completedTodo}
                            editTodoText={editTodoText}
                            deleteTodo={deleteTodo}
                        />
                    ))}
                </ul>
            </>
        :
            <h3>No todos added, yet...</h3>}
    </div>
  );
}

export default TodoList;