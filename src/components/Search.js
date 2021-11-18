import React, {useState} from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import './Search.css';
import 'semantic-ui-css/semantic.min.css';

function Search({details}) {

    const [searchField,
        setSearchField] = useState("");
    const [searchShow,
        setSearchShow] = useState(false);

    const filteredItems = details.filter(item => {
        return Object.values(item).map(n => n.toUpperCase()).includes(searchField.toUpperCase());
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

    function searchList() {
        if (searchShow) {
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
                <div className="input_btn">
                    <div className="ui icon input"><input
                        type="text"
                        onChange={handleChange}
                        placeholder="Search by  Table, or Title"/>
                        <i aria-hidden="true" class="search circular link icon"></i>
                    </div>
                    <button
                        class={searchShow
                        ? "ui active toggle button"
                        : "ui toggle button"}
                        onClick={handleClick}>Show tables</button>
                </div>
                <table className="ui celled striped table">
                    <thead>
                        <tr>
                            <th class="module_head">
                                MODULE
                            </th>
                            <th class="table_head">
                                TABLE
                            </th>
                            <th class="title_head">
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
