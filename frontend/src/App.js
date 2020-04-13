import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import FeedContainer from "./components/feed_container"
import NewsFeedContainer from "./components/news_feed_container";
class App extends React.Component {
  render(){
 return (   
    <div className="app-container">
    <Switch>
      <Route exact path="/news" component={NewsFeedContainer} />
      <Route exact path="/images" component={FeedContainer} />
    </Switch>
  </div>
)
}
}

export default App;
