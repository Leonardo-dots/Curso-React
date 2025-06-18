import CardWidget from "./CardWidget"
import { NavLink } from "react-router-dom"
export default function Navbar(){

    return(
    <nav className="navbar">
        <NavLink to={"/"}><img src="../motoLogo.png" alt="" /></NavLink>
        <NavLink to={"/filter/Familia-E"}>Familia E</NavLink>
        <NavLink to="/filter/Familia-G">Familia G</NavLink>
        <NavLink to="/filter/Familia-Edge">Familia Edge</NavLink>
        <NavLink to="/filter/Familia-Razr">Familia Razr</NavLink>
        <CardWidget/>
    </nav>
)} 