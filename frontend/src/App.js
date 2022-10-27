import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import { MainPage } from './pages';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'component={<MainPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
