import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./navigation.scss";

export default function Navigation() {
  return (
    <div>
      <div className="navigation">
        <Link to="/" className="navigation_logo">
          June
        </Link>
        <div className="navigation_list">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>
        <div className="navigation_buttons">
          <Link to="/">Sign in</Link>
          <Link to="/">Sign up</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
