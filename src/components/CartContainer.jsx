import { useContext } from "react"
import { CartContext } from "../context/Context"
import { CartView } from "./CartView"
import { EmptyCart } from "./EmptyCart"

export const CartContainer = () => {
    const {quantityItems} = useContext(CartContext)
    return (
        <>
        {quantityItems() > 0 ? <CartView/> : <EmptyCart/>}
        </>
        
    )
}