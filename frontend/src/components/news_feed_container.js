import { connect } from "react-redux";

// import { withRouter } from "react-router";
// import { fetchImages } from "../actions/image_actions";
import { fetchNews } from "../actions/news_actions";
import NewsFeed from "./news_feed"

const mapStateToProps = state => {
    debugger
    return {
        // articles: Object.values(state.entities.articles)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchArticles: searchTerms => dispatch(fetchNews(searchTerms))
    }
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Feed));
export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
