import React from "react";
import YTSearchStore from "../stores/ytSearch_store";

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: YTSearchStore.getFirstVIdeos(),
      userSelected: YTSearchStore.getFirstVIdeos()
    };
    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    this.setState({
      item: YTSearchStore.getFirstVIdeos(),
      userSelected: YTSearchStore.getUserVideo()
    });
  }

  componentWillMount() {
    YTSearchStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    YTSearchStore.removeChangeListener(this._onChange);
  }

  render() {
    if (!this.state.item) {
      return <li className="media-right">Loading...</li>;
    }
    let video;
    Object.keys(this.state.userSelected).length === 0
      ? (video = this.state.item)
      : (video = this.state.userSelected);

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} />
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
