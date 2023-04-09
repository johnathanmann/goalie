import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";
import Goals from "../components/Goals";
  
  export default function GoalPage() {
    const [allGoals, setAllGoals] = useState([]);
    const [singleUser, setSingleUser] = useState([]);
    const [userID, setUserID] = useState([]);
    const userProfile = Auth.getProfile();
    const userId = userProfile.data._id

    async function getGoals() {
      const response = await fetch(`/api/users/goals/${userId}`);
      const allGoals = await response.json();
  
      setAllGoals(allGoals.allGoals);
    };
  
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

    useEffect(() => {
      const interval = setInterval(() => {
        getGoals();
      }, 1000);
      return () => clearInterval(interval);
    }, []);
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
        <div className="row">
            <div className="col-md-3">
            <form>
                <label>Goal Name:</label>
                    <input id="goalName"/>
                <label>Goal Description:</label>
                    <input id="goalDescription"/>
                <button onClick={() =>goalForm()} id="goalSubmit" type="submit">Submit</button>
            </form>
            </div>
            <div className="col-md-9">
              <Goals allGoals={allGoals}/>
            </div>
        </div>
      </div>
    );
  }