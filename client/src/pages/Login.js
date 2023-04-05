import React, { useState } from "react";
import auth from "../utils/auth";
import { loginAction } from "../utils/login";

export default function Login() {
  const [loginData, setLoginData] = useState({
    password: "",
    email: "",
  });

  const handleInputChangeLogin = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await loginAction(loginData);
      const data = await response.json();
      if (response.ok) {
        auth.login(data.token);
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="row" id="login">
        <h2>Login</h2>

        <form onSubmit={handleLogin} className="form login-form">
          <div className="form-group">
            <label htmlFor="email-login">Email:</label>
            <br />
            <input
              className="form-input"
              type="text"
              id="email-login"
              onChange={handleInputChangeLogin}
              value={loginData.email}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password-login">Password:</label>
            <br />
            <input
              className="form-input"
              type="password"
              id="password-login"
              onChange={handleInputChangeLogin}
              value={loginData.password}
              name="password"
            />
          </div>
          <div className="form-group">
            <button className="btn" type="submit">
              Login
            </button>
          </div>
        </form>
    </div>
  );
}