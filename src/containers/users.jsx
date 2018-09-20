import { fetchusers, setUser } from "../actions/users";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import Users from "../components/Users/users";

const usersSelector = createSelector(state => state.users, users => users);

const mapStateToProps = createSelector(usersSelector, users => ({
  users
}));

const mapActionsToProps = dispatch => {
  return {
    fetchusers: () => {
      dispatch(fetchusers());
    },
    setUser: user => {
      dispatch(setUser(user));
    }
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Users);
