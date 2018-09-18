import React, { Component } from "react";
import {
  Image,
  ListGroup,
  ListGroupItem,
  Button,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import { Link } from "react-router-dom";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
class Users extends Component {
  render() {
    const { fetchusers, setUser } = this.props;
    const { users, loading } = this.props.users;
    return (
      <BlockUi tag="div" blocking={loading}>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={4} mdOffset={4}>
              <Button
                bsStyle="primary"
                bsSize="large"
                block
                onClick={fetchusers}
              >
                Fetch Users
              </Button>
              {users.length === 0 ? (
                <h2 style={{ textAlign: "center" }}>
                  Please Click on Fetch Users button
                </h2>
              ) : (
                <ListGroup>
                  {users.map((user, i) => (
                    <UsersLists
                      key={i}
                      {...user}
                      onClick={() => setUser(user)}
                    />
                  ))}
                </ListGroup>
              )}
            </Col>
          </Row>
        </Grid>
      </BlockUi>
    );
  }
}

const UsersLists = props => {
  return (
    <ListGroupItem>
      <Button
        componentClass={Link}
        onClick={props.onClick}
        href={`/user/${props.login.username}`}
        to={`/user/${props.login.username}`}
        block
        style={{ textAlign: "left" }}
      >
        <Image src={props.picture.thumbnail} circle xs={6} md={6} />
        <h6
          style={{
            display: "inline-block",
            marginLeft: "20px",
            fontWeight: "bold"
          }}
        >{`${props.login.username}`}</h6>
      </Button>
    </ListGroupItem>
  );
};

export default Users;
