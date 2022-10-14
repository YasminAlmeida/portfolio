import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../view/home/index';
import About from '../view/about/index';
import Header from '../components/header/index';
import Projects from '../view/projects';
export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
