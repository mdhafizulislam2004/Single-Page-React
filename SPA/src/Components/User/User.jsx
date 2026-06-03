import { NavLink } from "react-router";
import "./User.css"

const User = ({userData}) => {
    const{name,email,phone,id}=userData
    return (
        <div className="style">
            <h1>Name:{name}</h1>
            <h2>Email:{email}</h2>
            <h3>Phone: {phone}</h3>
            <NavLink to={`/user/${id}`}>Show More</NavLink>
        </div>
    );
};

export default User;