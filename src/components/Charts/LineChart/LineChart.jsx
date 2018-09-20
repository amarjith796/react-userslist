import React, { Component } from "react";
import * as d3 from "d3";
import "./LineChart.css";
class LineChart extends Component {
  componentDidMount() {
    var data = [
      3,
      6,
      2,
      7,
      5,
      2,
      0,
      3,
      8,
      9,
      2,
      5,
      9,
      3,
      6,
      3,
      6,
      2,
      7,
      5,
      2,
      1,
      3,
      8,
      9,
      2,
      5,
      9,
      2,
      7
    ];
    var margin = { top: 20, right: 20, bottom: 30, left: 50 },
      width = 900 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    var x = d3
      .scaleLinear()
      .domain([0, data.length])
      .range([0, width]);
    var y = d3
      .scaleLinear()
      .domain([0, 10])
      .range([height, 0]);

    var valueline = d3
      .line()
      .x(function(d, i) {
        return x(i);
      })
      .y(function(d) {
        return y(d);
      });
    var svg = d3
      .select("#graph")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg
      .append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline);

    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    svg.append("g").call(d3.axisLeft(y));
  }

  render() {
    return (
      <div
        id="graph"
        className="aGraph"
        style={{ position: "absolute", top: "50px", left: 0, float: "left" }}
      />
    );
  }
}

export default LineChart;
