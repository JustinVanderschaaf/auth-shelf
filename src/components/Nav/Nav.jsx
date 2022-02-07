import React from "react";
import { Link } from "react-router-dom";
// import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Auth Shelf</h2>
      </Link>
      
      </div>
    </div>
  );
}

export default Nav;
