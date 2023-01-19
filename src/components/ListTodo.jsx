import CardTask from './CardTask'
import './ListTodo.css'
const ListTodo = ({ tarefas, completeTask, deleteTask }) => {
    return (
        <div className="todo-list">
            {tarefas.map((tarefa, index) => (
                <CardTask key={index} tarefa={tarefa} index={index} completeTask={completeTask} deleteTask={deleteTask} />
            ))}
        </div>
    )
}

export default ListTodo