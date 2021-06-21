import React, { useState } from 'react';
import { makeStyles, Typography, InputBase } from '@material-ui/core';
import ClearAllIcon from '@material-ui/icons/ClearAll';



const EncabezadoLista = ({title, listId}) => {
    const clases = useStyle();
    const [open, setOpen]= useState(false)

    return (

        <>
        {open ? (
            <InputBase
            autoFocus
            fullWidth
            inputProps={{className:clases.input}}
            />
        ): (<div className={clases.titulo}>
        <Typography className={clases.TextoTitulo} onClick={()=>setOpen(true)}>
            {title}
        </Typography>
        <ClearAllIcon></ClearAllIcon>
        </div>)}
        </>

        
    );
};

const useStyle = makeStyles(theme => ({
    titulo: {
        display: "flex",
        margin: theme.spacing(1),
        },
        TextoTitulo:{
            flexGrow: 1,
            fontWeight: "bold" 
        },
        input:{
            fontWeight: "bold",
            margin:theme.spacing(1),
            "&:focus":{
                background: "pink",
                borderRadius: (8),
            }
        }
}))

export default EncabezadoLista;