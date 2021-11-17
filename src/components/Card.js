import React from 'react';

function Card({item}) {

    return(

        <div>
            <p>{item.TABLE} : {item.TITLE}</p>
        </div>
    )
}

export default Card