import React from "react";
import YTSearchStore from "../stores/ytSearch_store";
import YTSearchAction from "../actions/ytSearch_actions";

class VideoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: YTSearchStore.getAllVIdeos()
    };
    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    this.setState({ items: YTSearchStore.getAllVIdeos() });
  }

  componentWillMount() {
    YTSearchStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    YTSearchStore.removeChangeListener(this._onChange);
  }
  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.state.items.map(video => {
          const imageUrl = video.snippet.thumbnails.default.url;

          return (
            <li
              onClick={() => YTSearchAction.userSelected(video)}
              key={video.etag}
              className="list-group-item"
            >
              <div className="video-list media">
                <div className="media-left">
                  <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                  <div className="media-heading">{video.snippet.title}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default VideoListItem;
