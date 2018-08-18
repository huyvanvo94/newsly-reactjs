import TimeTab from './TimeTab';
import React, {Component} from 'react';

class DateTab extends TimeTab{

    render(){
        return (
            <div>
                <p>{this.state.date.toDateString()}</p>
            </div>
        );
    }
}

export default DateTab;