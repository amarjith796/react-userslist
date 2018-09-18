import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import { Row, Col, Button, ListGroup, ListGroupItem } from "reactstrap";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
class Users extends Component {
  render() {
    const { fetchusers, setUser } = this.props;
    const { users, loading } = this.props.users;
    return (
      <BlockUi tag="div" blocking={loading}>
        <Row className="show-grid">
          <Col xs="12" md="4" md={{ size: 4, offset: 4 }}>
            <Button color="primary" block onClick={fetchusers}>
              Fetch Users
            </Button>
            {users.length === 0 ? (
              <h2 style={{ textAlign: "center" }}>
                Please Click on Fetch Users button
              </h2>
            ) : (
              <ListGroup>
                {users.map((user, i) => (
                  <UsersLists key={i} {...user} onClick={() => setUser(user)} />
                ))}
              </ListGroup>
            )}
          </Col>
        </Row>
      </BlockUi>
    );
  }
}

const UsersLists = props => {
  return (
    <ListGroupItem
      tag={RRNavLink}
      to={`/user/${props.login.username}`}
      onClick={props.onClick}
      action
    >
      <Image src={props.picture.thumbnail} style={{ borderRadius: "70px" }} />
      <p
        style={{
          display: "inline-block",
          marginLeft: "20px"
        }}
      >
        {`${props.login.username}`}
      </p>
    </ListGroupItem>
  );
};

export default Users;
