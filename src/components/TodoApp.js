import { useState } from 'react';
import { getInitialData } from '../utils';
import TodoFooter from './TodoFooter';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(getInitialData());
  const [editTodo, setEditTodo] = useState(null);

  return (
    <>
      <div className='todo-app'>
        <h1 className='heading-title'>TODO APP</h1>
        <TodoInput
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />

        {todos && todos.length ? (
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        ) : (
          <p className='text-message'>No Task...</p>
        )}
      </div>
      <TodoFooter />
    </>
  );
};

export default TodoApp;
