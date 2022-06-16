import React from "react";
import logo from "../assets/logo.png";
import "./navBar.module.scss";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';

const NavBar = ()=>{
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                    </IconButton>
                    <Avatar alt="Remy Sharp" src={logo} />
                    <Button href="#" variant="h6" underline="none" color="#FFF">Home</Button>
                    <Button href="#" variant="h6" underline="none" color="#FFF">Contacto</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}



export default NavBar