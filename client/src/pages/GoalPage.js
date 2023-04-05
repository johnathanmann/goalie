import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";
  
  export default function GoalPage() {
    const [singleUser, setSingleUser] = useState([]);
    const [userID, setUserID] = useState([]);
  
    async function getUser() {
      const tokenData = Auth.getProfile();
      const userInfo = tokenData.data._id;
      setUserID(userInfo);
      const response = await fetch(`/api/users/${userID}`);
      const singleUser = await response.json();
  
      setSingleUser(singleUser)
    }
    useEffect(() => {
      getUser();
    });

    async function goalForm() {

        const goalName = document.getElementById('goalName').value;
        const goalDescription = document.getElementById('goalDescription').value;
        if (goalName, goalDescription) {
          const response = await fetch('/api/goals', {
            method: 'POST',
            body: JSON.stringify({
              user: singleUser._id,
              name: goalName,
              value: 0,
              description: goalDescription
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (response.ok) {
            console.log('Post Posted');
          } else {
            alert(response.statusText);
          }
        }
        };

    return (
      <div className="container" id="goalpage">
        <form>
              <label>Goal Name:</label>
            <textarea id="goalName"/>
              <label>Goal Description:</label>
            <textarea id="goalDescription"/>
            <button onClick={() =>goalForm()} id="goalSubmit" type="submit">Submit</button>
        </form>
      </div>
    );
  }