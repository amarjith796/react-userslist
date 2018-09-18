import {
  FETCH_USERS_PENDING,
  FETCH_USERS_RECEIEVED,
  FETCH_USERS_REJECTED
} from "../actions/users";

const initalState = {
  users: [],
  loading: false,
  error: false
};

// REDCUER
export default function userProfile(state = initalState, { type, payload }) {
  let users;

  switch (type) {
    case FETCH_USERS_PENDING:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_RECEIEVED:
      users = payload.data.results;
      return {
        ...state,
        loading: false,
        users
      };
    case FETCH_USERS_REJECTED:
      return {
        ...state,
        loading: false,
        status: `${payload.message}`,
        error: true
      };
    default:
      return state;
  }
}
