import './Home.css'
import { useEffect, useState } from "react"
import Form from "../components/Form";
import ListTodo from "../components/ListTodo";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ButtonAppBar from '../components/AppBar';


const Home = () => {
    const [tarefas, setTarefas] = useState();

    const addTask = (titleTask, inputText) => {
        if (inputText) {
            const newTask = {
                titleTask: titleTask,
                task: inputText,
                isComplete: false,
                isFixed: false
            }

            setTarefas([...(tarefas || []), newTask])

        }
        console.log(tarefas)
    }

    const deleteTask = (index) => {
        let newTarefas = [...tarefas];
        newTarefas.splice(index, 1)

        setTarefas(newTarefas)

    }

    const completeTask = (index) => {
        let newTarefas = [...tarefas]
        newTarefas[index].isComplete = !newTarefas[index].isComplete
        setTarefas(newTarefas)
    }

    const saveTaskLocalStorage = (tasksToSave) => {
        localStorage.setItem("tasks", JSON.stringify(tasksToSave))
    }

    const loadTasks = () => {
        const loadedTasks = JSON.parse(localStorage.getItem("tasks"))
        return loadedTasks
    }

    useEffect(() => {
        if (tarefas) {
            saveTaskLocalStorage(tarefas)

        }
    }, [tarefas])

    useEffect(() => {
        const loadedTasks = loadTasks()
        setTarefas(loadedTasks)
    }, [])

    return (
        <div>
            <ButtonAppBar />
            <hr />
            <Form addTask={addTask} />

            {tarefas ? (
                <ListTodo
                    tarefas={tarefas}
                    completeTask={completeTask}
                    deleteTask={deleteTask} />
            ) : null}
        </div>

    )
}

export default Home