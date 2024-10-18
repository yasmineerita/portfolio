import * as React from 'react';
import '../styles/header.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#FEC5BB" }}>
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 3 }}
            >
              <Icon icon="pixelarticons:home" style={{ color: "black", width: 51, height: 51 }} onClick={() => {navigate("/")}}/>
            </IconButton>
          </div>
          <Link to="/about" className='dynapuff nav-title' style={{marginRight: "60px"}}>About</Link>
          <Link to="/portfolio" className='dynapuff nav-title'>Portfolio</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}