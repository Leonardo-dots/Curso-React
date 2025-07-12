import { useEffect, useState } from "react";
import getProductos from "../mock/Productos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";
import { collection, doc, getDoc } from "firebase/firestore";
import { dataBase } from "../service/firebase";
import PageError from "./Error";

export default function ItemDetailContainer(){
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(false)
    const [invalid, setInvalid] = useState(false)
    const {id} = useParams()

    useEffect(()=>{
        setLoading(true)
        const prodDetail = collection(dataBase, "Productos")
        const docref = doc(prodDetail, id)
        getDoc(docref).then((res)=>{
            if(res.data()){
                setDetail({id: res.id, ...res.data()})
            } else{
                setInvalid(true)
            }
        })
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    },[])

    // useEffect(() => {
    //     setLoading(true)
    //     getProductos()
    //     .then(response => setDetail(response.find(item => item.id === id)))
    //     .finally(()=> setLoading(false))
    // },[])


    return(
        <>
        {invalid ? <PageError/> : loading ? <Loader/> : <ItemDetail detail={detail}/>}
        </>
    )
}