import { combineReducers } from "redux";
import images from "./images_reducer";
import news from "./news_reducer";

const EntitiesReducer = combineReducers({
    images,
    news
});

export default EntitiesReducer;