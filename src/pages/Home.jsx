import { useEffect, useState } from "react"
import Form from "../components/Form";
import ListTodo from "../components/ListTodo";
import ButtonAppBar from '../components/AppBar';


const Home = () => {
    const [tasks, setTasks] = useState();

    const addTask = (titleTask, inputText) => {
        if (inputText) {
            const newTask = {
                id: generateId(),
                titleTask: titleTask,
                task: inputText,
                isComplete: false,
                isFixed: false,
                creationDate: getDate()
            }

            setTasks([...(tasks || []), newTask])

        }
    }

    const generateId = () => {
        return Math.floor(Math.random() * 10000)
    }

    const getDate = () => {
        return new Date()
    }

    const deleteTask = (id) => {
        let newTasks = [...tasks];
        newTasks = newTasks.filter(task => task.id !== id)

        setTasks(newTasks)
    }

    const completeTask = (id) => {
        let newTasks = [...tasks]
        const targetTask = newTasks.filter((task) => task.id === id)[0]
        targetTask.isComplete = !targetTask.isComplete

        setTasks(newTasks)
    }

    const fixedTask = (id) => {
        let newTasks = [...tasks]
        const targetTask = newTasks.filter((task) => task.id === id)[0]
        targetTask.isFixed = !targetTask.isFixed

        setTasks(newTasks)
    }

    const saveTaskLocalStorage = (tasksToSave) => {
        localStorage.setItem("tasks", JSON.stringify(tasksToSave))
    }

    const loadTasks = () => {
        const loadedTasks = JSON.parse(localStorage.getItem("tasks"))
        const orderedDateTasks = loadedTasks.sort((a, b) => (a.creationDate > b.creationDate ? -1: 1))
        const orderedLoadedTasks = orderedDateTasks.sort((a, b) => (a.isFixed > b.isFixed ? -1 : 1))
        return orderedLoadedTasks
    }

    const editTask = (id, newTitle, newText) => {
        let newTasks = [...tasks]
        const targetTask = newTasks.filter((task) => task.id === id)[0]
        targetTask.titleTask = newTitle
        targetTask.task = newText

        setTasks(newTasks)
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