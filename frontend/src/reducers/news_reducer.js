import { RECEIVE_ARTICLES } from "../actions/news_actions";

const NewsReducer = (
    state = { images: [] }, action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ARTICLES:
            debugger
            newState.articles.push(...action.images.data.nextUrls)
            return newState
        default:
            return state;
    }
};

export default NewsReducer;