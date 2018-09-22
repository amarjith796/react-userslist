import React, { Component } from "react";
import * as d3 from "d3";
import "./BarChart.css";

const data = [
  { salesperson: "Bob", sales: 33 },
  { salesperson: "Robin", sales: 12 },
  { salesperson: "Anne", sales: 41 },
  { salesperson: "Mark", sales: 16 },
  { salesperson: "Joe", sales: 59 },
  { salesperson: "Karen", sales: 21 },
  { salesperson: "Kirsty", sales: 25 },
  { salesperson: "Chris", sales: 30 },
  { salesperson: "Lisa", sales: 47 },
  { salesperson: "Tom", sales: 5 },
  { salesperson: "Stacy", sales: 20 },
  { salesperson: "Charles", sales: 13 },
  { salesperson: "Mary", sales: 29 }
];

class BarChart extends Component {
  componentDidMount() {
    // set the dimensions and margins of the graph
    var margin = { top: 20, right: 20, bottom: 30, left: 50 },
      width = this.props.width - margin.left - margin.right,
      height = this.props.height - margin.top - margin.bottom;

    // set the ranges
    var x = d3
      .scaleBand()
      .range([0, width])
      .padding(0.1);
    var y = d3.scaleLinear().range([height, 0]);

    let tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "toolTip");
    var color = d3.scaleOrdinal(d3["schemeSet1"]);

    // append the svg object to the body of the page
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3
      .select("#" + this.props.id)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Scale the range of the data in the domains
    x.domain(
      data.map(function(d) {
        return d.salesperson;
      })
    );
    y.domain([
      0,
      d3.max(data, function(d) {
        return d.sales;
      })
    ]);

    // append the rectangles for the bar chart
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .style("fill", function(d) {
        return color(d.salesperson);
      })
      .attr("x", function(d) {
        return x(d.salesperson);
      })
      .attr("width", x.bandwidth())
      .attr("y", height)
      .on("mouseover", function(d) {
        d3.select(this)
          .transition()
          .duration(400)
          .attr("width", x.bandwidth())
          .attr("y", function(d) {
            return y(d.sales) - 10;
          })
          .attr("height", function(d) {
            return height - y(d.sales) + 10;
          });
        tooltip
          .html("Name:" + d.salesperson + "<br>" + "Sales:" + d.sales)
          .style("display", "inline-block")
          .style("left", d3.event.pageX + 10 + "px")
          .style("top", d3.event.pageY - 10 + "px");
      })
      .on("mousemove", function(d) {
        tooltip
          .style("left", d3.event.pageX + 10 + "px")
          .style("display", "inline-block")
          .style("top", d3.event.pageY - 10 + "px");
      })
      .on("mouseout", function(d) {
        tooltip.style("display", "none");
        d3.select(this)
          .transition()
          .duration(400)
          .attr("width", x.bandwidth())
          .attr("y", function(d) {
            return y(d.sales);
          })
          .attr("height", function(d) {
            return height - y(d.sales);
          });
      })
      .transition()
      .duration(1000)
      .delay(function(d, i) {
        return i * 50;
      })
      .attr("y", function(d) {
        return y(d.sales);
      })
      .ease(d3.easeLinear)
      .attr("width", x.bandwidth())
      .attr("height", function(d) {
        return height - y(d.sales);
      });

    // add the x Axis
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // add the y Axis
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

export default BarChart;
