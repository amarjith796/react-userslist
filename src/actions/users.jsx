import ApiService from "../apiService";
const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_PENDING = "FETCH_USERS_PENDING";
export const FETCH_USERS_RECEIEVED = "FETCH_USERS_FULFILLED";
export const FETCH_USERS_REJECTED = "FETCH_USERS_REJECTED";
const url = "https://randomuser.me/api/?results=5";

export const fetchusers = () => {
  return {
    type: FETCH_USERS,
    payload: ApiService(url)
  };
};

export const setUser = user => {
  return {
    type: "SET_USER",
    payload: user
  };
};
