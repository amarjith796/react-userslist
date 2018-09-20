import React, { Component } from "react";
import SideNavBar from "../SideNavBar/SideNavBar";
import { Row, Col } from "reactstrap";
import LineChart from "./LineChart/LineChart";
import BarChart from "./BarChart/BarChart";
import PieChart from "./PieChart/PieChart";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { compact } from "lodash";
import { Link as RRNavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
import d3image from "../../assets/d3image.png";
const Breadcrumbs = props => {
  let urls = compact(props.url.split("/"));
  let active_url = urls[urls.length - 1];
  return (
    <Breadcrumb>
      {urls.map((url, index) => (
        <BreadcrumbItem
          key={index}
          tag={active_url === url ? "span" : RRNavLink}
          to={`/${url}`}
          active={active_url === url ? true : false}
        >
          {url.toLowerCase()}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

class Charts extends Component {
  render() {
    const { match } = this.props;
    return (
      <Row>
        <Col xs="6" md="3">
          <SideNavBar />
        </Col>
        <Col xs="6" md="9">
          <Breadcrumbs {...match} />
          <Chartings {...match} />
        </Col>
      </Row>
    );
  }
}

const Chartings = props => {
  if (Object.keys(props.params).length === 0) {
    return (
      <div style={{ overflowX: "hidden" }}>
        <Image
          src={d3image}
          className="center-block"
          height="100%"
          width="100%"
        />
      </div>
    );
  }
  if (props.params.chartname === "linearCharts") {
    return (
      <div style={{ overflowX: "hidden" }}>
        <LineChart />
      </div>
    );
  } else if (props.params.chartname === "barCharts") {
    return (
      <div style={{ overflowX: "hidden" }}>
        <BarChart />
      </div>
    );
  } else if (props.params.chartname === "pieCharts") {
    return (
      <div style={{ overflowX: "hidden" }}>
        <PieChart />
      </div>
    );
  }
};

export default Charts;
