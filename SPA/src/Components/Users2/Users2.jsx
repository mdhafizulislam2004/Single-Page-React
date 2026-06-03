import { use } from "react";

const Users2 = ({UserData}) => {
    const Data=use(UserData)
    console.log(Data);
    
    return (
        <div>
            <h1>This Is Users 2</h1>
        </div>
    );
};

export default Users2;