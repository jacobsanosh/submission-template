import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import { MainPage,Login } from './pages';
import Carloan from './pages/CarLoan/Carloan';
import Signup from './pages/Signup/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<MainPage/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/signup'element={<Signup/>}/>
        <Route path='/carloan' element={<Carloan/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;