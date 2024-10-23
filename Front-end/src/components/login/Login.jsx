import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import axiosInstance from '../../axiosinterceptor';

const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    let updateUser = (e) => {
        setUser({...user,  [e.target.name]: e.target.value})
    }
    

    let validateUser = () => {
        axiosInstance.post("http://localhost:3000/user/login",user)
        .then((res) => {
            // console.log(res);
            // alert(res.data.message);
            if(res.data.usertoken) {
                localStorage.setItem("token", res.data.usertoken);
                navigate('/home');
            }
        });
    }
    

    return (
        <>
            <div className='mainContainer'>
                <div className='titleContainer'>
                    Login
                </div>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField 
                        required
                        id="outlined-basic" 
                        label="Username" 
                        name='username' 
                        variant="outlined"
                        value={user.username}
                        onChange={updateUser}
                        sx={{
                            "& .MuiInputLabel-asterisk": {
                                color: "red", // Customize the asterisk color here
                            }
                        }}
                    />
                    <br />
                    <TextField 
                        required
                        id="outlined-basic" 
                        type='password'
                        label="Password" 
                        name='password' 
                        variant="outlined" 
                        value={user.password}
                        onChange={updateUser}
                        sx={{
                            "& .MuiInputLabel-asterisk": {
                                color: "red", // Customize the asterisk color here
                            }
                        }}
                    />
                    <br />
                    <Button 
                        variant="text"
                        onClick={validateUser}
                    >
                        sign up
                    </Button>
                </Box>
            </div>
        </>
    )
}

export default Login