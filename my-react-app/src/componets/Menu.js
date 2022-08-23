import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
export class Menu extends Component {
  render() {
    return (
      <div> 
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fornecedor">Fornecedor</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Empresa</a>
                <li className="nav-item dropdown">
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/empresa/cadastrar">Cadastrar</a></li>
                    <li><a className="dropdown-item" href="/empresa/consultar">Consultar</a></li>
                  </ul>
                </li>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
      </div>
    );
  }
}