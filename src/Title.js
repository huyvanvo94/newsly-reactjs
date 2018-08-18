/**
 * Title.js
 * @author Huy Vo
 */

import React, {Component } from 'react';
import './Title.css';
import Tab from './tabs/Tab';
import Tabs from './tabs/Tabs';
import TimeTab from './tabs/TimeTab';
import DateTab from './tabs/DateTab';


class Title extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: this.props.title
        };
    }

    tabs(){
        return [<DateTab/>, <TimeTab/>]
    }

    render(){
        return (

            <div id="title_container">
                <h1 id="title_header">
                    {this.state.title}
                </h1>

                <Tabs tabs={this.tabs()}/>

            </div>


        );
    }
}

export default Title;