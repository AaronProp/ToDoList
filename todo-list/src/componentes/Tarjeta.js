import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Provider } from 'react-redux';

const Tarjeta = ({card, index}) => {
    const clases = useStyle();
    return (
        <Draggable draggableId={card.id} index={index}>
        {
            (provided)=>(
                <div ref={provided.innerRef} {...provided.dragHandleProps}
                     {...provided.draggableProps}>
                    <Paper className={clases.tarjeta}>
                    {card.title}
                    </Paper>
                </div>
                
            )
        }
        </Draggable>
    );
};

const useStyle = makeStyles(theme => ({
    tarjeta: {
        padding: theme.spacing(1),
        margin: theme.spacing(2)
        }
}))
export default Tarjeta;