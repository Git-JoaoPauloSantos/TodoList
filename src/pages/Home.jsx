import { useEffect, useState } from "react"
import Form from "../components/Form";
import ListTodo from "../components/ListTodo";
import ButtonAppBar from '../components/AppBar';


const Home = () => {
    const [tasks, setTasks] = useState();
    const [arrayTasksPesquisa, setArrayTasksPesquisa] = useState()

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
            let newTasks = [...tasks || [], newTask]
            setTasks(newTasks)
        }
    }


    const generateId = () => {
        return Math.floor(Math.random() * 10000)
    }

    const getDate = () => {
        return new Date()
    }

    const deleteTask = (id) => {
        // Tratando do Array original com todas as tarefas
        if (tasks) {
            let newTasks = [...tasks];
            newTasks = newTasks.filter(task => task.id !== id)
            setTasks(newTasks)
        }

        // Tratando do Array de pesquisa, com as tarefas pesquisadas
        else if (arrayTasksPesquisa) {
            let newTasksPesquisa = [...arrayTasksPesquisa]
            newTasksPesquisa = newTasksPesquisa.filter(task => task.id !== id)
            setArrayTasksPesquisa(newTasksPesquisa)
        }
    }

    const completeTask = (id) => {
        // Tratando do Array original com todas as tarefas
        if (tasks) {
            let newTasks = [...tasks]
            const targetTask = newTasks.filter((task) => task.id === id)[0]
            targetTask.isComplete = !targetTask.isComplete
            setTasks(newTasks)
        }

        // Tratando do Array de pesquisa, com as tarefas pesquisadas
        else if (arrayTasksPesquisa) {
            let newTasksPesquisa = [...arrayTasksPesquisa]
            const targetTaskPesquisa = newTasksPesquisa.filter((task) => task.id === id)[0]
            targetTaskPesquisa.isComplete = !targetTaskPesquisa.isComplete
            setArrayTasksPesquisa(newTasksPesquisa)
        }
    }

    const fixedTask = (id) => {
        // Tratando do Array original com todas as tarefas
        if (tasks) {
            let newTasks = [...tasks]
            const targetTask = newTasks.filter((task) => task.id === id)[0]
            targetTask.isFixed = !targetTask.isFixed
            ordenar( newTasks)
        }

        // Tratando do Array de pesquisa, com as tarefas pesquisadas
        else if (arrayTasksPesquisa) {
            let newTasksPesquisa = [...arrayTasksPesquisa]
            const targetTaskPesquisa = newTasksPesquisa.filter((task) => task.id === id)[0]
            targetTaskPesquisa.isFixed = !targetTaskPesquisa.isFixed
            ordenarPesquisa(newTasksPesquisa)
        }
    }

    const saveTaskLocalStorage = (tasksToSave) => {
        localStorage.setItem("tasks", JSON.stringify(tasksToSave))
    }

    const editTask = (id, newTitle, newText) => {
        // Tratando do array original
        if (tasks) {
            let newTasks = [...tasks]
            const targetTask = newTasks.filter((task) => task.id === id)[0]
            targetTask.titleTask = newTitle
            targetTask.task = newText
            setTasks(newTasks)
        }

        // Tratando do array de pesquisa
        else if (arrayTasksPesquisa) {
            let newTasksPesquisa = [...arrayTasksPesquisa]
            const targetTaskPesquisa = newTasksPesquisa.filter((task) => task.id === id)[0]
            targetTaskPesquisa.titleTask = newTitle
            targetTaskPesquisa.task = newText
            setArrayTasksPesquisa(newTasksPesquisa)
        }
    }

    const loadTasks = () => {
        const loadedTasks = JSON.parse(localStorage.getItem("tasks"))
        return loadedTasks
    }

    const ordenar = (array) => {
        if (array) {
            // const orderedDateTasks = array.sort((a, b) => (a.creationDate > b.creationDate ? -1 : 1))
            const orderedTasks = array.sort((a, b) => (a.isFixed > b.isFixed ? -1 : 1))
            setTasks(orderedTasks)
        }
    }

    const ordenarPesquisa = (array) => {
        if (array) {
            // const orderedDateTasks = array.sort((a, b) => (a.creationDate > b.creationDate ? -1 : 1))
            const orderedTasks = array.sort((a, b) => (a.isFixed > b.isFixed ? -1 : 1))
            setArrayTasksPesquisa(orderedTasks)
        }
    }

    useEffect(() => {
        if (tasks) {
            saveTaskLocalStorage(tasks)
        }
    }, [tasks])

    console.log(tasks)

    useEffect(() => {
        setTasks(loadTasks())

    }, [])


    // =======================================================================================

    const handlerInputPesquisa = (inputPesquisa) => {
        let resultado = tasks
        if (inputPesquisa) {
            resultado = tasks.filter((task) => task.task.includes(inputPesquisa))
            setArrayTasksPesquisa(resultado)

            console.log(resultado)
            console.log(tasks)
        }
        else {
            setArrayTasksPesquisa(null)
        }
    }


    return (
        <div>
            <ButtonAppBar
                handlerInputPesquisa={handlerInputPesquisa}
            />
            <Form addTask={addTask} />
            {tasks ? (
                <ListTodo
                    tasks={tasks}
                    completeTask={completeTask}
                    deleteTask={deleteTask}
                    fixedTask={fixedTask}
                    editTask={editTask}
                    arrayTasksPesquisa={arrayTasksPesquisa}
                    handlerInputPesquisa={handlerInputPesquisa} />
            ) : null}
        </div>

    )
}

export default Home