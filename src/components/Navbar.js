import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo.png";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
      <>
    <nav className="navbar">
      <div className="nav-center">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          {!user && <Link to={"/login"}>Login</Link>}
          {user && (
            <Link to={"/"} onClick={logout}>
              Logout
            </Link>
          )}
          {!user && <Link to="/signup">Register</Link>}
          {user && <Link to="/favorites">Favorites</Link>}
        </li>
      </ul>
    </nav>

          <MobileNav />
      </>
  );
};

export default Navbar;
