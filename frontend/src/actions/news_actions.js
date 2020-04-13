import { getNews } from "../util/news_api_util"

export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES";

export const receiveArticles = articles => ({
    type: RECEIVE_ARTICLES,
    articles
})

export const fetchNews = searchTerms => dispatch => {
    return (
        getNews(searchTerms).then(articles => {
            return dispatch(receiveArticles(articles))
        })
        .catch(err => console.log(err))
    )
}