import { useParams } from "react-router-dom"
import getProductos from "../mock/Productos"
import ItemList from "./itemList"
import { useState, useEffect } from "react"
import { Loader } from "./Loader"
import { collection, getDocs, query, where } from "firebase/firestore"
import { dataBase } from "../service/firebase"

export default function ItemListContainer(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const {category} = useParams()

    useEffect(() =>{
        setLoading(true)
        const prodCollection = category ? query(collection(dataBase, "Productos"), where("category", "==", category)) : collection(dataBase, "Productos")
        getDocs(prodCollection)
        .then((res) =>{
            const listProduct = res.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setData(listProduct)
        })
        .catch((error => console.log(error)))
        .finally(() => setLoading(false))
    },[category])


    //Promesa Local
    // useEffect(() => {
    //     setLoading(true)
    //     getProductos()
    //     .then((response) => {
    //         if(category){
    //             setData(response.filter(producto => producto.category === category));
    //         }else{
    //             setData(response)
    //         }
    //     })
    //     .catch((error) => setData(error))
    //     .finally(() =>setLoading(false))
    // },[category])


    return(
        <>
        {loading ? <Loader/> : <ItemList data={data}></ItemList>}
        </>
        
    )
}

