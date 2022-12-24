import React from "react";

import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Share from "./Share.jsx";
import Post from "./Post";
import FriendList from "./FriendList";
import { PostList, Users } from "../../assets/dummyData";
import "./Posts.css";

const Posts = () => {
  return (
    <div className="post-container-1">
      <LeftSidebar />
      <div className="post-container-2">
        <Share />
        <FriendList />
      </div>
    </div>
  );
};

export default Posts;
