/**
 * Home.js
 * @author Huy Vo
 */
import React, { Component } from 'react';
import Title from './Title';
import Tab from './tabs/Tab';
import Tabs from './tabs/Tabs';
import HeadlineBlock from './HeadlineBlock';
import SearchBar from './Search';

export default class Home extends Component {

    renderNewsTab(){
        return [
            <Tab title="World" url="example"/>,
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

