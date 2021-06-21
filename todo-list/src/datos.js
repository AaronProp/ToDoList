import uuid from "react-uuid"

const datos = {
    lists:{
        "01list":{
            id:"01list",
            title:"Default",
            cards:[{
                id:"01card",
                title:"Limpiar"
            }, {
                id:"02card",
                title:"Barrer"
                },
                {
                id:"03card",
                title:"Comer"
                },
                {
                id: uuid(),
                title:"Nueva tarea"
            },
        ]

        },
        "02list":{
            id:"02list",
            title: "En proceso",
            cards:[]
        }
    },
    listIds: ["01list","02list"]
}

export default datos