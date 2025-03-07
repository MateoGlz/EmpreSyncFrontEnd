import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from './Modules/Login/login';
import Home from './Modules/Home/home';
import "./Styles/index.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path ='/' element ={<Login/>}/>
          <Route  path ='/home' element ={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
