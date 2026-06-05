import "./User.css"
import { Suspense, useState } from "react";
import UsersDitels2 from "../UsersDitels2/UsersDitels2";
import { Navigate, NavLink } from "react-router";

const User = ({userData}) => {
    const{name,email,phone,id}=userData
    

    const[ditelsInfo,setDitelsInfo]=useState(false)


    const[visite,setVisite]=useState(false)

    const userinfo=fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res=>res.json())

    if(visite){
        return <Navigate to="/"></Navigate>
    }

    return (
        <div className="style">
            <h1>Name:{name}</h1>
            <h2>Email:{email}</h2>
            <h3>Phone: {phone}</h3>
            <NavLink to={`/user/${id}`}>Show More</NavLink>
            <button onClick={()=>setDitelsInfo(!ditelsInfo)}>{ditelsInfo?"Hide Info":"Show Info"}</button>
            {
                ditelsInfo && <Suspense fallback={<h4>Loading....</h4>}>
                    <UsersDitels2 userinfo={userinfo}></UsersDitels2>
                </Suspense>
            }
            <button onClick={()=>setVisite(true)}>Go To Home</button>
        </div>
    );
};

export default User;