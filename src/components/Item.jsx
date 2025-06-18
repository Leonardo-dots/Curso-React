import React from "react";
import { Link } from "react-router-dom";

export default function Item( {producto} ){
    return (
        <div className="item">
            <h2>{producto.name}</h2>
            <p>{producto.description}</p>
            <Link to={`/smartphone/${producto.id}`} className="verMas">Ver mas</Link>
            <img src={producto.img} alt="" />
        </div>
    )
}