import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { IconContext } from "react-icons/lib";
import { IoPersonCircleOutline } from 'react-icons/io5';
import { RiVideoFill } from 'react-icons/ri';
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>YT</b> <IconContext.Provider value={{ size: "1.5em", className: "yt-icon" }}>< RiVideoFill/></IconContext.Provider>
          </Link>
        </li>
        <li>
          <p>{user.username}</p><IconContext.Provider value={{ size: "2.5em", className: "avatar" }}><IoPersonCircleOutline /></IconContext.Provider>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
