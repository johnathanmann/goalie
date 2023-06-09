import { useState } from "react";
import Auth from "../utils/auth";

export default function SingleGoal({
  allGoals
}) {
  const [userID, setUserID] = useState([]);
    const userProfile = Auth.getProfile();
    const userId = userProfile.data._id

  async function deleteGoal(goalId) {
    const click = true;
    // Make post to database so we can show it on the site
    if (click) {
      const response = await fetch(`/api/goals/${goalId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        console.log('Goal Deleted');
      } else {
        alert(response.statusText);
      }
    }
    };

    async function addValue(goalId){
      const click = true;
    // Make post to database so we can show it on the site
    if (click) {
      const response = await fetch(`/api/goals/addValue/${goalId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const response = await fetch(`/api/users/goals/daysLogged/${userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Value added');
      } else {
        alert(response.statusText);
      }
    }
    }

    async function subtractValue(goalId){
      const click = true;
    // Make post to database so we can show it on the site
    if (click) {
      const response = await fetch(`/api/goals/subtractValue/${goalId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        console.log('Value Subtracted');
      } else {
        alert(response.statusText);
      }
    }
    }

    async function completeGoal(userId, goalId){
      const click = true;
    // Make post to database so we can show it on the site
    if (click) {
      const response = await fetch(`/api/users/goals/completed/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        console.log('Value Subtracted');
        const response = await fetch(`/api/goals/${goalId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } else {
        alert(response.statusText);
      }
    }
    }
    

return(
  allGoals.map((goal) => (
    <div key={goal._id}>
      <h1>{goal.name}</h1>
      <h1>{goal.description}</h1>
      <h1 id="goalValue">{goal.value}</h1>
      <button onClick={() => addValue(goal._id)} >+</button>
      <button onClick={() => subtractValue(goal._id)} >-</button>
      <button onClick={() => completeGoal(userId, goal._id)} >Complete</button>
      <button onClick={() => deleteGoal(goal._id)} >Delete</button>
    </div>
  ))
)
}
