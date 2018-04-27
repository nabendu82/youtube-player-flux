import { EventEmitter } from "events";
import Dispatcher from "../dispatcher";
import ActionTypes from "../constants";

const CHANGE = "CHANGE";
let _ytSearchState = [];
let _userSelected = [];

class YTSearchStore extends EventEmitter {
  constructor() {
    super();

    // Registers action handler with the Dispatcher.
    Dispatcher.register(this._registerToActions.bind(this));
  }

  // Switches over the action's type when an action is dispatched.
  _registerToActions(action) {
    switch (action.actionType) {
      case ActionTypes.FETCH_YTSEARCH:
        this._addNewSearchItem(action.payload);
        break;
      case ActionTypes.USER_SELECTED:
        this._userSelectedVideo(action.payload);
        break;
    }
  }

  // Adds a new item to the list and emits a CHANGED event.
  _addNewSearchItem(videos) {
    _ytSearchState = videos;
    this.emit(CHANGE);
  }

  _userSelectedVideo(video) {
    _userSelected = video;
    this.emit(CHANGE);
  }

  // Returns the current store's state.
  getAllVIdeos() {
    return _ytSearchState;
  }

  // Returns the first video
  getFirstVIdeos() {
    return _ytSearchState[0];
  }

  //get the user selected video
  getUserVideo() {
    return _userSelected;
  }

  // Hooks a React component's callback to the CHANGE event.
  addChangeListener(callback) {
    this.on(CHANGE, callback);
  }

  // Removes the listener from the CHANGED event.
  removeChangeListener(callback) {
    this.removeListener(CHANGE, callback);
  }
}

export default new YTSearchStore();
