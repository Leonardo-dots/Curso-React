import CardWidget from "./CardWidget"
import { NavLink } from "react-router-dom"
export default function Navbar(){

    return(
    <nav className="navbar">
        <NavLink to="/"><img src="../motoLogo.png" alt="" /></NavLink>
        <NavLink to="/categoria/Familia-E">Familia E</NavLink>
        <NavLink to="/categoria/Familia-G">Familia G</NavLink>
        <NavLink to="/categoria/Familia-Edge">Familia Edge</NavLink>
        <NavLink to="/categoria/Familia-Razr">Familia Razr</NavLink>
        <CardWidget/>
    </nav>
)} 