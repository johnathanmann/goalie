import React from "react";

async function deleteGoal(goalId) {
  console.log(goalId)
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
      console.log('Post Deleted');
    } else {
      alert(response.statusText);
    }
  }
  };

export default function Goal({thisGoal}) {
  const goalId = thisGoal._id;
return (
        <div key={thisGoal._id} className="goal">
      <h2>{thisGoal.title}</h2>
      <code>{thisGoal.description}</code> <br />
      <button onClick={() => deleteGoal(goalId)} >
      <span id="goalId">Delete</span>
      </button>
      </div>
)
}