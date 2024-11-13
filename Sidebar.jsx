import React from "react";
import { Link } from "react-router-dom";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { TfiAgenda } from "react-icons/tfi";
import { IoAccessibility } from "react-icons/io5";
import { AiOutlineEuro } from "react-icons/ai";
import { Box } from "@mui/material";
function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <Box
        sx={{ marginTop: openSidebarToggle && "10px" }}
        className="sidebar-title"
      >
        <div className="sidebar-brand">
          <TfiAgenda className="icon_header" /> API Directory
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </Box>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="">
            <IoAddCircleOutline
              className="icon"
              style={{ marginLeft: "-5px", fontWeight: "bold", border: "5px" }}
              size="35px"
            />
            Consumer
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/subscribeapis">
            <BsFillArchiveFill className="icon" /> Subscribe APIS
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="">
            <BsFillGrid3X3GapFill className="icon" /> My APIs
          </Link>
          {/* Subcategories (Cow and Buffalo) */}
          <ul className="sidebar-sublist">
            <li className="sidebar-list-item">
              <Link to="">
                <BsCart3 className="icon" /> My Subscribed APIS
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="">
                <BsCart3 className="icon" /> API Access Keys
              </Link>
            </li>
          </ul>
        </li>

        <li className="sidebar-list-item">
          <Link to="">
            <BsListCheck className="icon" />
            Verify Document
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
