import React,{useState, useEffect} from 'react'
import {
    useHistory
     } from "react-router-dom";
const Screen1 = () => {

    
 const [userValue, setUserValue] =useState({});
 let history = useHistory();
  const nextButton = (e) =>{

    // if(userValue.username.trim().length === 0 || userValue.age.trim().length === 0 || userValue.gender.trim().length === 0)
    // {
    //    alert("please fill the deatils")
    // }
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(userValue));
    history.push("form2");
}

    return (
        <div>
            <h1>Form 1</h1>
            <div>
               <form onSubmit={nextButton}>
               <input type="text" placeholder="username" value={userValue.username} onChange= { (e) => setUserValue({ ...userValue,  username : e.target.value }) }></input>
                <input type="text" placeholder="age" value={userValue.age} onChange= { (e) => setUserValue({ ...userValue,  age : e.target.value }) }></input>
                <input type="text" placeholder="gender" value={userValue.gender} onChange= { (e) => setUserValue({ ...userValue,  gender : e.target.value }) }></input>
                <button type="submit">Next</button>
               </form>
            </div>
        </div>
    )
}

export default Screen1
