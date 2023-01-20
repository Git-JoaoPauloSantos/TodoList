import './Home.css'
import { useEffect, useState } from "react"
import Form from "../components/Form";
import ListTodo from "../components/ListTodo";
import ButtonAppBar from '../components/AppBar';


const Home = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (titleTask, inputText) => {
        if (inputText) {
            const newTask = {
                titleTask: titleTask,
                task: inputText,
                isComplete: false,
                isFixed: false
            }

            setTasks([...(tasks || []), newTask])

        }
        console.log(tasks)
    }

    const deleteTask = (index) => {
        let newtasks = [...tasks];
        newtasks.splice(index, 1)

        setTasks(newtasks)

    }

    const completeTask = (index) => {
        const newtasks = [...tasks]
        newtasks[index].isComplete = !newtasks[index].isComplete
        setTasks(newtasks)
    }

    const fixedTask = (index) => {
        const newtasks = [...tasks]
        newtasks[index].isFixed = !newtasks[index].isFixed
        setTasks(newtasks)
    }

    const saveTaskLocalStorage = (tasksToSave) => {
        localStorage.setItem("tasks", JSON.stringify(tasksToSave))
    }

    const loadTasks = () => {
        const loadedTasks = JSON.parse(localStorage.getItem("tasks"))
        const orderedLoadedTasks = loadedTasks.sort((a, b) => (a.isFixed > b.isFixed ? -1 : 1))
        return orderedLoadedTasks
    }

    const editTask = (index, newText, newTitle) => {
        let newTask = [...tasks]
        newTask[index].titleTask = newTitle
        newTask[index].task = newText

        setTasks(newTask)
    }

    useEffect(() => {
        if (tasks) {
            saveTaskLocalStorage(tasks)
            const orderedLoadedTasks = loadTasks()
            setTasks(orderedLoadedTasks)

        }
    }, [tasks])

    useEffect(() => {
        const loadedTasks = loadTasks()
        setTasks(loadedTasks)
    }, [])

    return (
        <div>
            <ButtonAppBar />
            <Form addTask={addTask} />
            {tasks ? (
                <ListTodo
                    tasks={tasks}
                    completeTask={completeTask}
                    deleteTask={deleteTask}
                    fixedTask={fixedTask}
                    editTask={editTask} />
            ) : null}
        </div>

    )
}

export default Home