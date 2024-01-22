import React from 'react'
import { useForm } from '../hooks/UseForm'

export const TodoApp = ({handleNewTodo}) => {

  const { description, onInputChange, onResetForm} = useForm({
    description: '',
  });


  const onFormSubmit = (e) => {
    e.preventDefault()
    if(description.length <= 3) return

    let newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    }

    handleNewTodo(newTodo)
    onResetForm()
}
  
  return (
    <form onSubmit={onFormSubmit} action="">
        <input type="text"
        className='input-add'
        name='description'
        value={description}
        onChange={onInputChange}
        placeholder='Que quieres hacer?'
        // onChange={}
        />
        <button className="btn-add" type='submit'>
            Agregar
        </button>
    </form>
  )
}
