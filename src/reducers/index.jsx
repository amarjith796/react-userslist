import { combineReducers } from "redux";

import userProfile from "./userProfile";
import users from "./users";

export default combineReducers({
  userProfile: userProfile,
  users: users
});
