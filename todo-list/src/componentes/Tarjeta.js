import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const Tarjeta = () => {
    const clases = useStyle();
    return (
        <Paper className={clases.tarjeta}>
            Hola
        </Paper>
    );
};

const useStyle = makeStyles(theme => ({
    tarjeta: {
        padding: theme.spacing(1),
        margin: theme.spacing(2)
        }
}))
export default Tarjeta;