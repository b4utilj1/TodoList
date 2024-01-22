import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { TodoUpdate } from './TodoUpdate';

export const TodoItem = ({
  todo,
  handleDeleteTodo,
  handleCompletTodo,
  handleUpdateTodo,

}) => {
  return (
    <li>
        <span className=''
         onClick={() => handleCompletTodo(todo.id)}
        > 
            <label htmlFor="" className={`container-done ${todo.done ? 'active' : ''}`}></label>
        </span>
        <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
        <button className='btn-delete' onClick={() => handleDeleteTodo(todo.id)}>
           <FaTrashAlt/>
        </button>
    </li>
  )
}
