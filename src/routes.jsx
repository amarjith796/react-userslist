import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserProfile from "./containers/userProfile";
import Users from "./containers/users";
import NavbarComponent from "./components/NavBar/navbar";
import Error from "./components/Error404Page/error";
import Charts from "./components/Charts/Charts";
// import { Container } from "reactstrap";
const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>This is Home Component</h2>
    </div>
  );
};

const routes = [
  {
    path: "/",
    main: Home
  },
  {
    path: "/users",
    main: Users
  },
  {
    path: "/user/:username",
    main: UserProfile
  }
];

const AppRouter = () => (
  <Router>
    <div>
      <NavbarComponent />
      {/* <Container> */}
      <div style={{ position: "relative", top: "70px" }}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              strict
              component={route.main}
            />
          ))}
          <Route path="/charts" exact strict component={Charts} />
          <Route path="/charts/:chartname" exact strict component={Charts} />
          <Route exact strict component={Error} />
        </Switch>
      </div>
      {/* </Container> */}
    </div>
  </Router>
);

export default AppRouter;
