import { useContext, useState } from "react"
import { CartContext } from "../context/Context";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { dataBase } from "../service/firebase";

export const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [validMail, setValidMail] = useState("")
    const [orderID, setOrderID] = useState("")
    const {cart, totalPay, removeCart} = useContext(CartContext)

    const buyerData = (e) =>{
        setBuyer({...buyer, [e.target.name]: e.target.value})
    }
    const formSend = (e) => {
        e.preventDefault()
        const order = {Buyer: buyer, Cart: cart, Total: totalPay(), Date: serverTimestamp()}
        const ventas = collection(dataBase, "Ventas")
        addDoc(ventas, order)
        .then(res => {
            setOrderID(res.id)
            removeCart()
    })
    .catch(error => console.log(error))
    }
    

    return (
        <div className="formContainer">
            <h2>Complete sus datos</h2>
            <form onSubmit={formSend}>
                <div>
                    <label>Nombre: <input onChange={buyerData} type="text" name="name" required></input></label>
                    <label>Apellido: <input onChange={buyerData} type="text" name="lastname" required/></label>
                    <label>Documento: <input onChange={buyerData} type="text" name="dni" required/></label>
                </div>
                <div>
                    <label>Direccion: <input onChange={buyerData} type="text" name="address" required placeholder="Av pepito 1154"/></label>
                    <label>Numero de telefono: <input onChange={buyerData} type="number" name="phoneNumber" required/></label>
                    <label>Correo Electronico: <input onChange={buyerData} type="email" name="email" required placeholder="Ingrese su Email"/></label>
                    <label>Correo Electronico <input onChange={buyerData} type="email" name="secondEmail" required placeholder="Repita su Email"/></label>
                </div>
                <button type="submit">Finalizar Compra</button>
            </form>
        </div>
    )
}