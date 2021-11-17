import React from 'react';
import './Card.css'

function Card({item}) {

    return (       
        <tr>
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
