import React, { useState } from "react";

export default function TextForm(props) {

  const handleupClick = () => {
    
    let newText = text.toUpperCase();
    settext(newText);
    props.showAlert("Converted to Upper case","success")

  };

  const handleLowClick = () => {
    
    let newText = text.toLowerCase();
    settext(newText);
    props.showAlert("Converted to Lower case","success")


  };

  const handleClearClick = () => {
    
    let newText = '';
    settext(newText);
    props.showAlert("text Cleared","success")


  };

  const handleCopy = () => {

    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard","success")


  };


  const handleOnChange = (event) => {
   
    settext(event.target.value);
    
  };

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "));
  }

  const [text, settext] = useState("");
  return (
    <>
      <div className="container" style={{color:props.mode===`dark`?`white`:`#021032`}}>

        <h2>{props.heading}</h2>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="5"
            style={{backgroundColor:props.mode===`dark`?`gray`:`white`,color:props.mode===`dark`?`white`:`#021032`}}
          
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary mx-2" 
          onClick={handleupClick}
        >
          Convert to Uppercase
        </button>

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleLowClick}
        >
          Convert to lowerCase
        </button>

        <button
          type="submit"
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          handle Extra Spaces
        </button>

      </div>

      <div className="container my-3" style={{color:props.mode===`dark`?`white`:`#021032`}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
