import { useEffect, useState } from "react";
import getProductos from "../mock/Productos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";

export default function ItemDetailContainer(){
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(false)
    const {id} = useParams()
    useEffect(() => {
        setLoading(true)
        getProductos()
        .then(response => setDetail(response.find(item => item.id === id)))
        .finally(()=> setLoading(false))
    },[])
    return(
        <>{loading ? <Loader/> : <ItemDetail detail={detail}/> }</>
    )
}