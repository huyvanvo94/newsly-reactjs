/**
 * Home.js
 * @author Huy Vo
 */
import React, { Component } from 'react';
import Title from './Title';
import Tab from './tabs/Tab';
import Tabs from './tabs/Tabs';
import {Link} from 'react-router-dom';

export default class Home extends Component {

    constructor(props){
        super(props);

        this.theStyle = {
            text_decoration: null
        };
    }

    renderNewsTab(){
        return [

            <Link to="/search?query=world" style={this.theStyle}>
                <Tab title="World" url="example"/>
            </Link>,
            <Tab title="U.S." url="example"/>,
            <Tab title="Politics" url="example"/>,
            <Tab title="N.Y." url="example"/>,
            <Tab title="Business" url="example"/>,
            <Tab title="Opinion" url="example"/>,
            <Tab title="Tech" url="example"/>,
            <Tab title="Science" url="example"/>,
            <Tab title="Food" url="example"/>,
            <Tab title="Arts" url="example"/>,
            <Tab title="Travel" url="example"/>
        ]
    }

    render() {
        return (
            <div>

                <Title title="Newsly"/>

                <Tabs tabs={this.renderNewsTab()}/>


            </div>
        );
    }
}

