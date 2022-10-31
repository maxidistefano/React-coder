import React from 'react';
import { data } from '../componentes/productosCards/data';
import './ItemDetail.css'

const ItemDetailContainer = ({name, description, imgs}) => {
  return (
    <div class="container">
 <div class="card">
    <img
    src={`/imagenes/${imgs.imgProduct}`} 
    alt="" 
    />
    <h2>{name}</h2>
    <p>{description}</p>
    <a href="#">Leer más</a>
 </div>
 
 
    </div>
  )
}

export default ItemDetailContainer;