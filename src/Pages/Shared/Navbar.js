import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../assets/footer_logo.png";
import auth from "../../firebase.init";

const Navbar = () => {
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const [user, loading, error] = useAuthState(auth);

  console.log(user);

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/about-us">About</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashbord">Dashbord</Link>
        </li>
      )}
      <li>{!user && <Link to="/login">Login</Link>}</li>
      <div class="dropdown">
        <label tabindex="0" class="avatar">
          <div className="w-12 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </label>
        <ul
          style={{
            background: "rgb(33 59 124)",
            color: "black",
            fontWeight: "600",
          }}
          tabindex="0"
          class="dropdown-content menu p-2 shadow rounded-box w-52"
        >
          <li>
            <button
              style={{ background: "white", color: "black", fontWeight: "800" }}
              onClick={logout}
              className="btn"
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <div
      className="navbar"
      style={{
        background: "rgb(33 59 124)",
        color: "white",
        fontWeight: "600",
      }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        {/* <a className="btn btn-ghost normal-case text-xl"> Logo</a> */}
        <Link to="/">
          <img src={logo}></img>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <label
          for="my-drawer-2"
          tabIndex="1"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
