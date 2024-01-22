
import './App.css'
import {TodoList} from './components/TodoList'
import {TodoApp} from './components/TodoApp'
import { useTodo } from './hooks/useTodo'

function App() {


const { 
  todos,
  todosCount,
  pendingTodosCount,
  handleNewTodo,
  handleDeleteTodo,
  handleCompletTodo,
  handleUpdateTodo} = useTodo()
  
  return (
<>
<div className="card-to-to">
  <h1>Lista de Tareas</h1>
  <div className="counter-todos">
    <h3>N Tareas: {todosCount} </h3>
    <h3>Pendientes: {pendingTodosCount} </h3>
  </div>

  <div className="add-todo">
    <h3>Agregar Tarea</h3>
    <TodoApp handleNewTodo={handleNewTodo} />
  </div>
</div>
  <TodoList
  todos={todos}
  handleDeleteTodo={handleDeleteTodo}
  handleCompletTodo={handleCompletTodo}
  handleUpdateTodo={handleUpdateTodo}
  />
</>
  )
}

export default App
