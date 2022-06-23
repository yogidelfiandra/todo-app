/* eslint-disable no-restricted-globals */
import { TbTrash } from 'react-icons/tb';

const TodoDelete = ({ id, todos, setTodos }) => {
  const handleDelete = (id) => {
    const todoDelete = confirm('Are you sure you want to delete this todo?');

    if (todoDelete) {
      setTodos(todos.filter((todo) => todo.id !== id));
      alert('Todo has been deleted.');
    } else {
      alert('Alright, just stay here okay');
    }
  };

  return (
    <button className='todo-delete' onClick={() => handleDelete(id)}>
      <TbTrash size={24} />
    </button>
  );
};

export default TodoDelete;
