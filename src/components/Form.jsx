import { useState } from "react";
import { Button, TextField } from '@mui/material';

const Form = ({ addTask }) => {
    const [inputText, setInputText] = useState('');
    const [inputTitleText, setInputTitleText] = useState('');

    const validatesInput = (inputTitleText, inputText) => {
        if (inputText) {
            addTask(inputTitleText, inputText)
        }
        setInputText("")
        setInputTitleText("")
    }

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            style={{
                maxWidth: "700px",
                width: "70%",
                display: "flex",
                margin: "3rem auto",
                gap: ".3rem"
            }}>
            <TextField
                onChange={(e) => setInputTitleText(e.target.value)}
                sx={{ width: "30%" }}
                value={inputTitleText}
                label="Título"
                variant="standard" />

            <TextField
                onChange={(e) => setInputText(e.target.value)}
                sx={{ width: "70%" }}
                value={inputText}
                label="Contúdo da tarefa"
                variant="standard" />
            <Button
                onClick={() => validatesInput(inputTitleText, inputText)}
                disabled={inputText ? false : true}
                sx={{ marginLeft: "5px" }}
                variant="contained"
                component="label">
                Salvar
                <button style={{ backgroundColor: "transparent", border: "none" }}></button>
            </Button>
        </form>
    )
}

export default Form