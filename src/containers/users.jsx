import { fetchusers, setUser } from "../actions/users";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import Users from "../components/Users/users";
const pageLength = 100;

const usersList = state => state.users;


export const hasMoreStoriesSelector = createSelector(
  usersList,(usersList) => {
    return usersList.users.length < pageLength
  },
);


const usersSelector = createSelector(usersList, users => users);

// const mapStateToProps = createSelector(usersSelector, users => ({
//   users
// }));
const mapStateToProps = state => ({
  users: usersSelector(state),
  hasMoreStores: hasMoreStoriesSelector(state),
});

const mapActionsToProps = dispatch => {
  return {
    fetchusers: (size) => {
      dispatch(fetchusers(size));
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
