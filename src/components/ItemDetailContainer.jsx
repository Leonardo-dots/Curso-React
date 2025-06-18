import { useEffect, useState } from "react";
import getProductos from "../mock/Productos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer(){
    const [detail, setDetail] = useState({})
    const params = useParams()
    useEffect(() => {
        getProductos()
        .then(response => setDetail(response.find(item => item.id === params.id)))
    },[])
    return(
        <ItemDetail detail={detail}/>
    )
}