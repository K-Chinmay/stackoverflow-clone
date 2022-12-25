import * as api from "../api";

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getAllUsers();
    dispatch({ type: "FETCH_USERS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = (id, updateData) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(id, updateData);
    dispatch({ type: "UPDATE_CURRENT_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const friendUser = (id, userId) => async (dispatch) => {
  try {
    await api.friendUser(id, userId);
    dispatch(fetchAllUsers());
  } catch (error) {
    console.log(error.message);
  }
};

export const unfriendUser = (id, userId) => async (dispatch) => {
  try {
    await api.unfriendUser(id, userId);
    dispatch(fetchAllUsers());
  } catch (error) {
    console.log(error.message);
  }
};

export const searchUser = (query) => async (dispatch) => {
  try {
    const { data } = await api.searchUser(query);
    dispatch({ type: "SEARCH_USER", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
