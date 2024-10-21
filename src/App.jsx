import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/home';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Projects from './components/projects/project';
import Contacts from './components/contacts/contacts';
import './App.css';

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
