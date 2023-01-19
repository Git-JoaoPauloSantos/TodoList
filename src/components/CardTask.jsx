import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

const CardTask = ({ tarefa, index, completeTask, deleteTask }) => {
    return (
        <Card sx={{ maxWidth: 345, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <CardContent>
                <Typography textTransform="capitalize" gutterBottom variant="h6" component="div">
                    {tarefa.titleTask}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {tarefa.task}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "end" }}>
                <Button onClick={() => completeTask(index)} size="small">Completa</Button>
                <Button onClick={() => deleteTask(index)} size="small">Apagar</Button>
            </CardActions>
        </Card>
    )
}

export default CardTask