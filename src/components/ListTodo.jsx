import CardTask from './CardTask'
const ListTodo = ({ tasks, completeTask, deleteTask, fixedTask, editTask, arrayTasksPesquisa }) => {
    // const bottomDisabled = () => {
    //     return arrayTasksPesquisa ? true : false
    // }

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", margin: "2rem" }}>
            {arrayTasksPesquisa ? arrayTasksPesquisa.map((task) => (
                <CardTask
                    key={task.id}
                    task={task}
                    completeTask={completeTask}
                    deleteTask={deleteTask}
                    fixedTask={fixedTask}
                    editTask={editTask} />
            )) : tasks.map((task) => (
                <CardTask
                    key={task.id}
                    task={task}
                    completeTask={completeTask}
                    deleteTask={deleteTask}
                    fixedTask={fixedTask}
                    editTask={editTask} />
            ))}
        </div>
    )
}

export default ListTodo

// {tasks.map((task) => (
//     <CardTask
//         key={task.id}
//         task={task}
//         completeTask={completeTask}
//         deleteTask={deleteTask}
//         fixedTask={fixedTask}
//         editTask={editTask} />
// ))}