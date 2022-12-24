import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Questions from "./pages/Questions/Questions";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./pages/Questions/DisplayQuestion";
import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
import UserProfile from "./pages/UserProfile/UserProfile";
import Posts from "./pages/Posts/Posts";
import PostDetails from "./pages/Posts/PostDetails";
import TestPost from "./components/Test/TestPost";
import DisplayPost from "./pages/Posts/DisplayPost";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/Questions/:id" element={<DisplayQuestion />} />
      <Route path="/Tags" element={<Tags />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Users/:id" element={<UserProfile />} />
      <Route path="/community" element={<Posts />} />
      <Route path="/posts/:id" element={<DisplayPost />} />
      {/* <Route path="/Testpost" element={<TestPost />} /> */}
    </Routes>
  );
};

export default AllRoutes;
