import React from 'react';
import ReactDOM from 'react-dom/client';
import './navbar.css';


import App from '../../App';
import { CardWidget } from '../cardwidgets/CardWidgets';

export const Navbar = () =>{
  return (
    <div>
      <header>
       <div class="contenedor">
        <nav class="nav__checkbox">
          <a href="#" class="logo"><h2>LOGO</h2></a>
          <input type="checkbox" id="tab-nav" class="tab-nav"></input>
            <label for="tab-nav" class="label">
              <div class="burger"></div>
              <div class="burger"></div>
              <div class="burger"></div>
            </label>
            <ul class="content__nav">
              <li><a href="#">PRODUCTOS</a></li>
              <li><a href="#">CARRITO</a></li>
            </ul>
        </nav>
       </div>
      </header>
      <section class="content__section"></section>
      </div>
        )

  
}

export default Navbar