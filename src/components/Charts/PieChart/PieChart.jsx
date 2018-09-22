import React, { Component } from "react";
import "./PieChart.css";
import * as d3 from "d3";
const data = [
  { salesperson: "Bob", sales: 33 },
  { salesperson: "Robin", sales: 12 },
  { salesperson: "Anne", sales: 41 },
  { salesperson: "Mark", sales: 16 },
  { salesperson: "Joe", sales: 59 },
  { salesperson: "Karen", sales: 21 },
  { salesperson: "Kirsty", sales: 25 },
  { salesperson: "Chris", sales: 30 },
  { salesperson: "Lisa", sales: 47 }
];

class PieChart extends Component {
  componentDidMount() {
    var width = this.props.width,
      height = this.props.height,
      radius = Math.min(width, height) / 2;

    var color = d3.scaleOrdinal(d3["schemeSet1"]);

    var arc = d3
      .arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    var labelArc = d3
      .arc()
      .outerRadius(radius - 40)
      .innerRadius(radius - 40);

    var pie = d3
      .pie()
      .sort(null)
      .value(function(d) {
        return d.sales;
      });
    let tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "toolTip");
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
    var svg = d3
      .select("#" + this.props.id)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    var pie_g = svg
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    var legend_g = svg
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + 0 + ")");

    var g = pie_g
      .selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    g.append("path")
      .attr("d", arc)
      .attr("id", function(d) {
        return "person_" + d.data.salesperson;
      })
      .style("fill", function(d) {
        return color(d.data.salesperson);
      })
      .on("mouseover", function(d) {
        d3.select(this).style("stroke-width", "10px");
        tooltip
          .html("Name:" + d.data.salesperson + "<br>" + "Sales:" + d.data.sales)
          .style("display", "inline-block")
          .style("left", d3.event.pageX + 10 + "px")
          .style("top", d3.event.pageY - 10 + "px");
      })
      .on("mousemove", function(d) {
        d3.select(this).style("stroke-width", "10px");
        tooltip
          .style("left", d3.event.pageX + 10 + "px")
          .style("display", "inline-block")
          .style("top", d3.event.pageY - 10 + "px");
      })
      .on("mouseout", function(d) {
        d3.select(this).style("stroke-width", "1px");
        tooltip.style("display", "none");
      })
      .transition()
      .duration(1000)
      .attrTween("d", tweenPie);

    g.append("text")
      .attr("transform", function(d) {
        return "translate(" + labelArc.centroid(d) + ")";
      })
      .attr("dy", ".35em")
      .text(function(d) {
        return d.data.salesperson + "\n" + d.data.sales;
      })
      .on("mouseover", function(d) {
        tooltip
          .html("Name:" + d.data.salesperson + "<br>" + "Sales:" + d.data.sales)
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
      });

    // again rebind for legend
    var legendG = legend_g
      .selectAll(".legend") // note appending it to mySvg and not svg to make positioning easier
      .data(pie(data))
      .enter()
      .append("g")
      .attr("transform", function(d, i) {
        return "translate(" + width / 3 + "," + (i * 15 + 20) + ")"; // place each legend on the right and bump each one down 15 pixels
      })
      .attr("class", "legend");

    legendG
      .append("rect") // make a matching color rect
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", function(d, i) {
        return color(i);
      });

    legendG
      .append("text") // add the text
      .text(function(d) {
        return d.data.salesperson;
      })
      .style("font-size", 12)
      .attr("y", 10)
      .attr("x", 11)
      .on("mouseover", function(d) {
        d3.select(this.parentNode).style("opacity", "0.5");
        d3.select("#person_" + d.data.salesperson).style(
          "stroke-width",
          "10px"
        );
      })
      .on("mousemove", function(d) {
        d3.select(this.parentNode).style("opacity", "0.5");
        d3.select("#person_" + d.data.salesperson).style(
          "stroke-width",
          "10px"
        );
      })
      .on("mouseout", function(d) {
        d3.select(this.parentNode).style("opacity", "1");
        d3.select("#person_" + d.data.salesperson).style("stroke-width", "1px");
      });
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

export default PieChart;
