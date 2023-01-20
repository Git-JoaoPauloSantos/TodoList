import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function EditTaskDialog({ openEditDialog, dialogHandler, task, editTask }) {
    const [newText, setNewText] = React.useState(task.task)
    const [newTitle, setnewTitle] = React.useState(task.titleTask)

    const textHandler = () => {
        editTask(task.id, newTitle, newText)
        dialogHandler()
    }


    return (
        <Dialog
            open={openEditDialog}
            onClose={dialogHandler}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
        >
            <DialogTitle textTransform="uppercase" >
                Edite a sua tarefa
            </DialogTitle>
            <DialogContent>
                <TextField
                    onChange={(e) => setnewTitle(e.target.value)}
                    sx={{ margin: "1.5rem 0" }}
                    label="Título"
                    variant="standard"
                    fullWidth
                    defaultValue={newTitle}
                />
                <TextField
                    onChange={(e) => setNewText(e.target.value)}
                    label="Texto da task"
                    multiline
                    maxRows={4}
                    variant="standard"
                    fullWidth
                    defaultValue={newText}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => dialogHandler()}>Cancelar</Button>
                <Button onClick={() => textHandler()}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
}








// const [open, setOpen] = React.useState(false);

// const handleClickOpen = () => {
//   setOpen(true);
// };

// const handleClose = () => {
//   setOpen(false);
// };