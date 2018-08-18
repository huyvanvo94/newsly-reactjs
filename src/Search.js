/// SearchBar.js
/// https://www.npmjs.com/package/material-ui-search-bar
import React, { Component } from 'react';
import './Search.css';

class SearchBar extends Component {
    constructor (props) {
        super(props);

    }

    searchAction(){

    }

    render () {
        return (
            <div className='searchbar-container'>
                <input type="text" placeholder="Search.." onSubmit={this.searchAction}/>
            </div>
        )
    }
}

export default SearchBar;