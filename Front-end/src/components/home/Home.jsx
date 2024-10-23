import React, { useEffect, useState } from 'react';
import './Home.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosinterceptor';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';



const Home = () => {
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();

    // Fetch data from the API
    useEffect(() => {
        axiosInstance.get('http://localhost:3000').then((res) => {
            setRows(res.data);
        });
    }, []);

    // Delete handler
    const handleDelete = (id) => {
        axiosInstance.delete(`http://localhost:3000/delete/${id}`).then(() => {
            navigate('/home');
            window.location.reload();
        });
    };

    // Edit handler
    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    return (
        <div className="home">
            <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Employee ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Designation</TableCell>
                            <TableCell>Department</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Salary</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row._id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.designation}</TableCell>
                                <TableCell>{row.department}</TableCell>
                                <TableCell>{row.location}</TableCell>
                                <TableCell>{row.salary}</TableCell>
                                <TableCell>
                                    <IconButton sx={{ color: 'blue' }} size="small" onClick={() => handleEdit(row._id)}>
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton sx={{color: 'red'}} aria-label="delete" size="small" onClick={() => handleDelete(row._id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Home;
