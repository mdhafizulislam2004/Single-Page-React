import { NavLink } from "react-router";

const Post = ({pos}) => {
    const{body,title,id}=pos
    return (
        <div style={{border:"2px solid red",width:"600px"}}>
            <h1>Title: {title}</h1>
            <h2>Body: {body}</h2>
            <h4>ID: {id}</h4>
            <NavLink to={`/posts/${id}`}>
                <button>Show More</button>
            </NavLink>
        </div>
    );
};

export default Post;