import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';



export default function Navbar() {

    const navigate = useNavigate();

    let clearUser = () => {
        localStorage.removeItem('token');
        navigate('/')
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className='navbar1' position="fixed" sx={{ bgcolor: 'white', color: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> EmployeeApp </Typography>
                    <Button className='btn' color="inherit" href='/home'>Home</Button>
                    <Button className='btn' color="inherit" href='/add'>Add</Button>
                    <Button onClick={clearUser} className='btn' color="inherit">Log out</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}