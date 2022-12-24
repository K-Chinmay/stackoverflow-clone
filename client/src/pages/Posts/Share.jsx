import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Posts.css";
import Post from "./Post";
import { createPost, getPosts } from "../../actions/posts.js";
import { PostList1, Users } from "../../assets/dummyData";
import { FaRegImage } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import FileBase64 from "react-file-base64";

const Share = () => {
  const [caption, setCaption] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  console.log(User);
  const PostList = useSelector((state) => state.postsReducer);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createPost(
        {
          caption,
          selectedFile,
          userPosted: User.result.name,
          userId: User?.result._id,
        },
        navigate
      ),
      clear()
    );
  };

  const clear = () => {
    setCaption("");
    setSelectedFile("");
  };

  const checkAuth = () => {
    if (User === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <h1>Stackoverflow Community</h1>
        <form
          action="../../public/files"
          // action="/createPost"
          method="post"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="shareTop">
            <label htmlFor="post-cap">
              <div
                style={{
                  backgroundColor: "purple",
                  width: "50px",
                  height: "50px",
                  color: "white",
                  borderRadius: "50%",
                  textAlign: "center",
                  fontSize: "30px",
                  marginRight: "10px",
                }}
              >
                {/* C */}
                {/* {User.result.name.charAt(0).toUpperCase()} */}
                <BsFillPersonFill />
              </div>
              <input
                placeholder="What's in your mind ?"
                id="post-cap"
                className="shareInput"
                onChange={(e) => {
                  setCaption(e.target.value);
                }}
              />
            </label>
          </div>
          <hr className="shareHr" />
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <FaRegImage className="shareIcon" />
                <label htmlFor="post-file">
                  <span className="shareOptionText">Photo or Video</span>
                  {/* <input
                    type="file"
                    name="file"
                    id="post-file"
                    onChange={(e) => {
                      setSelectedFile(e.target.value);
                    }}
                  /> */}
                  <FileBase64
                    multiple={false}
                    onDone={({ base64 }) => setSelectedFile(base64)}
                  />
                </label>
              </div>
            </div>
            <input
              type="submit"
              onCLick={checkAuth}
              value="share post"
              className="shareButton"
            />
          </div>
        </form>
      </div>
      <div style={{ padding: "10px" }} className="postList">
        {/* {PostList.map((p) => (
          <Post key={p.id} post={p} />
        ))} */}
        {PostList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {PostList.map((post) => (
              <Post key={post._id} post={post} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Share;
