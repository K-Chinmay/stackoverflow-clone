import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import FriendList from "./FriendList";
import PostDetails from "./PostDetails";

import "./Posts.css";

const DisplayPost = () => {
  return (
    <div className="post-container-1">
      <LeftSidebar />
      <div className="post-container-2">
        <PostDetails />
        <FriendList />
      </div>
    </div>
  );
};

export default DisplayPost;
