import { NavLink } from "react-router";
import "./Header.css"
const Header = () => {
    return (
        <div>
            <nav className="style">
                <NavLink to="/">Home</NavLink>
                <NavLink to="mobile">Mobile</NavLink>
                <NavLink to="laptop">Laptop</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="contect">Contect</NavLink>
                <NavLink to="users">Users</NavLink>
                <NavLink to="posts">Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;