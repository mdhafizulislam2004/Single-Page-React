import { useLoaderData } from "react-router";

const PostesDitels = () => {
    const datapost=useLoaderData()
    const{body,title}=datapost
    return (
        <div>
            <h1>{body}</h1>
            <h2>{title}</h2>
        </div>
    );
};

export default PostesDitels;