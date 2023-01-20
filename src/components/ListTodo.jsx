import CardTask from './CardTask'
const ListTodo = ({ tasks, completeTask, deleteTask, fixedTask, editTask }) => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", margin: "2rem"}}>
            {tasks.map((task) => (
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