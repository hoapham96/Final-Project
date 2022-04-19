import React from "react";
import ThoughtList from "../components/ThoughtList";
import ThoughtForm from "../components/ThoughtForm";
import FriendList from "../components/FriendList";
import "./style.css";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";

import { QUERY_THOUGHTS, QUERY_ME_BASIC } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const thoughts = data?.thoughts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="Intro">
        <div className="container justify-flex-start ">
          <h1>Introduction</h1>
        </div>
        <div class="container justify-flex-end">
  <div className="row">
  <div className="col" id="homecard">
 
  </div>
    <div className="col">
    <h2>Favorite cards and add them to your deck</h2>
    </div>
  




</div>
        </div>
      </div>
      <div>
        <div>
          <h1>News</h1>
        </div>
        <div>
          
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>

      <div className="">
        {loggedIn && (
          <div className="col-12 mb-3">
            <ThoughtForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} title="Some Publish ..." />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
