import React, {Component} from 'react';
import './Tabs.css';

class Tabs extends Component{

    constructor(props){
        super(props);

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