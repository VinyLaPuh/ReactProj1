import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import  { Routes, Route, Link } from 'react-router-dom';

import { About } from './About';
import { MainPage } from './mainPage';
import { Blog } from './Blog';
import { NotFound } from './NotFound';



function App() {

  return (
    <>
     <header>
       <Link to="/">Home</Link>
       <Link to="/blog">Blog</Link>
       <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path="/" element ={<MainPage/>}></Route>
        <Route path="/blog" element ={<Blog/>}></Route>
        <Route path="/about" element ={<About/>}></Route>
        <Route path="/*" element ={<NotFound/>}></Route>
        
      </Routes>
    </> 
  )
}

export default App
