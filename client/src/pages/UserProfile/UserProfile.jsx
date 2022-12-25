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

import { friendUser, unfriendUser } from "../../actions/users";

const UserProfile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [Switch, setSwitch] = useState(false);
  const dispatch = useDispatch();

  const handleFriend = () => {
    dispatch(friendUser(id, currentUser.result._id));
  };

  const handleUnfriend = () => {
    dispatch(unfriendUser(id, currentUser.result._id));
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
                  onClick={handleFriend}
                  className="followButton"
                >
                  Friend
                </button>
                <button
                  style={{ margin: "0px 7px" }}
                  onClick={handleUnfriend}
                  className="followButton"
                >
                  Unfriend
                </button>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                  {moment(currentProfile?.joinedOn).fromNow()}
                </p>
                <p>{currentProfile.friends.length} Friends</p>
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
