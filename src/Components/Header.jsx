import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  let textStyle={
    textDecoration: "none"
  }
  return (
    <header>
      <span>
        <Link to={"/"} style={textStyle}><h1>Memo-Random</h1></Link>
      </span>
      <span>
        <Link to={"/about"} style={textStyle}><h2>About</h2></Link>
      </span>
    </header>
  );
}
