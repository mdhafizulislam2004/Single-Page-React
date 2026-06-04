import { useLoaderData } from "react-router";

const UsersDitels = () => {
    const Data=useLoaderData()
    console.log(Data);
    const{website,name,username,id}=Data;
    
    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>ID: {id}</h2>
            <h3>User-Name: {username}</h3>
            <p>Website: {website}</p>

        </div>
    );
};

export default UsersDitels;