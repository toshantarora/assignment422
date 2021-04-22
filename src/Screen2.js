import React,{useState, useEffect} from 'react'
import {
    useHistory
     } from "react-router-dom";
const Screen2 = () => {
    let history = useHistory();
    const [allData, setAllData] = useState([]);
    const [userValue, setUserValue] = useState({});

    // useEffect(() => {
    //     let data = localStorage.getItem("userData");
    //     console.log(JSON.parse(data))
    // }, [])
    useEffect(()=>{
        getData();
 },[])

 const getData=()=>{
    let val = JSON.parse(localStorage.getItem('newdata'))
    if (val){
        setAllData([...val]);
    }
}
    const nextButton = (e) => {
        let add  = JSON.parse(localStorage.getItem("userData"));
        let obj = {...add,...userValue}
        allData.push(obj)
        localStorage.setItem("newdata",JSON.stringify(allData));
        history.push("list");
    }

    return (
        <div>
            <h1>Form 2</h1>

            <div>
               <form onSubmit={nextButton}>
               <input type="text" placeholder="Education" value={userValue.education} onChange= { (e) => setUserValue({ ...userValue,  education : e.target.value }) }></input>
                <input type="text" placeholder="Profession" value={userValue.profession} onChange= { (e) => setUserValue({ ...userValue,  profession : e.target.value }) }></input>
                <input type="text" placeholder="City" value={userValue.city} onChange= { (e) => setUserValue({ ...userValue,  city : e.target.value }) }></input>
                <button type="submit">Submit</button>
               </form>
            </div>
        </div>
    )
}

export default Screen2
