import React, { useState } from "react";
import "./style.css";
import logo from "../../Images/Logo.png";
import dashboard from "../../Images/dashboard-icon.svg";
import envelope from "../../Images/envelope.svg";
import friends from "../../Images/friends.svg";
import help from "../../Images/help-center.svg";
import apps from "../../Images/apps.svg";
import settings from "../../Images/settings.svg";
import logout from "../../Images/logout.svg";
import globe from "../../Images/globe.svg";
import file from "../../Images/file-manager.svg";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function Sidebar() {
  const [active, setActive] = useState("Dash");
  const [openMenu, setOpenMenu] = useState("");
  const toggleMenu = (menuItem) => {
    setActive(menuItem);
    setOpenMenu(openMenu === menuItem ? "" : menuItem);
  };

  return (
    <div className="sidebar">
      <div className="sidebar_container">
        <img src={logo} className="sidebar_logo" alt="sidebar" />
        <div className="menu">
          <div className="menu_section">
            <div className="menu_title">D A S H B O A R D</div>
            <div className="menu_items">
              <div className="menu_item" onClick={() => toggleMenu("Dash")}>
                <div className="menu_header">
                  <div className="menu_item_container">
                    <img
                      src={dashboard}
                      className="menu_item_icon"
                      alt="menu"
                    />
                    <div
                      className={`menu_item_title  ${
                        active === "Dash" ? "Active" : ""
                      }`}
                    >
                      Dashboard
                    </div>
                  </div>
                  {active === "Dash" && openMenu === "Dash" ? (
                    <IoIosArrowUp className="Updown" />
                  ) : (
                    <IoIosArrowDown className="Updown" />
                  )}
                </div>
                {active === "Dash" && openMenu === "Dash" && (
                  <div className="items">
                    <p className="items_title Active">Analytics</p>
                    <p className="items_title">Finance</p>
                    <p className="items_title">Job Board</p>
                  </div>
                )}
              </div>

              <div
                className={`menuItem ${active === "Messages" ? "Active" : ""}`}
                onClick={() => toggleMenu("Messages")}
              >
                <div className="menu_header">
                  <div className="menu_item_container">
                    <img src={envelope} className="menu_item_icon" alt="menu" />
                    <div className="menu_item_title">Messages</div>
                  </div>
                  {active === "Messages" && openMenu === "Messages" ? (
                    <IoIosArrowUp className="Updown" />
                  ) : (
                    <IoIosArrowDown className="Updown" />
                  )}
                </div>
              </div>

              <div
                className={`menu_item ${active === "Friends" ? "Active" : ""}`}
                onClick={() => toggleMenu("Friends")}
              >
                <div className="menu_header">
                  <div className="menu_item_container">
                    <img src={friends} className="menu_item_icon" />
                    <div className="menu_item_title">Friends</div>
                  </div>
                  {active === "Friends" && openMenu === "Friends" ? (
                    <IoIosArrowUp className="Updown" />
                  ) : (
                    <IoIosArrowDown className="Updown" />
                  )}
                </div>
              </div>

              <div
                className={`menu_tem ${active === "Apps" ? "Active" : ""}`}
                onClick={() => toggleMenu("Apps")}
              >
                <div className="menu_header">
                  <div className="menu_item_container">
                    <img src={apps} className="menu_item_icon" />
                    <div className="menu_item_title">Apps</div>
                  </div>
                  {active === "Apps" && openMenu === "Apps" ? (
                    <IoIosArrowUp className="Updown" />
                  ) : (
                    <IoIosArrowDown className="Updown" />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="menu_section">
            <div className="menu_title">P A G E S</div>
            <div className="menu_items">
              <div
                className={`menuItem ${active === "Help" ? "Active" : ""}`}
                onClick={() => toggleMenu("Help")}
              >
                <div className="menu_header">
                  <div className="menu_item_container">
                    <img src={help} className="menu_item_icon" alt="menu" />
                    <div className="menu_item_title">Help Center</div>
                  </div>
                  {active === "Help" && openMenu === "Help" ? (
                    <IoIosArrowUp className="Updown" />
                  ) : (
                    <IoIosArrowDown className="Updown" />
                  )}
                </div>
              </div>
              <div
                className={`menu_item ${
                  active === "File_manager" ? "Active" : ""
                }`}
                onClick={() => toggleMenu("FileManager")}
              >
                <div className="menu_header">
                  <div className="menu_item_container">
                    <img src={file} className="menu_item_icon" alt="menu" />
                    <div className="menu_item_title">File Manager</div>
                  </div>
                  {active === "File_manager" && openMenu === "File_manager" ? (
                    <IoIosArrowUp className="Updown" />
                  ) : (
                    <IoIosArrowDown className="Updown" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar_footer">
        <img src={settings} class="footer_icon" alt="img" />
        <img src={logout} class="footer_icon" alt="img" />
        <img src={globe} class="footer_icon" alt="img" />
      </div>
    </div>
  );
}

export default Sidebar;
