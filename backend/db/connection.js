const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tjxsk:1245784512@cluster0.zpzwg.mongodb.net/EmployeeApp?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('connection established');
}).catch(() => {
    console.log('error in conection');
});
