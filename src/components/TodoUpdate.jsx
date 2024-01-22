import React, { useRef, useState } from 'react'
import { MdEditNote } from "react-icons/md";
import { useForm } from '../hooks/UseForm';

export const TodoUpdate = ({
  todo, 
  handleUpdateTodo
}) => {

  const {updateDescription, onInputChange} = useForm({
    updateDescription: todo.description
  })

  const [disabled, setDisable] = useState(true)
  const focusInputRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault();
    const id = todo.id
    const description = updateDescription

    handleUpdateTodo(id, description)

    setDisable(!disabled)

    focusInputRef.current.focus()
  }
  return (
    <form onSubmit={onSubmit} action="">
    <input type="text"
    className={`input-update ${todo.done ? 'text-decoration-dashed' : ''}`}
    name='updateDescription'
    value={updateDescription}
    onChange={onInputChange}
    placeholder='Que quieres hacer?'

    readOnly={disabled}
    ref={focusInputRef}
    />
    <button className="btn-edit" type='submit'>
    <MdEditNote/>
    </button>
</form>
  )
}
