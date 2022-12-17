import React, { useState } from "react";
import { toast } from "react-toastify";


import axios from "axios";
import { useNavigate } from "react-router-dom";

import SignUp from "./SignUp";

export default function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios.post("http://localhost:5000/user/login", user).then((res) => {
        toast.success(`welcom ${res.data.name}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        localStorage.setItem("token", JSON.stringify(res.data.token));
        navigate("/home");
      });
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data);
      }
    }
  };
  return (
    <div>
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input
              type="text"
              placeholder="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              login
            </button>
            <p className="message">
              Not registered?{" "}
              <a
                href="#"
                onClick={() => {
                  {
                    navigate("/register");
                  }
                }}
              >
                Create an account
              </a>
            </p>
          </form>
        </div>
      </div>{" "}
    
    </div>
  );
}
