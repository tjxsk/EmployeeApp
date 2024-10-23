import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Edit.css';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../axiosinterceptor';

const edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [editData, setEditData] = useState({
        id: '',
        name: '',
        designation: '',
        department: '',
        location: '' ,
        salary: '' 
    });

    useEffect(() => {
        axiosInstance.get(`http://localhost:3000/${id}`)
            .then((res) => {
                setEditData(res.data);
            })
    }, [id]);


    const handleUpdate = () => {
        axiosInstance.put('http://localhost:3000/edit/'+id, editData)
            .then(() => {
                navigate('/home');
            })
            .catch(err => {
                console.error('Error updating item:', err);
            });
    };

    let fetchValue = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div style={{ marginTop: '50px' }}></div>
            <br />
            <br />
            <h4>Edit Course</h4>
            <div className='edit'>
                <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '90ch' } }} noValidate autoComplete="off">
                    <TextField onChange={fetchValue} name="id" id="outlined-basic" label="Employee Id" variant="outlined" value={editData.id} />
                    <br />
                    <TextField onChange={fetchValue} name="name" id="outlined-basic" label="Employee Name" variant="outlined" value={editData.name} />
                    <br />
                    <TextField onChange={fetchValue} name="designation" id="outlined-basic" label="Employee Designation" variant="outlined" value={editData.designation} />
                    <br />
                    <TextField onChange={fetchValue} name="department" id="outlined-basic" label="Employee Department" variant="outlined" value={editData.department} />
                    <br />
                    <TextField onChange={fetchValue} name="location" id="outlined-basic" label=" Employee Location" variant="outlined" value={editData.location} />
                    <br />
                    <TextField onChange={fetchValue} name="salary" id="outlined-basic" label="Employee Salary" variant="outlined" value={editData.salary} />
                    <br />
                    <Button onClick={handleUpdate} variant="outlined">Save Changes</Button>
                </Box>
            </div>
        </>
    )
}

export default edit