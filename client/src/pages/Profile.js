import React from "react";
import { Redirect, useParams } from "react-router-dom";

import ThoughtForm from "../components/ThoughtForm";
import ThoughtList from "../components/ThoughtList";
import FriendList from "../components/FriendList";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { ADD_FRIEND } from "../utils/mutations";
import Auth from "../utils/auth";

const Profile = (props) => {
  const { username: userParam } = useParams();

  const [addFriend] = useMutation(ADD_FRIEND);
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex-row" id="flex-row" >
      <div className="flex-row mb-3">
        <div className="profile-nav col-md-3" id="profileid">
          <div className="panel">
            <div className="user-heading round">
              <div href="#">
                <img
                  alt="avatar"
                  src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
                  id="avatarid"
                />
              </div>
              <h1>{userParam ? `${user.username}` : `${user.username}`}</h1>
              <p>{userParam ? `${user.email}` : `${user.email}`}</p>
            </div>

            <ul className="nav nav-pills nav-stacked">
              <li className="active">
                <a href="#">
                  {" "}
                  <i class="fa fa-user"></i> Profile
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i className="fa fa-calendar"></i> Recent Activity{" "}
                  <span className="label label-warning pull-right r-activity">
                    9
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i className="fa fa-edit"></i> Edit profile
                </a>
              </li>
              {userParam && (
                <li>
                  <a href="#">
                    {" "}
                    <i className="fa fa-edit" onClick={handleClick}></i> Add
                    Friend
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-row ">
      <div className="" id="thoughtformid">{!userParam && <ThoughtForm /> }</div>
        <div className="" id="thoughtlistid">
          <ThoughtList
            thoughts={user.thoughts}
            // title={`${user.username}'s status...`}
          />
        </div>
      </div>
      <div className="">
        <div className="" id="friendlistid">
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
