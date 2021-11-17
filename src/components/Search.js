import React, {useState} from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import './Search.css';

function Search({details}) {

    const [searchField,
        setSearchField] = useState("");
    const [searchShow,
        setSearchShow] = useState(false);

    const filteredItems = details.filter(item => {
        return (item.TABLE.toUpperCase().includes(searchField.toUpperCase()) || item.TITLE.toUpperCase().includes(searchField.toUpperCase()) || item.MODULE.toUpperCase().includes(searchField.toUpperCase()));
    });

    const handleChange = e => {
        setSearchField(e.target.value);
        if(e.target.value===""){
            setSearchShow(false);
          }
          else {
            setSearchShow(true);
          }
    };

    function searchList() {
        if(searchShow){
            return (
                <Scroll>
                    <SearchList filteredItems={filteredItems}/>
                </Scroll>
            );
        }
    }

    return (
        <section className="app_body">
            <div className="main_header">
                <div className="ui huge header">Sage 300 ERP</div>
                <div className="ui icon input"><input type="text" onChange={handleChange} placeholder="Search Table or Title"/>
                    <i aria-hidden="true" class="search circular link icon"></i>
                </div>
            </div>
            {searchList()}
        </section>
    );
}

export default Search