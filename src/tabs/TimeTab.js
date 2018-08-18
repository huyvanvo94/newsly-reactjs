import React, {Component} from 'react';

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
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }

}

export default TimeTab;