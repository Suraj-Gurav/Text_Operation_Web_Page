import React, { useState } from 'react';
import Navbar from "./Navbar";
import TextForm from "./TextForm";

const Main = () => {
    const [mode, setMode] = useState("light");
  const bgColor=()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }
  }
    return (
        <>
           <div className="bgColor">
          <Navbar title="TextOperation" page="Home" mode={mode} bgColor={bgColor}/>
          <div className="container">
        <TextForm heading="Text Operation Application"  mode={mode}/>
          </div>
        </div> 
        </>
    );
};

export default Main;