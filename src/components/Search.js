import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({ details }) {

    const [searchField, setSearchField] = useState('');

    const filteredItems = details.filter(
        person => {
            return (
                person.name.toUpperCase().includes(searchField.toUpperCase()) || filteredItems.email.toUpperCase().includes(searchField.toUpperCase)
            )
        }
    )
}