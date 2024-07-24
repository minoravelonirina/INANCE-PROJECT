import Home from './pages/home'
import React, { useState } from 'react';
import About from './pages/about';
import './App.css'
import Professional from './pages/professional/professional';
import Service from './pages/service/service';

export default function App(){

  return <>
    <Home/>
    <About/>
    <Professional/>
    <Service/>
  </>
}
