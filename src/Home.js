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

/// To mock data
function mockData() {
    return "Officially, “Respect” is a relationship song. That’s how Otis Redding wrote it. But love wasn’t what Aretha Franklin was interested in. The opening line is “What you want, baby, I got it.” But her “what” is a punch in the face. So Ms. Franklin’s rearrangement was about power. She had the right to be respected — by some dude, perhaps by her country. Just a little bit. What did love have to do with that?"
}

class NewsFeedBlock extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: this.props.title,
            feed: this.props.feed
        };

    }

    render() {
        return (
            <p>
                {this.state.feed}
            </p>
        );
    }

}

class NewsFeedBlockPreview extends NewsFeedBlock{

    render(){

    }
}

class Home extends Component {

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

                <HeadlineBlock/>


            </div>
        );
    }
}


export default Home ;