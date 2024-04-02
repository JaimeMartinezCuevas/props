import React from 'react'

const Task = ({ task, onDelete, onToggleCompletion }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span onClick={onToggleCompletion}>{task.text}</span>
      <button onClick={onDelete}>Eliminar</button>
    </li>
  )
}

export default Task