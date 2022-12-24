import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Avatar from "../../components/Avatar/Avatar";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import "./UsersProfile.css";

import { followUser, unfollowUser } from "../../actions/users";

const UserProfile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [Switch, setSwitch] = useState(false);
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followUser(id, currentUser.result._id));
  };

  const handleUnfollow = () => {
    dispatch(unfollowUser(id, currentUser.result._id));
  };

  return (
    <div className="profile-container-1">
      <LeftSidebar />
      <div className="profile-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar
                backgroundColor="purple"
                color="white"
                fontSize="50px"
                px="40px"
                py="30px"
              >
                {currentProfile?.name.charAt(0).toUpperCase()}
              </Avatar>
              <div className="user-name">
                <h1>{currentProfile?.name}</h1>
                <button
                  style={{ margin: "0px 7px" }}
                  onClick={handleFollow}
                  className="followButton"
                >
                  Follow
                </button>
                <button
                  style={{ margin: "0px 7px" }}
                  onClick={handleUnfollow}
                  className="followButton"
                >
                  Unfollow
                </button>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                  {moment(currentProfile?.joinedOn).fromNow()}
                </p>
                <p>
                  {currentProfile.followers.length} Followers ,{" "}
                  {currentProfile.following.length} Following
                </p>
              </div>
            </div>
            {currentUser?.result?._id === id && (
              <button type="button" onClick={() => setSwitch(true)}>
                <FontAwesomeIcon icon={faPen} /> Edit Profile
              </button>
            )}
          </div>
          <>
            {Switch ? (
              <EditProfileForm
                currentUser={currentUser}
                setSwitch={setSwitch}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
