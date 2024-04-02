import { useState } from "react";

function AddTaskForm ({ addTask }) {

    const [text, setText] = useState('')

    //Maneja el evento para que no se recarge la página
    const handleSubmit = (e) => {
        e.preventDefault()

        //Quitamos los espacios a los llaos con trim
        if(!text.trim()) return;

        addTask(text)
        setText('')
    }

    return (
        <>
        <form onSubmit={handleSubmit}>

            <input
            type="text"
            placeholder="Añadir nueva tarea"
            value={text}
            onChange={(e) => setText(e.target.value)}/>


            <button type="submit">Añadir</button>

        </form>
        </>
    )
}

export default AddTaskForm