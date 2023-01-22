import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import EditProfile from './EditProfile';

export default function ButtonAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ height: "120px" }}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Lista de Tarefas
          </Typography>
          <EditProfile />
        </Toolbar>
      </AppBar>
    </Box>
  );
}