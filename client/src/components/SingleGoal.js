import Goal from "./Goal";

export default function SingleGoal({
  allGoals
}) {


return(
  allGoals.map((goal) => (
    <div key={goal._id}>
      <Goal thisGoal={goal}/>
    </div>
  ))
)
}
