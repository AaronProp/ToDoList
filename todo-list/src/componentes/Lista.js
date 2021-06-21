import React from 'react';
import { Paper, CssBaseline, makeStyles } from '@material-ui/core';
import EncabezadoLista from './EncabezadoLista';
import Tarjeta from './Tarjeta';
import Agregar from './Agregar';
import { blueGrey } from '@material-ui/core/colors';
import { Draggable, Droppable } from 'react-beautiful-dnd';


const Lista = ({list, index}) => {
    console.log(list)
    const clases = useStyle();
    return (
        <Draggable draggableId={list.id} index={index}>
            {
                (provided)=>(
                    <div {...provided.draggableProps} ref={provided.innerRef}>
                        <Paper className={clases.root} {...provided.dragHandleProps}>
            <CssBaseline></CssBaseline>
            <EncabezadoLista title={list.title} lisId={list.id}></EncabezadoLista>
            <Droppable droppableId={list.id}>
                {
                    (provided)=>(
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {
                            list.cards.map((card, index) =>(
                                <Tarjeta card={card} key={card.id} index={index}/>
                            ))
                        }
                        {provided.placeholder}
                        </div>
                    )
                }
                
            </Droppable>
            
            <Agregar type="card" listId={list.id}></Agregar>
        </Paper>
                    </div>
                )
            }
        </Draggable>
        
    )
}

const useStyle = makeStyles(theme => ({
    root: {
        minWidth: "250px",
        background : "#9bc3c2",
        margin: theme.spacing(2)
        }
}))

export default Lista;