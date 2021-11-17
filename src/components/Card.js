import React from 'react';
import './Card.css'

function Card({item}) {

    return(

        <div>
             <table class="ui celled table">
                <tbody class="">
                   
                            <tr>
                                <td className="table">{item.TABLE}</td>
                                <td className="title">
                                    {item.TITLE}
                                </td>
                            </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Card

