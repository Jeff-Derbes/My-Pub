import {Link} from "react-router-dom";
import {useLogout} from "../hooks/useLogout";
import {useAuthContext} from "../hooks/useAuthContext";
import {useState} from "react";

const Navbar = () => {
    const {logout} = useLogout();
    const {user} = useAuthContext();
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive);
    };

    return (
        <>
            <button className="nav-toggle" onClick={ToggleClass}
                    aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className={isActive ? "nav" : "nav hide-nav"}>
                <ul className="nav__list">
                    <li className={"nav__list"}>
                        <Link to={"/"} className={"nav__link"}>Home</Link>
                        <Link to={"/about"} className={"nav__link"}>About</Link>
                        {!user && <Link to={"/login"} className={"nav__link"}>Login</Link>}
                        {user && (
                            <Link to={"/"} onClick={logout} className={"nav__link"}>
                                Logout
                            </Link>
                        )}
                        {!user && <Link to="/signup" className={"nav__link"}>Register</Link>}
                        {user && <Link to="/favorites" className={"nav__link"}>Favorites</Link>}
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
