import React, { Component } from "react";
import SideNavBar from "../SideNavBar/SideNavBar";
import { Row, Col, Card, CardBody, Jumbotron } from "reactstrap";
import LineChart from "./LineChart/LineChart";
import BarChart from "./BarChart/BarChart";
import PieChart from "./PieChart/PieChart";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { compact } from "lodash";
import { Link as RRNavLink } from "react-router-dom";
import DonotChart from "./DonutChart/DonutChart";
import MultiLineChart from "./MultiLineChart/MultiLineChart";
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
      <div>
        <Row>
          <Col xs="6" md="6" style={{ marginBottom: "10px" }}>
            <Card>
              <CardBody style={{ padding: 0 }}>
                <Jumbotron style={{ padding: "7rem 6rem" }}>
                  <PieChart
                    height={200}
                    width={500}
                    top={20}
                    id="pieChart"
                    class_name="pieChart"
                  />
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" md="6" style={{ marginBottom: "10px" }}>
            <Card>
              <CardBody style={{ padding: 0 }}>
                <Jumbotron style={{ padding: "7rem 6rem" }}>
                  <BarChart
                    height={200}
                    width={500}
                    top={20}
                    id="barChart1"
                    class_name="barChart1"
                  />
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" md="6" style={{ marginBottom: "10px" }}>
            <Card>
              <CardBody style={{ padding: 0 }}>
                <Jumbotron style={{ padding: "7rem 6rem" }}>
                  <DonotChart
                    height={200}
                    width={500}
                    top={20}
                    id="donotChart"
                    class_name="donotChart"
                  />
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" md="6" style={{ marginBottom: "10px" }}>
            <Card>
              <CardBody style={{ padding: 0 }}>
                <Jumbotron style={{ padding: "7rem 6rem" }}>
                  <LineChart
                    height={200}
                    width={500}
                    top={20}
                    id="lineChart"
                    class_name="lineChart"
                  />
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="12" style={{ marginBottom: "10px" }}>
            <Card>
              <CardBody style={{ padding: 0 }}>
                <Jumbotron style={{ padding: "7rem 6rem" }}>
                  <MultiLineChart
                    height={200}
                    width={900}
                    top={20}
                    id="muliti_Chart"
                    class_name="muliti_Chart"
                  />
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
  if (props.params.chartname === "linearCharts") {
    return (
      <div style={{ overflowX: "hidden" }}>
        <LineChart
          height={400}
          width={900}
          id="lineChart2"
          top={50}
          class_name="lineChart2"
        />
      </div>
    );
  } else if (props.params.chartname === "barCharts") {
    return (
      <div style={{ overflowX: "hidden" }}>
        <BarChart
          height={400}
          width={900}
          id="barChart3"
          top={50}
          class_name="barChart3"
        />
      </div>
    );
  } else if (props.params.chartname === "pieCharts") {
    return (
      <div style={{ overflowX: "hidden" }}>
        <PieChart
          height={400}
          width={900}
          id="pieChart3"
          top={50}
          class_name="pieChart3"
        />
      </div>
    );
  } else if (props.params.chartname === "donutChart") {
    return (
      <div style={{ overflowX: "hidden" }}>
        <DonotChart
          height={400}
          width={900}
          id="donutChart3"
          top={50}
          class_name="donutChart3"
        />
      </div>
    );
  } else if (props.params.chartname === "multiLineChart") {
    return (
      <div style={{ overflowX: "hidden" }}>
        <MultiLineChart
          height={400}
          width={900}
          id="multiLineChart"
          top={50}
          class_name="multiLineChart"
        />
      </div>
    );
  }
};

export default Charts;
