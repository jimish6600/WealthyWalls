import { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
    const [open,setOpen] = useState(false);
    const [user,setUser] = useState(true);
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
            <img src="/logo.png" alt="" />
            <span>WealthyWalls</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Agents</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src="/bus.png" alt="" />
            <span>jimish</span>
            <Link to="/profile" className="profile">
              {/* {number > 0 && <div className="notification">{number}</div>} */}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <div>
            <a to="/login">Sign in</a>
            <a to="/register" className="register">
              Sign up
            </a>
          </div>
        )}
        <div className="menuIcon">
            <img src='/menu.png' alt="" 
            onClick={() => {
                setOpen((prev) => !prev);
              }}
              />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a to="/">Home</a>
          <a to="/">About</a>
          <a to="/">Contact</a>
          <a to="/">Agents</a>
          <a to="/">Sign in</a>
          <a to="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;