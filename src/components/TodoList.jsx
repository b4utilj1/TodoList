import React from 'react'
import { TodoItem } from './TodoItem'
export const TodoList = ({
  todos, 
  handleDeleteTodo, 
  handleCompletTodo, 
  handleUpdateTodo,

}) => {
  return (
   <ul>
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleDeleteTodo={handleDeleteTodo}
        handleCompletTodo={handleCompletTodo}
        handleUpdateTodo={handleUpdateTodo}
      />
    ))}
    
   </ul>
  )
}
