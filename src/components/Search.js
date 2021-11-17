import React, {useState} from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import './Search.css';

function Search({details}) {

    const [searchField,
        setSearchField] = useState("");

    const filteredItems = details.filter(item => {
        return (item.TABLE.toUpperCase().includes(searchField.toUpperCase()) || item.TITLE.toUpperCase().includes(searchField.toUpperCase()));
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
        <section className="app_body">
            <div>
                <h2>Sage 300 Tables or whatever</h2>
            </div>
            <div class="ui icon input"><input type="text" onChange={handleChange} placeholder="Search Table or Title"/>
                <i aria-hidden="true" class="search circular link icon"></i>
            </div>
            {searchList()}
        </section>
    );
}

export default Search