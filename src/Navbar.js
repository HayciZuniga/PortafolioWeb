import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo o título */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
        
        {/* Botones de navegación */}
        <Box>
          <Button color="inherit">  Portafolio Web</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
