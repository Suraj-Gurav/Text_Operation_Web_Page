import React, { useState } from 'react'

export default function TextForm(props) {

    const [Text, setText]=useState(""); 
    const handaleUpclick=()=>{
        // console.log("Hii React");
        let newText=Text.toUpperCase();
        setText(newText);
    }
    const handaleLoclick=()=>{
        let newText=Text.toLowerCase();
        setText(newText);
    }
    const handaleClearClick=()=>{
        let newText="";
        setText(newText);
    }
    //Enable write mode in textArea 
    const handaleOnChange=(event)=>{
        setText(event.target.value);
    }
    //copy Text Function
    const copyText=()=>{
        let Text=document.getElementById("myBox");
        
        navigator.clipboard.writeText(Text.value);
    }
    //remove Extra Space
    const removeSpace=()=>{
        let newText=Text.split(/[ ]+/);
        setText(newText.join(" "));
    }

  return (
    <>
        <div className="container">      
            <h1 className="my-3">{props.heading}</h1> 
            <div className="mb-3">
                <textarea className="form-control" value={Text}id="myBox" onChange={handaleOnChange} rows="8"></textarea>
            <button className="btn btn-primary my-3 mx-1" onClick={handaleUpclick}>Convert To UpperCase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handaleLoclick}>Convert To LowerCase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handaleClearClick}>Clear Text</button>
            <button className="btn btn-primary my-3 mx-1" onClick={copyText}>Copy Text</button>
            <button className="btn btn-primary my-3 mx-1" onClick={removeSpace}>Remove Space</button>
            {/* <button className="btn btn-primary my-3 mx-1"onClick={e=>translate()}>Translate</button> */}
            </div>
        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <p>{Text.split(" ").length-1} words {Text.length} Charactor</p>
            <p>{0.0008 * Text.split("").length}Minutes Read</p>
            <h2>Previous</h2>
            <p>{Text}</p>
        </div>

    </>
  )
}
