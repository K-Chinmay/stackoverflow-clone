import React from "react";
import { useSelector } from "react-redux";
// import { Users } from "../../assets/dummyData";
import Friend from "./Friend";
import "./Posts.css";

const FriendList = () => {
  const Users = useSelector((state) => state.usersReducer);
  // const User = useSelector((state) => state.currentUserReducer);
  return (
    <div className="post-right">
      <h3>People You May Know...</h3>
      <div className="rightbarFriendList">
        {Users.map((u, idx) => idx < 10 && <Friend key={u?._id} user={u} />)}
      </div>
    </div>
  );
};

export default FriendList;
