import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import About from './Components/About'
import './App.css';
import './index.css'
import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

const App = () =>(
  <div>
  <Router>
  <Dashboard/>
  <Routes>
  <Route exact path="/home"element={<Home/>} />
  <Route  exact path="/about" element={<About/>} />
  <Route  exact path="/login" element={<Login/>} />
  <Route  exact path="/logout" element={<Login/>} />
  <Route  exact path="/signup" element={<Signup/>} />
  </Routes>
  </Router>
  </div>
)
export default App