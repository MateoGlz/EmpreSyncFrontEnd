import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import login from './Modules/Login/login';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path ='/' element ={<login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
