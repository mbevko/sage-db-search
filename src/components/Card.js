import React from 'react';

function Card({item}) {

    return(

        <div>
            <p>{item.table}</p>
            <p>{item.title}</p>
        </div>
    )
}

export default Card