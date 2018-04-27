import Dispatcher from "../dispatcher";
import ActionTypes from "../constants";
import YTSearch from "youtube-api-search";
const API_KEY = "AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s";

class YTSearchAction {
  videoSearch(searchTerm) {
    YTSearch({ key: API_KEY, term: searchTerm }, data => {
      //console.log(data);
      Dispatcher.dispatch({
        actionType: ActionTypes.FETCH_YTSEARCH,
        payload: data
      });
    });
  }

  userSelected(video) {
    //console.log(video);
    Dispatcher.dispatch({
      actionType: ActionTypes.USER_SELECTED,
      payload: video
    });
  }
}

export default new YTSearchAction();
