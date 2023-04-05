export default function SingleGoal({
  allGoals
}) {

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


return(
  allGoals.map((goal) => (
    <div key={goal._id}>
      <h1>{goal.name}</h1>
      <h1>{goal.description}</h1>
      <h1>{goal.value}</h1>
      <button onClick={() => deleteGoal(goal._id)} >Delete</button>
    </div>
  ))
)
}
