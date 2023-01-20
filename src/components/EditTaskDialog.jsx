import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function EditTaskDialog({ openEditDialog, dialogHandler, task, index, editTask }) {
    const [newText, setNewText] = React.useState(task.task)
    const [newTitle, setnewTitle] = React.useState(task.titleTask)

    const textHandler = () => {
        editTask(index, newText, newTitle)
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
            <DialogTitle id="alert-dialog-title">
                {"Edite a sua task"}
            </DialogTitle>
            <DialogContent>
                <TextField sx={{ margin: "1.5rem 0" }}
                    label="Título"
                    variant="standard"
                    fullWidth
                    defaultValue={newTitle}
                    onChange={(e) => setnewTitle(e.target.value)}
                />
                <TextField
                    label="Texto da task"
                    multiline
                    maxRows={4}
                    variant="standard"
                    fullWidth
                    defaultValue={newText}
                    onChange={(e) => setNewText(e.target.value)}
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