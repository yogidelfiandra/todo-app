import { TbEdit } from 'react-icons/tb';

const TodoEdit = ({ id, todos, setEditTodo }) => {
  const handleEdit = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  return (
    <button className='todo-edit' onClick={() => handleEdit(id)}>
      <TbEdit size={24} />
    </button>
  );
};

export default TodoEdit;
