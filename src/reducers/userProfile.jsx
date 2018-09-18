// import {
//   GET_USER_PENDING,
//   GET_USER_RECEIEVED,
//   GET_USER_REJECTED
// } from "../actions/userProfile";

// const initalState = {
//   sendingRequest: false,
//   requestRecieved: false,
//   user: {
//     name: "",
//     email: "",
//     gender: "",
//     imgUrl: "https://react-bootstrap.github.io/thumbnail.png",
//     dob: ""
//   },
//   status: "",
//   statusClass: ""
// };

// // REDCUER
// export default function userProfile(state = initalState, { type, payload }) {
//   const user = {
//     name: "",
//     email: "",
//     gender: "",
//     imgUrl: "",
//     dob: ""
//   };

//   switch (type) {
//     case GET_USER_PENDING:
//       return {
//         ...state,
//         sendingRequest: true,
//         status: "Pending...",
//         statusClass: "pending"
//       };
//     case GET_USER_RECEIEVED:
//       user.name = `${payload.data.results[0].name.first} ${
//         payload.data.results[0].name.last
//       }`;
//       user.email = payload.data.results[0].email;
//       user.gender = payload.data.results[0].gender;
//       user.imgUrl = payload.data.results[0].picture.large;
//       let date = payload.data.results[0].dob.date.toString();
//       user.dob =
//         new Date(date).getDate() +
//         "/" +
//         (new Date(date).getMonth() + 1) +
//         "/" +
//         new Date(date).getFullYear();
//       return {
//         ...state,
//         sendingRequest: false,
//         user,
//         status: "User Recieved",
//         statusClass: "success"
//       };
//     case GET_USER_REJECTED:
//       return {
//         ...state,
//         sendingRequest: false,
//         status: `${payload.message}`,
//         statusClass: "error"
//       };
//     default:
//       return state;
//   }
// }

export default function userProfile(state = null, { type, payload }) {
  switch (type) {
    case "SET_USER":
      return payload;
    default:
      return state;
  }
}
