import React, {Component} from 'react';
import './Tabs.css';

class TimeTab extends Component{
    constructor(props){
        super(props);

        this.state = {
          date: new Date()
        };
    }

    componentDidMount(){

        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    render(){
        return (
            <div>
                <p className="general_tab">{this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }

}

export default TimeTab;