import React from "react";
import Item from "./Item";

export default function ItemList({ data }){
    return(
        <div className="itemList">
            {data.map((producto) => {
            return <Item key={producto.id} producto={producto}/>})}
        </div>
    )
}