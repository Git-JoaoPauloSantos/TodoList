import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import React from 'react'

const CardTask = ({ tarefa, index, completeTask, deleteTask }) => {
    return (
        <Card
            sx={{
                maxWidth: 345,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: (tarefa.isComplete ? "#90caf9" : "")
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
                    {tarefa.isComplete && <CheckCircleIcon color='primary' sx={{fontSize: "1.2rem" }} />}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {tarefa.task}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <CardActions>
                    <Button color='inherit' size='small'><PushPinOutlinedIcon sx={{ fontSize: "1.2rem" }} /></Button>
                </CardActions>
                <CardActions>
                    <Button variant='outlined' color={tarefa.isComplete ? "inherit" : "primary"} onClick={() => completeTask(index)} size="small">Completa</Button>
                    <Button variant='outlined' color='error' onClick={() => deleteTask(index)} size="small">Apagar</Button>
                </CardActions>

            </CardActions>
        </Card>
    )
}

export default CardTask