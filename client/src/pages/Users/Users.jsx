import React from "react";

import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = () => {
  return (
    <div className="user-container-1">
      <LeftSidebar />
      <div className="user-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400", paddingTop: "50px" }}>Users</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
