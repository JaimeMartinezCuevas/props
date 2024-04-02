function Task ({task, deleteTask, toggleTask}) {
    return(
        <>
            <li>

            <div 
            style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            onClick={() => toggleTask(task.id)}>
                {task.text}
            </div>

            <button type="button" onClick={() => deleteTask(task.id)}>Eliminar</button>
            </li>
        </>
    )
}

export default Task