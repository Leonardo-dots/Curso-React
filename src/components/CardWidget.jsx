import { NavLink } from "react-router-dom";
import { CartContext } from "../context/Context";
import { useContext } from "react";

export default function CardWidget(){
    const { quantityItems } = useContext(CartContext)

    return(
        <NavLink to="/cart">🛒<span className="countWidget">{quantityItems()}</span></NavLink>
    )
} 