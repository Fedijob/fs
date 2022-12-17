import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      await axios
        .post("http://localhost:5000/user/register", user)
        .then((res) => {
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
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="register-form">
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="email address"
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
              handleRegister();
            }}
          >
            create
          </button>
          <p className="message">
            Already registered?
            <a href="#" onClick={() => navigate("/")}>
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
