import React from 'react';
import { Paper, CssBaseline, makeStyles } from '@material-ui/core';
import EncabezadoLista from './EncabezadoLista';
import Tarjeta from './Tarjeta';
import Agregar from './Agregar';
import { blueGrey } from '@material-ui/core/colors';


const Lista = () => {
    const clases = useStyle();
    return (
        <Paper className={clases.root}>
            <CssBaseline></CssBaseline>
            <EncabezadoLista></EncabezadoLista>
            <Tarjeta></Tarjeta>
            <Agregar></Agregar>
        </Paper>
    );
};

const useStyle = makeStyles(theme => ({
    root: {
        width: "300px",
        background : "#BED1E5",
        margin: theme.spacing(2)
        }
}))

export default Lista;