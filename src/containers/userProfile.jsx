import { getUserProfile } from "../actions/userProfile";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import UserProfile from "../components/userProfile";

const userProfileSelector = createSelector(
  state => state.userProfile,
  userProfile => userProfile
);

const mapStateToProps = createSelector(userProfileSelector, userProfile => ({
  userProfile
}));

const mapActionsToProps = dispatch => {
  return {
    getUserProfile: () => {
      dispatch(getUserProfile());
    }
  };
};

// const mapActionsToProps = {
//   getUsers: getUsers
// };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(UserProfile);
