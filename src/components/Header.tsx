import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src="./images/whatt.jpeg" alt="" />
      <div className="user-info">
        <Link to="/">
          <h5>Dashboard </h5>
        </Link>

        <div className="user-info2">
          <FaUserCircle className="user-icon" />
          <select name="users">
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
