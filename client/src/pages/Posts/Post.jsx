import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Users } from "../../assets/dummyData";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import "./Posts.css";
import moment from "moment";

import { deletePost } from "../../actions/posts.js";

const Post = ({ post }) => {
  const { id } = useParams();
  console.log(post);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const Users = useSelector((state) => state.usersReducer);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <div
              style={{
                backgroundColor: "green",
                width: "32px",
                height: "32px",
                color: "white",
                borderRadius: "50%",
                textAlign: "center",
                fontSize: "20px",
                marginRight: "10px",
              }}
            >
              {/* C */}
              {Users.filter((u) => u._id === post?.userId)[0]
                .name.charAt(0)
                .toUpperCase()}
            </div>
            <span className="postUsername">
              {Users.filter((u) => u._id === post?.userId)[0].name}
              {/* User name */}
            </span>
            <span className="postDate">
              posted {moment(post.createdAt).fromNow()}
            </span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.caption}</span>
          <img className="postImg" src={post.selectedFile} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <span className="postLikeCounter">
              {post.likeCount.length - post.dislikeCount.length} people like it
            </span>
          </div>
          <div>
            <button
              type="button"
              className="shareButton"
              style={{ backgroundColor: "orange" }}
            >
              <Link to={`/posts/${post._id}`}>Open Post</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
