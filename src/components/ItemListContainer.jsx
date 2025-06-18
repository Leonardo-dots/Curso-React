import { useParams } from "react-router-dom"
import getProductos from "../mock/Productos"
import ItemList from "./itemList"
import { useState, useEffect } from "react"

export default function ItemListContainer(){
    const [data, setData] = useState([])
    const {category} = useParams()


    useEffect(() => {
        getProductos()
        .then((response) => {
            if(category){
                setData(response.filter(producto => producto.category === category));
            }else{
                setData(response)
            }
        })
        .catch((error) => setData(error))
    },[category])
    return(
        <ItemList data={data}></ItemList>
    )
}

