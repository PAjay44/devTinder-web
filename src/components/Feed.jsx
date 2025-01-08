import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import axios from "axios";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed && feed.length > 0) return; // Check if feed already has data

    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data)); // Ensure res.data.data is passed
    } catch (err) {
      console.log("Error fetching feed:", err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  console.log("Feed data in component:", feed);

  return (
    feed && feed.length > 0 ? ( // Ensure feed is not empty before rendering
      <div className="flex justify-center my-10">
        {feed.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    ) : (
      <div>Loading...</div> // Display loading message or fallback UI
    )
  );
};

export default Feed;
