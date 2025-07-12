import { useContext, useState } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify"
import { CartContext } from "../context/Context";
import { Link } from "react-router-dom";

export function ItemCount({detail}){
    const [count, setCount] = useState(1)
    const [addedToCart, setAddedToCart] = useState(false)
    const {addToCart} = useContext(CartContext)

    const sumar = () => {
        count < detail.stock ? setCount(count + 1) : count
    }
    const restar = () => {
        count > 1 ? setCount(count - 1) : count
    }
    
    const add = () => setAddedToCart(true)

    const notify = () => {
        toast.success('Producto Agregado', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    return (
        <>
        <div className="countContainer">
            {addedToCart ? ("") : 
            (<div className="countContainer">
                <button className="count" onClick={restar}>-</button>
                <span>{count}</span>
                <button className="count" onClick={sumar}>+</button>
            </div>)}
        </div>
        <div className="buttonContainer">
            <ToastContainer />
            {addedToCart ? (<Link to="/cart" className="toastify">Ir al carrito</Link>) : <button className="toastify" onClick={()=>{notify(); addToCart(detail, count); add();}}>Agregar al carrito</button>}
        </div>
        </>
        
    )
}