import React, { Component } from "react";
import { Row, Col, Card, CardImg, CardText, CardBody } from "reactstrap";
import { Image } from "react-bootstrap";
import "./userProfile.css";
class UserProfile extends Component {
  render() {
    if (this.props.userProfile === null) {
      return (
        <div style={{ textAlign: "center" }}>
          <h2>
            User
            <b style={{ color: "red" }}>{this.props.match.params.username}</b>
            not Found
          </h2>
        </div>
      );
    }
    const { userProfile } = this.props;
    let date = userProfile.dob.date.toString();
    date =
      new Date(date).getDate() +
      "/" +
      (new Date(date).getMonth() + 1) +
      "/" +
      new Date(date).getFullYear();
    return (
      <Row className="show-grid">
        <Col xs="12" md="4" md={{ size: 4, offset: 4 }}>
          <Card>
            {/* <CardImg
              top
              src={userProfile.picture.large}
              alt={userProfile.picture.large}
              className="h-100"
            /> */}
            <CardBody style={{ textAlign: "center" }}>
              <CardText>
                <Image
                  src={userProfile.picture.large}
                  className="center-block"
                  style={{ borderRadius: "70px" }}
                />
              </CardText>
              <CardText>
                <b>Name:</b>
                {`${userProfile.name.first.toUpperCase()} ${userProfile.name.last.toUpperCase()}`}
              </CardText>
              <CardText>
                <b>Email:</b> {userProfile.email}
              </CardText>
              <CardText>
                <b>Gender:</b> {userProfile.gender.toString().toUpperCase()}
              </CardText>
              <CardText>
                <b>DOB:</b> {date}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default UserProfile;
