import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import { Row, Col, Button, ListGroup, ListGroupItem } from "reactstrap";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import InfiniteScroll from "react-infinite-scroll-component";
class Users extends Component {
  componentDidMount() {
    const { fetchusers } = this.props;
    fetchusers(10);
  }

  fetchMoreData = () => {
    const { fetchusers } = this.props;
    fetchusers(10);
  };
  refresh = () => {
    console.log("refresh");
    this.props.fetchusers(5);
  };

  render() {
    const { setUser, fetchusers, hasMoreStores } = this.props;
    const { users, loading } = this.props.users;
    return (
      <BlockUi tag="div" blocking={loading}>
        <Row className="show-grid">
          <Col xs="12" md="4" md={{ size: 4, offset: 4 }}>
            {/* <Button color="primary" block onClick={fetchusers}>
              Fetch Users
            </Button> */}
            {users.length === 0 ? (
              <h2 style={{ textAlign: "center" }}>Loading...</h2>
            ) : (
              <InfiniteScroll
                dataLength={users.length} //This is important field to render the next data
                next={this.fetchMoreData}
                hasMore={hasMoreStores}
                loader={<h4>Loading...</h4>}
                refreshFunction={this.refresh}
                pullDownToRefresh
                pullDownToRefreshContent={
                  <h3 style={{ textAlign: "center" }}>
                    &#8595; Pull down to refresh
                  </h3>
                }
                releaseToRefreshContent={
                  <h3 style={{ textAlign: "center" }}>
                    &#8593; Release to refresh
                  </h3>
                }
                initialScrollY={1000}
              >
                <ListGroup>
                  {users.map((user, i) => (
                    <UsersLists
                      key={i}
                      {...user}
                      onClick={() => setUser(user)}
                    />
                  ))}
                </ListGroup>
              </InfiniteScroll>
            )}
          </Col>
        </Row>
      </BlockUi>
    );
  }
}

const UsersLists = (props) => {
  return (
    <ListGroupItem
      tag={RRNavLink}
      to={`/user/${props?.login?.username}`}
      onClick={props.onClick}
      action
    >
      <Image src={props?.picture?.thumbnail} style={{ borderRadius: "70px" }} />
      <p
        style={{
          display: "inline-block",
          marginLeft: "20px"
        }}
      >
        {`${props?.login?.username}`}
      </p>
    </ListGroupItem>
  );
};

export default Users;
