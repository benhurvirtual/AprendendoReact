import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";


export class Menu extends Component {
  render() {
    return (
      <div> 
        <nav class="navbar navbar-expand-sm bg-light navbar-light">
          <div class="container-fluid">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
              </li>
            <li class="nav-item">
                <Link class="nav-link" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
      </div>
    );
  }
}