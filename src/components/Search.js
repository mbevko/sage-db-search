import React, {useState} from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import './Search.css';
import 'semantic-ui-css/semantic.min.css';
import DropdownInline from './DropdownInline';

function Search({apMod, arMod}) {

    const [searchField,
        setSearchField] = useState("");
    const [searchShow,
        setSearchShow] = useState(false);
    /* const [filterModules,
        setFilterModules] = useState(false); */

    const filteredItems = apMod.filter(item => {
        return (item.TABLE.toUpperCase().includes(searchField.toUpperCase()) || item.TITLE.toUpperCase().includes(searchField.toUpperCase()) || item.MODULE.toUpperCase().includes(searchField.toUpperCase()));
    });

    const filteredItemsAr = arMod.filter(item => {
        return (item.TABLE.toUpperCase().includes(searchField.toUpperCase()) || item.TITLE.toUpperCase().includes(searchField.toUpperCase()) || item.MODULE.toUpperCase().includes(searchField.toUpperCase()));
    });

    const handleChange = e => {
        setSearchField(e.target.value);
        if (e.target.value === "") {
            setSearchShow(false);
        } else {
            setSearchShow(true);
        }
    };

    const handleClick = () => {
        setSearchShow(!searchShow)
    }
/* 
    const handleFilterModules = () => {
        setFilterModules(!filterModules)
    } */

    function searchList() {
        if (searchShow) {
            return (
                <Scroll>
                    <SearchList filteredItems={filteredItems} filteredItemsAr={filteredItemsAr}/>
                </Scroll>
            );
        }
    }

    return (
        <section className="app_body">
            <div className="main_header">
                <div className="ui huge header">Sage 300 ERP</div>

                <div className="input_btn">
                    <div className="ui icon input"><input
                        type="text"
                        onChange={handleChange}
                        placeholder="Search by  Table, or Title"
                        type="search"/>
                    </div>


                    <button
                        className={searchShow
                        ? "ui active toggle button"
                        : "ui toggle button"}
                        onClick={handleClick}>Show tables</button>


                </div>


                <div className="filter_dropdown">
                    <DropdownInline/>
                </div>




                <table className="ui celled striped table">
                    <thead>
                        <tr>
                            <th className="module_head">
                                MODULE
                            </th>
                            <th className="table_head">
                                TABLE
                            </th>
                            <th className="title_head">
                                TITLE
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
            <table className="ui celled striped table">
                {searchList()}
            </table>
        </section>
    );
}

export default Search