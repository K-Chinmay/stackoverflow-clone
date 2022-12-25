import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchUser } from "../../actions/users.js";
// import { Users } from "../../assets/dummyData";
import Friend from "./Friend";
import "./Posts.css";

const FriendList = () => {
  const Users = useSelector((state) => state.usersReducer);
  // const User = useSelector((state) => state.currentUserReducer);
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
    <div className="post-right">
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
      <div className="rightbarFriendList">
        {Users.map((u, idx) => idx < 10 && <Friend key={u?._id} user={u} />)}
      </div>
    </div>
  );
};

export default FriendList;
