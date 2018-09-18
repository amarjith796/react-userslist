import React, { Component } from "react";

import {
  Image,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  // Button,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import "./userProfile.css";
class UserProfile extends Component {
  render() {
    if (this.props.userProfile === null) {
      return (
        <div style={{ textAlign: "center" }}>
          <h2>
            User{" "}
            <b style={{ color: "red" }}>{this.props.match.params.username}</b>{" "}
            not Found
          </h2>
        </div>
      );
    }
    // const { getUserProfile } = this.props;
    const { userProfile } = this.props;
    let date = userProfile.dob.date.toString();
    date =
      new Date(date).getDate() +
      "/" +
      (new Date(date).getMonth() + 1) +
      "/" +
      new Date(date).getFullYear();
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={4} mdOffset={4}>
            {/* <Button
              bsStyle="primary"
              bsSize="large"
              block
              onClick={getUserProfile}
            >
              New Random User
            </Button> */}

            <Jumbotron>
              <ListGroup>
                <ListGroupItem>
                  <Image
                    className="center-block"
                    src={userProfile.picture.large}
                    circle
                    height={100}
                    width={100}
                  />
                </ListGroupItem>
                <ListGroupItem>
                  <h6>
                    Name:{" "}
                    {`${userProfile.name.first.toUpperCase()} ${userProfile.name.last.toUpperCase()}`}
                  </h6>
                </ListGroupItem>
                <ListGroupItem>
                  <h6>Email: {userProfile.email}</h6>
                </ListGroupItem>
                <ListGroupItem>
                  <h6>Gender: {userProfile.gender.toString().toUpperCase()}</h6>
                </ListGroupItem>
                <ListGroupItem>
                  <h6>DOB: {date}</h6>
                </ListGroupItem>
              </ListGroup>
              {/* <h2 className={statusClass}>{status}</h2> */}
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default UserProfile;
