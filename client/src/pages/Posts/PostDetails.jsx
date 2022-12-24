import React, { useState } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import copy from "copy-to-clipboard";
import moment from "moment";

import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import "./Posts.css";

import { deletePost, likePost } from "../../actions/posts.js";

const PostDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const url = "https://stackoverflow-chinmay.netlify.app";
  const User = useSelector((state) => state.currentUserReducer);
  const PostList = useSelector((state) => state.postsReducer);

  const handleShare = () => {
    copy(url + location.pathname);
    alert("copied url: " + url + location.pathname);
  };

  const handleDelete = () => {
    dispatch(deletePost(id, navigate));
  };

  const handleLike = () => {
    console.log(User.result._id);
    console.log(id);
    dispatch(likePost(id, "like", User.result._id));
  };

  const handleDislike = () => {
    console.log(User.result._id);
    console.log(id);
    dispatch(likePost(id, "dislike", User.result._id));
  };

  return (
    <div className="post">
      {PostList.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {PostList.filter((post) => post._id === id).map((post) => (
            <div key={post._id}>
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
                      {post.userPosted.charAt(0).toUpperCase()}
                    </div>
                    <span className="postUsername">{post.userPosted}</span>
                    <span className="postDate">
                      Posted {moment(post.createdAt).fromNow()}
                    </span>
                  </div>
                </div>
                <div className="postCenter">
                  <span className="postText">{post?.caption}</span>
                  <img className="postImg" src={post.selectedFile} alt="" />
                </div>
                <div className="postBottom">
                  <div className="postBottomLeft">
                    {/* {!isLiked ? (
                      <AiOutlineLike
                        className="likeIcon"
                        onClick={likeHandler}
                      />
                    ) : (
                      <AiFillLike className="likeIcon" onClick={likeHandler} />
                    )} */}
                    <AiFillLike className="likeIcon" onClick={handleLike} />
                    <span style={{ margin: "0px 5px" }}>
                      {post.likeCount.length - post.dislikeCount.length}
                    </span>
                    <AiFillDislike
                      className="likeIcon"
                      style={{ paddingTop: "2px" }}
                      onClick={handleDislike}
                    />
                    <span style={{ margin: "0px 5px" }}>Share</span>
                    <FaShare onClick={handleShare} />
                  </div>
                  <div>
                    {User?.result?._id === post?.userId && (
                      <button
                        type="button"
                        onClick={handleDelete}
                        style={{ backgroundColor: "darkRed" }}
                        className="shareButton"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PostDetails;
