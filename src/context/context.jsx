import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]) 

    const addToCart = (product, cantidad) => {
        if(isInCart(product.id)){
            const carritoActualizado = cart.map((producto) =>{
                if(producto.id === product.id){
                    return ({...producto, quantity: producto.quantity + cantidad})
                } else {
                    return producto
                }
            })
            setCart(carritoActualizado)
        } else {
            setCart([...cart, {...product, quantity: cantidad}])
        }
        console.log(cart)
    }

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const removeCart = () => setCart([])

    const isInCart = (id) => cart.some(item => item.id === id)

    const quantityItems = () => cart.reduce((total, item) => total + item.quantity,0)

    const totalPay = () => cart.reduce((total, item) => total + (item.quantity * item.price), 0)

    return (
        <CartContext.Provider value = {{cart, addToCart, removeItem, removeCart, quantityItems, totalPay}}>
            {children}
        </CartContext.Provider>
    )
}

