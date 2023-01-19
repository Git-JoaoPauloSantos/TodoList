import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import React from 'react'

const CardTask = ({ tarefa, index, completeTask, deleteTask }) => {
    return (
        <Card
            sx={{
                maxWidth: 345,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: (tarefa.isComplete ? "#c7f7d4" : "")
            }}>
            <CardContent >
                <Typography
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                    textTransform="capitalize"
                    gutterBottom variant="h6"
                    component="div">
                    {tarefa.titleTask ?
                        <Typography variant='button' borderBottom="1px solid">
                            {tarefa.titleTask}
                        </Typography> :
                        <Typography variant='button' color="#ccc" borderBottom="1px solid" >
                            sem Título
                        </Typography>}
                    {tarefa.isComplete && <span><CheckCircleIcon sx={{ color: "#4caf50", alignSelf: "" }} /></span>}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {tarefa.task}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "end" }}>
                <Button onClick={() => completeTask(index)} size="small">Completa</Button>
                <Button color='warning' onClick={() => deleteTask(index)} size="small">Apagar</Button>
            </CardActions>
        </Card>
    )
}

export default CardTask