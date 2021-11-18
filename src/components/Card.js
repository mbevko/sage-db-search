import React from 'react';
import './Card.css'

function Card({item}) {

    return (       
        <tr className={item.MODULE === "ACCOUNTS PAYABLE" ? "ap_row" : "ar_row"}>
            <td className="module">
                {item.MODULE}
            </td>
            <td className="table">
                {item.TABLE}
            </td>
            <td className="title">
                {item.TITLE}
            </td>
        </tr>
    )
}

export default Card
