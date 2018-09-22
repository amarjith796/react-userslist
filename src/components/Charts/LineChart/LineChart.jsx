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
    function transition(path) {
      path
        .transition()
        .duration(1000)
        .attrTween("stroke-dasharray", tweenDash);
    }
    function tweenDash() {
      var l = this.getTotalLength(),
        i = d3.interpolateString("0," + l, l + "," + l);
      return function(t) {
        return i(t);
      };
    }

    var margin = { top: 20, right: 20, bottom: 30, left: 50 },
      width = this.props.width - margin.left - margin.right,
      height = this.props.height - margin.top - margin.bottom;
    let tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "toolTip");
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
      .select("#" + this.props.id)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg
      .append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline)
      .call(transition);

    var focus = svg
      .append("g")
      .attr("class", "focus")
      .style("display", "none");

    focus
      .append("line")
      .attr("class", "x-hover-line hover-line")
      .attr("y1", 0)
      .attr("y2", height);

    focus
      .append("line")
      .attr("class", "y-hover-line hover-line")
      .attr("x1", 0)
      .attr("x2", 0);

    svg
      .selectAll("line-circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "data-circle")
      .attr("r", 5)
      .attr("cx", function(d, i) {
        return x(i);
      })
      .attr("cy", function(d) {
        return y(d);
      })
      .on("mouseover", function(d) {
        focus.style("display", null);
        tooltip.html(d);
        tooltip.style("display", "inline-block");
      })
      .on("mousemove", function(d, i) {
        focus.attr("transform", "translate(" + x(i) + "," + y(d) + ")");
        focus.select("text").text(function() {
          return d;
        });
        focus.select(".x-hover-line").attr("y2", height - y(d));
        focus.select(".y-hover-line").attr("x1", -x(i));
        tooltip
          .style("left", d3.event.pageX + 10 + "px")
          .style("display", "inline-block")
          .style("top", d3.event.pageY - 10 + "px");
      })
      .on("mouseout", function(d) {
        focus.style("display", "none");
        tooltip.style("display", "none");
      });

    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    svg.append("g").call(d3.axisLeft(y));
  }

  render() {
    return (
      <div
        id={this.props.id}
        className={this.props.class_name}
        style={{
          position: "absolute",
          top: this.props.top + "px",
          left: 0,
          float: "left"
        }}
      />
    );
  }
}

export default LineChart;
