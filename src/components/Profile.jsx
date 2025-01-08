import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditProfile from "./EditProfile";

const Profile = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  // const fetchUser = () => {
  //   if (!userData)
  //     try {
  //       const res = axios.get(BASE_URL + "profile/view", {
  //         withCredentials: true,
  //       });
  //       dispatch(addUser(res.data));
  //     } catch (err) {
  //       if (err.status == 401) {
  //         navigate("/login");
  //       }
  //     }
  // };

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  return (
   user &&  (<div>
      <EditProfile user={user} />
    </div>)
  );
};

export default Profile;
