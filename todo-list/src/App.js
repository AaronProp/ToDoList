import { makeStyles } from '@material-ui/core';
import './App.css';
import Lista from "./componentes/Lista"

function App() {
  const clases = useStyle();
  return (
    <div className={clases.root}>
      <Lista></Lista>
      <Lista></Lista>
      <Lista></Lista>
      <Lista></Lista>
      <Lista></Lista>
      <Lista></Lista>
      <Lista></Lista>
      
    </div>
  );
}


const useStyle = makeStyles(theme => ({
  root: {
      display: "flex",
      overflowY: "auto"
      } 
}))
export default App;
