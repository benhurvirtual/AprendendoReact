import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import { Menu } from './componets/Menu';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

import { Fornecedor } from './pages/Fornecedor';

import { Consultar } from './pages/empresa/Consultar';
import { Cadastrar } from './pages/empresa/Cadastrar';

export class Rotas extends Component {
  render(){
   return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="fornecedor" element={<Fornecedor />} />

            <Route path="empresa/cadastrar" element={<Cadastrar />} />
            <Route path="empresa/consultar" element={<Consultar />} />

          </Route>
        </Routes>
      </BrowserRouter>
   )
  }
}