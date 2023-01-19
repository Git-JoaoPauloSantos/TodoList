import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


import React from 'react'

const CardCompleteTask = ({ tarefa, index, completeTask, deleteTask }) => {
    return (
        <Card
            sx={{
                maxWidth: 345,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "#c7f7d4",
            }}>
            <CardContent>
                <Typography
                textTransform="capitalize"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                    gutterBottom variant="h6"
                    component="div">
                    {tarefa.titleTask} <span><CheckCircleIcon sx={{ color: "#4caf50" }} /></span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {tarefa.task}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    display: "flex",
                    justifyContent: "end"
                }}>
                <Button onClick={() => completeTask(index)} size="small">Completa</Button>
                <Button onClick={() => deleteTask(index)} size="small">Apagar</Button>
            </CardActions>
        </Card>
    )
}

export default CardCompleteTask