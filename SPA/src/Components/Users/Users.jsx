import { useLoaderData } from "react-router";
import User from "../User/User";

const Users = () => {
    const dataUser=useLoaderData()
    console.log(dataUser);
    
    return (
        <div>
            <h1>This Is Users Section</h1>
            {
                dataUser.map(Data=><User userData={Data} key={Data.id}></User>)
            }
        </div>
    );
};

export default Users;