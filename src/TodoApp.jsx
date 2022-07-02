import React, { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis';

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  // console.log(todo);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const previousTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>Is Loading: {isLoading ? 'True' : 'False'}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={previousTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
      {/* <ul>
        {todos.map(({ title, id, completed }) => (
          <li key={id}>
            <strong>{completed ? 'DONE' : 'Pending'} </strong>
            {title}
          </li>
        ))}
      </ul> */}
    </>
  );
};
