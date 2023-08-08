// import React from "react";
// import "./LeftSidebar.css";
// import { NavLink } from "react-router-dom";
// import Globe from "../../assets/Globe.svg";

// const LeftSidebar = () => {
//   return (
//     <div className="left-sidebar">
//       <nav className="side-nav">
//         <NavLink to="/" className="side-nav-links" activeclassname="active">
//           <p>Home</p>
//         </NavLink>
//         <div className="side-nav-div">
//           <div>
//             <p>PUBLIC</p>
//           </div>
//           <NavLink
//             to="/Questions"
//             className="side-nav-links"
//             activeclassname="active"
//           >
//             <img src={Globe} alt="Globe" />
//             <p style={{ paddingLeft: "10px" }}> Questions </p>
//           </NavLink>
//           <NavLink
//             to="/Tags"
//             className="side-nav-links"
//             activeclassname="active"
//             style={{ paddingLeft: "40px" }}
//           >
//             <p>Tags</p>
//           </NavLink>
//           <NavLink
//             to="/Users"
//             className="side-nav-links"
//             activeclassname="active"
//             style={{ paddingLeft: "40px" }}
//           >
//             <p>Users</p>
//           </NavLink>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default LeftSidebar;

import React, { useState, useEffect } from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";
import bars from "../../assets/bars.svg";

const LeftSidebar = () => {
  const [isOpen, setisOpen] = useState(true);
  const toggle = () => setisOpen(!isOpen);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 936) {
        setisOpen(false);
      }
    });
    return window.removeEventListener("resize", () => {
      if (window.innerWidth <= 936) {
        setisOpen(false);
      }
    });
  });
  return (
    <div style={{ width: isOpen ? "150px" : "35px" }} className="left-sidebar">
      <nav className="side-nav">
        <img
          src={bars}
          alt="bars"
          onClick={toggle}
          width="18"
          style={{ marginLeft: "10px" }}
        />
        <NavLink
          to="/"
          className="side-nav-links"
          style={{ display: isOpen ? "block" : "none" }}
          activeclassname="active"
        >
          <p style={{ marginLeft: "25px", padding: "10px 0px" }}>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div>
            <p
              style={{ marginLeft: "25px", display: isOpen ? "block" : "none" }}
            >
              PUBLIC
            </p>
          </div>
          <NavLink
            to="/Questions"
            className="side-nav-links"
            activeclassname="active"
          >
            {/* <img src={Globe} alt="Globe" /> */}
            <p
              style={{
                paddingLeft: "10px",
                display: isOpen ? "block" : "none",
              }}
            >
              {" "}
              Questions{" "}
            </p>
          </NavLink>
          <NavLink
            to="/Tags"
            className="side-nav-links"
            activeclassname="active"
            style={{
              paddingLeft: "40px",
              paddingTop: "1px",
              paddingBottom: "1px",
              display: isOpen ? "block" : "none",
            }}
          >
            <p>Tags</p>
          </NavLink>
          <NavLink
            to="/Users"
            className="side-nav-links"
            activeclassname="active"
            style={{
              paddingLeft: "40px",
              paddingTop: "1px",
              paddingBottom: "1px",
              display: isOpen ? "block" : "none",
            }}
          >
            <p>Users</p>
          </NavLink>
          <NavLink
            to="/community"
            className="side-nav-links"
            activeclassname="active"
            style={{
              paddingLeft: "40px",
              paddingTop: "1px",
              paddingBottom: "1px",
              display: isOpen ? "block" : "none",
            }}
          >
            <p>Community</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
