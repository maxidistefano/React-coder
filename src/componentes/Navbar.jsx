import React from 'react';
import ReactDOM from 'react-dom/client';


import App from '../App';
import { CardWidget } from './cardwidgets/CardWidgets';

export const Navbar = () =>{
  return (<div>
      <header class="container-fluid bg-dark position-sticky top-0">
      <ul class="nav nav-pills mb-3 py-3 container" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Inicio</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link active" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Productos</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Carrito <CardWidget/></a>
          </li>
        </ul>
      </header>
      <main>
        <h1>MaxBurguers</h1>
      </main>

</div>
        )

  
}

export default Navbar