import axios from "axios";
const API = axios.create({
  // baseURL: "https://stackoverflow-server-chinmay.onrender.com",
  baseURL: "http://localhost:5000",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);

export const postQuestion = (questionData) =>
  API.post("/questions/Ask", questionData);
export const getAllQuestions = () => API.get("/questions/get");
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value, userId) =>
  API.patch(`/questions/vote/${id}`, { value, userId });

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) =>
  API.patch(`/answer/post/${id}`, {
    noOfAnswers,
    answerBody,
    userAnswered,
    userId,
  });
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

export const getAllUsers = () => API.get("/user/getAllUsers");
export const updateProfile = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);
export const followUser = (id, userId) =>
  API.patch(`/user/follow/${id}`, { userId });
export const unfollowUser = (id, userId) =>
  API.patch(`/user/unfollow/${id}`, { userId });

export const sharePost = (post) => API.post("/community/createPost", post);
export const fetchPosts = () => API.get("/community/getPosts");
export const deletePost = (id) => API.delete(`/community/delete/${id}`);
export const likePost = (id, value, userId) =>
  API.patch(`/community/like/${id}`, { value, userId });
