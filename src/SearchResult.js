import React, { Component } from 'react';
import './HeadlineBlock.css';
import * as qs from 'query-string';

class Article extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: this.props.article.title,
            description: this.props.article.description,
            urlToImage: this.props.article.urlToImage,
            url: this.props.article.url
        }
    }

    componentDidMount() {

    }

    render(){
        return (
            <div className="article_container">

                <h4> {this.state.title} </h4>

                <img className="article_img" src={this.state.urlToImage}/>
                <p> {this.state.description }</p>



            </div>
        );
    }

}

export default class SearchResult extends Component {

    constructor(props){
        super(props);

        const parsed = qs.parse(this.props.location.search);

        this.state = {
            value: parsed.query
        };
    }

    componentDidMount() {

        const now = new Date().toISOString().split('T')[0];

        const url = "https://newsapi.org/v2/everything?q="+this.state.value+"&language=en"+"&from="+now + "&to="+now+"&sortBy=popularity&apiKey="+"9da090c8a6f5420ba489429fb83811c8";

        console.log(url);

        fetch(url)
            .then(results => {
                return results.json();
            }).then(data => {

            let articles = data.articles.map((article) => {

                return (
                    <Article article={article}/>
                );
            });

            this.setState({articles:articles})

        })

    }

    render(){

        return (

            <div className="outer">

                <div className="inner">
                    <h2>Top stories today </h2>
                    {this.state.articles}
                </div>

            </div>
        );
    }
}