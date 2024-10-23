
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from  './components/home/Home'
import Add from './components/addEmployee/Add'
import Edit from './components/editEmployee/Edit';
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './components/login/Login';
import PrivateRoutes from './components/PrivateRoutes';


function App() {

  const location = useLocation();

  return (
    <>
      {/* <Navbar/> */}
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route element= {<PrivateRoutes/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
