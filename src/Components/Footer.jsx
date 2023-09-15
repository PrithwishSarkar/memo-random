import React from "react";
//import { lastTime } from "./Main";

export default function Footer({lastTime}) {
  //let lastTime=new Date();
  return (
    <footer>
      <span>
        <p>Copyright &copy; {lastTime.getFullYear()} by Prithwish Sarkar</p>
      </span>
      <span>
        <p>Last updated on: {lastTime.toLocaleString()}</p>
      </span>
    </footer>
  );
}
