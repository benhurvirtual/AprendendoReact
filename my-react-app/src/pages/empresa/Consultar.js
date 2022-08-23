import React, { Component } from 'react';
import {listaEmpresas} from './empresas';


export class Consultar extends Component {
  render() {
    return(
       <div>
        <h2>Consultar</h2>

        <ul style={{listStyle: "none"}}>
          {listaEmpresas.map((empresa) => <li>{empresa}</li>)}          
        </ul>

       </div>
    );
  }
}
