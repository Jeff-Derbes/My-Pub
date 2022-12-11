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

    const ToggleNav = () => {
        setActive('false')
    }

    return (
        <>
            <button className="nav-toggle" onClick={ToggleClass}
                    aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className={isActive ? "nav" : "nav hide-nav"}>
                <ul className="nav__list">
                    <li className={"nav__list"}>
                        <Link to={"/"} className={"nav__link"} onClick={ToggleNav}>Home</Link>
                        <Link to={"/about"} className={"nav__link"} onClick={ToggleNav}>About</Link>
                        {!user && <Link to={"/login"} className={"nav__link"} onClick={ToggleNav}>Login</Link>}
                        {user && (
                            <Link to={"/"} onClick={logout} className={"nav__link"} onClick={ToggleNav}>
                                Logout
                            </Link>
                        )}
                        {!user && <Link to="/signup" className={"nav__link"} onClick={ToggleNav}>Register</Link>}
                        {user && <Link to="/favorites" className={"nav__link"} onClick={ToggleNav}>Favorites</Link>}
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
