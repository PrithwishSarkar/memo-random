import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Components/About";
import React, {useState, useEffect} from "react";
import Main from "./Components/Main";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


export default function App() {
  // let initTime;
  // if (localStorage.getItem("somoy") === null)
  //   initTime = new Date();
  // else{
  //   initTime = new Date(localStorage.getItem("somoy"));
  // }
    
  const [newTime, setTime] = useState(new Date());
  
  // useEffect(() => {
  //   localStorage.setItem("somoy", new Date().toString());
  // }, [newTime]);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main updateTime={(d)=>setTime(d)}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
        
        <Footer lastTime={newTime}/>
      </BrowserRouter>
    </div>
  );
}
