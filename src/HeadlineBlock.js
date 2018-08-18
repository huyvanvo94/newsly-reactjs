import React, {Component} from 'react';
import URLQueryBuilder from 'url-query-builder'
import './HeadlineBlock.css';

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

class HeadlineBlock extends Component{


    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }


    componentDidMount(){

        const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9da090c8a6f5420ba489429fb83811c8";


        fetch(url)
            .then(results => {
                return results.json();
            }).then(data => {
                console.log("OK");
                console.log(data.status);

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
                          <h2>Top stories</h2>
                          {this.state.articles}
                      </div>

              </div>
        );

    }
}

export default HeadlineBlock;