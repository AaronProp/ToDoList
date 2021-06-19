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
           <button class=" bg-green-600 border rounded p-1">Agregar</button>
           <button class=" bg-red-400 border rounded p-1">Descartar</button>
       </div>
       </div>
    );
};


const useStyle = makeStyles(theme => ({
    tarjeta: {
       margin: theme.spacing(2,1,1,1),
       padding: theme.spacing(1),
        },
        
}))
export default Input;