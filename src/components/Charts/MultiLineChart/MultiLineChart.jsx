import React, { Component } from "react";
import "./MultiLineChart.css";
import * as d3 from "d3";
class MultiLineChart extends Component {
  generateData = () => {
    return {
      Afghanistan: [
        {
          Date: 1999,
          Imports: "15",
          Exports: "20"
        },
        {
          Date: 2008,
          Imports: "42",
          Exports: "115"
        },
        {
          Date: 2007,
          Imports: "29",
          Exports: "79"
        },
        {
          Date: 2009,
          Imports: "346",
          Exports: "324"
        },
        {
          Date: 2006,
          Imports: "44",
          Exports: "69"
        },
        {
          Date: 2010,
          Imports: "424",
          Exports: "503"
        },
        {
          Date: 2005,
          Imports: "28",
          Exports: "48"
        },
        {
          Date: 2011,
          Imports: "413",
          Exports: "603"
        },
        {
          Date: 2004,
          Imports: "34",
          Exports: "41"
        },
        {
          Date: 2012,
          Imports: "313",
          Exports: "517"
        },
        {
          Date: 2003,
          Imports: "21",
          Exports: "36"
        },
        {
          Date: 2013,
          Imports: "513",
          Exports: "615"
        },
        {
          Date: 2002,
          Imports: "18",
          Exports: "23"
        },
        {
          Date: 2014,
          Imports: "471",
          Exports: "766"
        },
        {
          Date: 2001,
          Imports: "17",
          Exports: "29"
        },
        {
          Date: 2015,
          Imports: "119",
          Exports: "181"
        },
        {
          Date: 2000,
          Imports: "25",
          Exports: "25"
        }
      ]
    };
  };

  componentDidMount() {
    let data = this.generateData()["Afghanistan"];
    var color = d3.scaleOrdinal(d3["schemeSet1"]);

    var margin = { top: 20, right: 20, bottom: 30, left: 50 },
      width = this.props.width - margin.left - margin.right,
      height = this.props.height - margin.top - margin.bottom;

    var svg = d3
      .select("#" + this.props.id)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    // parse the date / time
    var parseTime = d3.timeParse("%Y");
    // set the ranges
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);
    // define the line
    var valueline = d3
      .line()
      .x(function(d) {
        return x(d.Date);
      })
      .y(function(d) {
        return y(d.Imports);
      });
    // define the line
    var valueline2 = d3
      .line()
      .x(function(d) {
        return x(d.Date);
      })
      .y(function(d) {
        return y(d.Exports);
      });

    // format the data
    data.forEach(function(d) {
      d.Date = parseTime(d.Date);
      d.Imports = +d.Imports;
      d.Exports = +d.Exports;
    });

    // sort years ascending
    data.sort(function(a, b) {
      return a["Date"] - b["Date"];
    });

    // Scale the range of the data
    x.domain(
      d3.extent(data, function(d) {
        return d.Date;
      })
    );
    y.domain([
      0,
      d3.max(data, function(d) {
        return Math.max(d.Imports, d.Exports);
      })
    ]);

    // Add the valueline path.
    svg
      .append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline)
      .attr("stroke", function(d) {
        return "steelblue";
      });
    svg
      .selectAll("line-circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "data-circle")
      .attr("r", 5)
      .attr("cx", function(d, i) {
        return x(d.Date);
      })
      .attr("cy", function(d) {
        return y(d.Imports);
      });
    // Add the valueline path.
    svg
      .append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline2);
    svg
      .selectAll("line-circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "data-circle")
      .attr("r", 5)
      .attr("cx", function(d, i) {
        return x(d.Date);
      })
      .attr("cy", function(d) {
        return y(d.Exports);
      });
    // Add the X Axis
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%Y")));
    // Add the Y Axis
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

export default MultiLineChart;
