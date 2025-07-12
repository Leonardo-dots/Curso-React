import { useContext } from "react"
import { CartContext } from "../context/Context"
import { Link } from "react-router-dom"

export const CartView = () => {
    const {cart, removeItem, removeCart, totalPay} = useContext(CartContext)
    return (
        <>
        {cart.map(compra => (
            <div className="compra" key={compra.id}>
                <img src={compra.img}/>
                <div className="compraInfo">
                    <h2>{compra.name}</h2>
                    <p>{compra.description}</p>
                    <div className="compraData">
                        <span>{compra.quantity} {compra.quantity > 1 ? "Unidades" : "Unidad"}</span><span>${(compra.quantity * compra.price).toLocaleString("es-Ar")}</span>
                    </div>
                    
                </div>
                <button className="removeItem" onClick={() => removeItem(compra.id)}>X</button>
            </div>
        ))}
        <div className="finalizar">
            <Link to="/checkout" className="confirmar">Continuar Compra</Link>
            <button className="removeCart" onClick={() => removeCart()}>Eliminar Carrito 😫</button>
        </div>  
        </>
    )
}