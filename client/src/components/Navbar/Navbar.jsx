// import React, { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import decode from "jwt-decode";
// import logo from "../../assets/logo.png";
// import search from "../../assets/search-solid.svg";
// import Avatar from "../Avatar/Avatar";
// import "./Navbar.css";
// import { setCurrentUser } from "../../actions/currentUser";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   var User = useSelector((state) => state.currentUserReducer);

//   const handleLogout = () => {
//     dispatch({ type: "LOGOUT" });
//     navigate("/");
//     dispatch(setCurrentUser(null));
//   };

//   useEffect(() => {
//     const token = User?.token;
//     if (token) {
//       const decodedToken = decode(token);
//       if (decodedToken.exp * 1000 < new Date().getTime()) {
//         handleLogout();
//       }
//     }
//     dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
//   }, [User?.token, dispatch]);

//   return (
//     <nav className="main-nav">
//       <div className="navbar">
//         <Link to="/" className="nav-item nav-logo">
//           <img src={logo} alt="logo" width="150px" height="30px" />
//         </Link>
//         <Link to="/" className="nav-item nav-btn">
//           About
//         </Link>
//         <Link to="/" className="nav-item nav-btn">
//           Products
//         </Link>
//         <Link to="/" className="nav-item nav-btn">
//           For Teams
//         </Link>
//         <form>
//           <input type="text" placeholder="Search..." />
//           <img src={search} alt="search" width="18" className="search-icon" />
//         </form>
//         {User === null ? (
//           <Link to="/Auth" className="nav-item nav-links">
//             Log in
//           </Link>
//         ) : (
//           <>
//             <Avatar
//               backgroundColor="#009dff"
//               px="10px"
//               py="7px"
//               borderRadius="50%"
//               color="white"
//             >
//               <Link
//                 to={`/Users/${User?.result?._id}`}
//                 style={{ color: "white", textDecoration: "none" }}
//               >
//                 {User.result.name.charAt(0).toUpperCase()}
//               </Link>
//             </Avatar>
//             <button className="nav-item nav-links" onClick={handleLogout}>
//               Log out
//             </button>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";

import "./Navbar.css";
import Avatar from "../Avatar/Avatar";
import search from "../../assets/search-solid.svg";
import logo from "../../assets/logo.png";
import bars from "../../assets/bars.svg";
import times from "../../assets/times.svg";
import { setCurrentUser } from "../../actions/currentUser";

const Testnav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var User = useSelector((state) => state.currentUserReducer);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);
  return (
    <div>
      <input type="checkbox" id="check" />
      <nav className="main-nav1">
        <div className="navbar1">
          <Link to="/" className="nav-item1 logo">
            {/* <img src={logo} alt="logo" width="150px" height="30px" /> */}
            <h1 style={{ fontSize: "20px" }}>
              dev<strong>proximity</strong>
            </h1>
          </Link>
          {/* <div className="search-box">
            <input type="search" placeholder="Search..." />
            <img src={search} alt="search" width="18" />
          </div> */}
          <ul>
            <li className="nav-item1 nav-btn1">
              <a href="/">About</a>
            </li>
            <li className="nav-item1 nav-btn1">
              <a href="/">Products</a>
            </li>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {User === null ? (
                <Link to="/Auth" className="nav-item1 nav-links1">
                  Log in
                </Link>
              ) : (
                <>
                  <Avatar
                    backgroundColor="#009dff"
                    px="10px"
                    py="7px"
                    borderRadius="45px"
                    color="white"
                  >
                    <Link
                      to={`/Users/${User?.result?._id}`}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {User.result.name.charAt(0).toUpperCase()}
                    </Link>
                  </Avatar>
                  <button
                    className="nav-item1 nav-links1"
                    onClick={handleLogout}
                  >
                    Log out
                  </button>
                </>
              )}
            </div>
          </ul>

          <label for="check" className="bar">
            <img src={bars} alt="bars" id="bars" width="18" />
            <img src={times} alt="times" id="times" width="18" />
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Testnav;
