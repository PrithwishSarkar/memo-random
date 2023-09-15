import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Components/About";
import React, {useState} from "react";
import Main from "./Components/Main";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


export default function App() {
  const [newTime, setTime] = useState(new Date());
  
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
