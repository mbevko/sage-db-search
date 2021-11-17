import React, {useState} from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({details}) {

    const [searchField,
        setSearchField] = useState('');

    const filteredItems = details.filter(item => {
        return (item.TABLE.toUpperCase().includes(searchField.toUpperCase()) || filteredItems.TITLE.toUpperCase().includes(searchField.toUpperCase));
    });

    const handleChange = e => {
        setSearchField(e.target.value);
    };

    function searchList() {
        return (
            <Scroll>
                <SearchList filteredItems={filteredItems}/>
            </Scroll>
        );
    }

    return (
        <section>
            <div>
                <h2>Sage 300 Tables or whatever</h2>
            </div>
            <div>
                <input
                    type="search"
                    placeholder="Search Table or Title"
                    onChange={handleChange}/>
            </div>
            {searchList()}
        </section>
    );
}

export default Search