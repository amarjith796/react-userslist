import ApiService from "../apiService";
const GET_USER_PROFILE = "GET_USER_PROFILE";
export const GET_USER_PENDING = "GET_USER_PROFILE_PENDING";
export const GET_USER_RECEIEVED = "GET_USER_PROFILE_FULFILLED";
export const GET_USER_REJECTED = "GET_USER_PROFILE_REJECTED";
const url = "https://randomuser.me/api/";
// export const getUsers = () => dispatch => {
//   dispatch({
//     type: GET_USER
//   });

//   ApiService(url)
//     .then(res => {
//       dispatch({
//         type: USER_RECIEVED,
//         payload: res.data.results
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: ERROR,
//         payload: err
//       });
//     });
//   dispatch({ type: "AFTER ASYNC OPERATIONS" });
// };
export const getUserProfile = () => {
  return {
    type: GET_USER_PROFILE,
    payload: ApiService(url)
  };
};
