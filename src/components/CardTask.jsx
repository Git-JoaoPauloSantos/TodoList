import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import React, { useState } from 'react'
import EditTaskDialog from './EditTaskDialog';

const CardTask = ({ task, completeTask, deleteTask, fixedTask, editTask }) => {
    const [openEditDialog, setOpenEditDialog] = useState(false)

    const dialogHandler = () => {
        setOpenEditDialog(!openEditDialog)

    }

    return (
        <React.Fragment>
            <EditTaskDialog
                openEditDialog={openEditDialog}
                dialogHandler={dialogHandler}
                task={task}
                editTask={editTask} />
            <Card
                sx={{
                    maxWidth: 345,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: (task.isComplete ? "#90caf9" : "")
                }}>
                <CardContent
                    onClick={() => setOpenEditDialog(true)}
                    sx={{ cursor: "pointer" }}>
                    <Typography
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                        textTransform="capitalize"
                        gutterBottom variant="h6"
                        component="div">
                        {task.titleTask ?
                            <Typography
                                variant='button'
                                borderBottom="1px solid">
                                {task.titleTask}
                            </Typography> :
                            <Typography
                                variant='button'
                                color="#ccc"
                                borderBottom="1px solid" >
                                Sem Título
                            </Typography>}
                        {task.isComplete && <CheckCircleIcon
                            color='primary'
                            sx={{ fontSize: "1.2rem" }} />}
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary">
                        {task.task}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly"
                    }}>
                    <CardActions>
                        <Button
                            onClick={() => fixedTask(task.id)}
                            color={task.isFixed ? "primary" : "inherit"}
                            variant={task.isFixed ? "contained" : "text"}
                            size='small'>
                            <PushPinOutlinedIcon
                                sx={{ fontSize: "1.2rem" }} />
                        </Button>
                    </CardActions>

                    <CardActions>
                        <Button
                            variant='outlined'
                            color={task.isComplete ? "inherit" : "primary"}
                            onClick={() => completeTask(task.id)}
                            size="small">Completa</Button>
                        <Button
                            variant='outlined'
                            color='error'
                            onClick={() => deleteTask(task.id)}
                            size="small">Apagar</Button>
                    </CardActions>

                </CardActions>
            </Card>
        </React.Fragment>
    )
}
export default CardTask