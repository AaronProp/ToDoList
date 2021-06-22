import { makeStyles } from '@material-ui/core';
import './App.css';
import Lista from "./componentes/Lista";
import fondo_pantalla from "./Imagenes/tejado-colores.jpg";
import Agregar from './componentes/Agregar';
import datos from "./datos.js"
import { useState } from 'react';
import ContextAPI from './ContextAPI';
import uuid from 'react-uuid'
import {DragDropContext, Droppable} from "react-beautiful-dnd"
import Login from './componentes/Login';

function App() {
  const clases = useStyle();
  const [data, setData] = useState(datos)
  console.log(data)

  const addCard = (titulo, listId)=> {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      titulo: titulo
    }
    const list = data.lists[listId]
    list.cards = [...list.cards, newCard]
    setData({
      ...data,
      lists:{
        ...data.lists,
        [listId]:list
      }
    })
  }

  const addList =(titulo)=>{
    const newListId = uuid()
    setData({
      listId:[...data.listId, newListId],
      ...data.lists,
      [newListId]:{
        id:newListId,
        titulo: titulo,
        cards:[]
      }
    })
  }
  
  const onDragEnd=(result)=>{
    const {destination, destination:{droppableId: destdroppableId, index : destIndex}, source, source:{droppableId: sourcedroppableId, index : sourceIndex}, draggableId, type} = result

    console.table([{
      sourcedroppableId,
      destdroppableId,
      draggableId
    }
    ])

    console.table([{
      type,
      sourceIndex,
      destIndex
    }
    ])

    if(!destination){
      return;
    }

    if(type ==="list"){
      const newListIds = data.listIds
      newListIds.splice(sourceIndex, 1)
      newListIds.splice(destIndex, 0, draggableId)
      return;
    }

    const sourceList = data.lists[sourcedroppableId]
    const destinationList = data.lists[destdroppableId]

    const draggingCard = sourceList.cards.filter((card)=>card.id === draggableId)[0]

    console.table([{
      draggingCard,
      sourceList,
      destinationList
    }
    ])

    if(sourcedroppableId === destdroppableId){
      sourceList.cards.splice(sourceIndex, 1);
      destinationList.cards.splice(destIndex,0, draggingCard)
      setData({
        ...data,
        lists:{
          ...data.lists,
          [sourceList.id]: destinationList,
        }
      })
    }else{
      sourceList.cards.splice(sourceIndex, 1);
      destinationList.cards.splice(destIndex, 0, draggingCard)
      setData({
        ...data.lists,
        [sourceList.id]: sourceList,
        [destinationList.id]: destinationList
      })
    }
  }

  return (
      <ContextAPI.Provider value={addCard, addList}>
        <Login></Login>
        <div className={clases.root}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="12345" type="list" direction="horizontal">
              {
                (provided)=>(
                  <div className={clases.contenedor} ref={provided.innerRef} 
                  {...provided.droppableProps}>
        {
          data.listIds.map(listID => {
            const list = data.lists[listID]
            return <Lista list ={list} key={listID}/>
          })
        }
      <button>
      <div class="pt-13"><Agregar type="list"></Agregar>
      {provided.placeholder}
      </div>
      </button>
      </div>
                )
              }
      
      </Droppable>
      </DragDropContext>
    </div>
      </ContextAPI.Provider>
  );
}


const useStyle = makeStyles(theme => ({
  root: {
    backgroundImage: `URL(${fondo_pantalla})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
      overflowY: "auto",
      minHeight: "100vh"
      },
      contenedor:{
        display: "flex"
      }
}))
export default App;
