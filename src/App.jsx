import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Home from './components/home/home';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Projects from './components/projects/project';
import Contacts from './components/contacts/contacts';
import Layout from "./components/Layout/Layout";
import MobileLayout from "./components/MobileLayout/Mobile";
import './App.css';

function App() {

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


  return (

    <BrowserRouter basename="/Portfolio">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />

        {/* Use MobileLayout for mobile screens */}
        <Route path='/about' element={isMobile ? <MobileLayout><About /></MobileLayout> : <Layout><About /></Layout>} />
        <Route path='/resume' element={isMobile ? <MobileLayout><Resume /></MobileLayout> : <Layout><Resume /></Layout>} />
        <Route path='/projects' element={isMobile ? <MobileLayout><Projects /></MobileLayout> : <Layout><Projects /></Layout>} />
        <Route path='/contacts' element={isMobile ? <MobileLayout><Contacts /></MobileLayout> : <Layout><Contacts /></Layout>} />
      </Routes>
    </BrowserRouter>


    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/home' element={<Home />} />
    //     <Route path='/about' element={<About />} />
    //     <Route path='/resume' element={<Resume />} />
    //     <Route path='/projects' element={<Projects />} />
    //     <Route path='/contacts' element={<Contacts />} />
    //   </Routes>
    // </BrowserRouter>

  );
}

export default App;
