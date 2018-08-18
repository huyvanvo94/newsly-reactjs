import React, {Component} from 'react';
import Tab from './Tab';
import TimeTab from './TimeTab';
import './Tabs.css';

class Tabs extends Component{

    constructor(props){
        super(props);

        /*
        this.state = {
            tabs: this.props.tabs
        }*/
    }

    displayTabs(){
        const tabs = this.props.tabs;

        const listTabs = tabs.map((tab) =>

            <div className="tab_child">
                {tab}
            </div>
        );

        return listTabs;
    }

    render() {
        return (

            <div id="tabs_inner">
                {this.displayTabs()}
            </div>

        );
    }
}

export default Tabs;