import { useParams } from "react-router-dom"
import getProductos from "../mock/Productos"
import ItemList from "./itemList"
import { useState, useEffect } from "react"
import { Loader } from "./Loader"

export default function ItemListContainer(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const {category} = useParams()

    useEffect(() => {
        setLoading(true)
        getProductos()
        .then((response) => {
            if(category){
                setData(response.filter(producto => producto.category === category));
            }else{
                setData(response)
            }
        })
        .catch((error) => setData(error))
        .finally(() =>setLoading(false))
    },[category])
    return(
        <>
        {loading ? <Loader/> : <ItemList data={data}></ItemList>}
        </>
        
    )
}

