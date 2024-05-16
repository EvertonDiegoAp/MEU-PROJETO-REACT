import React from "react";
import './App.css';

import Nav from "./components/Nav/Nav"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import Curriculo from "./components/Curriculo/Curriculo";
import Portfolio from "./components/Portfolio/Portfolio";
import Contato from "./components/Contato/Contato";

import { BrowserRouter, Routes, Route, } from "react-router-dom";


function App() {
  return ( 
  <>
    <Header></Header>
   
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
          <Route index element={<Curriculo />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>

    <Footer></Footer>
   </>
)
}

export default App;

