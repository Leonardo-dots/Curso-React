import React from "react"

export default function ItemDetail({detail}){

    return(
        <div className="itemDetail">
            <div className="itemDetailImg">
                <img src={detail.img} alt=""/>
            </div>
            <div className="itemDetailContainer">
                <h2>{detail.name}</h2>
                <h3>{detail.category}</h3>
                <p>{detail.description}</p>
                <div className="compra">
                    <span>${detail.price}</span>
                    <button>Agregar al carrito</button>
                </div>
                
            </div>
        </div>
    )
}