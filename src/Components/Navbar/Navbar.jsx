import React from "react";
import "./style.css";
import logo from "../../Images/logo.svg";
import notification from "../../Images/notification.svg";
import grid from "../../Images/grid.svg";
import calender from "../../Images/calendar.svg";
import avatar from "../../Images/avatar.png";
function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} class="navbar_logo" />
      <input type="search" class="search" placeholder="Search..." />
      <div class="navbar_items">
        <div class="navbar_items_container">
          <div class="notification" title="Notification">
            <img
              src={notification}
              style={{ cursor: "pointer" }}
              class="navbar_item_icon"
            />
          </div>
          <img
            src={calender}
            style={{ cursor: "pointer" }}
            class="navbar_item_icon"
          />
          <img
            src={grid}
            style={{ cursor: "pointer" }}
            class="navbar_item_icon"
          />
        </div>
        <div class="profile">
          <img src={avatar} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
