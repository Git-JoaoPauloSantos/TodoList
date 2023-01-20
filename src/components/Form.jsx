import './Form.css'
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
                sx={{ width: "30%" }}
                onChange={(e) => setInputTitleText(e.target.value)}
                value={inputTitleText}
                label="Título"
                variant="standard" />

            <TextField
                sx={{ width: "70%" }}
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
                label="Digite sua task"
                variant="standard" />
            <Button
                disabled={inputText ? false : true}
                sx={{ marginLeft: "5px" }}
                onClick={() => validatesInput(inputTitleText, inputText)}
                variant="contained"
                component="label">
                Salvar
                <button style={{ backgroundColor: "transparent", border: "none" }}></button>
            </Button>

        </form>
    )
}

export default Form

{/* 

<input
onChange={(e) => setInputTitleText(e.target.value)}
type="text"
value={inputTitleText}
placeholder="Título da task" />

<input
onChange={(e) => setInputText(e.target.value)}
type="text"
value={inputText}
placeholder="Digite uma task" /> 

*/}