import React from 'react';
import {Collapse, fade, makeStyles, Paper, Typography} from "@material-ui/core"
import {useState} from 'react'
import Input from './Input';
import { classicNameResolver } from 'typescript';

const Agregar = () => {
    const [open, setOpen] = useState(true);
    const clases = useStyle();
    return (
        <div className={clases.root}>
            <Collapse in={open}>
                <Input></Input>
            </Collapse>
            <Collapse in={!open}>
                <Paper className={clases.input}>
                    <Typography>+ Nueva tarea</Typography>
                </Paper>
            </Collapse>
            
        </div>
    );
};


const useStyle = makeStyles(theme => ({
    root: {
        
        },
        input:{
            padding: theme.spacing(1.5),
            margin: theme.spacing(1),
            background: "#BED1E5",
            "&:hover":{
                backgroundColor: fade("#000", .05),
            }
        }
}))

export default Agregar;