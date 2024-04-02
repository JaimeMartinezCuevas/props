import { useState } from 'react'
import './App.css'
import Task from './components/Task.jsx'
import AddTaskForm from './components/AddTaskForm.jsx'

const App = () => {

  const[tasks, setTasks] = useState ([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false },
  ])

  const addTask = (text) => {

    //Plantilla de tarea
    const newTask = {id: text + tasks.length +1, text, completed: false}

    //Spread operator para añadila a la lista
    setTasks([...tasks, newTask])
  }

  //Función para borrar la tarea
  const deleteTask = (deleteID) => {
    setTasks(tasks.filter(task => task.id !== deleteID))
  }

  //Toggle para tachar la tarea (true/false)
  const toggleTask = (taskID) => {
    setTasks(tasks.map(task => task.id === taskID ? {...task, completed: !task.completed} : task))
  }

  return (
    <>
      <h1>Lista de tareas</h1>

      <AddTaskForm addTask={addTask}/>
      
      <ul>
        {tasks.map(task =>(
        <Task task={task} key={task.id} deleteTask={deleteTask} toggleTask={toggleTask} />
        ))}
      </ul>
    </>
  )
}

export default App