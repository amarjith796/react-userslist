import React, { Component } from "react";
import SvgIcon from "react-icons-kit";
import { NavLink as RRNavLink } from "react-router-dom";
import { ic_show_chart } from "react-icons-kit/md/ic_show_chart";
import { ic_insert_chart } from "react-icons-kit/md/ic_insert_chart";
import { ic_pie_chart_outlined } from "react-icons-kit/md/ic_pie_chart_outlined";

import "./SideNavBar.css";

class SideNavBar extends Component {
  render() {
    return (
      <div id="mySidenav" className="sidenav">
        <RRNavLink
          to="/charts/linearCharts"
          activeStyle={{ color: "white", backgroundColor: "green" }}
        >
          <SvgIcon size={20} icon={ic_show_chart} /> Linear Charts
        </RRNavLink>
        <RRNavLink
          to="/charts/barCharts"
          activeStyle={{ color: "white", backgroundColor: "green" }}
        >
          <SvgIcon size={20} icon={ic_insert_chart} />
          Bar Chart
        </RRNavLink>
        <RRNavLink
          to="/charts/pieCharts"
          activeStyle={{ color: "white", backgroundColor: "green" }}
        >
          <SvgIcon size={20} icon={ic_pie_chart_outlined} />
          Pie Chart
        </RRNavLink>
      </div>
    );
  }
}

export default SideNavBar;
