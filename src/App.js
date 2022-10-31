import Navbar from "./componentes/NavBar/Navbar"
import './App.css';
import ItemCount from './componentes/ItemCount/ItemCount.jsx'
import ItemListContainer from './containers/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./componentes/productosCards/data";
import ItemDetailContainer from "./containers/ItemDetailContainer";


const App=() =>{

  const products = data.map (product =>(
    <ItemDetailContainer key={product.id} {...product} /> 
  ))


  return (
    <div>
      <Navbar />
      <div>{products}</div>
      <ItemCount />
    </div>
  );
}



export default App;


