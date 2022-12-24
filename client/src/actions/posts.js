import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_POSTS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    console.log(post);
    const { data } = await api.sharePost(post);
    dispatch({ type: "CREATE_POST", payload: data });
    getPosts();
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id, navigate) => async (dispatch) => {
  try {
    console.log(id);
    await api.deletePost(id);
    dispatch(getPosts());
    navigate("/community");
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id, value, userId) => async (dispatch) => {
  try {
    await api.likePost(id, value, userId);
    dispatch(getPosts());
  } catch (error) {
    console.log(error.message);
  }
};
