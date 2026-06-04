import { useLoaderData } from "react-router";
import Post from "../Post/Post";

const Posts = () => {
    const UserPosts=useLoaderData()
    return (
        <div>
            <h1>This Is Postes Section: {UserPosts.length}</h1>
            {
                UserPosts.map(pos=><Post pos={pos} key={pos.id}></Post>)
            }
        </div>
    );
};

export default Posts;