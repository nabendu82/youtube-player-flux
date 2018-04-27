import React, { Component } from "react";
import VideoListItem from "./components/video_list_item";
import SearchBar from "./components/search_bar";
import VideoDetail from "./components/video_detail";
import YTSearchAction from "./actions/ytSearch_actions";

class App extends Component {
  constructor(props) {
    super(props);
    YTSearchAction.videoSearch("React Tutorials");
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail />
        <VideoListItem />
      </div>
    );
  }
}

export default App;
