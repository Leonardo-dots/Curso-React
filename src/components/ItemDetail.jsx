import React from "react"
import { ItemCount } from "./itemCount"

export default function ItemDetail({detail}){

    return(
        <div className="itemDetail">
            <div className="itemDetailImg">
                <img src={detail.img} alt=""/>
            </div>
            <div className="itemDetailContainer">
                <h2>{detail.name}</h2>
                <h3>{detail.category}</h3>
                <strong>{detail.stock} Unidades disponibles</strong>
                <p>{detail.description}</p>
                <div className="detail">
                    <span>${detail?.price?.toLocaleString('es-AR')}</span>
                    <ItemCount detail={detail}/>
                </div>   
            </div>
        </div>
    )
}