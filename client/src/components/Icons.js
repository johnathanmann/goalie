import { useState, useEffect } from "react";
import Auth from "../utils/auth";

export default function Icons(){
    const [userID, setUserID] = useState([]);
    const [singleUser, setSingleUser] = useState([]);
    const userProfile = Auth.getProfile();
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
      let completed;
      let made;
    if (singleUser.goalsCompleted >= 3){
        completed = "3";
    }
    if (singleUser.goalsMade >= 1){
        made = "4";
    }
    return(
        <div>
            <h1>{completed}{made}</h1>
        </div>
    )
}
    