import * as React from 'react';
import '../styles/home.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@iconify/react';
import Link from '@mui/material/Link';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#FEC5BB" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 3 }}
          >
            <Icon icon="pixelarticons:home" style={{ color: "black", width: 51, height: 51 }} />
          </IconButton>
          <Link 
            underline="always"
            component="button"
            onClick={() => {console.log("About is clicked")}}
            >
            {'About'}
          </Link>

          <Link href="/porfolio" underline="always">
            {'Portfolio'}
          </Link>


        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;