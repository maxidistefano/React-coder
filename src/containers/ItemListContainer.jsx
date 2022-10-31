import React, { useEffect, useState } from "react";
import ItemCount from '../componentes/ItemCount/ItemCount';

export const ItemListContainer = () =>{

const onAdd = (quantity) =>{
    console.log (`Compraste ${quantity} unidades`)
}
    return (
        <>

        <ItemCount stock= {5} initial= {1} onAdd={onAdd} />
        </>
    );
};

export default ItemListContainer;