import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import EditProfile from './EditProfile';

export default function ButtonAppBar({ handlerInputPesquisa }) {
  const [inputPesquisa, setInputPesquisa] = useState("1")

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ height: "120px" }}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Lista de Tarefas
          </Typography>
          <input
            onKeyUp={() => handlerInputPesquisa(inputPesquisa)}
            onChange={(e) => setInputPesquisa(e.target.value)}
            type="text"
            placeholder='Pesquisar...' />
          <EditProfile />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

{/* <button
onClick={() => handlerInputPesquisa(inputPesquisa)}
>ok</button> */}