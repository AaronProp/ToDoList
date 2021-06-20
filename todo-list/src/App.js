import { makeStyles } from '@material-ui/core';
import './App.css';
import Lista from "./componentes/Lista";
import fondo_pantalla from "./Imagenes/tejado-colores.jpg";
import Agregar from './componentes/Agregar';

function App() {
  const clases = useStyle();
  return (
    <div className={clases.root}>
      <div className={clases.contenedor}>
      <Lista></Lista>
      <Lista></Lista>
      <Lista></Lista>
      <button>
      <div class="pt-13"><Agregar type="list"></Agregar></div>
      </button>
      </div>
      
    </div>
  );
}


const useStyle = makeStyles(theme => ({
  root: {
    backgroundImage: `URL(${fondo_pantalla})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
      overflowY: "auto",
      minHeight: "100vh"
      },
      contenedor:{
        display: "flex"
      }
}))
export default App;
