import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/random">Random</Link>
        <Link to="/by-category">by category</Link>
        <Link to="/search">Search</Link>
        <Link to="/popular">Popular</Link>
      </nav>
    </header>
  );
}
