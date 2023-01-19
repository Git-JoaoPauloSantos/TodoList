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
                onSubmit={false}
                sx={{ width: "20%" }}
                onChange={(e) => setInputTitleText(e.target.value)}
                value={inputTitleText}
                id="standard-basic"
                label="Título"
                variant="standard" />

            <TextField
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
                id="standard-basic"
                label="Digite sua tarefa"
                variant="standard" />
            {inputText && (
                <Button
                    sx={{ height: "48px", marginLeft: "5px" }}
                    onClick={() => validacaoinput(inputTitleText, inputText)}
                    variant="contained"
                    component="label">
                    Salvar
                    <button></button>
                </Button>)}
            {!inputText && (
                <Button
                disabled
                    sx={{ height: "48px", marginLeft: "5px" }}
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