import React, {useState} from 'react';
export default function TextForm(props) {
const handleUpClick=()=>{
console.log("upper case was clicked + text");
let newText = text.toUpperCase();
setText(newText)
props.showAlert("Your Text has Converted to Uppercase","success");
}
const handleLoClick=()=>{
  console.log("upper case was clicked + text");
  let newText = text.toLowerCase();
  setText(newText)
props.showAlert("Your Text has Converted to lowercase","success");
  
  }
const handleClearClick=()=>{
  let newText ='';
  setText(newText)
  props.showAlert("Your Text is Cleared","success");
  }
const handleOnChange=(event)=>{
    console.log("handle on change was clicked right now");
    setText(event.target.value)
    }
    const [text,setText] =useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
 <h1>{props.heading} </h1>
  <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
  </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert It Into Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert It Into LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minimum Time To Read This Content </p>
      <h1>Preview Your Item</h1>
      <p>{text.length>0?text:"Enter Something To Prewiew It Here"}</p>
    </div>
    </>
  );
}
