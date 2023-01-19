import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import CardCompleteTask from './CardCompleteTask'
import CardTask from './CardTask'
import './ListTodo.css'
const ListTodo = ({ tarefas, completeTask, deleteTask }) => {
    return (
        <div className="todo-list">
            {tarefas.map((tarefa, index) => (
                (!tarefa.isComplete ?
                    <CardTask key={index} tarefa={tarefa} index={index} completeTask={completeTask} deleteTask={deleteTask} />
                    : <CardCompleteTask key={index} tarefa={tarefa} index={index} completeTask={completeTask} deleteTask={deleteTask} />)

            ))}
        </div>
    )
}

export default ListTodo


// <CardCompleteTask key={index} tarefa={tarefa} index={index} completeTask={completeTask} deleteTask={deleteTask} />