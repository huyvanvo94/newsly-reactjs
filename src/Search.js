/// SearchBar.js
/// https://www.npmjs.com/package/material-ui-search-bar
import React, { Component } from 'react';
import './Search.css';
import { Link, Switch, Redirect, withRouter, BrowserRouter, Route } from 'react-router-dom';
import history from './history';
const Button = withRouter(({ history }) => (
    <button
        type='button'
        onClick={() => { history.push('/new-location') }}
    >
        Click Me!
    </button>
));

const AnButton = () => (
    <Route render={({ history}) => (
        <button
            type='button'
            onClick={() => { history.push('/new-location') }}
        >
            Click Me!
        </button>
    )} />
);


class SearchBar extends Component {
    constructor (props) {
        super(props);


    }

    componentDidMount() {
        window.onkeyup = this.keyup;
    }

    keyup(e){

        this.inputTextValue = e.target.value;

        console.log(this.inputTextValue);

        if(e.keyCode === 13){
            window.location.href = '/search?query=' + this.inputTextValue
           // history.push('/search?query=' + this.inputTextValue);
        }
    }

    searchAction(){

        console.log("hello");
    }



    render () {
        return (
            <div className='searchbar-container'>

                <input id="s_bar" type="text" placeholder="Search.." />
            </div>
        )
    }
}

export default SearchBar;