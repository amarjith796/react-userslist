import ApiService from "../apiService";
const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_PENDING = "FETCH_USERS_PENDING";
export const FETCH_USERS_RECEIEVED = "FETCH_USERS_FULFILLED";
export const FETCH_USERS_REJECTED = "FETCH_USERS_REJECTED";
const url = "https://randomuser.me/api/?results=";

export const fetchusers = (size) => {
  return {
    type: FETCH_USERS,
    payload: ApiService(`${url+size}`)
  };
};

export const setUser = user => {
  return {
    type: "SET_USER",
    payload: user
  };
};
