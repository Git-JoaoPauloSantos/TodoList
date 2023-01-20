import CardTask from './CardTask'
import './ListTodo.css'
const ListTodo = ({ tasks, completeTask, deleteTask, fixedTask, editTask }) => {
    return (
        <div className="todo-list">
            {tasks.map((task, index) => (
                <CardTask
                    key={index}
                    task={task}
                    index={index}
                    completeTask={completeTask}
                    deleteTask={deleteTask}
                    fixedTask={fixedTask}
                    editTask={editTask} />
            ))}
        </div>
    )
}

export default ListTodo