import React from 'react';
import Card from './Card';

function SearchList({ filteredItems }) {

    const filtered = filteredItems.map(item => <Card key={item.id} item={item} />);

    return (
        <table className="ui celled table">
                <tbody>
            {filtered}
                </tbody>
        </table>
    );
}

export default SearchList;