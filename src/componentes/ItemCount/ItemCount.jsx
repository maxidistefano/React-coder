import React, { useState } from 'react';


    const ItemCount = ({initial = 1}) =>{
      let stock = 5
    const [count, setCount] = useState (1);
    
    const subtract =() =>{
        setCount(count - 1);
    }

    const add =() =>{
      if (count < stock){
        setCount(count + 1);
      }
      
    }

    const addToCart = ()=>{
      console.log(`El usuario desea agregar ${count} productos`);
    }
return (
<div>
<button disabled={count <= 1} onClick={subtract}>-</button>
<h2>{count}</h2>
<button disabled={count >= stock} onClick={add}>+</button>
<button onClick={addToCart}>Agregar al Carrito</button>
</div>

 )
}; 
export default ItemCount;