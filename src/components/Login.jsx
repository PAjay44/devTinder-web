import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from '../utils/constants'

const Login = () => {
  const [emailId, setEmailId] = useState("Ajaychowdary@gmail.com");
  const [password, setPassword] = useState("Ajay@210");
  const [error, setError] = useState('')

  const dispatch = useDispatch();
  const navigate =useNavigate()

  const handleLogin = async () => {
    try {
      const res = await axios.post(
       BASE_URL + "/login",
        {
          emailId,
          password,
        },

        { withCredentials: true }
      );
      dispatch(addUser(res.data))
      return navigate('/');
    } catch (err) {
      setError(err.response.data || 'Something went wrong')
    }
  };

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Email ID</span>
              </div>
              <input
                type="text"
                value={emailId}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <p className="text-red-500">{error}</p>

          <div className="card-actions justify-center my-2">
            <button className="btn btn-primary" onClick={handleLogin}>
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
