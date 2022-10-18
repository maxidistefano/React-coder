import Navbar from "./componentes/NavBar/Navbar"
import './App.css';
import ItemCount from './componentes/ItemCount/ItemCount.jsx'
import "bootstrap/dist/css/bootstrap.min.css";


const App=() =>{
  return (
    <div>
      <Navbar />
      <ItemCount />
    </div>
  );
}



export default App;


