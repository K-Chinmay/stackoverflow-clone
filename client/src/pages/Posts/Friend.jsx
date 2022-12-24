import React from "react";
import { Link } from "react-router-dom";
import "./Posts.css";

const Friend = ({ user }) => {
  return (
    <ul className="rightBarFriend">
      <div className="rightbarProfileImgContainer">
        <div
          style={{
            backgroundColor: "orange",
            width: "32px",
            height: "32px",
            color: "white",
            borderRadius: "50%",
            textAlign: "center",
            fontSize: "20px",
            marginRight: "10px",
          }}
        >
          {user.name.charAt(0).toUpperCase()}
        </div>
      </div>
      <span className="rightbarUsername">
        <Link to={`/Users/${user._id}`} style={{ textDecoration: "none" }}>
          {user.name}
        </Link>
      </span>
    </ul>
  );
};

export default Friend;
