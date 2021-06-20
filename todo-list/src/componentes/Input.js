import { FormHelperText } from '@material-ui/core';
import { Paper, InputBase, makeStyles, IconButton, Button } from '@material-ui/core';
import React, { useState } from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Input = ({type, setOpen}) => {
    const clases = useStyle();
    const [titulo, setTitulo] = useState("")
    return (
        <div>
       <Paper className={clases.tarjeta}>
           <InputBase 
           multiline
           value={titulo} 
           onBlur={()=>setOpen(false)}
           onChange={e=>setTitulo(e.target.value)}
           placeholder={
               type ==="card"?
               "Tarea Ej. Limpiar casa":
               "Nombre de la lista"
           }
           inputProps={{className: clases.Input}}
           ></InputBase>
       </Paper>

       <div className={clases.confirmar}>
           
              <Button className={clases.btnConfirmar}>{
                  type == "card" ? "Agregar":
                  "Nueva Lista"
              }
              </Button>
           
              <IconButton onClick={()=>setOpen(false)}>
                  <HighlightOffIcon/>
              </IconButton>
       </div>
       </div>
    );
};


const useStyle = makeStyles(theme => ({
    tarjeta: {
       margin: theme.spacing(2,1,1,1),
       padding: theme.spacing(1)
        },
        confirmar: {
            display: "flex",
            margin: theme.spacing(1)
        },
        btnConfirmar: {
            background: "#00FC25",
            color: "white",
            padding: (4),
            margin:(2),
            "&:hover":{
                background:"gray"
            }
        },
}))
export default Input;