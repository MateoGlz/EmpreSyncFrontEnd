import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from './Modules/Login/login';
import "./Styles/index.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path ='/' element ={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
