import React from 'react';
import Masonry from 'react-masonry-css';
import "./feed_style.css"
var debounce = require('debounce');

class NewsFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            searchTerms: ""
        }
        this.fetchNextSet = this.fetchNextSet.bind(this)
    }
    updateInputValue(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
            e.preventDefault();
        };
    }

    fetchNextSet() {
        this.props.fetchArticles(this.state.searchTerms)
        // this.setState = { startIdx: (this.state.startIdx += 9) }
    }
    componentDidMount() {
        // this.fetchNextSet()
        this.infiniteScroller()
    }
    infiniteScroller() {
        window.onscroll = debounce(() => {
            if (
                window.innerHeight + document.documentElement.scrollTop ===
                document.documentElement.offsetHeight
            ) {
                this.fetchNextSet()
            }
        }, 100)
    }
    render() {


        let articles
debugger
        if (this.props.articles) {
            articles = this.props.articles[0].map(art => {
                return (
                    <img className="feed-image" src={art} />
                )
            })

        } else {
            articles = <h1>"EMPTY PROPS"</h1>
        }
        return (
            <div className="newfeed-container">
                <h2 className="searchBar">
                    <input
                        type="text"
                        className="searchBarInput"
                        value={this.state.searchTerms}
                        onChange={this.updateInputValue("searchTerms")}
                        placeholder="Search Terms"
                        onSubmit={this.fetchNextSet()}
                        />
                </h2>
                <Masonry
                    breakpointCols={{ default: 3, 800: 2 }}
                    className="feed-masonry-grid"
                    columnClassName="feed-masonry-grid_column"
                    >
                    {articles}
                </Masonry>
            </div>
        )
    }
}

export default NewsFeed
