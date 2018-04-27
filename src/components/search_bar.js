import React from "react";
import YTSearchAction from "../actions/ytSearch_actions";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
    YTSearchAction.videoSearch(event.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange={this.onInputChange} />
      </div>
    );
  }
}

export default SearchBar;
