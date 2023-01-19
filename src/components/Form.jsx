import './Form.css'
import { useState } from "react";
import { Button, TextField } from '@mui/material';

const Form = ({ addTask }) => {
    const [inputText, setInputText] = useState('');
    const [inputTitleText, setInputTitleText] = useState('');

    const validacaoinput = (inputTitleText, inputText) => {
        if (inputText) {
            addTask(inputTitleText, inputText)
        }
        setInputText("")
        setInputTitleText("")
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} className="container-form">
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
                label="Digite sua tarefa"
                variant="standard" />
            {inputText && (
                <Button
                    sx={{ marginLeft: "5px" }}
                    onClick={() => validacaoinput(inputTitleText, inputText)}
                    variant="contained"
                    component="label">
                    Salvar
                    <button></button>
                </Button>)}
            {!inputText && (
                <Button
                    disabled
                    sx={{ marginLeft: "5px" }}
                    onClick={() => validacaoinput(inputTitleText, inputText)}
                    variant="contained"
                    component="label">
                    Salvar
                </Button>)}

        </form>
    )
}

export default Form

{/* 

<input
onChange={(e) => setInputTitleText(e.target.value)}
type="text"
value={inputTitleText}
placeholder="Título da tarefa" />

<input
onChange={(e) => setInputText(e.target.value)}
type="text"
value={inputText}
placeholder="Digite uma tarefa" /> 

*/}