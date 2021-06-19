import { FormHelperText } from '@material-ui/core';
import { Paper, InputBase, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

const Input = () => {
    const clases = useStyle();
    const [titulo, setTitulo] = useState("")
    return (
        <div>
       <Paper className={clases.tarjeta}>
           <InputBase value={titulo} onChange={e=>setTitulo(e.target.value)}
           placeholder="Tarea Ej. Limpiar casa"></InputBase>
       </Paper>

       <div className={clases.confirmar}>
           <div>
              <button className={clases.btnConfirmar}>Agregar</button>
           </div>
              <button className={clases.btnDenegar}>Descartar</button>
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
            "&:hover":{
                background:"gray"
            }
        },
        btnDenegar: {
            background: "#FF2207",
            "&:hover":{
                background:"orange"
            }
        }
}))
export default Input;