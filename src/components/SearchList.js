import React from 'react';
import Card from './Card';

function SearchList({filteredItems, filteredItemsAr}) {

    const filtered = filteredItems.map(item => <Card key={item.id} item={item}/>);
    const filteredAr = filteredItemsAr.map(item => <Card key={item.id} item={item}/>);

    return (
        
            <tbody>
                {filtered}
                {filteredAr}
            </tbody>
    );
}

export default SearchList;
