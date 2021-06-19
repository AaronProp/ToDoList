import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { clases } from 'istanbul-lib-coverage';
import ClearAllIcon from '@material-ui/icons/ClearAll';

const EncabezadoLista = () => {
    const clases = useStyle();
    return (
        <div className={clases.titulo}>
        <Typography className={clases.TextoTitulo}>
            Pendientes
        </Typography>
        <ClearAllIcon></ClearAllIcon>
        </div>
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
        }
}))

export default EncabezadoLista;