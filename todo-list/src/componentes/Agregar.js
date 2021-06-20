import React from 'react';
import {Collapse, fade, makeStyles, Paper, Typography} from "@material-ui/core"
import {useState} from 'react'
import Input from './Input';

const Agregar = ({type}) => {
    const [open, setOpen] = useState(false);
    const clases = useStyle();
    return (
        <div className={clases.root}>
            <Collapse in={open}>
                <Input type ={type} setOpen={setOpen}></Input>
            </Collapse>
            <Collapse in={!open}>
                <Paper className={clases.input} onClick={()=>setOpen(true)}>
                    <Typography>
                        {
                            type==="card"?
                            "+ Nueva tarea":
                            "+ Nueva Lista"
                        }
                        </Typography>
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
}));

export default Agregar;