import { use } from "react";

const UsersDitels2 = ({userinfo}) => {
    // const{name,username}=userinfo
    const {username,name}=use(userinfo)
    
    return (
        <div>
            <p><small>User Name: {username}</small></p>
            <h4>{name}</h4>
        </div>
    );
};

export default UsersDitels2;