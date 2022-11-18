import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

interface myProps {
  imgSource: string;
}
const Header = ({ imgSource }: myProps) => {
  return (
    <header>
      <div className="container header-container">
        <img src={imgSource} alt="" />
        {/* <h1 className="logo"> wefox</h1> */}
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
      </div>
    </header>
  );
};

export default Header;
