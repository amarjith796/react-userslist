import React, { Component } from "react";
import "./DonutChart.css";
import * as d3 from "d3";

class DonotChart extends Component {
  componentDidMount() {
    var data = [
      { name: "cats", count: 3, percentage: 2 },
      { name: "dogs", count: 10, percentage: 8 },
      { name: "horses", count: 17, percentage: 15 },
      { name: "goats", count: 47, percentage: 41 },
      { name: "cows", count: 35, percentage: 31 }
    ];
    var color = d3.scaleOrdinal(d3["schemeSet1"]);
    var totalCount = data.reduce((a, b) => {
      return a + b.count;
    }, 0);
    let tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "toolTip");
    var width = this.props.width,
      height = this.props.height,
      radius = Math.min(width, height) / 2;
    function tweenPie(finish) {
      var start = {
        startAngle: 0,
        endAngle: 0
      };
      var interpolator = d3.interpolate(start, finish);
      return function(d) {
        return arc(interpolator(d));
      };
    }
    var arc = d3
      .arc()
      .outerRadius(radius - 10)
      .innerRadius(50);

    var pie = d3
      .pie()
      .sort(null)
      .value(function(d) {
        return d.count;
      });

    var svg = d3
      .select("#" + this.props.id)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg
      .selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g");

    g.append("path")
      .attr("d", arc)
      .style("fill", function(d, i) {
        return color(d.data.name);
      })
      .on("mouseover", function(d) {
        d3.select(this).style("stroke-width", "10px");
        d3.select(this).style("stroke", color(d.data.name));
        d3.selectAll(".totalCounts").text("");
        d3.select("#totalCounts_" + d.data.name).text(d.data.count);
        tooltip
          .html(
            "Name:" + d.data.name + "<br>" + "Percentage:" + d.data.percentage
          )
          .style("display", "inline-block")
          .style("left", d3.event.pageX + 10 + "px")
          .style("top", d3.event.pageY - 10 + "px");
      })
      .on("mousemove", function(d) {
        d3.select(this).style("stroke-width", "10px");
        d3.select(this).style("stroke", color(d.data.name));
        tooltip
          .style("left", d3.event.pageX + 10 + "px")
          .style("display", "inline-block")
          .style("top", d3.event.pageY - 10 + "px");
      })
      .on("mouseout", function(d) {
        d3.select(this).style("stroke-width", "1px");
        d3.selectAll(".totalCounts").text(totalCount);
        tooltip.style("display", "none");
      })
      .transition()
      .duration(1000)
      .attrTween("d", tweenPie);
    g.append("text")
      .attr("text-anchor", "middle")
      .attr("class", "totalCounts")
      .attr("id", function(d) {
        return "totalCounts_" + d.data.name;
      })
      .attr("font-size", "2em")
      .attr("y", 20)
      .text(totalCount);
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

export default DonotChart;
