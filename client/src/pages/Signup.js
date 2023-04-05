import React, { useState } from "react";
import auth from "../utils/auth";
import { signupAction } from "../utils/signup";

export default function Login() {
  const [signupData, setSignupData] = useState({
    password: "",
    email: "",
    username: "",
  })

  const handleInputChangeSignup = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
  };
  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await signupAction(signupData);
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
    <div className="row" id="signup">
        <h2>Signup</h2>

        <form onSubmit={handleSignup} className="form signup-form">
          <div className="form-group">
            <label htmlFor="name-signup">Name:</label>
            <br />
            <input
              className="form-input"
              type="text"
              id="name-signup"
              onChange={handleInputChangeSignup}
              value={signupData.username}
              name="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email-signup">Email:</label>
            <br />
            <input
              className="form-input"
              type="text"
              id="email-signup"
              onChange={handleInputChangeSignup}
              value={signupData.email}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password-signup">Password:</label>
            <br />
            <input
              className="form-input"
              type="password"
              id="password-signup"
              onChange={handleInputChangeSignup}
              value={signupData.password}
              name="password"
            />
          </div>
          <div className="form-group">
            <button className="btn" type="submit">
              Signup
            </button>
          </div>
        </form>
    </div>
  );
}