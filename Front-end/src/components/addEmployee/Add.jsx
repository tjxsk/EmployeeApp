import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Add.css';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosinterceptor';

const add = () => {
    const [employee, setEmployee] = useState({
        id: '',
        name: '',
        designation: '',
        department: '',
        location: '',
        salary: ''
    });
    const navigate = useNavigate();

    let fetchValue = (e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

   

    let handleAdd = () => {
        try{
            axiosInstance.post('http://localhost:3000/add',employee);
            navigate('/home');
        } catch (error) {
            console.error('Error adding Employee:', error);
            alert('Failed to add employee.');
        }
    };



    return (
        <>
            <div style ={{ marginTop: '50px' }}></div>
            <br />
            <br />
            <h4>add New employee</h4>
            <div className='add'>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: 'auto' } }} noValidate autoComplete="off">
                    <TextField onChange={fetchValue} name="id" id="outlined-basic" label="Employee Id" variant="outlined"  value={employee.id} />
                    <br />
                    <TextField onChange={fetchValue} name="name" id="outlined-basic" label="Employee Name" variant="outlined" value={employee.name} />
                    <br />
                    <TextField onChange={fetchValue} name="designation" id="outlined-basic" label="Employee Designation" variant="outlined" value={employee.designation} />
                    <br />
                    <TextField onChange={fetchValue} name="department" id="outlined-basic" label="Employee Department" variant="outlined"  value={employee.department} />
                    <br />
                    <TextField onChange={fetchValue} name="location" id="outlined-basic" label="Employee Location" variant="outlined" value={employee.location} />
                    <br />
                    <TextField onChange={fetchValue} name="salary" id="outlined-basic" label="Employee Salary" variant="outlined"  value={employee.salary} />
                    <br/>
                    <Button onClick={handleAdd} variant="outlined">Add</Button>
                </Box>
            </div>
        </>
    )
}

export default add