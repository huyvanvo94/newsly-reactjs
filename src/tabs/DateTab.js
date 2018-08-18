import React, {Component} from 'react';
import './Tabs.css';


const DateTab = () =>
    <div>
        <p className="general_tab">{new Date().toDateString()}</p>
    </div>


export default DateTab;