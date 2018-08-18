/**
 * Tab.js
 * @author Huy Vo
 */

import React, {Component} from 'react';
import './Tab.css';

class Tab extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: this.props.title,
            url: this.props.url
        };

    }
    render() {
        return (
            <p className="tab_header">
                {this.state.title}
            </p>
        );
    }
}

export default Tab;