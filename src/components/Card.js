import React from 'react';
import './Card.css'

function Card({item}) {

    return (       
        <tr className={item.MODULE === "ACCOUNTS PAYABLE" ? "ap_row" : "ar_row"}>
            <td className="module">
                {item.MODULE}
            </td>
            <td className="table">
            <a className="table_link" rel="noreferrer" href={item.LINK} target="_blank">{item.TABLE}</a>
            </td>
            <td className="title">
                {item.TITLE}
            </td>
        </tr>
    )
}

export default Card
