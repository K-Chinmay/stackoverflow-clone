import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { searchUser } from "../../actions/users.js";
import User from "./User";
import "./Users.css";

const UsersList = () => {
  const users = useSelector((state) => state.usersReducer);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    // e.preventDefault();
    resetState();
    setText(e.target.value);
    dispatch(searchUser({ type: "text", query: e.target.value }));
  };

  const resetState = () => {
    setText("");
  };
  return (
    <div>
      <form>
        <div className="search-user-container">
          <label htmlFor="searching">
            <span>Search User by Name : </span>
            <input
              type="text"
              id="searching"
              placeholder="Search"
              name="search"
              value={text}
              onChange={handleSearch}
            />
          </label>
        </div>
      </form>
      <div className="user-list-container">
        {users.map((user) => (
          <User user={user} key={user?._id} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
